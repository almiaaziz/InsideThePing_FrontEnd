import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";
import { useEffect, useState } from "react";
import VisualRenderer from "./VisualRender.js";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LayerMap from "./LayerMap.js";

const ExplanationView = ({ view }) => {
  const { currentLayer, currentTopic } = useGameStore((state) => state.progress);
  const nextStep = useGameStore((state) => state.nextStep);
  const [open, setOpen] = useState(false);

  const layer = layers[currentLayer - 1];
  const topic = view === "topicExplanation" ? layer.topics[currentTopic - 1] : null;

  const scenes =
    view === "layerIntro"
      ? layer.intro.scenes
      : topic?.explanation?.scenes || [];

  const [currentScene, setCurrentScene] = useState(1);

  useEffect(() => {
    setCurrentScene(1);
  }, [view, currentLayer, currentTopic]);

  const scene = scenes[currentScene - 1];

  const handleNext = () => {
    if (currentScene < scenes.length) {
      setCurrentScene((prev) => prev + 1);
    } else {
      nextStep();
      setCurrentScene(1);
    }
  };

  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!scene) return;
    setIsTyping(true);
    setDisplayText("");
    let i = 0;
    const text = scene.text;
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
  }, [scene]);

  if (!scene) return null;

  return (
    <div className="glass-panel rounded-xl p-4 sm:p-6 flex-1 flex flex-col gap-4 sm:gap-6 min-h-0 z-10">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.3em]">
            {view === "topicExplanation" ? `Topic N°${topic?.id}` : `Layer N°${layer.id}`}
          </div>
          <h2 className="text-display text-base sm:text-lg glow-text-cyan mt-1 truncate">
            {view === "topicExplanation" ? topic?.title : layer.name}
          </h2>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="glass-panel rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm glow-text-cyan whitespace-nowrap flex-shrink-0">
              {layer.name}
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-sm sm:max-w-md w-[95vw]">
            <LayerMap onSelect={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* VISUAL */}
      <div className="flex-1 flex items-center justify-center min-h-0 overflow-hidden">
        <div className="w-full max-h-full">
          <VisualRenderer visual={scene.visual} />
        </div>
      </div>

      {/* TEXT */}
      <div className="flex justify-center">
        <div className="max-w-xl w-full">
          <p className="text-base sm:text-xl md:text-2xl text-left leading-relaxed">
            {displayText}
            {isTyping && (
              <span className="inline-block w-2 h-4 ml-1 bg-primary animate-pulse" />
            )}
          </p>
        </div>
      </div>

      {/* SCENE COUNTER */}
      <div className="text-xs text-muted-foreground text-center">
        {currentScene} / {scenes.length}
      </div>

      {/* BUTTON */}
      <button
        onClick={handleNext}
        className="glass-panel neon-border-cyan rounded-lg px-4 py-2 sm:py-3 text-xs sm:text-sm tracking-widest hover:scale-[1.02] transition-transform"
      >
        {currentScene < scenes.length
          ? "CONTINUE"
          : view === "topicExplanation"
            ? "START MISSION"
            : "NEXT TOPIC"}
      </button>
    </div>
  );
};

export default ExplanationView;