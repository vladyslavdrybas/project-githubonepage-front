import React, { useState } from 'react';
import type { AppProps } from "next/app";

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

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const [mode, setMode] = useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Header mode={mode} toggleColorMode={toggleColorMode} />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        progressClassName=""
      />
    </ThemeProvider>
  );
}
