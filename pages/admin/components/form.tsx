import React from "react";
import { useAsync } from "utils/hooks/use-async";

type OnSubmitProps = {
  title: string;
  image: string;
  body: string;
};

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  image: HTMLInputElement;
  body: HTMLTextAreaElement;
}
interface PostFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}
interface FormProps {
  onSubmit: ({ title, image, body }: OnSubmitProps) => void;
  title: string;
  image: string;
  body: string;
  setTitle: (title: string) => void;
  setImage: (image: string) => void;
  setBody: (body: string) => void;
}

export default function Form({
  onSubmit,
  title,
  image,
  body,
  setTitle,
  setImage,
  setBody,
}: FormProps) {
  const { run, error, reset, isError, isLoading, isSuccess } = useAsync();

  function handleSubmit(event: React.FormEvent<PostFormElements>) {
    event.preventDefault();
    const { title, image, body } = event.currentTarget.elements;
    if (isError) {
      reset();
    } else {
      run(
        onSubmit({
          title: title.value,
          image: image.value,
          body: body.value,
        })
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full my-20">
      <div className="w-full my-8">
        <label htmlFor="title">Title</label>
        <input
          value={title}
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-md p-2 dark:text-slate-800 bg-slate-600 text-slate-50 dark:bg-slate-50 outline-none"
        />
      </div>
      <div className="w-full my-8">
        <label htmlFor="image">Image URL</label>
        <input
          value={image}
          type="text"
          id="image"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          className="w-full rounded-md p-2 dark:text-slate-800 bg-slate-600 text-slate-50 dark:bg-slate-50 focus:outline-none"
        />
      </div>
      <div className="w-full">
        <label htmlFor="body">Body</label>

        <textarea
          value={body}
          name="body"
          id="body"
          cols={10}
          rows={20}
          className="w-full rounded-md dark:text-slate-900 dark:bg-slate-50 p-4 bg-slate-600 text-slate-50 outline-none"
          onChange={(e: any) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button className="p-4 mt-4 rounded-md text-lg dark:bg-slate-200 bg-slate-600 text-slate-200 dark:text-slate-700">
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
