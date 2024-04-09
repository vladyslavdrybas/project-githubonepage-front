import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home: React.FunctionComponent = () => {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        Home Page
      </Container>
    </Box>
  );
}

export default Home;
