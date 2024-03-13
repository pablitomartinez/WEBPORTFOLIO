import About from "./about/page";
import Contact from "./contact/page";
import Skill from "./skill/page";
import Work from "./work/page";

export default function Home() {
  return (
    <main className="flex h-full" >
      <div className="flex flex-col text-center justify-center items-center space-y-4 text-white md:text-start">
        <h2 className="text-3xl md:text-5xl" >I'm Front-end developer from Argentina, Jujuy, </h2>
        <p className="text-[14px] md:text-[16px]" >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          expedita.
        </p>
        <button>HIRE ME</button>
      </div>
    </main>
  );
}
