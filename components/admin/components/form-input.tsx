import React from "react";

type FormInputProps = {
  value: string;
  type: string;
  id: string;
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function FormInput({
  value,
  type,
  id,
  label,
  onChange,
}: FormInputProps) {
  return (
    <div className="w-full my-8">
      <label htmlFor={id}>{label}</label>
      <input
        required
        value={value}
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        className="w-full rounded-md p-2 dark:text-slate-800 bg-slate-600 text-slate-50 dark:bg-slate-50 outline-none"
      />
    </div>
  );
}
