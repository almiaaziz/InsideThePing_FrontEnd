import { useNavigate } from "react-router-dom";
import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";

import {
  Gamepad2,
  Target,
  Network,
  Layers,
  Cpu,
  Rocket,
  ArrowRight,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import StatsBar from "@/components/StatsBar";

const howToPlay = [
  {
    icon: Rocket,
    title: "ENTER THE DIGITAL WORLD",
    text: "Start with a story-driven intro presented as manga-style panels, where you are pulled into your computer by the Kernel.",
  },
  {
    icon: Layers,
    title: "EXPLORE THE LAYERS",
    text: "Progress through the four TCP/IP layers. Each layer begins with an introduction followed by guided explanations.",
  },
  {
    icon: Target,
    title: "LEARN THROUGH TOPICS",
    text: "Each layer contains multiple topics. Every topic includes a focused explanation and an interactive mission.",
  },
  {
    icon: Network,
    title: "USE THE MAP",
    text: "Navigate between layers using the map. You can revisit completed layers anytime without losing your current progress.",
  },
];
const goals = [
  "Understand the TCP/IP model from end to end",
  "Learn how data travels between client and server",
  "Master common protocols (HTTP, TCP, IP)",
  "Build intuition about latency and network behavior",
];
const team = [
  { name: "FEDI NASRI", color: "layer-application" },
  { name: "MOHAMED AZIZ ELMIA", color: "layer-transport" },
  { name: "NASSIM ARAFA", color: "layer-internet" },
  { name: "MOHAMED HEDI DRIDI", color: "layer-network" },
];

const About = () => {
  const navigate = useNavigate();
 
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <VortexBackground />
      <ParticleField />

      <div className="relative z-10 flex flex-col min-h-screen p-4 gap-4">
        {/* Top row mirroring GameHub layout */}
        <div className="flex gap-4 animate-fade-in">
          <div className="flex-1 flex">
            <NavBar />
          </div>
          <StatsBar />
        </div>

        {/* Scrollable content */}
        <main
          className="flex-1 overflow-y-auto pr-2 animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-6 pb-8">
            {/* Header */}
            <header className="glass-panel neon-border-cyan rounded-2xl p-10 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.4), transparent 60%)",
                }}
              />
              <div className="relative">
                <h1 className="text-display text-4xl md:text-5xl font-bold glow-text-cyan tracking-wider mb-4">
                  ABOUT INSIDE THE PING
                </h1>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  A story-driven journey inside a digital world where you must
                  understand network layers to send a ping and find your way
                  back home.
                </p>
              </div>
            </header>

            {/* What is this game */}
            <section className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-primary" />
                <h2 className="text-display text-xl tracking-widest glow-text-cyan">
                  WHAT IS THIS GAME?
                </h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                <span className="text-primary font-semibold">
                  Inside the Ping
                </span>{" "}
                is a story-driven educational experience where networking
                concepts come to life inside a digital world.
                <br />
                <br />
                After losing a game because of high latency, the player is
                pulled into his computer by a mysterious entity known as{" "}
                <span className="text-primary">the Kernel</span>. Trapped inside
                the system, the only way back is to successfully send a ping to
                the game server.
                <br />
                <br />
                Guided by a friendly data packet, the player explores each layer
                of the network, learning how data travels across systems in
                order to complete the journey and return to the real world.
              </p>
            </section>

            {/* How to play */}
            <section className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gamepad2 className="w-5 h-5 text-layer-transport" />
                <h2 className="text-display text-xl tracking-widest glow-text-green">
                  HOW TO PLAY
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {howToPlay.map((step, i) => (
                  <div
                    key={step.title}
                    className="glass-panel-highlight rounded-xl p-5 flex gap-4 hover:neon-border-cyan transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-muted-foreground mb-1">
                        STEP {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-display text-sm tracking-wider mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-foreground/70">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning goals */}
            <section className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-5 h-5 text-layer-internet" />
                <h2 className="text-display text-xl tracking-widest glow-text-orange">
                  LEARNING GOALS
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {goals.map((g, i) => (
                  <div
                    key={g}
                    className="flex items-center gap-3 glass-panel-highlight rounded-lg px-4 py-3"
                  >
                    <span className="text-mono text-xs text-layer-internet">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-foreground/85">{g}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Team */}
            <section className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Network className="w-5 h-5 text-accent" />
                <h2
                  className="text-display text-xl tracking-widest"
                  style={{ color: "hsl(var(--accent))" }}
                >
                  THE TEAM
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {team.map((m) => (
                  <div
                    key={m.name}
                    className="glass-panel-highlight rounded-xl p-5 text-center hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-16 h-16 mx-auto rounded-full mb-3 flex items-center justify-center text-display text-lg font-bold"
                      style={{
                        background: `linear-gradient(135deg, hsl(var(--${m.color}) / 0.3), hsl(var(--${m.color}) / 0.05))`,
                        boxShadow: `0 0 25px hsl(var(--${m.color}) / 0.4)`,
                        color: `hsl(var(--${m.color}))`,
                      }}
                    >
                      {m.name[0]}
                    </div>
                    <div className="text-display text-sm tracking-wider">
                      {m.name}
                    </div>
                    
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/game")}
                className="glass-panel neon-border-cyan rounded-xl px-8 py-3 font-display text-sm tracking-widest text-primary flex items-center gap-2 hover:scale-105 transition-transform"
              >
                ENTER THE NETWORK <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Footer */}
            <footer className="glass-panel rounded-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
              <div className="font-display tracking-widest">
                © 2026 INSIDE THE PING
              </div>
              <div className="text-mono">// learn.networks.deeply</div>
            </footer>
          </div>
        </main>
      </div>

      <div className="scanline fixed inset-0 pointer-events-none z-20" />
    </div>
  );
};

export default About;
