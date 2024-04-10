import React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const AuthNormalMenuItem: React.FunctionComponent = () => {
  return (
    <>
      <MenuItem>
        <Button
          color="primary"
          variant="contained"
          component="a"
          href="/material-ui/getting-started/templates/sign-up/"
          target="_blank"
          sx={{ width: '100%' }}
        >
          Sign up
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          color="primary"
          variant="outlined"
          component="a"
          href="/material-ui/getting-started/templates/sign-in/"
          target="_blank"
          sx={{ width: '100%' }}
        >
          Sign in
        </Button>
      </MenuItem>
    </>
  );
}

export default AuthNormalMenuItem;
