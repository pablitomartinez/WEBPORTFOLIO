"use client";
// import "./animatedCss.module.css"; // Importa tu archivo de estilos aquí
import Image from "next/image";
import { ButtonSend } from "../components/ui";
import { motion } from "framer-motion";
import Pagination from "../components/pagination";

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

export default function Work() {
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className={`flex flex-col w-full md:h-full space-y-4 md:space-y-8 xl:space-x-4 justify-items-center xl:flex-row items-center md:justify-between text-terciary`}
      >
        {/* izquierda  */}
        <div className=" xl:w-1/2  space-y-4 md:space-y-5">
          <motion.h2
            variants={animation}
            className="text-[32px] md:text-[44px]"
          >
            Titulo del Proyecto
          </motion.h2>
          <motion.p variants={animation} className="text-[12px] md:text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            aliquid dolor amet rerum ipsum ullam quaerat expedita, suscipit,
            soluta quibusda.
          </motion.p>
          {/* etiquetas  */}
          <motion.div
            variants={animation}
            className="flex flex-row space-x-5 text-[13px] md:text-[15px]"
          >
            <span>React</span>
            <span>Tailwind</span>
            <span>Node</span>
          </motion.div>
          {/* BOTONES  */}
          <motion.div
            variants={animation}
            className="flex space-y-2 md:space-y-0 flex-col md:flex-row  md:justify-start md:space-x-2"
          >
            <ButtonSend>DISCOVER</ButtonSend>
            <ButtonSend>VIEW CODE</ButtonSend>
          </motion.div>
        </div>
        {/* -----------------------  */}
        {/* derecha  */}
        <motion.div
          variants={animation}
          className="xl:w-1/2 flex justify-center object-cover"
        >
          <Image
            src="/project.png"
            height={400}
            width={400}
            alt="image-project"
          ></Image>
        </motion.div>
      </motion.div>
      <Pagination />
    </>
  );
}
