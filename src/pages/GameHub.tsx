import ParticleField from "@/components/ParticleField";
import CompanionChat from "@/components/CompanionChat";
import { useGameStore } from "../game/store.js";
import { layers } from "../game/data";
import BackgroundVideo from "@/components/BackgroundVideo.js";
import CorePanel from "@/components/CorePanel.js";
import LayerTransition from "@/components/LayerTransition";
import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import StatsBar from "@/components/StatsBar.js";
import NavBar from "@/components/NavBar.js";

const GameHub = () => {
  const { currentLayer } = useGameStore((state) => state.progress);

  // Track previous layer so we can show a transition when it changes.
  const previousLayerRef = useRef(currentLayer);
  const [transition, setTransition] = useState<{
    from: string;
    to: string;
  } | null>(null);

  useEffect(() => {
    if (previousLayerRef.current !== currentLayer) {
      const fromLayer = layers[previousLayerRef.current - 1];
      const toLayer = layers[currentLayer - 1];
      if (fromLayer && toLayer) {
        setTransition({ from: fromLayer.name, to: toLayer.name });
      }
      previousLayerRef.current = currentLayer;
    }
  }, [currentLayer]);

  // If the player has progressed past the last available layer, send them to
  // the final screen instead of crashing on an undefined layer lookup.
  if (currentLayer < 1 || currentLayer > layers.length) {
    return <Navigate to="/complete" replace />;
  }

  const backgroundLayer = layers[currentLayer - 1].background;

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <BackgroundVideo key={backgroundLayer} src={backgroundLayer} />

      <ParticleField />

      <div className="relative z-10 flex flex-col min-h-screen p-4 gap-4">
        {/* Top row mirroring GameHub layout */}
        <div className="flex gap-4 animate-fade-in">
          <div className="flex-1 flex">
            <NavBar />
          </div>
          <StatsBar />
        </div>
        <div className="flex-1 flex gap-4">
          <CorePanel />
{/*          <CompanionChat />
*/}        </div>
      </div>

      {transition && (
        <LayerTransition
          fromLayer={transition.from}
          toLayer={transition.to}
          onComplete={() => setTransition(null)}
        />
      )}
    </div>
  );
};
export default GameHub;
