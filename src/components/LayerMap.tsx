import { Lock, Unlock, Wifi, Globe, Truck, AppWindow } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";
import { useGameStore } from "../game/store.js";

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

      {layers.map((layer, i) => (
        <div key={layer.name} className="flex flex-col items-center">
          {/* Node */}
          <div
            className={`glass-panel rounded-2xl p-6 w-64 flex flex-col items-center gap-3 transition-all duration-500 ${
              currentLayer >= i ? layer.borderClass : "opacity-40"
            } ${currentLayer === i ? "scale-110 animate-pulse-glow" : "hover:scale-105"}`}
          >
           
            <div className={layer.colorClass}>{layer.icon}</div>
            <span
              className={`text-display text-xs tracking-[0.2em] ${layer.colorClass}`}
            >
              {layer.name}
            </span>
            <div className="text-muted-foreground">
              {currentLayer >=i ? (
                <Unlock className="w-3 h-3 text-layer-transport" />
              ) : (
                <Lock className="w-3 h-3" />
              )}
            </div>
          </div>

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
      ))}
    </div>
  );
};

export default LayerMap;
