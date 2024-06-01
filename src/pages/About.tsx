import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { useApp } from "@hooks/useApp";
import { changePalette } from "@redux/slices/appSlice";
import { useLocales } from "@hooks/useLocales";
import { Link } from 'react-router-dom';
import { useLazyGetMoviesQuery } from "@services/dataService";

export const Home = () => {
  const {t, changeLocale, currentLocale} = useLocales();
  const dispatch = useDispatch();
  const {paletteMode} = useApp();
  const [trigger, {data, isLoading}] = useLazyGetMoviesQuery();

  const changeThemeClick = async () => {
    await trigger();
    dispatch(changePalette(paletteMode == "light" ? "dark" : "light"));
  }

  return (
      <>
        <h2>About Page</h2>
        <Link to="/">Home</Link>
        <Button variant="contained"
                onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
          {currentLocale}
        </Button>
        <h2>{t('title')}</h2>
      </>
  )
}
