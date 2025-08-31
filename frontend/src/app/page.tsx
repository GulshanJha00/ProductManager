import React from "react";
import { Navbar,Hero,Footer, Testimonial, FAQ } from "@/_components/barrel";
import Features from "@/_components/home/Features";
const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Testimonial/>
      <FAQ/>
      <Footer />
    </>
  );
};

export default page;
