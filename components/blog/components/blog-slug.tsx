import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import readingTime from "reading-time";
import { BsArrowLeft } from "react-icons/bs";
import { TwitterShareButton, TwitterIcon } from "react-share";

import AppHead from "components/app-head";
import Markdown from "components/markdown";

export function BlogSlug({ post, relatedPosts }: any) {
  const router = useRouter();
  let stats;
  if (post) {
    stats = readingTime(post.body);
  }

  return (
    // <div className="my-20 max-w-2xl mx-8 md:mx-auto">
    <>
      {/* <AppHead
        pageType="article"
        pageTitle={`${post.title} | CAS`}
        pageDescription={post.title}
        postSlug={post.slug}
        postImage={post.image}
      /> */}
      <div className="my-20">
        <Link href="/blog">
          <button className="text-xl text-bold">
            <BsArrowLeft className="inline mr-4 text-2xl font-extrabold" /> Back
            to review
          </button>
        </Link>
      </div>
      {post ? (
        <>
          <div>
            <div className="max-w-2xl px-4 mx-auto flex flex-col justify-center">
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
                  width={400}
                  height={300}
                  src={post?.image}
                  alt={post?.title}
                  className="rounded block  w-full mb-12"
                />
              </div>
              <div>
                <Markdown code={post.body} />
              </div>

              <TwitterShareButton
                className="text-blue-400 hover:underline text-xl"
                url={`https://www.christophersesugh.com/blog/${post.slug}`}
              >
                <TwitterIcon size={32} className="inline mr-4" round />
                Share on Twitter
              </TwitterShareButton>
            </div>
          </div>
        </>
      ) : (
        <p className="text-xl"> post with given slug not found</p>
      )}
      {/* </div> */}
    </>
  );
}
