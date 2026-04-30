import { Zap, Target, Clock } from "lucide-react";
import { useGameStore } from "../game/store.js";

interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatsBar = () => {
  const { xp, accuracy, latency } = useGameStore((state) => state.stats);

  const metrics: Metric[] = [
    {
      label: "XP",
      value: `${xp}`,
      icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" />,
      color: "glow-text-cyan",
    },
    {
      label: "ACC",
      value: `${accuracy.toFixed(1)}%`,
      icon: <Target className="w-3 h-3 sm:w-4 sm:h-4" />,
      color: "glow-text-green",
    },
    {
      label: "PING",
      value: `${latency}ms`,
      icon: <Clock className="w-3 h-3 sm:w-4 sm:h-4" />,
      color: "glow-text-orange",
    },
  ];

  return (
    <div className="glass-panel rounded-lg px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-evenly gap-2 sm:gap-4 min-w-0 sm:w-72 w-auto">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col items-center gap-0.5 min-w-0">
          <span className={m.color}>{m.icon}</span>
          <span className="text-[8px] sm:text-[9px] text-muted-foreground tracking-widest font-display">
            {m.label}
          </span>
          <span className={`text-[10px] sm:text-xs font-bold text-mono ${m.color}`}>
            {m.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;