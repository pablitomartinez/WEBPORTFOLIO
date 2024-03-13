import Link from "next/link";
import Navlinks from "./navbar-links";


export default function Navbar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* logo  */}
      <Link
        href="/"
        className=" mb-2 flex justify-start md:justify-center pl-6 p-4"
      >
        <div className="w-32 text-secondary justify-center md:w-40">&lt;pabloMartinez/&gt;</div>
      </Link>
      {/* items de navbar  */}
      <div className="flex flex-row text-center justify-around space-x-2 text-lg md:grow md:flex-col md:justify-center md:text-2xl md:items-center  md:space-x-0 md:space-y-2">
        <Navlinks />
      </div>
    </div>
  );
}
