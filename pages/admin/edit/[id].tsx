import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AppHead from "components/app-head";
import Form from "../components/form";
import { useAsync } from "utils/hooks/use-async";
import { isError, useMutation, useQueryClient } from "react-query";
import dashify from "dashify";

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
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState(``);
  const router = useRouter();
  const { id } = router.query;

  const create = useMutation({
    mutationFn: (post) => {
      return axios.put(`/api/post/${id}`, post);
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
        return await axios.get(`/api/post/${id}`);
      }
    }
    run(fetch());
    setTitle(post?.data?.post.title);
    setBody(post?.data?.post.body);
  }, [id, post?.data?.post.body, post?.data?.post.title, run]);

  return (
    <>
      <AppHead title={`Edit post | CSA`} />
      {isLoading || isIdle ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : isSuccess ? (
        <div className="mx-8">
          <Form
            onSubmit={({ title, body }) =>
              create.mutateAsync({ title, slug: dashify(title), body } as any)
            }
            title={title}
            body={body}
            setTitle={setTitle}
            setBody={setBody}
          />
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
