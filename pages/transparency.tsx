import React from "react";
import AppHead from "components/app-head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <AppHead pageTitle="Privacy Policy | CAS" pageType={"website"} />
      <div className="mx-8 md:max-w-2xl md:mx-auto">
        <h2
          id="privacy-policy"
          className="text-2xl text-slate-800 dark:text-slate-100 my-6"
        >
          Privacy policy
        </h2>
        <p className="mb-4 text-lg">
          This Privacy Policy explains how I collect, use, and share personal
          information when you use my website christophersesugh.com and the
          services offered on it.
        </p>
        <h3 className="text-xl text-slate-600 dark:text-slate-300 my-4">
          Collection of Personal Information
        </h3>
        <p className="mb-4 text-lg">
          I collect personal information from you when you sign up for our
          newsletter or create an account on my website. This personal
          information include your email address.
        </p>
        <h3 className="text-xl text-slate-600 dark:text-slate-300 my-4">
          Use of Personal Information
        </h3>
        <p className="mb-4 text-lg">
          The personal information we collect from you may be used for a variety
          of purposes, including:
        </p>
        <ul className="privacy-policy">
          <li>Sending you our newsletter or promotional materials</li>
          <li>Personalizing your experience on my website</li>
          <li>Improving the content and functionality of our website</li>
          <li>Contacting you in response to your inquiries</li>
          <li>
            Conducting research and analysis in order to improve our services
          </li>
        </ul>
        <h3 className="text-xl text-slate-600 dark:text-slate-300 my-4">
          Sharing of Personal Information
        </h3>
        <p className="mb-4 text-lg">
          I will ensure your information is private, and will not share it with
          anyone or organization.
        </p>
        <h3 className="text-xl text-slate-600 dark:text-slate-300 my-4">
          Security of Personal Information
        </h3>
        <p className="mb-4 text-lg">
          I take the security of your personal information seriously. I use a
          variety of security measures, including encryption, firewalls, and
          secure servers, to protect your personal information from unauthorized
          access, use, or disclosure. However, please be aware that no method of
          transmission over the internet, or method of electronic storage, is
          100% secure. Therefore, while I strive to use commercially acceptable
          means to protect your personal information, I cannot guarantee its
          absolute security.
        </p>
        <h3 className="text-xl text-slate-600 dark:text-slate-300 my-4">
          Changes to this Privacy Policy
        </h3>
        <p className="mb-4 text-lg">
          I may update this Privacy Policy from time to time in order to reflect
          changes to our privacy practices. I will notify you of any material
          changes to this Privacy Policy by posting the new Privacy Policy on my
          website or by sending you an email.
        </p>
        <h3 className="text-xl text-slate-600 dark:text-slate-300 my-4">
          Contact Me
        </h3>
        <p className="mb-4 text-lg">
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please visit my{" "}
          <Link href="/contact" className="underline">
            contact page
          </Link>{" "}
          to contact me.
        </p>
        <h2
          id="mission"
          className="text-2xl text-slate-800 dark:text-slate-100 my-6"
        >
          Mission
        </h2>
        <p className="mb-4 text-lg">
          To use my skills as a software engineer to create impactful and
          high-quality software that positively impacts the world, while also
          sharing my knowledge and experience with others through teaching and
          mentorship.
        </p>
        <h2
          id="terms-of-use"
          className="text-2xl text-slate-800 dark:text-slate-100 my-6"
        >
          Terms
        </h2>
        <p className="mb-4 text-lg">
          The content on the Website is for informational purposes only and is
          not intended to be a substitute for professional advice, diagnosis, or
          treatment. I will continue to keep things going and try to preserve
          your data.
        </p>
      </div>
    </>
  );
}
