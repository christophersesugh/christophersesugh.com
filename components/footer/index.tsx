import React from "react";
import Contact from "./components/contact";
import General from "./components/general";
import Sitemap from "./components/sitemap";
import Social from "./components/social";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="max-w-6xl mx-auto px-12  py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 gap-12 justify-center">
        <Social />
        <Contact />
        <General />
        <Sitemap />
      </section>
      <p>All rights reserved &copy; Christopher A. Sesugh {year}.</p>
    </footer>
  );
}
