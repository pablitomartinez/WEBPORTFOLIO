import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex h-full items-center">
      <div className="flex flex-col text-center justify-center items-center space-y-6 text-white md:text-left md:justify-items-center md:flex-row">
        <div className="space-y-5" >
          <h2 className="w-full text-3xl md:text-5xl ">
            Hi, I'm Pablo Martinez from Argentina, Jujuy,{" "}
          </h2>

          <h3 className="w-full text-[14px] md:text-[16px] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime quasi aliquam ratione quas deleniti! Aliquam, nesciunt quasi
            culpa accusantium ducimus iste id sint ratione aperiam ab modi
            inventore in obcaecati.
          </h3>
          <div className="flex items-center justify-center object-cover ">
            {/* icono DOWNLOAD  */}
            <div className="">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
            </div>
            <button>DOWNLOAD CV</button>
          </div>
        </div>
        {/* FOTO  */}
        <div className="flex flex-none justify-center ">
          <Image
            className=" rounded-full"
            width={300}
            height={300}
            src="/avatar.png"
            alt="foto-perfil"
          />
        </div>
      </div>
    </div>
  );
}
