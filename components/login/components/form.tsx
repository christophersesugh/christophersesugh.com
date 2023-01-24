import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "context/auth-context";
import { useAsync } from "utils/hooks/use-async";
import FormInput from "./form-input";

type OnSubmitProps = {
  email: string;
  password: string;
};

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface PostFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}
interface FormProps {
  onSubmit: ({ email, password }: OnSubmitProps) => void;
  registered: boolean;
}

export function Form({ registered, onSubmit }: FormProps) {
  const router = useRouter();
  const { user } = useAuth();
  const { run, isError, isLoading, isSuccess, error, reset } = useAsync();
  function handleFormSubmit(event: React.FormEvent<PostFormElements>) {
    const { email, password } = event.currentTarget.elements;
    event.preventDefault();
    if (isError) {
      reset();
    } else {
      run(
        onSubmit({
          email: email.value,
          password: password.value,
        })
      );
    }
  }

  React.useEffect(() => {
    if (isSuccess && user) {
      router.push("/me");
    }
  }, [isSuccess, router, user]);

  return (
    <form className="w-full" onSubmit={handleFormSubmit}>
      <FormInput type="email" id="email" placeholder="Email" />
      <FormInput type="password" id="password" placeholder="Password" />
      <button
        disabled={isLoading}
        type="submit"
        className={` p-6 rounded-full bg-black/30 text-white/80 dark:bg-white/90 dark:text-black text-lg`}
      >
        {isLoading
          ? "Fetching user..."
          : isError
          ? error.message
          : registered
          ? "Login"
          : "Register"}
        {/* {registered ? "Login" : "Register"} */}
      </button>

      <button type="reset" className="ml-4 underline">
        reset
      </button>
    </form>
  );
}
