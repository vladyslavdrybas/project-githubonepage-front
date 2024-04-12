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

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const [mode, setMode] = useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const LightThemeToastContainer = styled(ToastContainer)`
      // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
      &&& {
        text-align: left;
      }
      .Toastify__progress-bar--error {
        background: ${LPtheme.palette.error.main};
      }
      .Toastify__progress-bar--info {
        background: ${LPtheme.palette.primary.main};
      }
      .Toastify__progress-bar--success {
        background: ${LPtheme.palette.success.main};
      }
      .Toastify__toast-icon svg{
        fill: ${LPtheme.palette.primary.main};
      }
    `;

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
        theme={mode}
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
