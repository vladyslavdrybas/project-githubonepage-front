import React from "react";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";

const AuthNormalMenuItem: React.FunctionComponent = () => {
  return (
    <>
      <Button
        color="primary"
        variant="text"
        size="small"
        component="a"
        href="/signin"
        target="_blank"
      >
        Sign in
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="small"
        component="a"
        href="/signup"
        target="_blank"
      >
        Sign up
      </Button>
    </>
  );
}

export default AuthNormalMenuItem;
