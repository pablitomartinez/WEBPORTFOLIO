import { ButtonDownload } from "./components/ui";

export default function Home() {
  return (
    <main className="flex h-full">
      <div className="flex flex-col text-center justify-center items-center space-y-6 text-white md:text-left md:items-start ">
        <h2 className="w-full text-3xl md:text-5xl">
          I'm Front-end developer from Argentina, Jujuy,{" "}
        </h2>

        <h3 className="w-full text-[14px] md:text-[16px] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          expedita.
        </h3>
        <div className="flex md:justify-start">
          <ButtonDownload>HIRE ME</ButtonDownload>
        </div>
      </div>
    </main>
  );
}
