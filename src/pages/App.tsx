import {Outlet, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {rootStore} from "@redux/store/rootStore";
import {router} from "../router";

export const App = () => {
  return (
      <Provider store={rootStore}>
        <RouterProvider router={router}/>
        <Outlet/>
      </Provider>
  )
}
