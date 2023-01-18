import React from "react";

export default function Loading() {
  return (
    <article className="p-4 flex flex-col justify-center items-center">
      <div className="h-12"></div>
      <p className="text-xl font-extrabold text-slate-400 self-start my-4 h-8"></p>
      <h1 className="self-start text-3xl font-bold h-4"></h1>
    </article>
  );
}
