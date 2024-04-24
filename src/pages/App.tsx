import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { StoreProvider } from "@redux/StoreProvider";
import { ThemeProvider } from "@theme/theme";

export const App = () => {
  return (
      <StoreProvider>
        <ThemeProvider>
          <RouterProvider router={router}/>
          <Outlet/>
        </ThemeProvider>
      </StoreProvider>
  )
}
