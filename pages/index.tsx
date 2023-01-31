import React from "react";
import { Fade } from "react-awesome-reveal";
import AppHead from "components/app-head";
import Hero from "components/hero";
import About from "components/about";
import Discord from "components/discord";
import { Posts } from "components/blog";
import { client } from "utils/api-client";

function HomePage({ posts }: any) {
  return (
    <>
      <AppHead
        pageType="blog"
        postImage="https://res.cloudinary.com/christo/image/upload/v1675179148/home_lsq4vv.webp"
        pageTitle="Christopher A. Sesugh"
        pageDescription="Helping make the world a better place by building quality software and sharing my exisiting knowledge."
      />
      <Hero />
      <About />
      <Discord />
      <Posts posts={posts} />
    </>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

async function getPosts() {
  const posts = await client(`posts?limit=${3}`);
  return posts.posts;
}
