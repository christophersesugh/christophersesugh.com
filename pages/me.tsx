import React from "react";
import { useRouter } from "next/router";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";
import Image from "next/image";

export default function Me() {
  const router = useRouter();
  let user = false;
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
      ></PageHeader>
    </>
  );
}
