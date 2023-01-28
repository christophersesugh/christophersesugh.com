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
  console.log(router.asPath);

  return (
    // <div className="my-20 max-w-2xl mx-8 md:mx-auto">
    <>
      <AppHead
        title={`${post?.title} | CAS`}
        descriptionContent={post?.title}
      />
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
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button text-blue-400 text-3xl"
                data-text={`I just read ${post.title} on and it is interesting`}
                data-url={`https://christophersesugh.com/blog/${post.slug}`}
                data-via="coding_simba"
                data-hashtags={`${post.tag}`}
                data-show-count="true"
              >
                Tweet
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
              {/* <TwitterShareButton
                url={`https://christophersesugh.com${router.asPath}`}
                title={post.title}
                hashtags={[post.tag]}
                via={"coding_simba"}
                className="text-blue-400 hover:underline text-lg"
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
