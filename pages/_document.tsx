import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Christopher Aondona Sesugh" />
        <meta
          name="keywords"
          content="JavaScript, React, Nextjs, C, python, software, software engineering, programming, coding, algorithms"
        />

        {/* <link rel="apple-touch-icon" href="/assets/img4.png" />
        <link rel="shortcut icon" href="/assets/img4.png" type="image/x-icon" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-[#1f2028] dark:text-[#fff] bg-[#fff] text-[#1f2028] transition-all duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
