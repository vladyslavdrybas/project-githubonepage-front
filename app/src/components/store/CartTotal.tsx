import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import {ProductWithQty} from "@/types";
import {CurrencySymbols} from "@/types/CurrencySymbols";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";

const CartTotal: React.FunctionComponent<{ products: ProductWithQty[] }> = ({ products }) => {
  const router = useRouter();

  let subtotal = 0;
  let shipping = 0;
  let discount = 0;
  let tax = 0;

  products.map((product) => {
    const price = parseFloat(product.price) * product.qty;
    subtotal += price;
    shipping += product?.shippingPrice ?? 0;
    discount += price * 0.1;
    tax += product?.tax ?? 0;
  });

  const total = subtotal + shipping + tax - discount;

  return (
    <>
      <Typography
        component={"h2"}
        variant={"h4"}
      >
        Order overview
      </Typography>
      <List disablePadding sx={{ width: "100%" }}>
          <ListItem key="cart-subtotal" sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary="Subtotal"
            />
            <Typography
              variant="body1"
              fontWeight="medium"
            >
              { CurrencySymbols.EURO }{subtotal.toFixed(2)}
            </Typography>
          </ListItem>

        { shipping > 0 &&
          <ListItem key="cart-shipping" sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary="Shipping"
            />
            <Typography
              variant="body1"
              fontWeight="medium"
            >
              { CurrencySymbols.EURO }{shipping.toFixed(2)}
            </Typography>
          </ListItem>
        }

        { tax > 0 &&
          <ListItem key="cart-tax" sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary="Taxes"
            />
            <Typography
              variant="body1"
              fontWeight="medium"
            >
              { CurrencySymbols.EURO }{tax.toFixed(2)}
            </Typography>
          </ListItem>
        }

        { discount > 0 &&
          <ListItem key="cart-discount" sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary="Discount"
            />
            <Typography
              variant="body1"
              fontWeight="medium"
            >
              -{ CurrencySymbols.EURO }{discount.toFixed(2)}
            </Typography>
          </ListItem>
        }

          <ListItem key="cart-total" sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary="Total"
            />
            <Typography
              variant="body1"
              fontWeight="medium"
            >
              { CurrencySymbols.EURO }{total.toFixed(2)}
            </Typography>
          </ListItem>
      </List>
    </>
  );
}

export default CartTotal;
