import React from "react";
import Stack from "@mui/material/Stack";

const CartTotal: React.FunctionComponent<any> = () => {

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      Total and Proceed to checkout
    </Stack>
  );
}

export default CartTotal;
