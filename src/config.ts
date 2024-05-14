import { AppState } from "@models/dataModel";

export const AppConfig: Readonly<AppState> = {
  paletteMode: "light",
  direction: "ltr",
  locale: "faIR",
  langStorageKey: "lng",
  apiUrl: process.env.VITE_API_URL!
}

