import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import PostCard from "./components/post-card";

export default function Posts({ posts }: any) {
  return (
    <section className="mb-40 mx-8">
      <div className="flex flex-col md:flex-row items-center justify-between mx-4">
        <h2 className="text-4xl  mb-8">
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
        {posts.map((post: any) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}
