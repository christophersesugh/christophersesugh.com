import React from "react";
import { useRouter } from "next/router";
import { QueryClientProvider, Hydrate, QueryClient } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { AnalyticsWrapper } from "./analytics-wrapper";
import Footer from "./footer";
import Navbar from "./nav-bar";
import ErrorFallback from "pages/error-fallback";

export default function Layout({
  pageProps,
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: true,
            refetchOnWindowFocus: false,
            retry(failureCount, error: any) {
              if (error.status === 404) return false;
              else if (failureCount < 2) return true;
              else return false;
            },
          },
        },
      })
  );
  const router = useRouter();
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => router.reload()}
      >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Navbar />
            {children}
            <AnalyticsWrapper />
            <Footer />
          </Hydrate>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
