import React from "react";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import "../styles/global.css";
import Layout from "components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {}
