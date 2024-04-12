import React from "react";
import {Typography} from "@mui/material";
import {IProduct} from "@/types";
import {CurrencySymbols} from "@/types/CurrencySymbols";
import Box from "@mui/material/Box";

const ProductDetailsPrice: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {
  const price = parseFloat(product.price);

  //TODO remove on prod
  let discounted: number = price - price * 0.1;

  const hasDiscount = discounted > 0 && price !== discounted;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'row',
        alignItems: "baseline",
        justifyContent: "start",
        flexWrap: "wrap",
      }}
    >
      { hasDiscount ? (
        <>
          <Typography
            component={"h3"}
            variant={"body2"}
            sx={{
              textDecoration: 'line-through',
              lineHeight: 1.5
            }}
          >
            { CurrencySymbols.EURO }
            { price.toFixed(2) }
          </Typography>

          <Typography
            component={"h3"}
            variant={"body1"}
            fontWeight="medium"
            sx={{
              ml: 1,
            }}
          >
            { CurrencySymbols.EURO }
            { discounted.toFixed(2) }
          </Typography>
        </>
      ) : (
        <Typography
          component={"h3"}
          variant={"body1"}
          fontWeight="medium"
          sx={{
            ml: 1,
          }}
        >
          { CurrencySymbols.EURO }
          { price.toFixed(2) }
        </Typography>
      ) }
    </Box>
  );
}

export default ProductDetailsPrice;
