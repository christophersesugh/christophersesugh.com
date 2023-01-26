import React from "react";
import AppHead from "components/app-head";
import PageHeader from "components/page-header";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";

function Discord() {
  return (
    <>
      <AppHead title="CAS community on discord | CAS" />

      <div className="mx-8 md:px-16 md:max-w-6xl md:mx-auto">
        <PageHeader
          headerImage={
            <Image
              src="/assets/discord.png"
              width={300}
              height={300}
              alt="Christopher A. Sesugh"
              className="w-[60%] md:w-[50%] rounded-2xl"
            />
          }
          title="Meet like minded people on our discord server."
          subtitle="Learn to build better software together."
        >
          <h2 className="text-3xl my-8">
            <BsDiscord className="inline" /> Discord
          </h2>

          <button className="p-6 rounded-full bg-slate-400 dark:bg-white text-slate-800 font-black">
            Join Discord
          </button>
        </PageHeader>
        <div className="md:px-16 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-20 -mt-20">
          <h1 className="text-3xl text-slate-800 dark:text-slate-50 my-8">
            Below is why you should join the server
          </h1>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 my-6">
            Access to a community of like-minded individuals
          </h2>
          <p className="mb-4">
            Joining our Discord server allows you to connect with other people
            who have a passion for programming, which can be a great way to make
            friends and build connections with others in the field. I
            Christopher, will continue to contribute and provide help to people
            who need it on the server.
          </p>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 my-6">
            Help with coding problems
          </h2>
          <p className="mb-4">
            Our Discord server have channels dedicated to helping members with
            specific programming problems. This can be a great resource when{" "}
            {"you're"} stuck on a particular issue and need some guidance.
          </p>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 my-6">
            Learning opportunities
          </h2>
          <p className="mb-4">
            Our Discord server host coding challenges, workshops, and other
            educational events that can help you improve your skills and learn
            new programming languages and technologies.
          </p>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 my-6">
            Job opportunities
          </h2>
          <p className="mb-4">
            Our Discord server also have a channel where members can post job
            listings or ask for help finding work.
          </p>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 my-6">
            Stay updated with latest technology
          </h2>
          <p className="mb-4">
            Our Discord server also have channels where members can share the
            latest development news and programming trends, which can help you
            stay up to date with the latest advancements in the field.
          </p>
        </div>
      </div>
    </>
  );
}

export default Discord;
