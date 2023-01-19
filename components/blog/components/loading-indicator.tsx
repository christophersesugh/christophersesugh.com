import React from "react";

export function Loading() {
  return (
    <article className="animate-pulse p-4 flex flex-col justify-center items-center bg-slate-400 rounded-lg h-[270px]">
      <div className="h-12 w-full bg-slate-500"></div>
      <p className="text-xl font-extrabold text-slate-400 self-start my-4 h-8 w-full bg-slate-500"></p>
      <h1 className="self-start text-3xl font-bold h-4 w-full bg-slate-500"></h1>
    </article>
  );
}
