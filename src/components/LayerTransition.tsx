import { useEffect, useState } from "react";

type LayerTransitionProps = {
  fromLayer: string;
  toLayer: string;
  onComplete: () => void;
};

const LayerTransition: React.FC<LayerTransitionProps> = ({
  fromLayer,
  toLayer,
  onComplete,
}) => {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("out"), 2400);
    const t3 = setTimeout(() => onComplete(), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${
        phase === "out" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated scan lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-primary/60 animate-[slideDown_2.4s_ease-in-out]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/60 animate-[slideUp_2.4s_ease-in-out]" />
      </div>

      <div
        className={`flex flex-col items-center gap-6 transition-all duration-700 ${
          phase === "in"
            ? "opacity-0 translate-y-4"
            : phase === "out"
              ? "opacity-0 -translate-y-4"
              : "opacity-100 translate-y-0"
        }`}
      >
        <div className="text-[10px] text-muted-foreground font-display tracking-[0.4em]">
          LEAVING
        </div>
        <div className="text-display text-2xl tracking-widest text-muted-foreground line-through">
          {fromLayer.toUpperCase()}
        </div>

        <div className="my-3 flex items-center gap-3">
          <div className="w-10 h-px bg-primary/60" />
          <div className="w-2 h-2 rounded-full bg-primary glow-text-cyan animate-pulse-glow" />
          <div className="w-10 h-px bg-primary/60" />
        </div>

        <div className="text-[10px] text-primary font-display tracking-[0.4em] glow-text-cyan">
          ENTERING
        </div>
        <div className="text-display text-4xl md:text-5xl tracking-widest glow-text-cyan">
          {toLayer.toUpperCase()}
        </div>

        <div className="mt-4 text-xs text-muted-foreground font-mono">
          establishing connection...
        </div>
      </div>
    </div>
  );
};

export default LayerTransition;
