import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { useApp } from "@hooks/useApp";
import { changePalette } from "@redux/slices/appSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const {paletteMode} = useApp();

  const changeThemeClick = () => {
    dispatch(changePalette(paletteMode == "light" ? "dark" : "light"));
  }

  return <><Button onClick={changeThemeClick} variant="contained">{paletteMode}</Button></>
}
