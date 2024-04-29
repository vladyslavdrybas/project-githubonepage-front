import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
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
        position="absolute"
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
              maxHeight: '55px',
              borderColor: 'divider',
            })}
          >

            {isHome && <LandingPageMenu mode={mode} toggleColorMode={toggleColorMode} /> }
            {isStore && <StoreMenu mode={mode} toggleColorMode={toggleColorMode} /> }

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
