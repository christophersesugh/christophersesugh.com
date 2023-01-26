import Head from "next/head";
import React from "react";

type AppHeadProps = {
  title: string;
  content?: string;
};

export default function AppHead({ title, content }: AppHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Head>
  );
}
