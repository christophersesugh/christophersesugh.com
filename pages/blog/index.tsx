import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import AppHead from "components/app-head";
import { BlogCards, BlogHeader, Form, LoadMore } from "components/blog";
import { client } from "utils/api-client";
import { Fade } from "react-awesome-reveal";

export default function Blog() {
  const [query, setQuery] = React.useState("");
  const [postLimit, setPostLimit] = React.useState(9);
  const [queried, setQueried] = React.useState(false);

  const posts = useQuery({
    queryKey: ["posts", { query, postLimit }],
    queryFn: () =>
      client(
        `posts?title=${encodeURIComponent(query)}&limit=${postLimit}`
      ).then((data) => data.posts),
  });

  return (
    <Fade cascade duration={1000}>
      <AppHead title="Blog | CAS" />
      <BlogHeader />
      <div className="mb-40 mx-auto max-w-4xl flex flex-col ">
        <Fade cascade duration={300}>
          <Form query={query} setQuery={setQuery} />
          <BlogCards postsData={posts} queried={queried} />
          <LoadMore
            setPostLimit={setPostLimit}
            posts={posts}
            onClick={() => setQuery("")}
          />
        </Fade>
      </div>
    </Fade>
  );
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["posts"], getPosts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

async function getPosts() {
  const posts = await client(`posts`);
  return posts.posts;
}
