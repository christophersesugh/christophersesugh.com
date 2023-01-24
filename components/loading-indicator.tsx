import React from "react";
import { useRouter } from "next/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

export function LoadingIndicator({ path }: { path: string }) {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (path: any, { shallow }: any) => {
      console.log(
        `App is changing to ${path} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);
  return (
    <article className="fixed bottom-10 right-10 rounded p-4 flex bg-slate-500 items-center justify-center text-slate-100 dark:bg-slate-200 dark:text-slate-800 gap-6 px-8">
      <AiOutlineLoading3Quarters className="text-4xl animate-spin " />
      <div>
        <h2 className="text-lg mb-2 animate-pulse">loading</h2>
        <p>path: {path}</p>
      </div>
    </article>
  );
}

export function FullPageSpinner() {
  return (
    <div className="h-screen w-screen grid justify-center items-start pt-40">
      <FaSpinner className="text-6xl animate-spin" />
    </div>
  );
}
