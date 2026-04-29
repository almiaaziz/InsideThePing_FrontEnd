import { NavLink } from "react-router-dom";
import { Network, Info, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/game", label: "GAME", icon: Gamepad2 },
  { to: "/map", label: "LAYER MAP", icon: Network },
  { to: "/intro", label: "STORY ", icon: Info },
  { to: "/about", label: "ABOUT", icon: Info },
];

const NavBar = () => {
  return (
    <nav className="glass-panel rounded-lg px-6 py-3 flex items-center justify-between gap-6 flex-1">
      <a href="/" className="text-display text-sm tracking-widest text-primary font-semibold glow-text-cyan">
        INSIDE THE PING
      </a>
      <div className="flex items-center gap-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-4 py-2 rounded-md font-display text-xs tracking-widest transition-all",
                isActive
                  ? "neon-border-cyan text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5",
              )
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
