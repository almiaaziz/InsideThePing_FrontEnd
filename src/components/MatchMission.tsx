import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useGameStore } from "../game/store";
import { shuffle } from "@/lib/utils";
import { MissionResult } from "./MissionResult";

const MatchMission = ({ mission }) => {
  const nextStep = useGameStore((state) => state.nextStep);
  const updateStats = useGameStore((s) => s.updateStats);
  const [tries, setTries] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({});
  const [validated, setValidated] = useState(false);
  const containerRef = useRef(null);
  const leftRefs = useRef({});
  const rightRefs = useRef({});
  const [lines, setLines] = useState([]);
  const [error, setError] = useState(false);
  const [leftItems] = useState(() => shuffle([...mission.left]));
  const [rightItems] = useState(() => shuffle([...mission.right]));

  const allCorrect = Object.keys(matches).every(
    (key) => mission.answer[key] === matches[key]
  );

  const handleLeftClick = (id) => setSelectedLeft(id);

  const handleRightClick = (rightId) => {
    if (!selectedLeft) return;
    setMatches((prev) => ({ ...prev, [selectedLeft]: rightId }));
    setSelectedLeft(null);
  };

  const isComplete = Object.keys(matches).length === mission.left.length;

  const checkAnswers = () => {
    const nextTries = tries + 1;
    setTries(nextTries);
    let correct = true;
    for (const key in mission.answer) {
      if (mission.answer[key] !== matches[key]) { correct = false; break; }
    }
    if (allCorrect) {
      setValidated(true);
      updateStats(nextTries);
    } else {
      setError(true);
      setValidated(true);
      setTimeout(() => {
        setMatches({});
        setError(false);
        setValidated(false);
      }, 1000);
    }
  };

  const isLeftMatched = (leftId) => matches[leftId] !== undefined;
  const isRightMatched = (rightId) => Object.values(matches).includes(rightId);

  useEffect(() => {
    const newLines = [];
    Object.entries(matches).forEach(([leftId, rightId]) => {
      const leftEl = leftRefs.current[leftId];
      const rightEl = rightRefs.current[rightId as string];
      if (!leftEl || !rightEl || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const leftRect = leftEl.getBoundingClientRect();
      const rightRect = rightEl.getBoundingClientRect();
      newLines.push({
        x1: leftRect.right - containerRect.left,
        y1: leftRect.top + leftRect.height / 2 - containerRect.top,
        x2: rightRect.left - containerRect.left,
        y2: rightRect.top + rightRect.height / 2 - containerRect.top,
        correct: mission.answer[leftId] === rightId,
      });
    });
    setLines(newLines);
  }, [matches]);

  return (
    <>
      {!showResult ? (
        <div ref={containerRef} className="relative flex flex-col flex-1 gap-3">
          {/* SVG LINES */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {lines.map((line, i) => (
              <line
                key={i}
                x1={line.x1} y1={line.y1}
                x2={line.x2} y2={line.y2}
                stroke={validated ? (error ? "red" : "green") : "cyan"}
                strokeWidth="2"
              />
            ))}
          </svg>

          {/* GRID — reduce gap on mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-20 flex-1">
            {/* LEFT */}
            <div className="flex flex-col flex-1 gap-1 sm:gap-2">
              {leftItems.map((item) => (
                <button
                  key={item.id}
                  ref={(el) => (leftRefs.current[item.id] = el)}
                  onClick={() => handleLeftClick(item.id)}
                  className={`flex-1 min-h-[44px] glass-panel rounded-lg flex items-center justify-center text-xs sm:text-sm p-2 text-center
                    ${selectedLeft === item.id ? "neon-border-cyan"
                      : isLeftMatched(item.id)
                        ? validated ? (error ? "neon-border-red" : "neon-border-green") : "neon-border-cyan"
                        : ""}
                    ${error && validated && isLeftMatched(item.id) ? "animate-[glitch_0.4s_ease-in-out]" : ""}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex flex-col flex-1 gap-1 sm:gap-2">
              {rightItems.map((item) => (
                <button
                  key={item.id}
                  ref={(el) => (rightRefs.current[item.id] = el)}
                  onClick={() => handleRightClick(item.id)}
                  className={`flex-1 min-h-[44px] glass-panel rounded-lg flex items-center justify-center text-xs sm:text-sm p-2 text-center
                    ${isRightMatched(item.id)
                      ? validated ? (error ? "neon-border-red" : "neon-border-green") : "neon-border-cyan"
                      : ""}
                    ${error && validated && isRightMatched(item.id) ? "animate-[glitch_0.4s_ease-in-out]" : ""}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {isComplete && !validated && (
            <button onClick={checkAnswers} className="glass-panel neon-border-cyan rounded-lg px-4 py-2 sm:py-3 text-xs sm:text-sm">
              VALIDATE
            </button>
          )}

          {validated && (
            <button
              onClick={() => setShowResult(true)}
              className={`glass-panel rounded-lg px-4 py-2 sm:py-3 flex items-center justify-center gap-2 text-xs sm:text-sm ${error ? "neon-border-red" : "neon-border-green"}`}
            >
              CONTINUE <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        <MissionResult tries={tries} onContinue={nextStep} />
      )}
    </>
  );
};

export default MatchMission;