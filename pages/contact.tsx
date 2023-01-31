import React from "react";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <AppHead pageTitle="Contact CAS" />

      <div className="mx-8 md:max-w-4xl md:mx-auto mb-12">
        <PageHeader
          headerImage={
            <Image
              src="/assets/chris.jpeg"
              width={300}
              height={200}
              alt="Christopher Sesugh"
              className="rounded-tl-3xl rounded-br-3xl w-[50%] md:w-[30%]"
            />
          }
          title="Send me an email."
          subtitle="You can send me an email if you have any questions, or may want to get in touch."
        />
        <div className="md:max-w-2xl md:mx-auto">
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 my-6">
            Contact CAS.
          </h2>
          <p className="mb-4">
            Thank you for visiting my website. If you have any questions or
            would like to get in touch, please feel free to send me an email at{" "}
            <a href="mailto:christohybrid185@gmail.com" className="underline">
              christohybrid185@gmail.com.
            </a>
          </p>
          <p className="mb-4">
            I will do my best to respond to your email as soon as possible.
          </p>
          <p className="mb-4">Thank you for your interest.</p>
          <p className="mb-4">Best regards,</p>
          <p className="mb-4 text-3xl">Christopher A. Sesugh</p>
        </div>
      </div>
    </>
  );
}
