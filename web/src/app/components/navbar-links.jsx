"use client";
import { motion } from "framer-motion";
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
            className={
              "flex h-[48px] items-center justify-start uppercase rounded-md text-terciary transition-colors delay-150 text-md font-medium  md:flex-none md:justify-center md:p-2 md:px-3"
            }
          >
            <motion.p
              whileHover={{ scale: 1.1 }}
              className={`${link.href === pathname ? "text-secondary transition ease-in-out delay-150" : " "}`}
            >
              {pathname === link.href ? `<${link.name}/>` : link.name}
            </motion.p>
          </Link>
        );
      })}
    </>
  );
}
