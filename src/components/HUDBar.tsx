import { Zap, Target, Clock, Shield } from "lucide-react";
import { useGameStore } from "../game/store.js";

interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}


const HUDBar = () => {
 const { xp, accuracy, latency, integrity } = useGameStore(
    (state) => state.player
  );

const metrics: Metric[] = [

  { label: "XP", value: `${xp}`, icon: <Zap className="w-4 h-4" />, color: "glow-text-cyan" },
  { label: "ACCURACY", value: `${accuracy}%`, icon: <Target className="w-4 h-4" />, color: "glow-text-green" },
  { label: "LATENCY", value: `${latency}ms`, icon: <Clock className="w-4 h-4" />, color: "glow-text-orange" },
  { label: "INTEGRITY", value: `${integrity}%`, icon: <Shield className="w-4 h-4" />, color: "glow-text-red" },
];

  return (
    <div className="glass-panel rounded-lg px-6 py-3 flex items-center justify-between gap-6">
      <div className="text-display text-sm tracking-widest text-primary font-semibold">
        INSIDE THE PING
      </div>
      <div className="flex items-center gap-8">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <span className={m.color}>{m.icon}</span>
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground tracking-widest font-display">
                {m.label}
              </span>
              <span className={`text-sm font-bold text-mono ${m.color}`}>{m.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HUDBar;
