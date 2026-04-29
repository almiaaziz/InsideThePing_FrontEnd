import { useState } from "react";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { useGameStore } from "../game/store";
import { shuffle } from "@/lib/utils";
import { MissionResult } from "./MissionResult";

const QuizMission = ({ mission }) => {
  const nextStep = useGameStore((state) => state.nextStep);

  const updateStats = useGameStore((s) => s.updateStats);
  const [tries, setTries] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [options] = useState(() => shuffle([...mission.options]));

const handleSelect = (option) => {
  if (feedback === "success") return;

  const nextTries = tries + 1;
  setTries(nextTries);

  setSelected(option.id);

  if (option.id === mission.answer) {
    updateStats(nextTries);
    setFeedback("success");
  } else {
    setFeedback("error");

    setTimeout(() => {
      setSelected(null);
      setFeedback(null);
    }, 1200);
  }
};

  return (
    <>
      {!showResult ? (
        <>
          {/* OPTIONS */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt)}
                className={`glass-panel rounded-lg p-4 text-left transition-all duration-300 hover:scale-[1.02]
              ${
                selected === opt.id
                  ? feedback === "success"
                    ? "neon-border-green"
                    : "neon-border-red"
                  : "hover:neon-border-cyan"
              }
              ${
                feedback === "error" && selected === opt.id
                  ? "animate-[glitch_1s_ease-in-out]"
                  : ""
              }
            `}
                disabled={feedback === "success"}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-display text-sm tracking-wider">
                    {opt.label}
                  </span>

                  {selected === opt.id && feedback === "success" && (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  )}

                  {selected === opt.id && feedback === "error" && (
                    <XCircle className="w-4 h-4 text-red-400" />
                  )}
                </div>
                {selected === opt.id && (
                  <p className="text-lg text-muted-foreground">
                    {opt.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* CONTINUE */}
          {feedback === "success" && (
            <button
              onClick={() => setShowResult(true)}
              className="glass-panel neon-border-green rounded-lg px-4 py-3 text-display text-sm tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform animate-fade-in"
            >
              CONTINUE <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </>
      ) : (
        <MissionResult tries={tries} onContinue={nextStep} />
      )}
    </>
  );
};

export default QuizMission;
