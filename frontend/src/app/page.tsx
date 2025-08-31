import React from "react";
import { Hero, Testimonial, FAQ } from "@/_components/barrel";
import Features from "@/_components/home/Features";
const page = () => {
  return (
    <>
      <Hero />
      <Features/>
      <Testimonial/>
      <FAQ/>
    </>
  );
};

export default page;
