import Image from "next/image";
import { ButtonDownload } from "../components/ui";

export default function Work() {
  return (
    <div className="flex flex-col w-full h-full space-y-4 md:space-y-8 xl:space-x-4 justify-items-center xl:flex-row items-center md:justify-between text-terciary">
      {/* izquierda  */}
      <div className="xl:w-1/2 md:space-y-5 space-y-10">
        <h2 className="text-[44px]">Titulo del Proyecto</h2>
        <p className="text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          aliquid dolor amet rerum ipsum ullam quaerat expedita, suscipit,
          soluta quibusda.
        </p>
        {/* etiquetas  */}
        <div className="flex flex-row space-x-5 text-[15px]">
          <span>React</span>
          <span>Tailwind</span>
          <span>Node</span>
        </div>
        {/* BOTONES  */}
        <div className="flex flex-row  md:flex-col md:justify-center md:space-y-2">
          <ButtonDownload>DISCOVER</ButtonDownload>
          <ButtonDownload>VIEW CODE</ButtonDownload>
        </div>
      </div>
      {/* -----------------------  */}
      {/* derecha  */}
      <div className="xl:w-1/2 flex justify-center object-cover">
        <Image
          src="/project.png"
          height={400}
          width={400}
          alt="image-project"
        ></Image>
      </div>
    </div>
  );
}
