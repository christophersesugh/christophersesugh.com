import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { useAuth } from "context/auth-context";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";

type UserInfoProps = {
  email: string;
  id: string;
  token: string;
};

export default function Me() {
  const { user, logout } = useAuth();
  const router = useRouter();

  React.useLayoutEffect(() => {
    if (!user || user === null) {
      router.push("/login");
    }
  }, [router, user]);

  return (
    <>
      <AppHead pageTitle="Profile | CAS" pageType={"website"} />
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
        subtitle="You can connect to our discord server using the button below or log out by clicking the logout button"
      >
        <div className="mt-12 w-full md:w-[50%]">
          <button
            onClick={logout}
            className="rounded-lg p-2 mb-8 bg-blue-500 text-slate-200 mt-8"
          >
            Log out <FaArrowRight className="inline ml-4" />
          </button>
          <br />
          {user?.email === "christohybrid185@gmail.com" ? (
            <Link href="/admin/dashboard">
              <button className="rounded-lg p-2 bg-blue-500 text-slate-200 my-8">
                Dashboard
              </button>
            </Link>
          ) : null}
          <ul>
            {user ? (
              <li className="rounded-lg bg-zinc-300">
                <p className="p-4 text-xl text-zinc-600">{user.email}</p>
              </li>
            ) : null}
            <li className="text-lg text-zinc-400 mt-8">
              <button className="underline">Connect to Discord</button>
            </li>
          </ul>
        </div>
      </PageHeader>
    </>
  );
}
