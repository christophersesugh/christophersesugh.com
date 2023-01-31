import Head from "next/head";
import React from "react";

type AppHeadProps = {
  pageTitle: string;
  pageType: string;
  postSlug?: string;
  postImage?: string;
  pageDescription?: string;
};

export default function AppHead({
  pageTitle,
  pageType,
  postSlug,
  postImage,
  pageDescription,
}: AppHeadProps) {
  return (
    <Head>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta
        property="og:url"
        content={encodeURIComponent(
          `https://www.christophersesugh.com/blog/${postSlug}`
        )}
      />
      <meta property="og:image" content={postImage} />
    </Head>
  );
}
