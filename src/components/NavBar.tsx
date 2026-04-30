import { NavLink } from "react-router-dom";
import { Network, Info, Gamepad2, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const links = [
  { to: "/game", label: "GAME", icon: Gamepad2 },
  { to: "/map", label: "MAP", icon: Network },
  { to: "/intro", label: "STORY", icon: Info },
  { to: "/about", label: "ABOUT", icon: Info },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="glass-panel rounded-lg px-4 py-3 flex items-center justify-between gap-4 flex-1 relative z-50">
      {/* Logo */}
      <a
        href="/"
        className="text-display text-xs sm:text-sm tracking-widest text-primary font-semibold glow-text-cyan whitespace-nowrap"
      >
        INSIDE THE PING
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-3 py-2 rounded-md font-display text-xs tracking-widest transition-all",
                isActive
                  ? "neon-border-cyan text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 t-2 bg-black/70 backdrop-blur-3xl  rounded-lg p-2 flex flex-col gap-1 z-50 md:hidden">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex z-50 items-center gap-2 px-4 py-3 rounded-md font-display text-xs tracking-widest  transition-all",
                  isActive
                    ? "neon-border-cyan text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;