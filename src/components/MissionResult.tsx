import { useNavigate } from "react-router";
import { useGameStore } from "../game/store.js";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const getLatencyColor = (value) => {
  if (value > 200) return "hsl(0 80% 35%)"; // dark red
  if (value > 120) return "hsl(0 80% 50%)"; // red
  if (value > 80) return "hsl(30 95% 55%)"; // orange
  if (value > 40) return "hsl(35 95% 55%)"; // yellow-orange
  return "hsl(145 70% 45%)"; // green
};

export const MissionResult = ({ tries, onContinue }) => {
  const { xp, latency, accuracy } = useGameStore((s) => s.stats);

  const [pingValue, setPingValue] = useState(256);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPingValue((prev) => {
        if (prev <= latency) {
          clearInterval(interval);
          setTimeout(() => setShowMessage(true), 500);
          return latency;
        }

        return Math.max(latency, prev - Math.ceil(prev * 0.08));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [latency]);

  const currentColor = getLatencyColor(pingValue);

  const xpGained = tries === 1 ? 10 : tries === 2 ? 5 : tries === 3 ? 1 : 0;


  return (
    <>
      <div className="relative z-10 flex flex-col items-center gap-10 animate-fade-in">
        {/* Ping display */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.5em]">
            NETWORK LATENCY
          </div>

          <div
            className="text-8xl md:text-9xl font-display font-black text-mono"
            style={{
              color: currentColor,
              textShadow: `
                0 0 20px ${currentColor}80,
                0 0 60px ${currentColor}40
              `,
              transition: "color 0.3s, text-shadow 0.3s",
            }}
          >
            {pingValue}
          </div>

          <div className="text-xl font-display tracking-[0.3em] text-muted-foreground">
            MILLISECONDS
          </div>
        </div>

        {/* Success message */}
        {showMessage && (
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            <div className="glass-panel neon-border-green rounded-2xl px-10 py-6 text-center">
              <h2 className="text-display text-2xl tracking-wider glow-text-green mb-2">
                MISSION COMPLETE
              </h2>
              <p className="text-muted-foreground text-sm max-w-md">
                {tries === 1 && "Perfect execution. Network optimized."}
                {tries === 2 && "Minor delay detected. Stabilizing..."}
                {tries >= 3 && "Multiple retries increased latency."}
              </p>
            </div>

            {/* Stats (NO latency here) */}
            <div className="flex gap-4">
              {[
                {
                  label: "XP EARNED",
                  value: `+${xpGained.toLocaleString()}`,
                  cls: "glow-text-cyan",
                },
                {
                  label: "ACCURACY",
                  value: `${accuracy.toFixed(1)}%`,
                  cls: "glow-text-green",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass-panel rounded-xl px-6 py-4 text-center"
                >
                  <div className="text-[10px] text-muted-foreground font-display tracking-widest mb-1">
                    {s.label}
                  </div>
                  <div className={`text-xl font-display font-bold ${s.cls}`}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onContinue}
              className="glass-panel flex neon-border-cyan rounded-xl px-10 py-3 font-display text-sm tracking-[0.3em] text-primary hover:scale-105 transition-transform"
            >
              CONTINUE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      {/*

    <div className="glass-panel rounded-xl p-6 flex flex-col gap-4 text-center">
      <h2 className="text-lg glow-text-cyan">MISSION COMPLETE</h2>

      <div className="flex justify-around">
        <div>
          <p className="text-xs text-muted-foreground">XP</p>
          <p className="text-xl">+{xpGained}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">LATENCY</p>
          <p className="text-xl">{latencyChange}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">ACCURACY</p>
          <p className="text-xl">{accuracy.toFixed(1)}%</p>
        </div>
      </div>

      <div className="text-xs text-muted-foreground mt-2">
        {tries === 1 && "Perfect execution. Network optimized."}
        {tries === 2 && "Minor delay detected. Stabilizing..."}
        {tries >= 3 && "Multiple retries increased latency."}
      </div>

      <button
        onClick={onContinue}
        className="glass-panel neon-border-cyan px-4 py-2 mt-4"
      >
        CONTINUE
      </button>
    </div>
   */}
    </>
  );
};
