import React from "react";

export function Form({ onClick, posts, query, setQuery }: any) {
  const { data } = posts;
  let tags;

  if (data) {
    tags = [
      ...new Set(
        data?.map((post: any) => post.tags).flatMap((tag: string) => tag)
      ),
    ] as [string];
  }

  function handleButtonClick({ tag }: any) {
    onClick({
      tag,
    });
  }

  return (
    <div className="mx-4 mt-8">
      <form className="w-full md:w-[50%] mb-40 relative ">
        <label htmlFor="search">
          <input
            minLength={3}
            value={query}
            type="search"
            name="search"
            id="search"
            placeholder="Search posts"
            onChange={(e) => setQuery(e.currentTarget.value)}
            className="w-full border-slate-500 border-2 rounded-xl dark:border-slate-200 dark:text-slate-500 p-4  text-lg focus:outline-none"
          />
        </label>
      </form>

      <div className="my-8">
        <h3 className="mb-8 text-xl font-black">Search blog by topics</h3>
        {tags?.map((tag: string) => (
          <button
            onClick={() => handleButtonClick({ tag })}
            key={tag}
            className="rounded-3xl p-3 bg-zinc-500 text-slate-300 mb-2 mr-4  inline-block hover:outline-2 hover:outline-offset-4"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
