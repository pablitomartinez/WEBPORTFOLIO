'use client'
import React, { useState } from "react";
import { sendContactForm } from "../lib/api";


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
    <div>
      <h2 className=" text-center font-medium text-2xl ">
        Enviame un mensaje, estare encantado de leerlos
      </h2>
      <section className="">
        <div className=" items-center px-5 py-2 lg:px-20">
          <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div className="mt-2">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  {/* EMAIL INPUT  */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={values.email}
                        autoComplete="email"
                        required=""
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  {/* ASUNTO INPUT  */}
                  <div className="space-y-1">
                    <label
                      htmlFor="asunto"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Asunto{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="asunto"
                        name="asunto"
                        onChange={handleChange}
                        value={values.asunto}
                        type="text"
                        autoComplete="current-password"
                        required=""
                        placeholder="Asunto"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  {/* MENSAJE INPUT  */}
                  <div className="space-y-1">
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Asunto{" "}
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="mensaje"
                        rows={5}
                        name="mensaje"
                        onChange={handleChange}
                        value={values.mensaje}
                        type="text"
                        autoComplete="current-password"
                        required=""
                        placeholder="Mensaje"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  {/* BOTON ENVIAR  */}
                  <div>
                    <button
                      type="submit"
                      onClick={onSubmit}
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Enviar mensaje
                    </button>
                  </div>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
