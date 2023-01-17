import React from "react";
import { GrRefresh } from "react-icons/gr";
import AppHead from "components/app-head";

export default function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <>
      <section
        className="max-w-4xl mx-auto pt-12 flex flex-col justify-center items-center"
        role="alert"
      >
        <h1 className="text-4xl text-center">An Error Occurred</h1>
        <h2 className="text-xl text-red-600 text-center my-8">
          {error?.message}
        </h2>
        <button
          onClick={resetErrorBoundary}
          className="text-xl border-2 p-4 rounded-lg mt-8"
        >
          <GrRefresh className="inline mr-4" />
          Refresh
        </button>
      </section>
    </>
  );
}
