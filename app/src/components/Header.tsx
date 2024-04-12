import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Hero from "@/components/Hero";
import {THeaderProps} from "@/types/pages";
import LandingPageMenu from "@/components/menu/LandingPageMenu";
import StoreMenu from "@/components/menu/StoreMenu";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";

function Header({ mode, toggleColorMode }: THeaderProps) {
  const router = useRouter();
  const isHome= router.asPath === '/';
  const isStore= router.asPath.startsWith('/store');
  const isHideHeader = !isHome && !isStore;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          display: isHideHeader ? 'none' : 'flex',
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >

            {isHome && <LandingPageMenu mode={mode} toggleColorMode={toggleColorMode} /> }
            {isStore && <StoreMenu mode={mode} toggleColorMode={toggleColorMode} /> }

          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          display: isHideHeader ? 'none' : 'flex',
          height: '89px',
          width: '100%',
        }}
      >
        <Hero />
      </Box>
    </>
  );
}

export default Header;
