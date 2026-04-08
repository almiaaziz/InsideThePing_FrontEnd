import { useNavigate } from "react-router-dom";
import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";
import { useState, useEffect } from "react";

const FinalScreen = () => {
  const navigate = useNavigate();
  const [pingValue, setPingValue] = useState(256);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Animate ping countdown
    const interval = setInterval(() => {
      setPingValue((prev) => {
        if (prev <= 12) {
          clearInterval(interval);
          setTimeout(() => setShowMessage(true), 500);
          return 12;
        }
        return Math.max(12, prev - Math.ceil(prev * 0.08));
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <VortexBackground />
      <ParticleField />

      <div className="relative z-10 flex flex-col items-center gap-10 animate-fade-in">
        {/* Ping display */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.5em]">
            NETWORK LATENCY
          </div>
          <div
            className="text-8xl md:text-9xl font-display font-black text-mono"
            style={{
              color: pingValue <= 12 ? "hsl(145 70% 45%)" : pingValue < 100 ? "hsl(30 95% 55%)" : "hsl(0 80% 55%)",
              textShadow: pingValue <= 12
                ? "0 0 40px hsl(145 70% 45% / 0.5), 0 0 80px hsl(145 70% 45% / 0.2)"
                : "0 0 20px hsl(0 80% 55% / 0.3)",
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
                You've successfully traversed all layers of the TCP/IP stack. 
                Now you understand how data flows through the network.
              </p>
            </div>

            <div className="text-display text-lg tracking-[0.2em] glow-text-cyan animate-pulse-glow">
              "Now you understand networks."
            </div>

            {/* Stats */}
            <div className="flex gap-4">
              {[
                { label: "XP EARNED", value: "2,450", cls: "glow-text-cyan" },
                { label: "ACCURACY", value: "94%", cls: "glow-text-green" },
                { label: "LAYERS", value: "4/4", cls: "glow-text-orange" },
              ].map((s) => (
                <div key={s.label} className="glass-panel rounded-xl px-6 py-4 text-center">
                  <div className="text-[10px] text-muted-foreground font-display tracking-widest mb-1">
                    {s.label}
                  </div>
                  <div className={`text-xl font-display font-bold ${s.cls}`}>{s.value}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/")}
              className="glass-panel neon-border-cyan rounded-xl px-10 py-3 font-display text-sm tracking-[0.3em] text-primary hover:scale-105 transition-transform"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>

      <div className="scanline fixed inset-0 pointer-events-none z-20" />
    </div>
  );
};

export default FinalScreen;
