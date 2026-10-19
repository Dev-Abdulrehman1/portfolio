import { NavLink } from "react-router-dom";
import { profile } from "../data/portfolio";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24">
      <nav className="liquid-glass-strong relative mt-5 mx-auto max-w-5xl rounded-full px-5 py-3 flex items-center justify-center">
        <div className="flex items-center gap-6 md:gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-body text-xs uppercase tracking-widest transition-colors ${
                  isActive ? "text-white" : "text-white/50 hover:text-white/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hidden sm:block absolute right-5 top-1/2 -translate-y-1/2 bg-white text-black rounded-full px-4 py-1.5 text-xs font-medium font-body hover:bg-white/90 transition-colors"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
