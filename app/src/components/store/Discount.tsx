import React from "react";
import {Typography} from "@mui/material";

type ProductDetailsDiscountType = {
  discount: number;
  currency: any;
}

const ProductDetailsDiscount: React.FunctionComponent<ProductDetailsDiscountType> = ({
  discount,
  currency
}) => {
  return (
    <Typography
      component={"h2"}
      variant={"h4"}
      fontSize={ "1rem" }
      sx={{
        textDecoration: 'line-through'
      }}
    >
      { currency }
      { discount.toFixed(2) }
    </Typography>
  );
}

export default ProductDetailsDiscount;
