import React from "react";
import {Typography} from "@mui/material";
import {ProductWithQty} from "@/types";
import Box from "@mui/material/Box";
import {useProductsContext} from "@/context/ProductsContext";
import Button from "@mui/material/Button";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ProductQuantity: React.FunctionComponent<{ product: ProductWithQty }> = ({ product }) => {
  const { increaseQty, decreaseQty } = useProductsContext();

  const handleIncrease = (id: number) => {
    let res = increaseQty(id);
    // setQuantity(res);
  };

  const handleDecrease = (id: number) => {
    let res = decreaseQty(id);
    // setQuantity(res);
  };

  return (
    <Box
      sx={{
        minWidth: 40,
        display: "flex",
        flexDirection: 'row',
        alignItems: "baseline",
        justifyContent: "start",
        flexWrap: "nowrap",
      }}
    >

      <Box sx={{
        maxWidth: '32px'
      }}>
        <Button
          variant="text"
          onClick={() => handleDecrease(product.id)}
          size="small"
          sx={{
            minWidth: '32px',
            height: '32px',
            // borderRadius: "0",
          }}
          color="primary"
        >
          <RemoveCircleIcon />
        </Button>
      </Box>

      <Box
        sx={{
          mx: 0.5,
        }}
      >
        <Typography
          component={"span"}
          variant={"body1"}
        >
          {product.qty}
        </Typography>
      </Box>

      <Box sx={{
        maxWidth: '32px'
      }}>
        <Button
          variant="text"
          onClick={() => handleIncrease(product.id)}
          size="small"
          sx={{
            minWidth: '32px',
            height: '32px',
          }}
          color="primary"
        >
          <AddCircleIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default ProductQuantity;
