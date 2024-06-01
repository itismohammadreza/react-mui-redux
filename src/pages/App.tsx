import { Outlet } from "react-router-dom";
import '@locales/i18n';
import { Providers } from "@components/Providers.tsx";

export const App = () => {
  return (
      <Providers>
        <Outlet/>
      </Providers>
  )
}
