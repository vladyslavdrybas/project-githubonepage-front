import * as React from 'react';
import Box from '@mui/material/Box';
import {useRouter} from "next/router";
import Newsletter from "@/components/Newsletter";
import FooterNavigation from "@/components/FooterNavigation";
import {Container} from "@mui/material";
import FooterFollowUs from "@/components/FooterFollowUs";

export default function Footer() {
  const router = useRouter();
  const isSignUp= router.asPath.startsWith('/signup');
  const isSignIn= router.asPath.startsWith('/signin');
  const isHideFooter = isSignUp || isSignIn;

  return (
    <Box
      sx={{
        display: isHideFooter ? 'none' : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          width: "100%",
          minWidth: "100%",
        }}
      >
        <Newsletter />
      </Box>

      <Box
        sx={{
          backgroundColor: "background.paper3",
          width: "100%",
          minWidth: "100%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 4, sm: 8 },
            py: { xs: 2, sm: 4 },
          }}
        >
          <FooterFollowUs />
        </Container>
      </Box>


      <Box
        sx={{
          backgroundColor: "background.paper3",
          width: "100%",
          minWidth: "100%",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 4, sm: 8 },
            py: { xs: 4, sm: 8 },
          }}
        >
          <FooterNavigation />
        </Container>
      </Box>

    </Box>
  );
}
