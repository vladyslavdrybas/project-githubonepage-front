import React from "react";
import { Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const FooterNavigation: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        minWidth: '100%',
        justifyContent: 'space-between',
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
  );
}

export default FooterNavigation;
