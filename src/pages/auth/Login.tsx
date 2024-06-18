import { LoadingButton } from "@mui/lab";
import { Container, Grid, Typography } from "@mui/material";
import { FormElements } from "@components/forms/FormElements";
import { useLazyGetProfileQuery, useLoginMutation } from "@services/dataService";
import { Link, useNavigate } from "react-router-dom";
import { User } from "@models/business";
import { useDispatch } from "react-redux";
import { updateUser } from "@redux/slices/userSlice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [getProfile] = useLazyGetProfileQuery();

  const onSubmit = async (value: User) => {
    try {
      const {data} = await login(value);
      localStorage.setItem('token', data.access_token);
      const {data: user} = await getProfile();
      dispatch(updateUser(user));
      navigate('/');
    } catch {
    }
  }

  return (
      <FormElements.Container onSuccess={onSubmit}>
        <Container component="main" maxWidth="xs" sx={{marginTop: 8}}>
          <Typography component="h1" marginBottom={2} variant="h5" textAlign="center"> Sign in </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormElements.TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  rules={{required: 'Required'}}/>
            </Grid>
            <Grid item xs={12}>
              <FormElements.TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  rules={{required: 'Required'}}/>
              <FormElements.Checkbox name="rememberMe" label="Remember me"/>
            </Grid>
          </Grid>
          <LoadingButton fullWidth sx={{mt: 3, mb: 2}} loading={isLoading} type="submit" variant="contained">
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link to="/auth/forget-password"> Forgot password? </Link>
            </Grid>
            <Grid item>
              <Link to="/auth/register"> Don't have an account? Sign Up </Link>
            </Grid>
          </Grid>
        </Container>
      </FormElements.Container>
  )
}
