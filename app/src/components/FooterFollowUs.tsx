import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterFollowUs: React.FunctionComponent = () => {
  return (
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
  );
}

export default FooterFollowUs;
