import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";
import QuizMission from "./QuizMission.js";
import MatchMission from "./MatchMission.js";
import OrderMission from "./OrderMission.js";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LayerMap from "./LayerMap.js";

const MissionView = () => {
  const { currentLayer, currentTopic } = useGameStore(
    (state) => state.progress,
  );
  const nextStep = useGameStore((state) => state.nextStep);
  const increaseXP = useGameStore((state) => state.increaseXP);

  const [open, setOpen] = useState(false);
  const layer = layers[currentLayer - 1];
  const topic = layer.topics[currentTopic - 1];
  const mission = topic.mission;

  const renderMission = () => {
    switch (mission.type) {
      case "quiz":
        return <QuizMission mission={mission} />;

      case "order":
        return <OrderMission mission={mission} />;

      case "match":
        return <MatchMission mission={mission} />;

      default:
        return <div>Unknown mission</div>;
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
        {/* ✅ MAP DIALOG */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="glass-panel rounded-lg px-3 py-1.5 text-m glow-text-cyan">
              {layer.name}
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-md">
            <LayerMap onSelect={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Question */}
      <div className="glass-panel-highlight rounded-lg p-4">
        <p className="text-sm text-muted-foreground">{mission.question}</p>
      </div>
      {renderMission()}
    </div>
  );
};

export default MissionView;
