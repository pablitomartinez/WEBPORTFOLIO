'use client';
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Redux",
  "Figma",
  "Typescript",
  "HTML",
  "JS",
  "Node",
  "Sass",
  "SQL",
  "CSS",
  "Desarrollo web",
  "UX/UI",
];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const animation = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skill() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="flex flex-col md:flex-row md:space-x-4 w-full"
    >
      {/* izq */}
      <div className=" w-full md:w-[70%] text-terciary  ">
        <motion.p
          variants={animation}
          className="text-[16px] md:w-[80%] mb-10 "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum
          modi iusto tempore rem. Sequi repellat deserunt recusandae commodi
          dolor.
        </motion.p>
        {/* lista de lenguajes  */}
        <motion.div variants={animation} className="space-y-6 text-[18px] ">
          {/* item  */}
          <div>
            <h3>Bootcamp Henry</h3> 
            <span className="text-[14px] text-secondary" >Javascript, React, Node Js, MySQL, Scrum</span>
          </div>
          {/* item  */}
          <div>
            <h3>Bootcamp Diseño UX/UI</h3>
          </div>
          {/* item  */}
          <div>
            <h3>Bootcamp Dise;o UX/UI</h3>
          </div>
          {/* item  */}
          <div>
            <h3>Bootcamp Dise;o UX/UI</h3>
          </div>
          {/* item  */}
          <div>
            <h3>Bootcamp Dise;o UX/UI</h3>
          </div>
          {/* item  */}
          <div>
            <h3>Bootcamp Dise;o UX/UI</h3>
          </div>{" "}
          {/* item  */}
          <div>
            <h3>Bootcamp Dise;o UX/UI</h3>
          </div>
        </motion.div>
      </div>
      {/* ----------------------  */}
      {/* der  */}
      <div className="w-[29%] space-y-6 pt-0">
        {skills.map((skill, i) => {
          return (
            <motion.p
              variants={animation}
              key={i}
              className="text-[24px] text-secondary "
            >
              {skill}
            </motion.p>
          );
        })}
      </div>
    </motion.div>
  );
}
