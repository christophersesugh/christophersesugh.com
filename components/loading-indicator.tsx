import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoadingIndicator({ path }: { path: string }) {
  return (
    <article className="fixed bottom-10 right-10 rounded p-4 flex bg-slate-500 items-center justify-center text-slate-100 dark:bg-slate-200 dark:text-slate-800 gap-6 px-8">
      <AiOutlineLoading3Quarters className="text-4xl animate-spin " />
      <div>
        <h2 className="text-lg mb-2 animate-pulse">loading</h2>
        <p>path: {path}</p>
      </div>
    </article>
  );
}
