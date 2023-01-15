import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  darcula,
  darkula,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useTheme } from "utils/hooks/use-theme";

export default function Markdown({ code }: any) {
  const [, darkMode] = useTheme();
  return (
    <div className="mx-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, "")}
                style={darcula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {code}
      </ReactMarkdown>
    </div>
  );
}
