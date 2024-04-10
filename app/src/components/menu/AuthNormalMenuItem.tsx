import React from "react";
import Button from "@mui/material/Button";

const AuthNormalMenuItem: React.FunctionComponent = () => {
  return (
    <>
      <Button
        color="primary"
        variant="text"
        size="small"
        component="a"
        href="/material-ui/getting-started/templates/sign-in/"
        target="_blank"
      >
        Sign in
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="small"
        component="a"
        href="/material-ui/getting-started/templates/sign-up/"
        target="_blank"
      >
        Sign up
      </Button>
    </>
  );
}

export default AuthNormalMenuItem;
