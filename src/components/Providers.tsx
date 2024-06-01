import { ThemeProvider } from "@theme/theme";
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import { WithChildren } from "@models/common";
import '@locales/i18n';
import { RouterProvider } from "react-router-dom";
import { router } from "@root/router.tsx";

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
