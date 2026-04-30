import { useNavigate } from "react-router-dom";
import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";
import LayerMap from "@/components/LayerMap";
import { ArrowLeft } from "lucide-react";

const LayerMapScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start sm:justify-center overflow-hidden px-4 py-6">
      <VortexBackground />
      <ParticleField />

      <div className="relative z-10 flex flex-col items-center w-full max-w-sm sm:max-w-lg animate-fade-in">
        <LayerMap />

        <button
          onClick={() => navigate("/game")}
          className="mt-4 sm:mt-5 glass-panel neon-border-cyan rounded-xl px-6 sm:px-8 py-2 sm:py-3 font-display text-xs sm:text-sm tracking-widest text-primary flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO MISSION
        </button>
      </div>

      <div className="scanline fixed inset-0 pointer-events-none z-20" />
    </div>
  );
};

export default LayerMapScreen;