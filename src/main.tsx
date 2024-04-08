import {StrictMode} from 'react';
import "./assets/index.scss";
import {App} from "@pages/App";
import {createRoot} from "react-dom/client";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App/>
    </StrictMode>
)
