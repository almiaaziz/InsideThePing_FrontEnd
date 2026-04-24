import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";
import HUDBar from "@/components/HUDBar";
import MissionPanel from "@/components/CorePanel.js";
import CompanionChat from "@/components/CompanionChat";
import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";
import BackgroundVideo from "@/components/BackgroundVideo.js";
import CorePanel from "@/components/CorePanel.js";

const GameHub = () => {
  const { currentLayer } = useGameStore((state) => state.progress);
  const LayerData = layers[currentLayer-1].background;
  console.log("Current Layer:", currentLayer, "Background:", LayerData);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* <VortexBackground />*/}
      <BackgroundVideo src={LayerData} />

      <ParticleField />

      <div className="relative z-10 flex flex-col min-h-screen p-4 gap-4">
        {/* Top HUD */}
        <div className="animate-fade-in">
          <HUDBar />
        </div>

        {/* Main content */}
        <div
          className="flex-1 flex gap-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <CorePanel />
          <CompanionChat />
        </div>
      </div>

      <div className="scanline fixed inset-0 pointer-events-none z-20" />
    </div>
  );
};

export default GameHub;
