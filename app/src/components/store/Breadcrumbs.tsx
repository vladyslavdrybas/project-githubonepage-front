import React from "react";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";

const Breadcrumbs: React.FunctionComponent<any> = ({
 backlink,
 title,
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
          },
        }}
      >
        {title.slice(0, 100)}
      </Box>
    </Stack>
  );
}

export default Breadcrumbs;
