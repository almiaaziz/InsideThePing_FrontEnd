import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";
import HUDBar from "@/components/HUDBar";
import MissionPanel from "@/components/MissionPanel";
import CompanionChat from "@/components/CompanionChat";

const GameHub = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <VortexBackground />
      <ParticleField />

      <div className="relative z-10 flex flex-col min-h-screen p-4 gap-4">
        {/* Top HUD */}
        <div className="animate-fade-in">
          <HUDBar />
        </div>

        {/* Main content */}
        <div className="flex-1 flex gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <MissionPanel />
          <CompanionChat />
        </div>
      </div>

      <div className="scanline fixed inset-0 pointer-events-none z-20" />
    </div>
  );
};

export default GameHub;
