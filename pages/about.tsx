import React from "react";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <AppHead pageTitle="About CAS" />
      <div className="mx-8 md:max-w-4xl md:mx-auto">
        <PageHeader
          headerImage={
            <Image
              src="https://res.cloudinary.com/christo/image/upload/v1675203108/chris_ajcw3z.jpg"
              width={300}
              height={300}
              alt="Christopher A. Sesugh"
              className="w-[60%] md:w-[70%] rounded-2xl"
            />
          }
          title="Hi, I am Christopher A. Sesugh, I'm a software developer and an educator."
          subtitle="I help change the world by building better software and sharing my existing knowledge with others by teaching."
        />
        <div className="md:px-16 text-lg text-slate-500 max-w-2xl mx-auto mb-20 -mt-20">
          <p className="text-xl text-slate-800 dark:text-slate-50">
            I am from Benue state, Nigeria.
          </p>
          <p className="mb-4">
            I am a highly motivated and skilled professional with a passion for
            excellence. With a diverse background in fullstack web development,
            I bring a unique perspective and a wealth of knowledge to every
            project I undertake.
          </p>
          <p className="mb-4">
            Throughout my career, I have demonstrated a strong commitment to
            personal and professional development, consistently seeking out new
            opportunities to learn and grow. I am a quick learner and able to
            adapt to new situations easily.
          </p>

          <p className="mb-4">
            In addition to my technical expertise, I am also an effective
            communicator and team player, able to collaborate effectively with
            colleagues and clients to achieve common goals. I am dedicated to
            providing the highest level of service and support to my clients,
            and I am always willing to go the extra mile to ensure their
            satisfaction.
          </p>
          <p className="mb-4">
            If {"you're"} looking for a dedicated and highly skilled
            professional to help you achieve your goals, look no further than
            contacting me.
          </p>
          <p>
            Skills:{" "}
            <span className="text-slate-700 dark:text-slate-50 text-xl">
              HTML, CSS, JavaScript, Typescript, Reactjs, Nextjs, Tailwind CSS,
              Material UI, Jest, Nodejs, Expressjs, MongoDB, DevOps, Git.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
