
export interface AppState {
  paletteMode: PaletteMode;
  direction: Direction;
  lang: Language;
}

export type UserState = User;

export interface User {

}

export interface RootState {
  user: UserState;
  app: AppState;
}

export interface ChildrenOnly {
  children: ReactNode;
}
