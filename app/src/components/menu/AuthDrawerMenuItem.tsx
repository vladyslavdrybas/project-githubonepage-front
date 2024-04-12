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
          href="/signin"
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
          href="/signup"
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
