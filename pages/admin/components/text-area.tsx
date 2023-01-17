import React from "react";

type TextAreaProps = {
  value: string;
  id: string;
  label: string;
  cols?: number;
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

export default function TextArea({
  value,
  id,
  label,
  cols,
  rows,
  onChange,
}: TextAreaProps) {
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}</label>
      <textarea
        value={value}
        name={id}
        id={id}
        cols={cols}
        rows={rows}
        className="w-full rounded-md dark:text-slate-900 dark:bg-slate-50 p-4 bg-slate-600 text-slate-50 outline-none"
        onChange={onChange}
      ></textarea>
    </div>
  );
}
