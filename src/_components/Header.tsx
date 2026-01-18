import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/events/all", label: "All Events" },
];

function Header() {
  return (
    <header className="flex justify-between h-14 items-center px-4 sm:px-9 border-b border-white/10">
      <Logo />
      <nav>
        <ul className="flex gap-4 text-sm">
          {links.map(({ href, label }) => (
            <li key={href} className="text-white/50 hover:text-white transition">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
