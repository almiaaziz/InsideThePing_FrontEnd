import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import VortexBackground from "@/components/VortexBackground";
import ParticleField from "@/components/ParticleField";

const StoryIntro = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/game");
  };

  return (
    <>
      <VortexBackground />
      <ParticleField />
      <div className="fixed inset-0 flex flex-col">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        {/* Skip Button */}
        <div className="fixed bottom-6 right-20 z-30">
          <button
            onClick={handleSkip}
            className="group flex items-center gap-2 px-6 py-4 rounded-lg border border-primary/20 bg-background/40 backdrop-blur-md font-display text-m tracking-[0.3em] text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
          >
            SKIP
            <X className="w-3.5 h-3.5 transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>

        {/* Scroll Container */}
        <div className="flex-1 overflow-y-auto flex justify-center">
          <div className="w-full max-w-3xl px-4 py-20">
            {/* Long Image */}
            <img
              src="/assets/images/story.png"
              alt="Story panels"
              className="w-full h-auto object-contain select-none pointer-events-none "
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryIntro;
