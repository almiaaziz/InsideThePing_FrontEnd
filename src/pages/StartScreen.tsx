import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";
import BackgroundVideo from "@/components/BackgroundVideo";
import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";
import { RotateCcw } from "lucide-react";

const StartScreen = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const { currentLayer, currentTopic } = useGameStore(
    (state) => state.progress,
  );
  const resetProgress = useGameStore((state) => state.resetProgress);

  // Show "continue" / "reset" UI only if the player has progress beyond the
  // very beginning of layer 1.
  const hasProgress = currentLayer > 1 || currentTopic > 0;
  const currentLayerName =
    layers[currentLayer - 1]?.name ?? layers[0].name;

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => navigate(hasProgress ? "/game" : "/intro"), 800);
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Reset all your progress and stats? This cannot be undone.",
      )
    ) {
      resetProgress();
    }
  };

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0 scale-110" : "opacity-100"}`}>
     { /*<VortexBackground />*/}
     <BackgroundVideo src="/public/assets/videos/HomePageVideo.mp4"  />
      <ParticleField />

      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-3 animate-fade-in">
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.5em]">
            A NETWORKING ADVENTURE
          </div>
          <h1
            className="text-5xl md:text-7xl font-display font-black tracking-wider glow-text-cyan"
            style={{ textShadow: "0 0 40px hsl(200 100% 50% / 0.4), 0 0 80px hsl(200 100% 50% / 0.2)" }}
          >
            INSIDE THE PING
          </h1>
          <div className="text-sm text-muted-foreground font-mono tracking-widest">
            TRAVERSING THE TCP/IP STACK
          </div>
        </div>

        {/* Start button */}
        <button
          onClick={handleStart}
          className="relative group animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="absolute inset-0 rounded-2xl animate-pulse-glow"
            style={{
              background: "linear-gradient(135deg, hsl(200 100% 50% / 0.2), hsl(280 80% 60% / 0.2))",
              filter: "blur(20px)",
            }}
          />
          <div className="relative glass-panel neon-border-cyan rounded-2xl px-16 py-5 font-display text-xl tracking-[0.3em] text-primary transition-all duration-300 group-hover:scale-105 group-hover:tracking-[0.4em]">
            {hasProgress ? "CONTINUE" : "START"}
          </div>
        </button>

        {hasProgress && (
          <div
            className="text-[10px] text-muted-foreground font-mono tracking-widest -mt-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            RESUMING AT — {currentLayerName.toUpperCase()} · TOPIC{" "}
            {Math.max(currentTopic, 1)}
          </div>
        )}

        {/* Layer indicators */}
        <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {[
            { label: "APP", cls: "glow-text-cyan" },
            { label: "TRANSPORT", cls: "glow-text-green" },
            { label: "INTERNET", cls: "glow-text-orange" },
            { label: "NETWORK", cls: "glow-text-red" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${l.cls === "glow-text-cyan" ? "bg-primary" : l.cls === "glow-text-green" ? "bg-layer-transport" : l.cls === "glow-text-orange" ? "bg-layer-internet" : "bg-destructive"}`} />
              <span className={`text-[10px] font-display tracking-widest ${l.cls}`}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {hasProgress && (
        <button
          onClick={handleReset}
          className="absolute bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background/40 backdrop-blur-md font-display text-[10px] tracking-[0.3em] text-muted-foreground hover:text-destructive hover:border-destructive/60 hover:bg-destructive/5 transition-all duration-300"
        >
          <RotateCcw className="w-3 h-3" />
          RESET PROGRESS
        </button>
      )}

      {/* Scanlines */}
      <div className="scanline fixed inset-0 pointer-events-none z-20" />
    </div>
  );
};

export default StartScreen;
