import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const ProductDetailsDelivery: React.FunctionComponent = () => {
  return (
    <Box>
      <Chip
        icon={<LocalShippingIcon />}
        label={"free delivery"}
        size="small"
        sx={{
          background: (theme) =>
            theme.palette.mode === 'light' ? '' : 'none',
          backgroundColor: 'primary.contrastText',
          '& .MuiChip-label': {
            color: 'primary.dark',
          },
          '& .MuiChip-icon': {
            color: 'primary.dark',
          },
        }}
      />
    </Box>
  );
}

export default ProductDetailsDelivery;
