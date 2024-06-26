"use client";
// import Link from "next/link";
import { ButtonDownload } from "./components/ui";
// import { motion, AnimatePresence } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import ThreeDFondo from "./components/ThreeDFondo";

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

export default function Home() {
  return (
    <>
      {/* <ThreeDFondo /> */}
      <AnimatePresence>
        <main className="flex h-full justify-center">
          <motion.div
            // initial={{ opacity: 0, y: 15 }}
            // animate={{ opacity: 1, y: 0 }}
            // exist={{ opacity: 0, y: 15 }}
            // transition={{ delay: 0.25 }}
            variants={variants}
            initial="hidden"
            animate="show"
            className="flex flex-col text-center justify-center items-center space-y-6 text-white md:text-left md:items-start "
          >
            <motion.h2
              variants={animation}
              className="w-full text-3xl md:text-5xl"
            >
              I'm Front-end developer from Argentina, Jujuy,{" "}
            </motion.h2>

            <motion.h3
              variants={animation}
              className="w-full text-[14px] md:text-[16px] "
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              expedita.
            </motion.h3>
            <motion.div
              variants={animation}
              className="md:justify-start animate-bounce animate-infinite animate-ease-out"
            >

              <ButtonDownload >
                <a
                  href="/cv/PabloMartinez-CV.pdf"
                  download="CV-PabloMartinez.pdf"
                  // className="z-10 relative"
                >
                  HIRE ME
                </a>
              </ButtonDownload>
              
            </motion.div>
          </motion.div>
        </main>
      </AnimatePresence>
    </>
  );
}
