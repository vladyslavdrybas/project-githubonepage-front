import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "@/components/Footer";

export default function RootLayout({
 children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box component="main" sx={{ bgcolor: 'background.default' }}>
        { children }
      </Box>
      <Footer />
    </>
  );
}
