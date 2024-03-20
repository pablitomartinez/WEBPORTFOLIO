"use client";
import React, { useState } from "react";
import { sendContactForm } from "../lib/api";
import { Input, Label, Textarea, ButtonSend } from "@/app/components/ui";

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
    <div className="flex flex-col h-full md:justify-center">
      <h2 className="text-center text-[32px] pb-6 text-terciary">
        Escribime para estar en contacto
      </h2>

      <section className="">
        <div>
          <div className="flex flex-col my-6 transition duration-500 ease-in-out transform rounded-lg md:mt-0">
            <div className="">
              <form action="#" method="POST" className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:space-x-2 md:justify-center ">
                  {/* REEUTILIZABLE EMAIL  */}
                  <div className="md:w-full">
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
                  </div>

                  {/* REEUTILIZABLE ASUNTO  */}
                  <div className="md:w-full">
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
                  </div>
                </div>

                {/* REEUTILIZABLE MENSAJE */}
                <div>
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    type="mensaje"
                    onChange={handleChange}
                    value={values.mensaje}
                    placeholder="Your Message"
                  />
                </div>
                {/* -----------------------  */}
                {/* BOTON ENVIAR  */}
                <div>
                  <ButtonSend type="submit" onClick={onSubmit}>
                    Send Message
                  </ButtonSend>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
