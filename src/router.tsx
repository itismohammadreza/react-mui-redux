import { createBrowserRouter, LoaderFunctionArgs, redirect, } from "react-router-dom";
import { dispatch, getState } from "@redux/store/rootStore";
import { Login } from "@pages/auth/Login";
import { Register } from "@pages/auth/Register";
import { Main } from "@pages/main/Main";
import { Home } from "@pages/main/Home";
import { About } from "@pages/main/About";
import { authService } from "@services/authService";
import { updateUser } from "@redux/slices/userSlice";
import { apiEndpoints } from "@services/dataService";
import { NotFound } from "@pages/NotFound";

const provideUser = async () => {
  try {
    const storageToken = authService.hasToken();
    const {user} = getState();
    if (!storageToken) {
      return null;
    }
    if (user) {
      return null;
    }
    const {data} = await dispatch(apiEndpoints.getProfile.initiate());
    dispatch(updateUser(data));
    return user;
  } catch {
    return null;
  }
}

const protectedLoader = ({request}: LoaderFunctionArgs) => {
  const {user} = getState();
  if (!user) {
    const params = new URLSearchParams();
    params.set("return", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }
  return null;
}

const loginLoader = async () => {
  const {user} = getState();
  if (user) {
    return redirect("/");
  }
  return null;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: provideUser,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "protected",
        loader: protectedLoader,
        Component: () => <><h3>Protected</h3></>,
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        loader: loginLoader,
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);
