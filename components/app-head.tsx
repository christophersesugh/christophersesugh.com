import Head from "next/head";
import React from "react";

type AppHeadProps = {
  pageTitle: string;
  pageDescription?: string;
};

export default function AppHead({ pageTitle, pageDescription }: AppHeadProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Head>
  );
}
