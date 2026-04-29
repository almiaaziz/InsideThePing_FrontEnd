import {
  Lock,
  Unlock,
  Wifi,
  Globe,
  Truck,
  AppWindow,
  CheckCircle2,
} from "lucide-react";
import { useGameStore } from "../game/store.js";
import { layers as layerData } from "../game/data";
import { useNavigate } from "react-router-dom";

interface LayerNode {
  name: string;
  icon: React.ReactNode;
  colorClass: string;
  borderClass: string;
}

const LayerMap = () => {
  const { currentLayer } = useGameStore((state) => state.progress);
  const completedTopics = useGameStore((state) => state.completedTopics);
  const goToLayer = useGameStore((state) => state.goToLayer);
  const navigate = useNavigate();

  const layers: LayerNode[] = [
    {
      name: "APPLICATION",
      icon: <AppWindow className="w-6 h-6" />,
      colorClass: "glow-text-cyan",
      borderClass: "neon-border-cyan",
    },
    {
      name: "TRANSPORT",
      icon: <Truck className="w-6 h-6" />,
      colorClass: "glow-text-green",
      borderClass: "neon-border-green",
    },
    {
      name: "INTERNET",
      icon: <Globe className="w-6 h-6" />,
      colorClass: "glow-text-orange",
      borderClass: "neon-border-orange",
    },
    {
      name: "NETWORK ACCESS",
      icon: <Wifi className="w-6 h-6" />,
      colorClass: "glow-text-red",
      borderClass: "neon-border-red",
    },
  ];

  const maxUnlockedLayer = completedTopics.length;

  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <h2 className="text-display text-xl tracking-[0.3em] glow-text-cyan mb-8">
        MAP
      </h2>

      {layers.map((layer, i) => {
        const layerId = i + 1;
        const totalTopics = layerData[i]?.topics.length ?? 0;

        const doneTopics = completedTopics[i] ?? [];
        const doneCount = doneTopics.length;

        const isCurrent = currentLayer === layerId;
        const isUnlocked = layerId <= maxUnlockedLayer;
        const isFullyComplete =
          doneCount > 0 && doneCount === totalTopics;

        const handleTeleport = () => {
          if (!isUnlocked) return;
          goToLayer(layerId);
          navigate("/game");
        };

        return (
          <div key={layer.name} className="flex flex-col items-center">
            <button
              onClick={handleTeleport}
              disabled={!isUnlocked}
              className={`glass-panel rounded-2xl p-6 w-64 flex flex-col items-center gap-3 transition-all duration-500 ${
                isUnlocked
                  ? `hover:scale-105 cursor-pointer ${layer.borderClass}`
                  : "opacity-60 cursor-not-allowed"
              }`}
            >
              <div className={`relative ${layer.colorClass}`}>
                {layer.icon}
                {isFullyComplete && (
                  <CheckCircle2 className="w-4 h-4 absolute -top-2 -right-2" />
                )}
              </div>

              <span className={`text-xs ${layer.colorClass}`}>
                {layer.name}
              </span>

              {isUnlocked && totalTopics > 0 && (
                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1">
                    {Array.from({ length: totalTopics }).map((_, idx) => {
                      const topicIndex = idx + 1;
                      const done = doneTopics.includes(topicIndex);

                      return (
                        <span
                          key={topicIndex}
                          className={`w-2 h-2 rounded-full ${
                            done
                              ? "bg-layer-transport"
                              : "bg-muted-foreground/30"
                          }`}
                        />
                      );
                    })}
                  </div>

                  <span className="text-[9px] text-muted-foreground">
                    {doneCount}/{totalTopics}
                  </span>
                </div>
              )}

              <div className="text-[10px] flex items-center gap-2">
                {isUnlocked ? (
                  <>
                    <Unlock className="w-3 h-3" />
                    <span>
                      {isCurrent
                        ? "CURRENT"
                        : isFullyComplete
                        ? "REPLAY"
                        : "RESUME"}
                    </span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3 h-3" />
                    <span>LOCKED</span>
                  </>
                )}
              </div>
            </button>

            {i < layers.length - 1 && (
              <div className="h-6 w-0.5 bg-muted-foreground/30" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LayerMap;