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
    <div className="flex flex-col h-full justify-center">
      <h2 className=" text-center font-medium text-2xl pb-4 text-secondary">
        Enviame un mensaje, estare encantado de leerlos
      </h2>
      {/* separador  */}
      <div className="relative pt-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
      </div>
      <section className="">
        <div className=" items-center px-3 lg:px-20">
          <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform rounded-lg md:mt-0">
            <div className="">
              <div className="">
                <form action="#" method="POST" className="space-y-6">
                  {/* REUTILIZABLES  */}
                  {/* REEUTILIZABLE EMAIL  */}
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Your Email"
                    />
                  </div>

                  {/* REEUTILIZABLE ASUNTO  */}
                  <div>
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="asunto"
                      onChange={handleChange}
                      value={values.asunto}
                      placeholder="Subject"
                    />
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
                    {/* <button
                      type="submit"
                      onClick={onSubmit}
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Enviar mensaje
                    </button> */}
                    <ButtonSend>Send Message</ButtonSend>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
