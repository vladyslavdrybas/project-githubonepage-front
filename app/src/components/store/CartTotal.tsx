import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import {ProductWithQty} from "@/types";

const CartTotal: React.FunctionComponent<{ products: ProductWithQty[] }> = ({ products }) => {

  return (
    <List disablePadding>
      {products.map((product) => (
        <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
          <ListItemText
            sx={{ mr: 2 }}
            primary={product.title}
            secondary={product.description}
          />
          <Typography variant="body1" fontWeight="medium">
            {product.price}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default CartTotal;
