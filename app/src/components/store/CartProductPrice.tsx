import React from "react";
import {Typography} from "@mui/material";
import {ProductWithQty} from "@/types";
import {CurrencySymbols} from "@/types/CurrencySymbols";
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import DiscountIcon from '@mui/icons-material/Discount';

const CartProductPrice: React.FunctionComponent<{ product: ProductWithQty }> = ({ product }) => {
  const price = parseFloat(product.price) * product.qty;

  //TODO remove on prod
  const discounted: number = price - price * 0.1;
  const saves = price - discounted

  const hasDiscount = discounted > 0 && price !== discounted;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'row',
        alignItems: "baseline",
        justifyContent: { xs: "start", md: "end" },
        flexWrap: "wrap",
      }}
    >
      { hasDiscount ? (
        <>
          <Chip
            icon={<DiscountIcon />}
            label={`-${ CurrencySymbols.EURO }${saves}`}
            color="success"
            variant="outlined"
            size="small"
          />
          {/*<Typography*/}
          {/*  component={"h3"}*/}
          {/*  variant={"body2"}*/}
          {/*  sx={{*/}
          {/*    textDecoration: 'line-through',*/}
          {/*    lineHeight: 1.5*/}
          {/*  }}*/}
          {/*>*/}
          {/*  { CurrencySymbols.EURO }*/}
          {/*  { price.toFixed(2) }*/}
          {/*</Typography>*/}

          <Typography
            component={"h3"}
            variant={"body1"}
            fontWeight="medium"
            sx={{
              ml: 1,
            }}
          >
            { CurrencySymbols.EURO }{ discounted.toFixed(2) }
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
          { CurrencySymbols.EURO }{ price.toFixed(2) }
        </Typography>
      ) }
    </Box>
  );
}

export default CartProductPrice;
