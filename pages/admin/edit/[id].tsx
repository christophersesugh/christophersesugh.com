import React from "react";
import { useRouter } from "next/router";
import AppHead from "components/app-head";
import { Form } from "components/admin";
import { useMutation, useQuery, useQueryClient } from "react-query";
import dashify from "dashify";
import LoadingIndicator from "components/loading-indicator";
import Markdown from "components/markdown";
import { client } from "utils/api-client";

type PostProps = {
  title: string;
  image: string;
  tags: string;
  body: string;
};

type OnSubmitProps = {
  post: PostProps;
};

export default function EditPost() {
  const [postValues, setPost] = React.useState({
    title: "",
    image: "",
    tags: "",
    body: "",
  });
  const router = useRouter();

  const create = useMutation({
    mutationFn: (post: any) => {
      return client(`posts/${post.id}`, { post } as any);
    },
    onSuccess: () => queryClient.invalidateQueries(["posts"]),
  });

  const deletePost = useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return client(`posts/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      router.back();
    },
  });

  const { id } = router.query;

  const queryClient = useQueryClient();
  const {
    data: post,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      client(`posts/${id}`).then((data: any) => {
        setPost({ ...data?.post } as any);
        return data.post;
      }),
  });
  return (
    <>
      <AppHead title={`Edit post | CSA`} />
      {isLoading ? (
        <LoadingIndicator path={router.asPath} />
      ) : isError ? (
        <p>{error as any}</p>
      ) : isSuccess ? (
        <div className="mx-8">
          <Form
            onSubmit={({ post }: OnSubmitProps) => {
              const tags = post.tags.split(",").map((tag: string) => tag);
              return create.mutateAsync({
                ...post,
                slug: dashify(post.title),
                tags,
              } as any);
            }}
            post={postValues}
            setPost={setPost}
          />
          <div className="max-w-2xl mx-auto my-20 ">
            <Markdown code={post?.body} />
          </div>
        </div>
      ) : null}
    </>
  );
}
