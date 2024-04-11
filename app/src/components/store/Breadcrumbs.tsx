import React from "react";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import {IProduct} from "@/types";

const Breadcrumbs: React.FunctionComponent<{ backlink: string, product: IProduct }> = ({
  backlink,
  product
}) => {
  const router = useRouter();

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      sx={{mb: 2}}
    >
      <ArrowBackIcon
        onClick={() => router.push(backlink)}
        sx={{
          cursor: "pointer",
        }}
      />
      <Box
        component={"span"}
        sx={{
          fontSize: "0.8rem",
          "::before": {
            content: '"|"',
            display: "inline-block",
            marginRight: "0.5rem"
          },
        }}
      >
        {product.category.slice(0, 100)}
      </Box>
      <Box
        component={"span"}
        sx={{
          fontSize: "0.8rem",
          "::before": {
            content: '"|"',
            display: "inline-block",
            marginRight: "0.5rem"
          },
        }}
      >
        {product.title.slice(0, 100)}
      </Box>
    </Stack>
  );
}

export default Breadcrumbs;
