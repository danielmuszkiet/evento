import Link from "next/link";

const links = [
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

function Footer() {
  return (
    <footer className="mt-auto flex h-16 items-center justify-between border-t border-white/10 px-3 text-xs text-white/30 sm:px-9">
      <small className="text-xs">&copy; 2026 Evento - Portfolio Project</small>
      <ul className="flex gap-3 sm:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
