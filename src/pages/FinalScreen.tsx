import { useNavigate } from "react-router-dom";
import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";
import { useState, useEffect } from "react";
import { useGameStore } from "../game/store";

const getLatencyColor = (value) => {
  if (value > 200) return "hsl(0 80% 35%)";
  if (value > 120) return "hsl(0 80% 50%)";
  if (value > 80) return "hsl(30 95% 55%)";
  if (value > 40) return "hsl(35 95% 55%)";
  return "hsl(145 70% 45%)";
};

const FinalScreen = () => {
  const { xp, accuracy, latency } = useGameStore((s) => s.stats);
  const navigate = useNavigate();
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

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <VortexBackground />
      <ParticleField />

      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-10 animate-fade-in text-center">
        {/* Ping display */}
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.5em]">
            NETWORK LATENCY
          </div>
          <div
            className="text-7xl sm:text-8xl md:text-9xl font-display font-black text-mono"
            style={{
              color: currentColor,
              textShadow: `0 0 20px ${currentColor}80, 0 0 60px ${currentColor}40`,
              transition: "color 0.3s, text-shadow 0.3s",
            }}
          >
            {pingValue}
          </div>
          <div className="text-base sm:text-xl font-display tracking-[0.3em] text-muted-foreground">
            MILLISECONDS
          </div>
        </div>

        {showMessage && (
          <div className="flex flex-col items-center gap-4 sm:gap-6 animate-fade-in">
            <div className="glass-panel neon-border-green rounded-2xl px-6 sm:px-10 py-4 sm:py-6 text-center">
              <h2 className="text-display text-xl sm:text-2xl tracking-wider glow-text-green mb-2">
                MISSION COMPLETE
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm max-w-md">
                Ping successfully delivered. Connection to the game server restored.
                <br />The Kernel has lost control.
              </p>
            </div>

            <div className="text-display text-sm sm:text-lg tracking-[0.2em] glow-text-cyan animate-pulse-glow">
              "Now you understand networks."
            </div>

            <div className="flex gap-3 sm:gap-4">
              {[
                { label: "XP EARNED", value: xp.toLocaleString(), cls: "glow-text-cyan" },
                { label: "ACCURACY", value: `${accuracy.toFixed(1)}%`, cls: "glow-text-green" },
              ].map((s) => (
                <div key={s.label} className="glass-panel rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-center">
                  <div className="text-[9px] sm:text-[10px] text-muted-foreground font-display tracking-widest mb-1">{s.label}</div>
                  <div className={`text-base sm:text-xl font-display font-bold ${s.cls}`}>{s.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2 sm:mt-4">
              <button
                onClick={() => navigate("/")}
                className="glass-panel neon-border-cyan rounded-xl px-8 sm:px-10 py-2 sm:py-3 font-display text-xs sm:text-sm tracking-[0.3em] text-primary hover:scale-105 transition-transform"
              >
                PLAY AGAIN
              </button>
              <button
                onClick={() => navigate("/map")}
                className="glass-panel neon-border-cyan rounded-xl px-8 sm:px-10 py-2 sm:py-3 font-display text-xs sm:text-sm tracking-[0.3em] text-primary hover:scale-105 transition-transform"
              >
                BACK TO MAP
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="scanline fixed inset-0 pointer-events-none z-20" />
    </div>
  );
};

export default FinalScreen;