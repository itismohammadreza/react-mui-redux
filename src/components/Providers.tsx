import { ThemeProvider } from "@theme/theme";
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "@root/router";
import '@locales/i18n';
import { PropsWithChildren } from "react";

export const Providers = ({children}: PropsWithChildren) => {
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
