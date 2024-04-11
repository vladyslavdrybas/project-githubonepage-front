import React from "react";
import {Typography} from "@mui/material";
import Stack from "@mui/material/Stack";

const ProductDetailsPrice: React.FunctionComponent<any> = ({
  price,
  priceWithDiscount,
  currency
}) => {
  const hasDiscount = priceWithDiscount > 0 && price !== priceWithDiscount;


  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      { hasDiscount ? (
        <>
          <Typography
            component={"h2"}
            variant={"h4"}
            fontSize={ "1rem" }
            sx={{
              textDecoration: 'line-through'
            }}
          >
            { currency }
            { price.toFixed(2) }
          </Typography>
          <Typography
            component={"h2"}
            variant={"h4"}
            fontSize={ "1.2rem" }
          >
            { currency }
            { priceWithDiscount.toFixed(2) }
          </Typography>
        </>
      ) : (
        <Typography
          component={"h2"}
          variant={"h4"}
          fontSize={ "1.2rem" }
        >
          { currency }
          { price.toFixed(2) }
        </Typography>
      ) }
    </Stack>
  );
}

export default ProductDetailsPrice;
