import Head from "next/head";
import React from "react";

type AppHeadProps = {
  pageTitle: string;
  pageDescription?: string;
  pageImage?: string;
  pageUrl?: string;
};

export default function AppHead({
  pageTitle,
  pageDescription,
  pageImage,
  pageUrl,
}: AppHeadProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta property="og:description" content={pageDescription} />
      <meta property="image" content={pageImage} />
      <meta property="og:image" content={pageImage} />
      <meta property="url" content={pageUrl} />
      <meta property="og:url" content={pageUrl} />
    </Head>
  );
}
