import React from "react";
import { Fade } from "react-awesome-reveal";
import Contact from "./components/contact";
import General from "./components/general";
import Sitemap from "./components/sitemap";
import Social from "./components/social";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <hr />
      <footer id="footer" className="max-w-6xl mx-auto px-12  pb-12 pt-28">
        <Fade cascade>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-12 justify-center">
            <Social />
            <Contact />
            <General />
            <Sitemap />
          </section>
          <p className="mt-12">
            All rights reserved &copy; Christopher A. Sesugh {year}.
          </p>
        </Fade>
      </footer>
    </>
  );
}
