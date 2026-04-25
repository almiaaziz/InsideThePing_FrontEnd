import { useGameStore } from "../game/store";
import { layers } from "../game/data";
import ExplanationView from "./ExplanationView";
import MissionView from "./MissionView";

const CorePanel = () => {
  const view = useGameStore((state) => state.view);

  if (view === "mission") {
    return <MissionView />;
  } else {
    return <ExplanationView view={view} />;
  }
};

export default CorePanel;
