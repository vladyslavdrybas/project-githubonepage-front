import React from "react";
import Features from "@/components/Features";
import Divider from "@mui/material/Divider";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import LatestProduct from "@/components/LatestProduct";
import Testimonials from "@/components/Testimonials";

const Landing: React.FunctionComponent = () => {
  return (
    <>
      <LatestProduct />
      <Divider />
      <Features />
      <Divider />
      <Pricing />
      <Divider />
      <Testimonials />
      <Divider />
      <FAQ />
      <Divider />
    </>
  );
}

export default Landing;
