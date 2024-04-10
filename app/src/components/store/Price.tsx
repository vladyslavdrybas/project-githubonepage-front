import React from "react";
import {Typography} from "@mui/material";
import ProductDetailsDiscount from "@/components/store/Discount";
import Stack from "@mui/material/Stack";

const ProductDetailsPrice: React.FunctionComponent<any> = ({
  price,
  discount,
  currency
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      { discount > 0 && price !== discount && <ProductDetailsDiscount discount={discount} currency={currency} /> }

      <Typography
        component={"h2"}
        variant={"h4"}
        fontSize={ "1.2rem" }
      >
        { currency }
        { price.toFixed(2) }
      </Typography>
    </Stack>
  );
}

export default ProductDetailsPrice;
