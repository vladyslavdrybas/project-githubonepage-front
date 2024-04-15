import React from "react";
import { Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Newslatter: React.FunctionComponent = () => {
  return (
    <Grid
      container
      spacing={ 1 }
      sx={{
        mt: { xs: 2, sm: 4 },
        p: { xs: 2, sm: 4 },
        backgroundColor: "background.paper",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}

        sx={{
          display: "flex",
          flexDirection: 'column',
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h2"
          fontWeight={600}
          gutterBottom
        >
          Newsletter
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
        >
          Subscribe to our newsletter for weekly updates and promotions.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}

        sx={{
          display: "flex",
          flexDirection: 'column',
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 1, sm: 2 },
        }}
      >
        <TextField
          id="outlined-basic-firstname"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          aria-label="Enter Your first name"
          placeholder="Your first name"
          inputProps={{
            autoComplete: 'off',
            ariaLabel: 'Your first name',
          }}
        />

        <TextField
          id="outlined-basic-email"
          hiddenLabel
          size="small"
          variant="outlined"
          fullWidth
          aria-label="Enter your email address"
          placeholder="Your email address"
          inputProps={{
            autoComplete: 'off',
            ariaLabel: 'Enter your email address',
          }}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{
            flexShrink: 0,
            maxWidth: 100,
          }}
        >
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
}

export default Newslatter;
