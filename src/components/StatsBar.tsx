import { Zap, Target, Clock, Shield } from "lucide-react";
import { useGameStore } from "../game/store.js";


interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatsBar = () => {
  const { xp, accuracy, latency, integrity } = useGameStore(
    (state) => state.stats,
  );

  const metrics: Metric[] = [
    {
      label: "XP",
      value: `${xp}`,
      icon: <Zap className="w-4 h-4" />,
      color: "glow-text-cyan",
    },
    {
      label: "ACCURACY",
      value: `${accuracy.toFixed(1)}%`,
      icon: <Target className="w-4 h-4" />,
      color: "glow-text-green",
    },
   {
      label: "LATENCY",
      value: `${latency}ms`,
      icon: <Clock className="w-4 h-4" />,
      color: "glow-text-orange",
    },
    /*
    {
      label: "INTEGRITY",
      value: `${integrity}%`,
      icon: <Shield className="w-4 h-4" />,
      color: "glow-text-red",
    },*/
  ];

  return (
    <div className="glass-panel rounded-lg px-4 py-3 flex items-center justify-evenly gap-4 w-80">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col items-center gap-0.5">
          <span className={m.color}>{m.icon}</span>
          <span className="text-[9px] text-muted-foreground tracking-widest font-display">
            {m.label}
          </span>
          <span className={`text-xs font-bold text-mono ${m.color}`}>
            {m.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
