"use client";
import React, { useState } from "react";
import { sendContactForm } from "../lib/api";
import { Input, Label, Textarea, ButtonSend } from "../components/ui";
import { motion } from "framer-motion";
import ThreeDFondo from "../components/ThreeDFondo";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
      duration: 1,
    },
  },
};

const initValues = { email: "", asunto: "", mensaje: "" };
const initState = { values: initValues };

export default function Contact() {
  const [state, setState] = useState(initState);
  const { values, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    // setState(initState);
    try {
      await sendContactForm(values);
      //  setState(initState)
    } catch (error) {
      // setState((prev) => ({
      //   ...prev,
      //   error: error.message,
      // }));
      console.log(error);
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="flex flex-col h-full md:justify-center"
    >
      <motion.h2
        variants={animation}
        className="text-center text-[25px] lg:text-[44px] pb-6 text-terciary max-w-full mx-auto"
      >
        Quieres trabajar conmigo?
      </motion.h2>

      <section className="">
        <div>
          <div className="flex flex-col my-6 transition duration-500 ease-in-out transform rounded-lg md:mt-0">
            <div className="">
              <form action="#" method="POST" className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:space-x-2 md:justify-center ">
                  {/* REEUTILIZABLE EMAIL  */}
                  <motion.div variants={animation} className="md:w-full">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Your Email"
                    />
                  </motion.div>

                  {/* REEUTILIZABLE ASUNTO  */}
                  <motion.div variants={animation} className="md:w-full">
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="asunto"
                      autoComplete="off"
                      onChange={handleChange}
                      value={values.asunto}
                      placeholder="Subject"
                    />
                  </motion.div>
                </div>

                {/* REEUTILIZABLE MENSAJE */}
                <motion.div variants={animation}>
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    type="mensaje"
                    onChange={handleChange}
                    value={values.mensaje}
                    placeholder="Your Message"
                  />
                </motion.div>
                {/* -----------------------  */}
                {/* BOTON ENVIAR  */}
                <motion.div variants={animation} className="pt-5 flex justify-center items-center">
                  <ButtonSend type="submit" onClick={onSubmit}>
                    {/* <ThreeDFondo />  */}
                    Send Message
                  </ButtonSend>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
        <motion.div
          className="flex flex-col md:flex-row bottom-0 justify-center pt-20 space-x-2  text-[12px] text-terciary text-center mb-8"
          variants={animation}
        >
          <h3 className="mb-1">
            E-MAIL:{" "}
            <span className="text-secondary text-[16px]">
              {" "}
              pablitoemartinez666@gmail.com{" "}
            </span>
          </h3>
          <h3>
            TELEFONO:{" "}
            <span className="text-secondary text-[16px]">+543884597800</span>
          </h3>
        </motion.div>
      </section>
    </motion.div>
  );
}
