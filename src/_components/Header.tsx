"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

import clsx from "clsx";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/events/all", label: "All Events" },
];

function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-4 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex h-full gap-4 text-sm">
          {links.map(({ href, label }) => (
            <li
              key={href}
              className={clsx(
                "relative flex items-center transition hover:text-white",
                isActive(href) ? "text-white" : "text-white/50",
              )}
            >
              <Link href={href}>{label}</Link>
              {isActive(href) && (
                <motion.div
                  layoutId="header-active-link"
                  className="absolute right-0 bottom-0 left-0 h-1 bg-accent"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
