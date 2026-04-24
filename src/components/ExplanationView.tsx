import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";

const ExplanationView = ({ view }) => {
  const { currentLayer, currentTopic } = useGameStore(
    (state) => state.progress,
  );
  const nextStep = useGameStore((state) => state.nextStep);
  const layer = layers[currentLayer-1];
  const topic = layer.topics[currentTopic-1];

  return (
    <div className="glass-panel rounded-xl p-6 flex-1 flex flex-col gap-6">
      {/* Mission header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.3em]">
            {view === "topicExplanation" ? `Topic N°${topic.id}` : `Layer N°${layer.id} `}
          </div>
          <h2 className="text-display text-lg glow-text-cyan mt-1">
            {view === "topicExplanation" ? topic.title : layer.name}
          </h2>
        </div>
        <div className="glass-panel rounded-lg px-3 py-1.5 text-xs text-mono glow-text-cyan">
          {layer.name}
        </div>
      </div>



      {/*
//explanation content
    
    <div>
      <p>{data.text}</p>

      <button onClick={nextStep}>
        Continue
      </button>
    </div>
    */}
    </div>
  );
};
export default ExplanationView;
