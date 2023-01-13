import React from "react";
import Footer from "./footer";
import Navbar from "./nav-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
