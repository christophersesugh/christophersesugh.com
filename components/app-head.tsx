import Head from "next/head";
import React from "react";

type AppHeadProps = {
  title: string;
};

export default function AppHead({ title }: AppHeadProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
