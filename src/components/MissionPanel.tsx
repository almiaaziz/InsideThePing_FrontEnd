import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

interface Protocol {
  name: string;
  description: string;
  correct: boolean;
}

const protocols: Protocol[] = [
  { name: "HTTP", description: "Hypertext Transfer Protocol", correct: true },
  { name: "FTP", description: "File Transfer Protocol", correct: false },
  { name: "DNS", description: "Domain Name System", correct: false },
  { name: "SMTP", description: "Simple Mail Transfer Protocol", correct: false },
];

const MissionPanel = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setFeedback(protocols[index].correct ? "success" : "error");
    setTimeout(() => {
      if (!protocols[index].correct) {
        setSelected(null);
        setFeedback(null);
      }
    }, 1500);
  };

  return (
    <div className="glass-panel rounded-xl p-6 flex-1 flex flex-col gap-6">
      {/* Mission header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] text-muted-foreground font-display tracking-[0.3em]">
            MISSION 01
          </div>
          <h2 className="text-display text-lg glow-text-cyan mt-1">
            SELECT THE RIGHT PROTOCOL
          </h2>
        </div>
        <div className="glass-panel rounded-lg px-3 py-1.5 text-xs text-mono glow-text-cyan">
          LAYER: APPLICATION
        </div>
      </div>

      {/* Question */}
      <div className="glass-panel-highlight rounded-lg p-4">
        <p className="text-sm text-muted-foreground">
          You need to access a web page. Which protocol should you use to request it from the server?
        </p>
      </div>

      {/* Protocol cards */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {protocols.map((p, i) => (
          <button
            key={p.name}
            onClick={() => handleSelect(i)}
            className={`glass-panel rounded-lg p-4 text-left transition-all duration-300 hover:scale-[1.02] ${
              selected === i
                ? feedback === "success"
                  ? "neon-border-green"
                  : "neon-border-red"
                : "hover:neon-border-cyan"
            } ${
              feedback === "error" && selected === i ? "animate-[glitch_0.3s_ease-in-out]" : ""
            }`}
            disabled={feedback === "success"}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-display text-sm tracking-wider">{p.name}</span>
              {selected === i && feedback === "success" && (
                <CheckCircle className="w-4 h-4 text-layer-transport" />
              )}
              {selected === i && feedback === "error" && (
                <XCircle className="w-4 h-4 text-destructive" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">{p.description}</p>
          </button>
        ))}
      </div>

      {/* Continue */}
      {feedback === "success" && (
        <button className="glass-panel neon-border-green rounded-lg px-4 py-3 text-display text-sm tracking-widest text-layer-transport flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform animate-fade-in">
          CONTINUE <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default MissionPanel;
