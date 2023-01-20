import React from "react";
import FormInput from "./form-input";

type FormProps = {
  registered: boolean;
};

export function Form({ registered }: FormProps) {
  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <FormInput type="email" id="email" placeholder="Email" />
      <FormInput type="password" id="password" placeholder="Password" />
      <button
        type="submit"
        className={` p-6 rounded-full bg-black/30 text-white/80 dark:bg-white/90 dark:text-black text-lg`}
      >
        {registered ? "Login" : "Register"}
      </button>

      <button type="reset" className="ml-4 underline">
        reset
      </button>
    </form>
  );
}
