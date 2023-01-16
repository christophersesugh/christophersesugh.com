import AppHead from "components/app-head";
import Hero from "components/hero";
import About from "components/about";
import Discord from "components/discord";
import Posts from "components/posts";
import db from "utils/db";

function HomePage({ postsData }: any) {
  return (
    <>
      <AppHead title="Christopher A. Sesugh" />
      <Hero />
      <About />
      <Discord />
      <Posts posts={postsData} />
    </>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const posts = await db
    .collection("posts")
    .orderBy("createdAt", "desc")
    .limit(3)
    .get();
  const postsData = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
  }));
  return {
    props: { postsData },
    revalidate: 10,
  };
};
