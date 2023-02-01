import React from "react";
import { client } from "utils/api-client";
import { Slug } from "components/blog";
import AppHead from "components/app-head";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Post({ post }: any) {
  return (
    <>
      {/* <AppHead pageTitle={`${post.title} | CAS`} pageDescription={post.title} /> */}
      <Head>
        {/* <NextSeo
          title={post.title}
          description={post.title}
          canonical={`https://www.chrostophersesugh.com/blog/${post.slug}`}
          openGraph={{
            type: "blog",
            url: "www.chrostophersesugh.com",
            title: `${post.title}`,
            description: post.title,
            locale: "en_EN",
            images: [
              {
                url: "https://res.cloudinary.com/christo/image/upload/v1675203108/chris_ajcw3z.jpg",
                width: 800,
                height: 600,
                alt: `hero image for ${post.title}`,
              },
            ],
            site_name: "myawesomewebsite.com",
          }}
          twitter={{
            handle: "@coding_simba",
            site: "www.christophersesugh.com",
            cardType: "summary",
          }}
        /> */}
      </Head>
      <div className="my-20 max-w-2xl px-8 mx-auto">
        <Slug post={post} />
        <hr />
        <section>
          <h2 className="text-lg">Written by: Christopher S. Aondona</h2>
          <p>
            Christopher S. Aondona is a software engineer and an educator. His
            is aim is to help change the world with quality software by sharing
            his existing knowledge and building quality software products.
          </p>
        </section>
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
    fallback: "blocking",
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
