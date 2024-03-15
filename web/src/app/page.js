import About from "./about/page";
import Contact from "./contact/page";
import Skill from "./skill/page";
import Work from "./work/page";

export default function Home() {
  return (
    <main className="flex h-full">
      <div className="flex flex-col text-center justify-center items-center space-y-6 text-white md:text-left md:justify-items-center ">
        <h2 className="w-full text-3xl md:text-5xl">
          I'm Front-end developer from Argentina, Jujuy,{" "}
        </h2>

        <h3 className="w-full text-[14px] md:text-[16px] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          expedita.
        </h3>
        <div className="w-full">
          <button>HIRE ME</button>
        </div>
      </div>
    </main>
  );
}
