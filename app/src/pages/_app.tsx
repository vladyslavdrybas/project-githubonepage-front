import React, {useMemo, useState} from 'react';
import type { AppProps } from "next/app";

import '@/styles/fonts/fonts.css';
import '@/styles/app.css';
import Layout from "@/_components/Layout";
import {
  CssBaseline,
  ThemeProvider,
  Theme,
} from "@mui/material";
import { theme as themeLight } from '@/styles/theme/light';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const LightThemeToastContainer = styled(ToastContainer)`
      // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
      &&& {
        text-align: left;
      }
      .Toastify__progress-bar--error {
        background: ${themeLight.palette.primary.main};
      }
      .Toastify__toast-icon svg{
        fill: ${themeLight.palette.primary.main};
      }
    `;

export default function App({ Component, pageProps }: AppProps) {
  // TODO add dark theme
  const [themeMode] = useState<string>("light");
  const theme: Theme = useMemo(
    (): Theme => themeMode === "light" ? themeLight : themeLight,
    [themeMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
          theme="light"
          progressClassName=""
        />
      </ThemeProvider>
    </>
  );
}
