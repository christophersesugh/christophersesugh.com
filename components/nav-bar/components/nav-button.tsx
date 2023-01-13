import React from "react";

export default function NavButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={`${className} text-lg`}>
      {children}
    </button>
  );
}
