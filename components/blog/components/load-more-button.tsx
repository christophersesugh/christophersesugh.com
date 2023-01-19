import React from "react";
import { FaPlus } from "react-icons/fa";

export function LoadMore({
  setPostLimit,
  posts,
  onClick,
}: {
  setPostLimit: React.Dispatch<React.SetStateAction<number>>;
  posts: any;
  onClick: () => void;
}) {
  return !posts?.data?.length ? (
    <button
      onClick={onClick}
      className={`"border-red-500 hover:border-red-500" 
    mt-20 rounded-3xl p-4 border-2 border-slate-400 dark:hover:border-white transition-all duration-300 hover:border-black self-center align-self-center`}
    >
      Reset Form
    </button>
  ) : (
    <button
      // disabled={!posts?.data?.length}
      onClick={() => setPostLimit((limit: number) => limit + 6)}
      className={`"border-red-500 hover:border-red-500" 
       mt-20 rounded-3xl p-4 border-2 border-slate-400 dark:hover:border-white transition-all duration-300 hover:border-black self-center align-self-center`}
    >
      Load more articles <FaPlus className="inline ml-6" />
    </button>
  );
}
