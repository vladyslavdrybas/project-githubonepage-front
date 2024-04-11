import React from "react";
import {useRouter} from "next/router";
import {useProductsContext} from "@/context/ProductsContext";
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Basket: React.FunctionComponent = () => {
  const router = useRouter();
  const {totalItem} = useProductsContext();

  return (
    <Box sx={{ maxWidth: '32px', mr: 2 }}>
      <Button
        variant="text"
        onClick ={() => router.push('/store/cart')}
        size="small"
        aria-label="cart"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
        color="primary"
      >
        <StyledBadge badgeContent={ totalItem } color="success">
          <ShoppingCartIcon />
        </StyledBadge>
      </Button>
    </Box>
  );
}

export default Basket;
