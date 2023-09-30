"use client";
import React, { useRef, useState } from "react";
import ProjectTag from "@/components/ProjectTag";
import { motion, useInView } from "framer-motion";
import AchievementCard from "@/components/card/AchievementCard";

const tags= [ "Coding", "Symposium", "Certifications", "Hackathon"];
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
    title: "1st in Datathon (Duo)",
    skills: ["SQL", "Database"],
    event: "Kurukshetra'23",
    venue: "Anna University Chennai",
    description: "Duo Datathon consisting of one round of Query writing and one round of Database Design.",
    link: "https://www.linkedin.com/posts/anish-karthik_sqlchampions-databaseexperts-datathonvictory-activity-7097619678688153600-jhY9?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "18-Apr-2023 to 21-Apr-2023",
  },     
  {
    title: "1st in Coder's Den (Duo)",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Kreta'23",
    venue: "Thiagarajar College of Engineering",
    description: "Duo Coding Competition consisting of two rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_symposium-coding-problemsolving-activity-7053751743045652480-_Nr1?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "17-Apr-2023",
  },
  {
    title: "1st in Top Coders (Trio)",
    skills: ["Coding", "DSA", "Problem Solving", "SQL"],
    event: "Top Coders'23",
    venue: "Sudharsan Engineering College",
    description: "Trio Coding Competition consisting of two rounds of coding and one round of SQL.",
    link: "https://www.linkedin.com/posts/anish-karthik_coding-dsa-problemsolving-activity-7043122146704822272-Ca_c?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "18-Mar-2023",
  }, 
  {
    title: "1st in Coding Premier League (Trio)",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "YUGAM'23",
    venue: "Kumaraguru College of Technology",
    description: "Trio Coding Competition consisting of Three rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_coding-dsa-problemsolving-activity-7041094834392092672-JyBU?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "03-Mar-2023 to 04-Mar-2023",
  }, 
  {
    title: "2nd in Code2Duo (Duo)",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "YUGAM'23",
    venue: "Kumaraguru College of Technology",
    description: "Duo Coding Competition consisting of Three rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_coding-dsa-problemsolving-activity-7041094834392092672-JyBU?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "03-Mar-2023 to 04-Mar-2023",
  },
  {
    title: "2nd in Codigo (Duo)",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Threads'23",
    venue: "Sona College of Technology",
    description: "Duo Coding Competition consisting of two rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_symposium-dsa-coding-activity-7035967339409903616-vG3T?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "25-Feb-2023",
  }, 
  {
    title: "1st in Tech Quiz (Duo)",
    skills: ["Tech", "Quiz"],
    event: "Gyan Mitra'23",
    venue: "Mepco Schlenk Engineering College",
    description: "Tech Quiz consisting of two rounds of Tech Quiz.",
    link: "https://www.linkedin.com/posts/anish-karthik_symposium-activity-7032756345053335552-Xn53?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium"],
    date: "18-Feb-2023",
  },
  {
    title: "2nd in Codera (Solo)",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Invente'22",
    venue: "SSN College of Engineering",
    description: "Solo Coding Competition consisting of two rounds of coding.",
    link: "https://www.linkedin.com/posts/anish-karthik_competition-competitiveprogramming-symposium-activity-7011286472116891648-LML6?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium","Competition"],
    date: "02-Dec-2022",
  },
  {
    title: "2nd in Reverse Gear (Solo)",
    skills: ["Debugging", "Problem Solving", "C++", "Python"],
    event: "Invente'22",
    venue: "SSN College of Engineering",
    description: "Solo Debugging Competition consisting of one round of debugging and quiz followed by one round of reverse Engineering.",
    link: "https://www.linkedin.com/posts/anish-karthik_competition-symposium2022-debugging-activity-7011287008719372289-xcDF?utm_source=share&utm_medium=member_desktop",
    tag: ["Symposium","Competition"],
    date: "02-Dec-2022",
  },
  {
    title: "Joy of Computing using Python",
    skills: ["Python"],
    event: "NPTEL",
    venue: "IIT Madras",
    description: "Top 1% Elite Gold badge Joy of Computing using Python",
    link: "https://www.linkedin.com/posts/anish-karthik_top-nptel-pythonprogramming-activity-7009905729037889536-DjjW?utm_source=share&utm_medium=member_desktop",
    tag: ["Certifications"],
    date: "Jul-Oct 2022",
  },
  {
    title: "Problem Solving Through Programming in C",
    skills: ["C"],
    event: "NPTEL",
    venue: "IIT Kharagpur",
    description: "Elite Silver badge Problem Solving Through Programming in C",
    link: "https://www.linkedin.com/posts/anish-karthik_certificateofcompletion-nptel-cprogramming-activity-7009174502005772288-MaBN?utm_source=share&utm_medium=member_desktop",
    tag: ["Certifications"],
    date: "Jul-Oct 2022",
  },
  {
    title: "Data Base Management System",
    skills: ["SQL"],
    event: "NPTEL",
    venue: "IIT Kharagpur",
    description: "Top 1% Elite Silver badge Data Base Management System",
    link: "https://www.linkedin.com/posts/anish-karthik_nptel-databasemanagementsystem-sql-activity-7063540144347222016-IpAV?utm_source=share&utm_medium=member_desktop",
    tag: ["Certifications"],
    date: "Jan-Mar 2023",
  }, 
  {
    title: "Programming, Data Structures, and Algorithms",
    skills: ["DSA"],
    event: "NPTEL",
    venue: "IIT Madras",
    description: "Top 1% Elite Gold badge Programming, Data Structures, and Algorithms",
    link: "https://www.linkedin.com/posts/anish-karthik_nptel-programming-datastructures-activity-7065359761919115264-8CQs?utm_source=share&utm_medium=member_desktop",
    tag: ["Certifications"],
    date: "Jan-Mar 2023",
  },
  {
    title: "Programming In Java",
    skills: ["Java"],
    event: "NPTEL",
    venue: "IIT Kharagpur",
    description: "Top 1% Elite Gold badge Programming In Java",
    link: "https://www.linkedin.com/posts/anish-karthik_nptel-programming-java-activity-7070760096527503360-_Aqp?utm_source=share&utm_medium=member_desktop",
    tag: ["Certifications"],
    date: "Jan-Mar 2023",
  },
  {
    title: "Qualified in Kavach'23 Hackathon",
    skills: ["Web", "Cybersecurity", "Hackathon"],
    event: "Kavach Hackathon",
    venue: "PSNA College of Engineering and Technology",
    description: "Qualified Intra College Kavach'23 Hackathon.",
    link: "https://www.linkedin.com/posts/anish-karthik_hackathon-cybersecurity-activity-7011287557671722496-4QZ6?utm_source=share&utm_medium=member_desktop",
    tag: ["Hackathon"],
    date: "May-Jul-2023",
  },
  {
    title: "Qualified in SIH'23 Hackathon",
    skills: ["Web", "Cybersecurity", "Hackathon"],
    event: "SIH'23 Hackathon",
    venue: "PSNA College of Engineering and Technology",
    description: "Qualified Intra College SIH'23 Hackathon.",
    link: "https://www.linkedin.com/posts/anish-karthik_hackathon-cybersecurity-activity-7011287557671722496-4QZ6?utm_source=share&utm_medium=member_desktop",
    tag: ["Hackathon"],
    date: "Sep-Nov 2023",
  },
  {
    title: "Leetcode Knight (2,016)",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Leetcode",
    description: "Leetcode Knight (2,016) and solved 485+ problems",
    link: "https://leetcode.com/Anish-Karthik",
    tag: ["Coding"],
    date: "Oct 2022 - Present",
  },
  {
    title: "Codechef 3 Star (1,763)",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Codechef",
    description: "Codechef 3 Star (1,763) and solved 485+ problems. Due 2-3 month codechef had no rated contests I Couldn't able to raise star rating.",
    link: "https://www.codechef.com/users/psna_28",
    tag: ["Coding"],
    date: "Oct 2022 - Present",
  },
  {
    title: "Geeksforgeeks Rank 2",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Geeksforgeeks",
    description: "Geeksforgeeks College Rank 2 and solved 500+ problems",
    link: "https://auth.geeksforgeeks.org/user/anishkarthik54321",
    tag: ["Coding"],
    date: "Oct 2022 - Present",
  },
  {
    title: "Google Farewell Coding Rank 1108",
    skills: ["Coding", "DSA", "Problem Solving"],
    event: "Google",
    description: "Google Farewell Coding Rank 1108, 1st in College.",
    link: "https://www.linkedin.com/posts/anish-karthik_googlefarewellcontest-codingcontests-techcommunity-activity-7055582517029982208-RcCu?utm_source=share&utm_medium=member_desktop",
    tag: ["Coding"],
    date: "15-Apr-2023",
  },  
];

const AchievementsSection = () => {
  const [tag, setTag] = useState("Coding");
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
      <h2 className="pt-4 text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Achievements
      </h2>
      <div className="text-white flex flex-row justify-center flex-wrap items-center gap-2 py-6">
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
            transition={{ duration: 0.3, delay: index * 0.2 }}
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
