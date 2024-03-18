import React from "react";

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

export default function Skill() {
  return (
    <div className="flex flex-row space-x-4 w-full">
      {/* derecha */}
      <div className="w-[70%] text-terciary  ">
        <p className="text-[16px] w-[80%] mb-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum
          modi iusto tempore rem. Sequi repellat deserunt recusandae commodi
          dolor.
        </p>
        {/* lista de lenguajes  */}
        <div className="space-y-6">
          {/* item  */}
          <div>
            <h3>Bootcamp Henry</h3>
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
          </div>
          {/* item  */}
          <div>
            <h3>Bootcamp Dise;o UX/UI</h3>
          </div>{" "}
          {/* item  */}
          <div>
            <h3>Bootcamp Dise;o UX/UI</h3>
          </div>
        </div>
      </div>
      {/* ----------------------  */}
      {/* izquierda  */}
      <div className="w-[29%] space-y-6">
        {skills.map((skill) => {
          return <p className="text-[24px] text-secondary ">{skill}</p>;
        })}
      </div>
    </div>
  );
}
