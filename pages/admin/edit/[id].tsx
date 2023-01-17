import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AppHead from "components/app-head";
import Form from "../components/form";
import { useAsync } from "utils/hooks/use-async";
import { isError, useMutation, useQueryClient } from "react-query";
import dashify from "dashify";
import LoadingIndicator from "components/loading-indicator";
import Markdown from "components/markdown";

export default function EditPost() {
  const {
    run,
    data: post,
    isSuccess,
    isLoading,
    error,
    isError,
    isIdle,
  } = useAsync();
  const [postValues, setPost] = React.useState({
    title: "",
    image: "",
    tags: "",
    body: "",
  });
  const router = useRouter();
  const { id } = router.query;

  const create = useMutation({
    mutationFn: (post) => {
      return axios.patch(`/api/post/${id}`, post);
    },
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  const deletePost = useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return axios.delete(`/api/post/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      router.back();
    },
  });

  const queryClient = useQueryClient();

  React.useEffect(() => {
    async function fetch() {
      if (id) {
        return await axios
          .get(`/api/post/${id}`)
          .then((data) => setPost({ ...data?.data?.post }));
      }
    }
    run(fetch());
  }, [id, post?.data?.post, run]);

  return (
    <>
      <AppHead title={`Edit post | CSA`} />
      {isLoading || isIdle ? (
        <LoadingIndicator path={router.asPath} />
      ) : isError ? (
        <p>{error.message}</p>
      ) : isSuccess ? (
        <div className="mx-8">
          <Form
            onSubmit={({ post }) => {
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
          <div>
            <button
              className="text-xl"
              onClick={() => deletePost.mutate({ id } as any)}
            >
              delete post
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
