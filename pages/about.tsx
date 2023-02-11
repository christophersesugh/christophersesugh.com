import React from "react";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <AppHead pageTitle="About CAS" />
      <div className="px-8 md:max-w-4xl mx-auto">
        <PageHeader
          headerImage={
            <Image
              src="https://res.cloudinary.com/christo/image/upload/v1676107498/Image-7741_zedgnk.jpg"
              width={300}
              height={300}
              alt="Christopher A. Sesugh"
              className="w-full md:w-full rounded-full"
            />
          }
          title="Hi, I am Christopher A. Sesugh, I'm a software engineer and an educator."
          subtitle="I help change the world by building better software and sharing my existing knowledge with others by teaching."
        />
        <div className="md:px-16 text-lg text-slate-400 max-w-2xl mx-auto mb-20 -mt-20">
          <p className="mb-4">
            Christopher A. Sesugh is a talented software engineer hailing from
            Benue state, Nigeria. With a passion for technology and a drive to
            continuously improve his skills, he entered the field of software
            engineering in 2019 and has since worked with several companies,
            honing his expertise in various programming languages and
            technologies.
          </p>
          <p className="mb-4">
            With a strong foundation in HTML, CSS, and JavaScript, Christopher
            has developed a reputation for creating visually stunning and
            user-friendly websapps. His knowledge of DevOps and experience with
            C and Python have also made him an asset to organizations seeking to
            optimize their systems for maximum efficiency and scalability.
          </p>

          <p className="mb-4">
            In recent years, Christopher has focused his attention on full-stack
            software engineering and has become proficient in using React,
            Nextjs, Nodejs, Expressjs, NoSQL databases and SQL databases. He is
            known for his ability to seamlessly integrate front-end and back-end
            systems, delivering comprehensive solutions that meet the needs of
            users and businesses alike.
          </p>
          <p className="mb-4">
            Christopher{"'"}s commitment to excellence and drive to stay at the
            forefront of technological advancements have made him a sought-after
            software engineer in his community. With his technical expertise and
            passion for his craft, he is poised to make a lasting impact in the
            world of software engineering.
          </p>
        </div>
      </div>
    </>
  );
}
