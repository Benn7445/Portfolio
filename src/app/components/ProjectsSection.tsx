"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Forum",
    description: "This forum is considered a private project for a client.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: null,
    previewUrl: "https://gyazo.com/9c0751d08a59b01adb3f7afe583ba88a",
  },
  {
    id: 2,
    title: "License Checker",
    description: "License Checker is a website made to test animations.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benn7445/license",
    previewUrl: "https://license-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "Creation Page",
    description: "This creation page is considered a private project for a client.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: null,
    previewUrl: "https://gyazo.com/6a8a8eba8c0a827a93b50dce4498f2b9",
  },
  {
    id: 4,
    title: "SK Beveren",
    description: "I maintenance the website for football club SK Beveren.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: null,
    previewUrl: "https://www.skbeveren.be/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
