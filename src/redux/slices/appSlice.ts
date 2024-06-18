import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@models/common";
import { Direction, PaletteMode } from "@mui/material";
import { globalConfig} from "@config/globalConfig";
import { Locale } from "@models/theme";

const appSlice = createSlice({
  name: "app",
  initialState: globalConfig,
  reducers: {
    changePalette: (state: AppState, action: PayloadAction<PaletteMode>) => {
      state.paletteMode = action.payload;
    },
    changeDirection: (state: AppState, action: PayloadAction<Direction>) => {
      state.direction = action.payload;
    },
    changeLocale: (state: AppState, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
  },
});

export const {changePalette, changeDirection, changeLocale} = appSlice.actions;
export const appReducer = appSlice.reducer;
