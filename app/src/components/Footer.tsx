import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import {useRouter} from "next/router";
import Newslatter from "@/components/Newslatter";
import Divider from "@mui/material/Divider";
import {alpha} from "@mui/material";

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

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
      }}
    >
      <Newslatter />

      <Container
        sx={{
          display: "flex",
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 5, sm: 8 },
          textAlign: { sm: 'center', md: 'left' },
          backgroundColor: "background.paper",
          minWidth: "100%",
          maxWidth: "100%",
          mx: 0,
        }}
      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'center',
          }}
        >

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Product
            </Typography>
            <Link color="text.secondary" href="#">
              Features
            </Link>
            <Link color="text.secondary" href="#">
              Testimonials
            </Link>
            <Link color="text.secondary" href="#">
              Highlights
            </Link>
            <Link color="text.secondary" href="#">
              Pricing
            </Link>
            <Link color="text.secondary" href="#">
              FAQs
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Company
            </Typography>
            <Link color="text.secondary" href="#">
              About us
            </Link>
            <Link color="text.secondary" href="#">
              Careers
            </Link>
            <Link color="text.secondary" href="#">
              Press
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Legal
            </Typography>
            <Link color="text.secondary" href="#">
              Terms
            </Link>
            <Link color="text.secondary" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" href="#">
              Contact
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Link color="text.secondary" href="#">
              Privacy Policy
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="#">
              Terms of Service
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: 'text.secondary',
            }}
          >
            <IconButton
              color="inherit"
              href="https://github.com/mui"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com/MaterialUI"
              aria-label="X"
              sx={{ alignSelf: 'center' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/company/mui/"
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>

      </Container>
    </Box>
  );
}
