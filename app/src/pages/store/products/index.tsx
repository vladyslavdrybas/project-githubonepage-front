import * as React from "react";
import {GetStaticProps} from "next";
import axios from "axios";
import {IProduct} from "@/types";
import {Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProductDetailsPrice from "@/components/store/Price";

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
          flexWrap: 'wrap',
          alignItems: "baseline",
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
                py: {xs: 2, sm: 4},
                px: {xs: 2, sm: 4},
                gap: {xs: 1, md: 1},
              }}
            >
              {/*<Image*/}
              {/*  src={product.image}*/}
              {/*  width="144"*/}
              {/*  height="144"*/}
              {/*  alt={""}*/}
              {/*/>*/}
              <Box
                sx={{
                  maxWidth: 144,
                }}
              >
                <img
                  src={product.image}
                  style={{width: '100%', height: 'auto'}}
                  alt={product.title}
                />
              </Box>

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
                <Typography
                  component={"h2"}
                  variant={"h5"}
                >
                  {product.title.length > 30 ?
                    <>{product.title.slice(0, 30)}...</>
                    :
                    <>{product.title}</>
                  }
                </Typography>
              </Link>
              <ProductDetailsPrice product={product}/>

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
