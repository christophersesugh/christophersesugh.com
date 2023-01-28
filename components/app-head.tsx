import Head from "next/head";
import React from "react";

type AppHeadProps = {
  title: string;
  descriptionContent?: string;
};

export default function AppHead({ title, descriptionContent }: AppHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={descriptionContent} />
    </Head>
  );
}
