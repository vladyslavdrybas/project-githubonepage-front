import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ForgotPassword from '@/components/ForgotPassword';
import ApiAdapter from "@/api/ApiAdapter";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

const SignIn: React.FunctionComponent = () => {
  const router = useRouter();

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    try {
      const r = await ApiAdapter.getInstance().request('login', {email: data.get('email'), password: data.get('password')});
      await router.push('/');
    } catch (e: any) {
      console.log(e);
      if ('message' in e) {
        toast.error(e.message);
      } else {
        toast.error('Unknown error type');
      }
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={(theme) => ({
        height: {
          xs: 'auto',
          // sm: '100dvh'
        },
        pb: { xs: 12, sm: 0 },
      })}
      component="div"
    >
      <Stack
        justifyContent="center"
        sx={{ height: {
          xs: '100%',
            // sm: '100dvh'
          }, p: 2 }}
      >
        <Card
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            width: { xs: '100%', sm: '450px' },
            p: { xs: 2, sm: 4 },
            gap: 4,
            boxShadow:
              theme.palette.mode === 'light'
                ? 'rgba(0, 0, 0, 0.05) 0px 5px 15px 0px, rgba(25, 28, 33, 0.05) 0px 15px 35px -5px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
                : 'rgba(0, 0, 0, 0.5) 0px 5px 15px 0px, rgba(25, 28, 33, 0.08) 0px 15px 35px -5px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
          })}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Link
              href="/"
              sx={{
                mr: 1,
              }}
            >
              <img
                src={
                  '/icon.png'
                }
                style={{
                  width: 'auto',
                  height: '89px',
                  cursor: 'pointer',
                }}
                alt="logo header"
              />
            </Link>

            <Typography
              component="h1"
              variant="h4"
              sx={{
                width: '100%',
                fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                textAlign: 'center'
            }}
            >
              Sign in
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
              />
            </FormControl>
            <FormControl>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Link
                  component="button"
                  onClick={handleClickOpen}
                  variant="body2"
                  sx={{ alignSelf: 'baseline' }}
                >
                  Forgot your password?
                </Link>
              </Box>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign in
            </Button>
            <Link
              href="/signup"
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account? Sign up
            </Link>
          </Box>

        </Card>
      </Stack>
    </Stack>
  );
}

export default SignIn;
