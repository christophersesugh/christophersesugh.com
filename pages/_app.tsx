import "../styles/global.css";

import type { AppProps, NextWebVitalsMetric } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}
