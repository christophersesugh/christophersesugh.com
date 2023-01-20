import React from "react";
import { useRouter } from "next/router";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
        subtitle="You can connect to our discord server using the button bewlow or log out by clicking the logout button"
      >
        <div className="mt-12 w-full md:w-[50%]">
          <button className="rounded-lg p-2 bg-blue-500 text-slate-200 mt-8">
            Log out <FaArrowRight className="inline ml-4" />
          </button>
          <br />
          <Link href="/admin/dashboard">
            <button className="rounded-lg p-2 bg-blue-500 text-slate-200 my-8">
              Dashboard
            </button>
          </Link>
          <ul>
            <li className="rounded-lg bg-zinc-300">
              <p>
                <span className="bg-zinc-500 h-full inline-block p-2 rounded-lg text-slate-300">
                  Email:
                </span>
                <span className="p-2 text-zinc-600">
                  christohybrid185@gmail.com
                </span>
              </p>
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
