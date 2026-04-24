import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";

const MissionView = () => {
  const { currentLayer, currentTopic } = useGameStore(
    (state) => state.progress,
  );
  const nextStep = useGameStore((state) => state.nextStep);
  const increaseXP = useGameStore((state) => state.increaseXP);

  //const [selected, setSelected] = useState<number | null>(null);
  //const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  const layer = layers[currentLayer-1];
  const topic = layer.topics[currentTopic-1];
  const mission = topic.mission;

  const handleAnswer = (selected) => {
    if (selected === mission.answer) {
      increaseXP(10);
      setTimeout(() => {
        nextStep();
      }, 1000);
    }
  };
  return (
    <div className="glass-panel rounded-xl p-6 flex-1 flex flex-col gap-6">
      {/* Mission header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.3em]">
            MISSION {topic.id}
          </div>
          <h2 className="text-display text-lg glow-text-cyan mt-1">
            {mission.title}
          </h2>
        </div>
        <div className="glass-panel rounded-lg px-3 py-1.5 text-xs text-mono glow-text-cyan">
          {layer.name}
        </div>
      </div>

      {/* Question */}
      <div className="glass-panel-highlight rounded-lg p-4">
        <p className="text-sm text-muted-foreground">
          {mission.question}
        </p>
      </div>

{
  /** mission
   <div className="grid grid-cols-2 gap-3 flex-1">
        {mission.options.map((p, i) => (
          <button
            key={p}
            onClick={() => handleAnswer(p)}
            className={`glass-panel rounded-lg p-4 text-left transition-all duration-300 hover:scale-[1.02] ${
              selected === i
                ? feedback === "success"
                  ? "neon-border-green"
                  : "neon-border-red"
                : "hover:neon-border-cyan"
            } ${
              feedback === "error" && selected === i
                ? "animate-[glitch_0.3s_ease-in-out]"
                : ""
            }`}
            disabled={feedback === "success"}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-display text-sm tracking-wider">
                {p.name}
              </span>
              {selected === i && feedback === "success" && (
                <CheckCircle className="w-4 h-4 text-layer-transport" />
              )}
              {selected === i && feedback === "error" && (
                <XCircle className="w-4 h-4 text-destructive" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">{p.description}</p>
          </button>
        ))}
      </div>

      {feedback === "success" && (
        <button className="glass-panel neon-border-green rounded-lg px-4 py-3 text-display text-sm tracking-widest text-layer-transport flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform animate-fade-in">
          CONTINUE <ArrowRight className="w-4 h-4" />
        </button>
      )}
   
   */
}

      
    
    </div>
  );
};

export default MissionView;
