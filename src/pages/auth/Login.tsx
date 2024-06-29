import { LoadingButton } from "@mui/lab";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { FormElements } from "@components/forms/FormElements";
import { useLazyGetProfileQuery, useLoginMutation } from "@services/dataService";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { User } from "@models/business";
import { useDispatch } from "react-redux";
import { updateUser } from "@redux/slices/userSlice";

export const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [getProfile] = useLazyGetProfileQuery();

  const onSubmit = async (value: User) => {
    try {
      const {data} = await login(value);
      localStorage.setItem('token', data.access_token);
      const {data: user} = await getProfile();
      dispatch(updateUser(user));
      navigate(searchParams.get('return') ?? '/');
    } catch {
    }
  }

  return (
      <Grid container sx={{height: '100vh'}}>
        <Grid item xs={12} sm={8} md={5}>
          <FormElements.Container onSuccess={onSubmit}>
            <Container maxWidth="xs">
              <Typography sx={{mt: 10, mb: 8}} component="h1" variant="h3" textAlign="center">
                Sign in
              </Typography>
              <Stack spacing={2} maxWidth="xs">
                <FormElements.TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    rules={{required: 'Required'}}/>
                <FormElements.TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    rules={{required: 'Required'}}/>
                <FormElements.Checkbox name="rememberMe" label="Remember me"/>
                <LoadingButton fullWidth loading={isLoading} type="submit" variant="contained">
                  Sign In
                </LoadingButton>
                <Stack justifyContent="space-between" direction={{md: 'row'}}>
                  <Link to="/auth/forget-password"> Forgot password? </Link>
                  <Link to="/auth/register"> Don't have an account? Sign up </Link>
                </Stack>
              </Stack>
            </Container>
          </FormElements.Container>
        </Grid>
        <Grid item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url(/images/login-bg.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  background: '-webkit-linear-gradient(left,rgba(0,168,255,0.5),rgba(185,0,255,0.5))',
                  pointerEvents: 'none',
                }
              }}/>
      </Grid>
  )
}
