import React from "react";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";
import Image from "next/image";
import { Form } from "components/login";

export default function Login() {
  const [registered, setRegistered] = React.useState(true);
  return (
    <>
      <AppHead title="Login | CAS" />
      <div className="px-4 w-full">
        <PageHeader
          headerImage={
            <Image
              src="/assets/login.jpeg"
              width={300}
              height={200}
              alt="login"
              className="self-start rounded-xl"
            />
          }
          title="Log in to your account."
          subtitle="Or signup for an account."
        >
          <div className="w-[80%] mt-12">
            <Form registered={registered} />
            <div className="mt-8 text-sm">
              <p>
                {registered
                  ? "Don't have an account ?"
                  : "Already have an account ?"}{" "}
                <button
                  className="underline"
                  onClick={() => setRegistered(!registered)}
                >
                  {registered ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </div>
          <p className="self-center text-lg text-slate-400 mt-20">
            To sign in to your account or to create a new one fill in your email
            and password above and {"we'll"} get you started.
          </p>
        </PageHeader>
      </div>
    </>
  );
}
