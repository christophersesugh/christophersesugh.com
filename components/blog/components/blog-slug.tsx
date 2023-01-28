import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import readingTime from "reading-time";
import { BsArrowLeft } from "react-icons/bs";
import { TwitterShareButton, TwitterIcon } from "react-share";

import AppHead from "components/app-head";
import Markdown from "components/markdown";
import Head from "next/head";

export function BlogSlug({ post, relatedPosts }: any) {
  const router = useRouter();
  let stats;
  if (post) {
    stats = readingTime(post.body);
  }
  console.log(router.asPath);

  return (
    // <div className="my-20 max-w-2xl mx-8 md:mx-auto">
    <>
      {/* <AppHead
        title={`${post?.title} | CAS`}
        descriptionContent={post?.title}
      /> */}
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.content} />
        <meta
          property="og:url"
          content={encodeURIComponent(
            `https://www.christophersesugh.com/blog/${post!.slug}`
          )}
        />
        <meta property="og:image" content={post!.image} />
      </Head>
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
              <a
                target="_blank"
                href={encodeURIComponent(
                  `https://twitter.com/intent/tweet?url=https://www.christophersesugh.com/blog/${`${post.slug}`}`
                )}
                className="twitter-share-button text-lg text-blue-400"
                data-via="coding_simba"
                data-hashtags={`${post.tag}`}
                data-show-count="true"
                rel="noreferrer"
              >
                Tweet
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>

              {/* <TwitterShareButton
                className="text-blue-400 hover:underline text-xl"
                url={`https://www.christophersesugh.com/blog/${post.slug}`}
              >
                <TwitterIcon size={32} className="inline mr-4" round />
                Share on Twitter
              </TwitterShareButton> */}
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
