import React from "react";

export function Loading() {
  return (
    <article className="animate-pulse p-4 flex flex-col justify-center items-center bg-slate-300 rounded-lg h-[300px]">
      <div className="h-14 w-full bg-slate-400 "></div>
      <p className="text-xl font-extrabold text-slate-400 self-start my-4 h-10 w-full bg-slate-400"></p>
      <h1 className="self-start text-3xl font-bold h-6 w-full bg-slate-400"></h1>
    </article>
  );
}
