import React from "react";
import { useRouter } from "next/router";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";
import Image from "next/image";

export default function Me() {
  const router = useRouter();
  let user = true;
  React.useLayoutEffect(() => {
    if (!user || user === null) {
      router.push("/login");
    }
  }, [router, user]);

  return (
    <>
      <AppHead title="Profile | CAS" />
      <PageHeader
        headerImage={
          <Image
            src="/assets/profile.jpeg"
            width={400}
            height={300}
            alt="login"
            className="self-start mx-auto rounded-xl md:w-[70%]  "
          />
        }
        title="Your profile."
        subtitle="You can edit your profile or connect to our discord server to intereact with like minded people."
      >
        <div className="mt-12 w-full md:w-[50%]">
          <ul>
            <li className="rounded-lg bg-zinc-300">
              <span className="bg-zinc-500 h-full inline-block p-2 rounded-lg text-slate-300">
                Email:
              </span>
              <span className="p-2 text-zinc-600">
                christohybrid185@gmail.com
              </span>
            </li>
            <li className="text-lg text-zinc-400 mt-8">
              <form>
                <label htmlFor="password" className="text-sm">
                  Change your password
                </label>
                <input
                  type="text"
                  required
                  placeholder="Password"
                  id="password"
                  className="w-full p-2 text-slate-200 rounded-lg outline-none bg-slate-400 placeholder-slate-200"
                />
                <button
                  type="submit"
                  className="text-blue-400 border-2 p-2 rounded-lg mt-4"
                >
                  Save
                </button>
              </form>
            </li>
            <li className="text-lg text-zinc-400 mt-8">
              <button className="underline">Connect to Discord</button>
            </li>
          </ul>
        </div>
      </PageHeader>
    </>
  );
}
