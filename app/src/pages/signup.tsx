import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { GoogleIcon, FacebookIcon } from '@/components/CustomIcons';
import ApiAdapter from "@/api/ApiAdapter";
import {toast} from "react-toastify";

const SignUp: React.FunctionComponent = () => {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const r = await ApiAdapter.getInstance().request('register', {
        email: data.get('email'),
        password: data.get('password'),
        newsletter: data.has('newsletter'),
        termsConditions: data.has('termsConditions'),
      });
    } catch (e: any) {
      console.log(e);
      if ('message' in e) {
        toast.error(e.message);
      } else {
        toast.error('Unknown error type');
      }
    }
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
              Sign up
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox id="newsletter" name="newsletter" value="yes" color="primary" />}
              label="I want to receive updates via email."
            />
            <FormControlLabel
              control={<Checkbox id="termsConditions" name="termsConditions" value="yes" color="primary" />}
              label="I agree with terms and conditions."
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign up
            </Button>
            <Link
              href="/signin"
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Already have an account? Sign in
            </Link>
          </Box>
        </Card>
      </Stack>
    </Stack>
  );
}

export default SignUp;
