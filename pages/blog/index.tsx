import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import AppHead from "components/app-head";
import { BlogCards, BlogHeader, Form, LoadMore } from "components/blog";
import { client } from "utils/api-client";

export default function Blog() {
  const [query, setQuery] = React.useState("");
  const [postLimit, setPostLimit] = React.useState(9);
  const [tag, setTag] = React.useState("");
  const [queried, setQueried] = React.useState(false);

  const posts = useQuery({
    queryKey: ["posts", { query, postLimit, tag }],
    queryFn: () =>
      client(
        `posts?title=${encodeURIComponent(query)}&limit=${postLimit}`
      ).then((data) => data.posts),
  });

  function handleTagSearch({ tag }: { tag: string }) {
    setQueried(true);
    setQuery(tag);
  }

  return (
    <>
      <AppHead title="Blog | CAS" />
      <BlogHeader />
      <div className="mb-40 mx-auto max-w-4xl flex flex-col ">
        <Form
          posts={posts}
          query={query}
          setQuery={setQuery}
          onClick={handleTagSearch}
        />
        <BlogCards postsData={posts} queried={queried} />
        <LoadMore
          setPostLimit={setPostLimit}
          posts={posts}
          onClick={() => setQuery("")}
        />
      </div>
    </>
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
