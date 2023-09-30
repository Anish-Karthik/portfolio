"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillCard from "../card/SkillCard";
import { 
  css, html, 
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  git, docker, 
  python,
  cpp,
  c,
  java,
  flask,
  pytorch,
  keras, 
} from "@/public/assets";

type Skill = {
  name: string,
  icon: any,
  level: number
}
const skills: Skill[] = [
  {
    name: 'HTML',
    icon: html,
    level: 9
  },  
  {
    name: 'CSS',
    icon: css,
    level: 8
  },
  {
    name: 'Javascript',
    icon: javascript,
    level: 9
  },
  {
    name: 'Typescript',
    icon: typescript,
    level: 8
  },
  {
    name: 'ReactJS',
    icon: reactjs,
    level: 8
  },
  {
    name: 'Redux',
    icon: redux,
    level: 5
  },
  {
    name: 'NodeJS',
    icon: nodejs,
    level: 9
  },
  {
    name: 'MongoDB',
    icon: mongodb,
    level: 9
  },
  {
    name: 'Git',
    icon: git,
    level: 8
  },
  {
    name: 'Docker',
    icon: docker,
    level: 6
  },
  {
    name: 'TailwindCSS',
    icon: tailwind,
    level: 6
  },
  {
    name: 'Python',
    icon: python,
    level: 9
  },
  {
    name: 'C',
    icon: c,
    level: 9
  },
  {
    name: 'C++',
    icon: cpp,
    level: 6
  },
  {
    name: 'Java',
    icon: java,
    level: 6
  },
  {
    name: 'Flask',
    icon: flask,
    level: 4
  },
  {
    name: 'Pytorch',
    icon: pytorch,
    level: 3
  },
  {
    name: 'Keras',
    icon: keras,
    level: 3
  }
]

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="skills">
      <h2 className="pt-8 text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 md:gap-12">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <SkillCard
              key={index}
              name={skill.name}
              level={skill.level}
              imgUrl={skill.icon}
            />
          </motion.li>
        ))}
      </ul>
      
    </section>
  )
}

export default SkillsSection