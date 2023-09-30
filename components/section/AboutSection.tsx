"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";


const AboutSection = () => {

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a tech enthusiast driven by an unyielding passion for personal growth and technology. My journey is marked by leadership roles where I&apos;ve honed my teamwork, project management, and collaboration skills. My main interests lie in Web Development, Artificial Intelligence, and Cybersecurity, and I&apos;m a perpetual learner always exploring emerging technologies. As a leader, my goal is to inspire excellence in my teams. My commitment to AI and security ensures project quality, while my knack for problem-solving results in efficient code.
            <br /> <br />
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications..
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
