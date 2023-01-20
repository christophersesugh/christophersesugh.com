import React from "react";

type FormInputProps = {
  type: string;
  id: string;
  placeholder: string;
};

export default function FormInput({ type, id, placeholder }: FormInputProps) {
  return (
    <div className="w-full my-4">
      <label htmlFor={id} className="text-lg">
        {placeholder}
      </label>
      <input
        required
        type={type}
        id={id}
        name={id}
        className="w-full p-4 rounded-xl bg-slate-400 text-slate-50 outline-none"
      />
    </div>
  );
}
