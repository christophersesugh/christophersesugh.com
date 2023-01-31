import React from "react";
import AppHead from "components/app-head";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function ErrorPage() {
  return (
    <>
      <AppHead pageTitle="Page not found | CAS" />

      <section className="max-w-4xl mx-auto mb-20 flex flex-col justify-center items-center ">
        <h1 className="text-[10rem] text-center">404</h1>
        <h2 className="text-6xl uppercase text-center">page not found</h2>
        <Link href="/">
          <button className="text-3xl border-2 p-4 rounded-lg mt-8">
            <BsArrowLeft className="inline mr-4" />
            Back Home
          </button>
        </Link>
      </section>
    </>
  );
}
