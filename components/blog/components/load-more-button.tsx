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
  return (
    <div className="w-full flex justify-center">
      {!posts?.data?.length ? (
        <button
          onClick={onClick}
          className={`"border-red-500 hover:border-red-500" 
          mt-20 rounded-3xl p-4 border-2 border-slate-400 dark:hover:border-white transition-all duration-300 hover:border-black place-self-center `}
        >
          Reset Form
        </button>
      ) : (
        <button
          onClick={() => setPostLimit((limit: number) => limit + 6)}
          className={`"border-red-500 hover:border-red-500" 
             mt-20 rounded-3xl p-4 border-2 border-slate-400 dark:hover:border-white transition-all duration-300 hover:border-black`}
        >
          Load more articles <FaPlus className="inline ml-6" />
        </button>
      )}
    </div>
  );
}
