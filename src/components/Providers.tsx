import { ThemeProvider } from "@theme/theme";
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import { WithChildren } from "@models/common";
import { RouterProvider } from "react-router-dom";
import { router } from "@root/router";
import '@locales/i18n';

export const Providers = ({children}: WithChildren) => {
  return (
      <StoreProvider>
        <ThemeProvider>
          <RouterProvider router={router}/>
          <Loading/>
          <Toast/>
          {children}
        </ThemeProvider>
      </StoreProvider>
  );
}
