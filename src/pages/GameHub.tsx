import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";
import HUDBar from "@/components/HUDBar";
import MissionPanel from "@/components/CorePanel.js";
import CompanionChat from "@/components/CompanionChat";
import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";
import BackgroundVideo from "@/components/BackgroundVideo.js";
import CorePanel from "@/components/CorePanel.js";
import { useEffect, useState } from "react";

const GameHub = () => {
  const { currentLayer } = useGameStore((state) => state.progress);

  const backgroundLayer = layers[currentLayer - 1].background;

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">

      <BackgroundVideo
        key={backgroundLayer}
        src={backgroundLayer}
      />

      <ParticleField />

      <div className="relative z-10 flex flex-col min-h-screen p-4 gap-4">
        <HUDBar />

        <div className="flex-1 flex gap-4">
          <CorePanel />
          <CompanionChat />
        </div>
      </div>

    </div>
  );
};
export default GameHub;