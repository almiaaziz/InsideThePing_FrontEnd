import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";
import { useEffect, useState } from "react";
import VisualRenderer from "./VisualRender.js";

const ExplanationView = ({ view }) => {
  // Get current layer/topic from global state
  const { currentLayer, currentTopic } = useGameStore(
    (state) => state.progress,
  );
  const nextStep = useGameStore((state) => state.nextStep);
  const layer = layers[currentLayer - 1];
  const topic = layer.topics[currentTopic - 1];

  // Scenes logic
  const [currentScene, setCurrentScene] = useState(1);
  useEffect(() => {
    setCurrentScene(1);
  }, [view]);
  const scenes =
    view === "layerIntro" ? layer.intro.scenes : topic.explanation.scenes;
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
  console.log("scene", scene);

  return (
    <div className="glass-panel rounded-xl p-6 flex-1 flex flex-col gap-6">
      {/* Mission header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.3em]">
            {view === "topicExplanation"
              ? `Topic N°${topic.id}`
              : `Layer N°${layer.id} `}
          </div>
          <h2 className="text-display text-lg glow-text-cyan mt-1">
            {view === "topicExplanation" ? topic.title : layer.name}
          </h2>
        </div>
        <div className="glass-panel rounded-lg px-3 py-1.5 text-xs text-mono glow-text-cyan">
          {layer.name}
        </div>
      </div>

      {/* 🔹 VISUAL */}
      <div className="flex-1 flex items-center justify-center">
        <VisualRenderer visual={scene.visual} />
      </div>

      {/* 🔹 TEXT */}
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

      {/* 🔹 CONTINUE BUTTON */}
      <button
        onClick={handleNext}
        className="glass-panel neon-border-cyan rounded-lg px-4 py-3 text-display text-sm tracking-widest flex items-center justify-center hover:scale-[1.02] transition-transform"
      >
        {currentScene < scenes.length ? "CONTINUE" : view === "topicExplanation" ? "START MISSION" : "NEXT Topic"}
      </button>
    </div>
  );
};
export default ExplanationView;
