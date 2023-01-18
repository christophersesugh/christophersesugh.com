import React from "react";
import { useAsync } from "utils/hooks/use-async";
import FormInput from "./form-input";
import TextArea from "./text-area";

type PostProps = {
  title: string;
  image: string;
  tags: string;
  body: string;
};

type OnSubmitProps = {
  post: PostProps;
};

interface FormElements extends HTMLFormControlsCollection {
  post: HTMLInputElement;
}
interface PostFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}
interface FormProps {
  onSubmit: ({ post }: OnSubmitProps) => void;
  post: PostProps;
  setPost: (post: any) => void;
}

export function Form({ onSubmit, post, setPost }: FormProps) {
  const { run, error, reset, isError, isLoading, isSuccess } = useAsync();

  function handleFormChange(event: any) {
    const { name, value } = event.currentTarget;
    setPost((values: any) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<PostFormElements>) {
    event.preventDefault();
    if (isError) {
      reset();
    } else {
      run(
        onSubmit({
          post,
        })
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mx-4 my-20">
      <FormInput
        value={post.title}
        type="text"
        id="title"
        label="Title"
        onChange={handleFormChange}
      />
      <FormInput
        value={post.image}
        type="text"
        id="image"
        label="Image URL"
        onChange={handleFormChange}
      />
      <FormInput
        value={post.tags}
        type="text"
        id="tags"
        label="Tags"
        onChange={handleFormChange}
      />
      <TextArea
        value={post.body}
        id="body"
        label="Body"
        rows={20}
        onChange={handleFormChange}
      />
      <button
        type="submit"
        className="p-4 mt-4 rounded-md text-lg dark:bg-slate-200 bg-slate-600 text-slate-200 dark:text-slate-700"
      >
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          <p className="text-red-500">{error.response.data.message}</p>
        ) : isSuccess ? (
          "Success"
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
