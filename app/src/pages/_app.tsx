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
import AppAppBar from "@/components/AppAppBar";
import Hero from "@/components/Hero";
import Box from "@mui/material/Box";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";

export default function App({ Component, pageProps }: AppProps) {
  // TODO add dark theme
  const [mode, setMode] = useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box component="main" sx={{ bgcolor: 'background.default' }}>
        <Component {...pageProps} />
        <Footer />
      </Box>
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
