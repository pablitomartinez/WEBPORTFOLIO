'use client';
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

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

export default function About() {
  return (
    <div className="flex h-full items-center">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="flex flex-col text-center justify-center items-center space-y-6 text-white md:text-left md:justify-items-center md:flex-row"
      >
        <div className="space-y-5">
          <motion.h2
            variants={animation}
            className="w-full text-3xl md:text-5xl "
          >
            Hi, I'm Pablo Martinez from Argentina, Jujuy,{" "}
          </motion.h2>

          <motion.h3
            variants={animation}
            className="w-full text-[14px] md:text-[16px] "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime quasi aliquam ratione quas deleniti! Aliquam, nesciunt quasi
            culpa accusantium ducimus iste id sint ratione aperiam ab modi
            inventore in obcaecati.
          </motion.h3>
          <motion.div
            variants={animation}
            className="flex items-center justify-center md:justify-start object-cover "
          >
            {/* icono DOWNLOAD  */}
            <div className="">
              <svg
                className="w-5 h-5 mr-2 text-secondary"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
            </div>
            {/* ------  */}
            <button>DOWNLOAD CV</button>
          </motion.div>
        </div>
        {/* FOTO  */}
        <motion.div
          variants={animation}
          className="flex flex-none justify-center "
        >
          <Image
            className=" rounded-full"
            width={300}
            height={300}
            src="/avatar.png"
            alt="foto-perfil"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
