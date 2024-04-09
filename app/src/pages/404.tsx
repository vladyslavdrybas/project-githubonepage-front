import { Typography, Container } from "@mui/material";

export default function Custom404() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'center',
          textAlign: 'center',
          fontSize: 'clamp(3.5rem, 10vw, 4rem)',
        }}
      >
          404 - Page Not Found
      </Typography>
    </Container>
  )
}
