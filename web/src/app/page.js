"use client";
import Link from "next/link";
import { ButtonDownload } from "./components/ui";
// import { motion, AnimatePresence } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <main className="flex h-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col text-center justify-center items-center space-y-6 text-white md:text-left md:items-start "
          >
            <h2 className="w-full text-3xl md:text-5xl">
              I'm Front-end developer from Argentina, Jujuy,{" "}
            </h2>

            <h3 className="w-full text-[14px] md:text-[16px] ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              expedita.
            </h3>
            <div className="flex md:justify-start">
              <ButtonDownload>
                <Link href="/contact">HIRE ME</Link>
              </ButtonDownload>
            </div>
          </motion.div>
        </main>
      </AnimatePresence>
    </>
  );
}
