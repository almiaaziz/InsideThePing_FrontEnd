import { useEffect, useState } from "react";
import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";

const TransportIntroView = () => {
  const { currentLayer } = useGameStore((state) => state.progress);
  const nextStep = useGameStore((state) => state.nextStep);
  const layer = layers[currentLayer - 1];

  const scenes = layer.intro.scenes;

  const [currentScene, setCurrentScene] = useState(1);
  const scene = scenes[currentScene - 1];

  const handleNext = () => {
    if (currentScene < scenes.length) {
      setCurrentScene((prev) => prev + 1);
    } else {
      nextStep();
      setCurrentScene(1);
    }
  };

  // Typing effect for scene text
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!scenes[currentScene - 1]) return;
    setIsTyping(true);
    setDisplayText("");
    const text = scenes[currentScene - 1].text;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [currentScene, scenes]);

  if (!scene) return null;

  return (
    <div className="glass-panel rounded-xl p-6 flex-1 flex flex-col gap-6 relative overflow-hidden">
      {/* Inline background video for the intro panel */}
      <video
        key={scene.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
      >
        <source src={scene.video} type="video/mp4" />
      </video>
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-background/60 pointer-events-none" />

      {/* Content (above the video) */}
      <div className="relative z-10 flex flex-col gap-6 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-muted-foreground font-display tracking-[0.3em]">
              {`Layer N°${layer.id} `}
            </div>
            <h2 className="text-display text-lg glow-text-cyan mt-1">
              {layer.name}
            </h2>
          </div>
          <div className="glass-panel rounded-lg px-3 py-1.5 text-xs text-mono glow-text-cyan">
            {layer.name}
          </div>
        </div>

        {/* Empty spacer (the video itself acts as the visual) */}
        <div className="flex-1" />

        {/* Text */}
        <div className="flex justify-center my-5">
          <div className="max-w-xl w-full">
            <p className="text-2xl text-left leading-relaxed">
              {displayText}
              {isTyping && (
                <span className="inline-block w-2 h-4 ml-1 bg-primary animate-pulse-glow" />
              )}
            </p>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center">
          {currentScene} / {scenes.length}
        </div>

        {/* Continue button */}
        <button
          onClick={handleNext}
          className="glass-panel neon-border-cyan rounded-lg px-4 py-3 text-display text-sm tracking-widest flex items-center justify-center hover:scale-[1.02] transition-transform"
        >
          {currentScene < scenes.length ? "CONTINUE" : "START FIRST TOPIC"}
        </button>
      </div>
    </div>
  );
};

export default TransportIntroView;
