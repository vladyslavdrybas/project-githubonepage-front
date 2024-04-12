import React, {useCallback} from "react";
import Typography from "@mui/material/Typography";
import {ProductWithQty} from "@/types";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ProductQuantity from "@/components/store/ProductQuantity";
import CartProductPrice from "@/components/store/CartProductPrice";
import {useProductsContext} from "@/context/ProductsContext";

const CartProductList: React.FunctionComponent<{ products: ProductWithQty[] }> = ({
  products
}) => {
  const { delProduct } = useProductsContext();

  return (
    <>
    {
      products.map(
        (product: ProductWithQty) => (
          <Grid container spacing={1}>
            <Grid
              item
              md={3}

              sx={{
                display: { xs: "none", md: "flex"},
                flexDirection: 'column',
                alignItems: "flex-start",
                justifyContent: "start",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  height: "144px",
                  width: "144px",
                }}
              >
                <Image
                  src={product.image}
                  objectFit="contain"
                  width="89"
                  height="89"

                  alt={""}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}

              sx={{
                display: "flex",
                flexDirection: 'column',
                alignItems: { xs: "flex-end", md: "flex-start" },
                justifyContent: "start",
                flexWrap: "wrap",
              }}
            >

              {/*onClick ={() => router.push('/store/cart')}*/}
              <Link
                variant={"h5"}
                href={`/store/products/${product.id}`}
                color="text.primary"
                underline="none"
                sx={{
                  textAlign: { xs: "end", md: "start" },
                }}
              >
                {product.title}
              </Link>

              {/*<Typography*/}
              {/*  component={"span"}*/}
              {/*  variant={"body1"}*/}
              {/*>*/}
              {/*  amount { product.qty }*/}
              {/*</Typography>*/}

              <ProductQuantity product={product} />

            </Grid>
            <Grid
              item
              xs={3}

              sx={{
                display: { xs: "flex", md: "none"},
                flexDirection: 'column',
                alignItems: "flex-start",
                justifyContent: "start",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  height: "89px",
                  width: "89px",
                }}
              >
                <Image
                  src={product.image}
                  objectFit="contain"
                  width="89"
                  height="89"
                  alt={""}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={9}
              md={3}

              sx={{
                display: "flex",
                flexDirection: 'column',
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{
                maxWidth: '32px'
              }}>
                <Button
                  variant="text"
                  onClick={() => delProduct(product.id)}
                  size="small"
                  aria-label="cart"
                  sx={{
                    minWidth: '32px',
                    height: '32px',
                  }}
                  color="primary"
                >
                    <DeleteIcon />
                </Button>
              </Box>

              <CartProductPrice product={ product } />
            </Grid>
          </Grid>
        )
      )
    }
    </>
  );
}

export default CartProductList;
