import React from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { BsArrowRight } from "react-icons/bs";
import { PostCard } from "./post-card";
import { client } from "utils/api-client";

export function Posts() {
  const {
    data: posts,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => client(`posts?limit=${3}`).then((data) => data.posts),
  });

  return (
    <section className="mb-40 mx-8 max-w-5xl md:mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mx-4">
        <h2 className="text-4xl mb-8">
          Blog recommendations
          <br />
          <span className="text-slate-400">Recommended for you.</span>
        </h2>
        <Link href="/blog">
          <button className="text-2xl font-extrabold mb-4">
            See the full Blog{" "}
            <span className="border-2 rounded-full p-4 ml-4 hover:border-slate-400 ">
              <BsArrowRight className="inline text-3xl" />
            </span>
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-start">
        {isError ? (
          <div className="text-center">
            <p className="text-xl">There was an error</p>
            <pre className="text-lg text-red-500">
              {error instanceof Error ? error.message : null}
            </pre>
          </div>
        ) : null}

        {isLoading ? <p className="text-xl text-center">Loading...</p> : null}
        {isSuccess
          ? posts?.length
            ? posts.map((post: any) => (
                <PostCard key={post.title} post={post} />
              ))
            : null
          : null}
      </div>
    </section>
  );
}
