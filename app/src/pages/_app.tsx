import React, { useState } from 'react';
import type { AppProps } from "next/app";

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/fonts/fonts.css';
import '@/styles/app.css';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  PaletteMode,
} from "@mui/material";
import { ToastContainer } from 'react-toastify';
import getLPTheme from '@/styles/theme/getLPTheme';
import Header from "@/components/Header";
import RootLayout from "@/pages/RootLayout";
import {NextPageWithLayout} from "@/types/pages";
import {ProductsProvider} from "@/context/ProductsContext";
import styled from 'styled-components';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const LightThemeToastContainer = styled(ToastContainer)(({ theme }) => ({
  textAlign: 'left',
  '& .Toastify__toast': {
    backgroundColor: theme.palette.background.paper,
  },
  '& .Toastify__toast-icon svg': {
    fill: theme.palette.primary,
  },
  '& .Toastify__progress-bar--success': {
    background: theme.palette.success,
  },
  '& .Toastify__progress-bar--info': {
    background: theme.palette.primary,
  },
  '& .Toastify__progress-bar--error': {
    background: theme.palette.error,
  },
}));

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const [mode, setMode] = useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <LightThemeToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={LPtheme}
        progressClassName=""
      />
      <CssBaseline />
      <ProductsProvider>
        <Header mode={mode} toggleColorMode={toggleColorMode} />
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ProductsProvider>
    </ThemeProvider>
  );
}
