"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>JavaScript & TypeScript</li>
        <li>HTML & CSS</li>
        <li>Python</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><Link href="https://www.ap.be/">Artesis Plantijn Hogeschool</Link>, Antwerpen</li>
        <li><Link href="https://www.beveren.be/nl/scholen/gti-beveren">Gemeentelijk Technisch Instituut</Link>, Beveren</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li><Link href="https://www.pv.be/">P&V Group</Link>, Antwerpen</li>
        <li><Link href="https://www.ventigrate.be/">Ventigrate</Link>, Antwerpen</li>
        <li><Link href="https://www.skbeveren.be/">SK Beveren</Link>, Beveren</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white pt-5" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="Ben Verbraecken About Me" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My name is Ben Verbraecken, a passionate web developer based in Beveren, East-Flanders.
            With 6 years of experience, I have a knack for creating interactive and responsive web applications.
            My expertise spans a wide range of languages,
            Java, ReactJS, NextJS, TypeScript, HTML, CSS, Python, and PHP.
            I am always eager to tackle new challenges to expand my knowledge and skills,
            and I am a team player who enjoys collaborating with others to craft amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
