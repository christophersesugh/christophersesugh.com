import React from "react";
import { client } from "utils/api-client";
import { BlogSlug } from "components/blog";
import AppHead from "components/app-head";

export default function Post({ post }: any) {
  return (
    <>
      <AppHead
        pageType="article"
        pageTitle={`${post.title} | CAS`}
        pageDescription={post.title}
        postSlug={post.slug}
        postImage={post.image}
      />
      <div className="my-20 max-w-2xl mx-8 md:mx-auto">
        <BlogSlug post={post} />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await client("posts").then((data) => data.posts);
  const paths = response.map((post: { slug: string }) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const { slug } = context.params;
  const post = await getPosts({ slug });
  return {
    props: {
      post: post[0],
    },
  };
};

async function getPosts({ slug }: { slug?: string }) {
  const posts = await client(`posts?slug=${slug}`);
  return await posts.posts;
}
