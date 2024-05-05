import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { useApp } from "@hooks/useApp";
import { changePalette } from "@redux/slices/appSlice";
import { useLocales } from "@hooks/useLocales";

export const Home = () => {
  const {t, handleChangeLanguage, currentLang} = useLocales();
  const dispatch = useDispatch();
  const {paletteMode} = useApp();

  const changeThemeClick = () => {
    dispatch(changePalette(paletteMode == "light" ? "dark" : "light"));
  }

  return (
      <>
        <Button variant="contained" onClick={changeThemeClick}>
          {paletteMode}
        </Button>
        <Button variant="contained"
                onClick={() => handleChangeLanguage(currentLang.value == "fa" ? "en" : "fa")}>
          {currentLang.value}
        </Button>
        <h2>{t('demo.title')}</h2>
      </>
  )
}
