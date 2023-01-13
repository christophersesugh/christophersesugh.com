import "../styles/global.css";

import type { AppProps, NextWebVitalsMetric } from "next/app";
import Layout from "components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}
