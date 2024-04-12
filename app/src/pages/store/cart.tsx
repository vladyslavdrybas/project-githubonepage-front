import * as React from "react";
import Grid from "@mui/material/Grid";
import CartProductList from "@/components/store/CartProductList";
import CartTotal from "@/components/store/CartTotal";
import {Container, Typography} from "@mui/material";
import {useProductsContext} from "@/context/ProductsContext";
import {useRouter} from "next/router";
import Button from "@mui/material/Button";

const Cart: React.FunctionComponent = () => {
  const { totalItem, totalPrice, products} = useProductsContext();
  const router = useRouter();

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
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'end',
            justifyContent: 'start',
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 4 },
            gap: { xs: 4, md: 4 },
          }}
        >
          <Typography
            component={"h1"}
            variant={"h1"}
          >
            Cart
          </Typography>
          <Typography
            component={"span"}
            variant={"caption"}
          >
            { totalItem } products
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 4 },
            gap: { xs: 4, md: 4 },
          }}
        >
          <CartProductList products={products}/>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: 'background.paper',
            alignItems: 'start',
            py: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 4 },
            gap: { xs: 4, md: 4 },
          }}
        >
          <CartTotal products={products}/>

          <Button
            variant="contained"
            onClick={() => router.push('/store/checkout')}
          >
            Proceed checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
