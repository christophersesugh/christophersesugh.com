import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "./footer";
import Navbar from "./nav-bar";
import ErrorFallback from "pages/error-fallback";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.history.go()}
      >
        <Navbar />
        {children}
        <Footer />
      </ErrorBoundary>
    </>
  );
}
