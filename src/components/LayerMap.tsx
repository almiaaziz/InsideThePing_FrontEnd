import { Lock, Unlock, Wifi, Globe, Truck, AppWindow } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";

interface LayerNode {
  name: string;
  icon: React.ReactNode;
  colorClass: string;
  borderClass: string;
  unlocked: boolean;
  current: boolean;
  video: string;
}

const layers: LayerNode[] = [
  {
    name: "APPLICATION",
    icon: <AppWindow className="w-6 h-6" />,
    colorClass: "glow-text-cyan",
    borderClass: "neon-border-cyan",
    video: "/public/assets/videos/layers/ApplicationLayer.mp4",
    unlocked: true,
    current: true,
  },
  {
    name: "TRANSPORT",
    icon: <Truck className="w-6 h-6" />,
    colorClass: "glow-text-green",
    borderClass: "neon-border-green",
    video: "/public/assets/videos/layers/TransportLayer.mp4",

    unlocked: true,
    current: false,
  },
  {
    name: "INTERNET",
    icon: <Globe className="w-6 h-6" />,
    colorClass: "glow-text-orange",
    borderClass: "neon-border-orange",
    video: "/public/assets/videos/layers/IPLayer_v1.mp4",
    unlocked: false,
    current: false,
  },
  {
    name: "NETWORK ACCESS",
    icon: <Wifi className="w-6 h-6" />,
    colorClass: "glow-text-red",
    borderClass: "neon-border-red",
    video: "/public/assets/videos/layers/NetworkLayer_v1.mp4",
    unlocked: false,
    current: false,
  },
];

const LayerMap = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-8">
      <h2 className="text-display text-xl tracking-[0.3em] glow-text-cyan mb-8">
        TCP/IP LAYER MAP
      </h2>

      {layers.map((layer, i) => (
        <div key={layer.name} className="flex flex-col items-center">
          {/* Node */}
          <div
            className={`glass-panel rounded-2xl p-6 w-64 flex flex-col items-center gap-3 transition-all duration-500 ${
              layer.unlocked ? layer.borderClass : "opacity-40"
            } ${layer.current ? "scale-110 animate-pulse-glow" : "hover:scale-105"}`}
          >
           {/* <BackgroundVideo
              src={layer.video}
              overlay={true}
            />*/}
            <div className={layer.colorClass}>{layer.icon}</div>
            <span
              className={`text-display text-xs tracking-[0.2em] ${layer.colorClass}`}
            >
              {layer.name}
            </span>
            <div className="text-muted-foreground">
              {layer.unlocked ? (
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
                      layer.unlocked && layers[i + 1].unlocked
                        ? "hsl(200 100% 50% / 0.5)"
                        : "hsl(220 20% 20%)",
                    animation:
                      layer.unlocked && layers[i + 1].unlocked
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
