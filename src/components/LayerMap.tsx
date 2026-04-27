import { Lock, Unlock, Wifi, Globe, Truck, AppWindow, CheckCircle2 } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";
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
  const { currentLayer, currentTopic } = useGameStore(
    (state) => state.progress,
  );
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

  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <h2 className="text-display text-xl tracking-[0.3em] glow-text-cyan mb-8">
        MAP
      </h2>

      {layers.map((layer, i) => {
        const layerId = i + 1;
        const isAvailable = layerId <= layerData.length;
        const isCurrent = currentLayer === layerId;
        const totalTopics = layerData[i]?.topics.length ?? 0;
        const doneCount = (completedTopics[layerId] ?? []).length;
        const isFullyComplete = totalTopics > 0 && doneCount >= totalTopics;

        const handleTeleport = () => {
          if (!isAvailable) return;
          goToLayer(layerId);
          navigate("/game");
        };

        return (
        <div key={layer.name} className="flex flex-col items-center">
          {/* Node */}
          <button
            type="button"
            onClick={handleTeleport}
            disabled={!isAvailable}
            aria-label={`Teleport to ${layer.name} layer`}
            className={`glass-panel rounded-2xl p-6 w-64 flex flex-col items-center gap-3 transition-all duration-500 text-left ${
              isAvailable ? layer.borderClass : "opacity-40 cursor-not-allowed"
            } ${
              isCurrent
                ? "scale-110 animate-pulse-glow"
                : isAvailable
                  ? "hover:scale-105 cursor-pointer"
                  : ""
            }`}
          >

            <div className={`relative ${layer.colorClass}`}>
              {layer.icon}
              {isAvailable && isFullyComplete && (
                <CheckCircle2
                  className="w-4 h-4 text-layer-transport absolute -top-2 -right-2 bg-background rounded-full"
                  aria-label="Layer complete"
                />
              )}
            </div>
            <span
              className={`text-display text-xs tracking-[0.2em] ${layer.colorClass}`}
            >
              {layer.name}
            </span>

            {isAvailable && totalTopics > 0 && (
              <div className="w-full flex flex-col items-center gap-1">
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalTopics }).map((_, idx) => {
                    const topicIndex = idx + 1;
                    const done = (completedTopics[layerId] ?? []).includes(
                      topicIndex,
                    );
                    return (
                      <span
                        key={topicIndex}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          done
                            ? "bg-layer-transport"
                            : "bg-muted-foreground/30"
                        }`}
                        aria-label={`Topic ${topicIndex} ${done ? "complete" : "incomplete"}`}
                      />
                    );
                  })}
                </div>
                <span className="text-[9px] font-mono tracking-widest text-muted-foreground">
                  {doneCount}/{totalTopics} COMPLETE
                </span>
              </div>
            )}

            <div className="text-muted-foreground flex items-center gap-2 text-[10px] font-display tracking-[0.2em]">
              {isAvailable ? (
                <>
                  <Unlock className="w-3 h-3 text-layer-transport" />
                  <span>
                    {isCurrent
                      ? "CURRENT"
                      : isFullyComplete
                        ? "REPLAY"
                        : doneCount > 0
                          ? "RESUME"
                          : "TELEPORT"}
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

          {/* Connector */}
          {i < layers.length - 1 && (
            <div className="flex flex-col items-center gap-1 py-2">
              {[0, 1, 2].map((d) => (
                <div
                  key={d}
                  className="w-0.5 h-3 rounded-full"
                  style={{
                    background:
                      currentLayer >= i && currentLayer >= i + 1
                        ? "hsl(200 100% 50% / 0.5)"
                        : "hsl(220 20% 20%)",
                    animation:
                      currentLayer >= i && currentLayer >= i + 1
                        ? `pulse-glow 2s ease-in-out ${d * 0.3}s infinite`
                        : undefined,
                  }}
                />
              ))}
            </div>
          )}
        </div>
        );
      })}
    </div>
  );
};

export default LayerMap;
