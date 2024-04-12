import * as React from "react";
import {GetStaticProps} from "next";
import axios from "axios";
import {IProduct} from "@/types";
import {Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import CartTotal from "@/components/store/CartTotal";
import Button from "@mui/material/Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const ProductListPage: React.FunctionComponent<{ products: IProduct[] }> = ({ products }) => {

  console.log(products);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 0 },
        py: { xs: 0 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Grid
        container
        sx={{
          height: {
            xs: 'auto'
          },
          width: {
            xs: 'auto'
          },
          flexWrap: 'wrap'
        }}
      >

        {
          products.map((product) => {
            return <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'none',
                alignItems: 'center',
                justifyContent: 'start',
                py: { xs: 2, sm: 4 },
                px: { xs: 2, sm: 4 },
                gap: { xs: 4, md: 4 },
              }}
            >
              <Image
                src={ product.image }
                width="144"
                height="144"
                alt={""}
              />

              <Link
                variant={"h5"}
                href={`/store/products/${product.id}`}
                color="text.primary"
                underline="none"
                // onClick={() => router.push(`/store/products/${product.id}`)}
                sx={{
                  textAlign: 'center'
                }}
              >
                {product.title}
              </Link>

            </Grid>
          })
        }


      </Grid>
    </Container>
  );
}


export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const {data} = await axios.get(`https://fakestoreapi.com/products`);

  return {
    props: {
      products: data,
    },
  };
};

export default ProductListPage;
