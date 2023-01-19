import React from "react";
import AppHead from "components/app-head";
import Markdown from "components/markdown";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import readingTime from "reading-time";

export function BlogSlug({ post }: any) {
  let stats;
  if (post) {
    stats = readingTime(post.body);
  }
  return (
    <div className="my-20 max-w-2xl mx-8 md:mx-auto">
      <AppHead title={`${post?.title} | CAS`} />
      <div className="my-20">
        <Link href="/blog">
          <button className="text-xl text-bold">
            <BsArrowLeft className="inline mr-4 text-2xl font-extrabold" /> Back
            to review
          </button>
        </Link>
      </div>
      {post ? (
        <div>
          <div className="max-w-2xl mx-4 md:mx-auto flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold capitalize">
              {post?.title}
            </h1>
            <h2 className="text-xl text-slate-400 mt-4 mb-12">
              {new Date(post?.createdAt)
                .toUTCString()
                .substring(0, post?.createdAt.length - 8)}
              {"  "}- {stats?.text}
            </h2>

            <div className="block w-full relative h-auto">
              <Image
                // fill
                width={300}
                height={300}
                src={post?.image}
                alt={post?.title}
                className="rounded block relative w-full mb-12"
              />
            </div>
            <div>
              <Markdown code={post?.body} />
            </div>
          </div>
        </div>
      ) : (
        <p> post with given slug not found</p>
      )}
    </div>
  );
}
