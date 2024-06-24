import { Button, Typography } from '@mui/material';
import { useLocales } from "@hooks/useLocales";
import { useLazyGetProductsQuery } from "@services/dataService";
import { useUser } from "@hooks/useUser";
import { LoadingButton } from "@mui/lab";
import { authService } from "@services/authService";

export const Home = () => {
  const user = useUser();
  const {changeLocale, currentLocale} = useLocales();
  const [trigger, {isLoading}] = useLazyGetProductsQuery();

  return (
      <>
        <Typography variant="h6" component="span"> Locale: </Typography>
        <Button onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
          {currentLocale}
        </Button>
        <br/>
        <Typography variant="h6" component="span"> Request: </Typography>
        <LoadingButton loading={isLoading} onClick={() => trigger()}>
          Call
        </LoadingButton>
        <br/>
        {
            user && (
                <>
                  <Typography variant="h6" component="span"> Logged In User: </Typography>
                  {user.name} - {user.email}
                  <Button color="error" onClick={() => authService.logout()}> Logout </Button>
                </>
            )
        }
      </>
  )
}
