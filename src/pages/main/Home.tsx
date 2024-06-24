import { Button, Typography } from '@mui/material';
import { useLazyGetProductsQuery } from "@services/dataService";
import { useUser } from "@hooks/useUser";
import { LoadingButton } from "@mui/lab";
import { authService } from "@services/authService";

export const Home = () => {
  const user = useUser();
  const [trigger, {isLoading}] = useLazyGetProductsQuery();

  return (
      <>
        <Typography variant="h6" component="span"> Request: </Typography>
        <LoadingButton loading={isLoading} onClick={trigger}>
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
