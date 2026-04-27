import { useGameStore } from "../game/store";
import { layers } from "../game/data";
import ExplanationView from "./ExplanationView";
import MissionView from "./MissionView";
import TransportIntroView from "./TransportIntroView";

const CorePanel = () => {
  const view = useGameStore((state) => state.view);
  const { currentLayer } = useGameStore((state) => state.progress);

  if (view === "mission") {
    return <MissionView />;
  }

  // Transport Layer uses its own intro view (with background video) for the
  // layer introduction. Topic explanations still use the standard view.
  if (view === "layerIntro" && currentLayer === 2) {
    return <TransportIntroView />;
  }

  return <ExplanationView view={view} />;
};

export default CorePanel;
