import React from "react";

export function Form({ query, setQuery }: any) {
  return (
    <div className="mt-20 px-4">
      <p className="text-lg mb-4">Search posts by Title:</p>

      <form className="w-full md:w-[50%] mb-20 relative ">
        <label htmlFor="search">
          <input
            minLength={3}
            value={query}
            type="search"
            name="search"
            id="search"
            placeholder="Search posts"
            onChange={(e) => setQuery(e.currentTarget.value)}
            className="w-full border-slate-500 border-2 rounded-xl dark:border-slate-200 dark:text-slate-500 p-4 text-lg focus:outline-none"
          />
        </label>
      </form>
    </div>
  );
}
