import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import {useProductsContext} from "@/context/ProductsContext";
import { IProduct } from "@/types";
import Image from "next/image";
import {Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ProductDetailsDelivery from "@/components/store/ProductDetailsDelivery";
import Divider from "@mui/material/Divider";
import ProductDetailsPrice from "@/components/store/Price";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@/components/store/Breadcrumbs";
import {CurrencySymbols} from "@/types/CurrencySymbols";

const ProductDetails: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {
  const { addProduct } = useProductsContext();

  const handleAddToCart = () => {
    addProduct(product);
  };

  return (
    <Container id="features" sx={{ py: { xs: 2, sm: 4 } }}>

      <Breadcrumbs backlink={"/store/products?sort=asc"} product={ product }/>

      <Grid container spacing={ 1 }>

        <Grid
          item
          xs={12}
          md={6}

          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
            <Image
              src={ product.image }
              width="380"
              height="380"
              objectFit="contain"
              alt={""}
            />
        </Grid>

        <Grid item xs={12} md={6}>

          <Typography
            component={ "h2" }
            variant={ "h5" }
          >
            {product.title}
          </Typography>

          <ProductDetailsPrice product={ product } />

          <Divider sx={{ my: 2 }} />

          <Box component={ "p" }>
            {product.description.slice(0, 300)}...
          </Box>

          <ProductDetailsDelivery />

          <Divider sx={{my: 2}} />

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
          >
            <Button
              variant={ "contained" }
              component="button"
              onClick={ handleAddToCart }
            >
              Add to Cart
            </Button>
          </Stack>

        </Grid>

      </Grid>

    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {data} = await axios.get("https://fakestoreapi.com/products");

  const paths = data.map((product: IProduct) => {
    return {
      params: {id: product.id.toString()},
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  console.log(id);
  const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);

  return {
    props: {
      product: data,
    },
  };
};

export default ProductDetails;
