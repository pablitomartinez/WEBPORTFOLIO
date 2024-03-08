import Link from "next/link";
import Navlinks from "./navbar-links";

export default function Navbar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* logo  */}
      <Link
        href="/"
        className=" mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40 bg-sky-500"
      >
        <div className="w-32 text-white md:w-40">LOGO</div>
      </Link>
      {/* items de navbar  */}
      <div className="flex grow flex-row text-center justify-around space-x-2 md:flex-col md:justify-around  md:space-x-0 md:space-y-2">
        <Navlinks />
      </div>
    </div>
  );
}
