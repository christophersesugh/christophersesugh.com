import React from "react";
import AppHead from "components/app-head";
import Hero from "components/hero";
import About from "components/about";
import Discord from "components/discord";
import { Posts } from "components/blog";

function HomePage() {
  return (
    <>
      <AppHead
        pageTitle="Christopher A. Sesugh"
        pageDescription="Helping make the world a better place by building quality software."
        pageImage="https://res.cloudinary.com/christo/image/upload/v1675179148/home_lsq4vv.webp"
        pageUrl="https://www.christophersesugh.com"
      />
      <Hero />
      <About />
      <Discord />
      <Posts />
    </>
  );
}

export default HomePage;
