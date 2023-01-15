import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "./footer";
import Navbar from "./nav-bar";
import ErrorFallback from "pages/error-fallback";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.history.go()}
      >
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <Footer />
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
