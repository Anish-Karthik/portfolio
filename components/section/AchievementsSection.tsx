"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import ProjectTag from "@/components/ProjectTag";
import { motion, useInView } from "framer-motion";
import AchievementCard from "@/components/card/AchievementCard";

const tags= ["Symposium", "Hackathon", "Competition", "Other"];
export type TAchievement = {
  title: string;
  description: string;
  event: string;
  venue?: string;
  link: string;
  tag: string[];
  date: string;
  skills: string[];
};

const achievementsList: TAchievement[] = [
  {
    title: "1st in Duo Datathon",
    skills: ["SQL", "Database"],
    event: "Kurukshetra'23",
    venue: "Anna University Chennai",
    description: "Duo Datathon consisting of one round of Query writing and one round of Database Design.",
    link: "https://www.linkedin.com/posts/anish-karthik_sqlchampions-databaseexperts-datathonvictory-activity-7097619678688153600-jhY9?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "18-Apr-2023 to 21-Apr-2023",
  },     
  {
    title: "1st in Duo Coder's Den",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Kreta'23",
    venue: "Thiagarajar College of Engineering",
    description: "Duo Coding Competition consisting of two rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_symposium-coding-problemsolving-activity-7053751743045652480-_Nr1?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "17-Apr-2023",
  },
  {
    title: "1st in Trio Coding Competition",
    skills: ["Coding", "DSA", "Problem Solving", "SQL"],
    event: "Top Coders'23",
    venue: "Sudharsan Engineering College",
    description: "Trio Coding Competition consisting of two rounds of coding and one round of SQL.",
    link: "https://www.linkedin.com/posts/anish-karthik_coding-dsa-problemsolving-activity-7043122146704822272-Ca_c?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "18-Mar-2023",
  }, 
  {
    title: "1st in Trio Coding Competition",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "YUGAM'23",
    venue: "Kumaraguru College of Technology",
    description: "Trio Coding Competition consisting of Three rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_coding-dsa-problemsolving-activity-7041094834392092672-JyBU?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "03-Mar-2023 to 04-Mar-2023",
  }, 
  {
    title: "2nd in Duo Coding Competition",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "YUGAM'23",
    venue: "Kumaraguru College of Technology",
    description: "Duo Coding Competition consisting of Three rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_coding-dsa-problemsolving-activity-7041094834392092672-JyBU?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "03-Mar-2023 to 04-Mar-2023",
  },
  {
    title: "2nd in Duo Codigo",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Threads'23",
    venue: "Sona College of Technology",
    description: "Duo Coding Competition consisting of two rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_symposium-dsa-coding-activity-7035967339409903616-vG3T?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "25-Feb-2023",
  }, 
  {
    title: "1st in Duo Tech Quiz",
    skills: ["Tech", "Quiz"],
    event: "Gyan Mitra'23",
    venue: "Mepco Schlenk Engineering College",
    description: "Tech Quiz consisting of two rounds of Tech Quiz.",
    link: "https://www.linkedin.com/posts/anish-karthik_symposium-activity-7032756345053335552-Xn53?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "18-Feb-2023",
  },
  {
    title: "2nd in Solo Codera",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Invente'22",
    venue: "SSN College of Engineering",
    description: "Solo Coding Competition consisting of two rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_competition-competitiveprogramming-symposium-activity-7011286472116891648-LML6?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium","Competition"],
    date: "02-Dec-2022",
  },
  {
    title: "2nd in Solo Reverse Gear",
    skills: ["Debugging", "Problem Solving", "C++", "Python"],
    event: "Invente'22",
    venue: "SSN College of Engineering",
    description: "Solo Debugging Competition consisting of one round of debugging and quiz followed by one round of reverse Engineering.",
    link: "https://www.linkedin.com/posts/anish-karthik_competition-symposium2022-debugging-activity-7011287008719372289-xcDF?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium","Competition"],
    date: "02-Dec-2022",
  }, 
];

const AchievementsSection = () => {
  const [tag, setTag] = useState("Symposium");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };
  const filteredAchievements = achievementsList.filter((achievement) =>
    achievement.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="achievements">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {tags.map((tagi, ind) => (
          <ProjectTag
            key={ind}
            onClick={handleTagChange}
            name={tagi}
            isSelected={tag === tagi}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredAchievements.map((achievement, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <AchievementCard
              key={index}
              title={achievement.title}
              description={achievement.description}
              event={achievement.event}
              venue={achievement.venue}
              link={achievement.link}
              date={achievement.date}
              skills={achievement.skills}
              tag={achievement.tag}
            />
          </motion.li>
        ))}
      </ul>
      
    </section>
  );
};

export default AchievementsSection;
