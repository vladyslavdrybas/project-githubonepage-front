import React, { useState, useContext } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { useRouter } from "next/router";
import { ProductsContext } from "@/context/ProductsContext";
import { IProduct } from "@/types";
import Image from "next/image";
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ProductDetailsDelivery from "@/components/store/ProductDetailsDelivery";
import Divider from "@mui/material/Divider";
import ProductDetailsPrice from "@/components/store/Price";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@/components/store/Breadcrumbs";

const ProductDetails: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {

  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);


  const { addProduct, discount} = useContext(ProductsContext);

  //TODO remove on prod
  let discounted: number = parseFloat(product.price) - parseFloat(product.price) * discount;
  if (discounted === parseFloat(product.price)) {
    discounted *= 0.9;
  }

  const handleAddToCart = () => {
    addProduct(product);
    setModalOpen(true);
  };

  return (
    <Container id="features" sx={{ py: { xs: 2, sm: 4 } }}>

      <Breadcrumbs backlink={"/store/products?sort=asc"} title={product.title.slice(0, 100)}/>

      <Grid container spacing={1}>

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
              src={product.image}
              width="380"
              height="380"
              objectFit="contain"
              alt={""}
            />
        </Grid>

        <Grid item xs={12} md={6}>

          <h2 className={'styles.title'}>{product.title}</h2>


          <ProductDetailsPrice
            price={ parseFloat(product.price) }
            discount={ discounted }
            currency={ "€" }
          />

          <Divider sx={{my: 2}} />

          <Box component={"p"}>
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
              variant={'contained'}
              component="button"
              onClick={handleAddToCart}
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
