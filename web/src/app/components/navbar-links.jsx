"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Skill", href: "/skill" },
  { name: "Projects", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navlinks() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {links.map((link) => {
        // si uso ico
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-start uppercase gap-2 rounded-md text-terciary p-3 active:text-secondary focus:text-secondary text-md font-medium hover:text-secondary md:flex-none md:justify-center md:p-2 md:px-3",
              {
                " text-secondary hover:text-secondary transition ease-in-out delay-150":
                  pathname === link.href,
              }
            )}
          >
            {/* <p className="transition-transform duration-500"> */}
            {pathname === link.href ? `<${link.name}/>` : link.name}
            {/* </p> */}
          </Link>
        );
      })}
    </>
  );
}


// version con ICO 

      // {
      //   links.map((link) => {
      //     // si uso ico
      //     // const LinkIcon = link.icon;
      //     return (
      //       <Link
      //         key={link.name}
      //         href={link.href}
      //         className={clsx(
      //           "flex h-[48px] grow items-center justify-start uppercase gap-2 rounded-md text-terciary p-3 active:text-secondary focus:text-secondary text-md font-medium hover:text-secondary md:flex-none md:justify-center md:p-2 md:px-3",
      //           {
      //             " text-secondary hover:text-secondary transition ease-in-out delay-150":
      //               pathname === link.href,
      //           }
      //         )}
      //       >
      //         {/* <p className="transition-transform duration-500"> */}
      //         {pathname === link.href ? `<${link.name}/>` : link.name}
      //         {/* </p> */}
      //       </Link>
      //     );
      //   });
      // }
      