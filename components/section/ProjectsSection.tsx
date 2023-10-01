"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "@/components/card/ProjectCard";
import ProjectTag from "@/components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A Next.js React personal portfolio website.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anish-Karthik/portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Prakriti Website",
    description: "An Ayurvedic website for a client to know their body type.",
    image: "https://user-images.githubusercontent.com/111771214/271544842-7f12dd04-2b6c-4a10-882c-0bd1aa61afa2.png",
    tag: ["All", "Web", "AI", "Original"],
    gitUrl: "https://github.com/Anish-Karthik/Prakriti",
    previewUrl: "https://prakriti.code-o-sapiens.vercel.app/",
  },
  {
    id: 3,
    title: "Threads Clone Application",
    description: "Threads with more feature and better UI. Better desktop UI.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Genius AI-SaaS Website",
    description: "A platform where you can access various AI at one place",
    image: "https://user-images.githubusercontent.com/111771214/261654709-5f89159d-adfc-4aec-954c-3db275db6b33.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "https://github.com/anish-karthik/genius",
    previewUrl: "https://genius.anish-karthik.vercel.app/",
  },
  {
    id: 5,
    title: "Promtopia Website",
    description: "An website for users to share thier tailored prompts that can be used to get specific feedback from AI.",
    image: "https://user-images.githubusercontent.com/111771214/261360377-6aaee825-9711-4f29-bb71-edf34f4490c1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anish-Karthik/promptopia",
    previewUrl: "https://promptopia.anish-karthik.vercel.app/",
  },
  {
    id: 6,
    title: "Youtube Clone Application",
    description: "Dynamic youtube clone using react and youtube API.",
    image: "https://user-images.githubusercontent.com/111771214/261605158-8b8166cc-f8df-46bb-98cd-e06adc09afbb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anish-Karthik/youtube-clone-dynamic",
    previewUrl: "https://youtube-anish-karthik.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
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
          name="AI"
          isSelected={tag === "AI"}
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
