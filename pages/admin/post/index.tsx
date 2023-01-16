import React from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import dashify from "dashify";
import Markdown from "components/markdown";
import AppHead from "components/app-head";
import Form from "../components/form";

export default function Post() {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [body, setBody] = React.useState(``);
  const create = useMutation({
    mutationFn: (post) => {
      return axios.post("/api/post", post);
    },
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });
  const queryClient = useQueryClient();

  return (
    <>
      <AppHead title="Create post | CSA" />
      <section className="max-w-4xl mx-auto">
        <h1 className="text-center text-3xl">Create a blog post</h1>
        <Form
          onSubmit={({ title, image, body }) =>
            create.mutateAsync({
              title,
              image,
              slug: dashify(title),
              body,
            } as any)
          }
          title={title}
          image={image}
          body={body}
          setTitle={setTitle}
          setImage={setImage}
          setBody={setBody}
        />
        <div className="max-w-2xl mx-auto font-['DM_Mono'] view my-20 dark:text-slate-200">
          <Markdown code={body} />
        </div>
      </section>
    </>
  );
}
