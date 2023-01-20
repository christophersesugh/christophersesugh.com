import React from "react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/global.css";
import Layout from "components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {}
