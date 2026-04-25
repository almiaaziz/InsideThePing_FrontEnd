import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useGameStore } from "../game/store";
import { shuffle } from "@/lib/utils";

const MatchMission = ({ mission }) => {
  const nextStep = useGameStore((state) => state.nextStep);
  const increaseXP = useGameStore((state) => state.increaseXP);

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
    (key) => mission.answer[key] === matches[key],
  );

  const handleLeftClick = (id) => {
    setSelectedLeft(id);
  };

  const handleRightClick = (rightId) => {
    if (!selectedLeft) return;

    setMatches((prev) => ({
      ...prev,
      [selectedLeft]: rightId,
    }));

    setSelectedLeft(null);
  };

  const isComplete = Object.keys(matches).length === mission.left.length;

  const checkAnswers = () => {
    let correct = true;

    for (const key in mission.answer) {
      if (mission.answer[key] !== matches[key]) {
        correct = false;
        break;
      }
    }
    if (allCorrect) {
      setValidated(true);
      increaseXP(15);
    } else {
      setError(true);
      setValidated(true); // ← add this so error styles actually apply

      setTimeout(() => {
        setMatches({});
        setError(false);
        setValidated(false); // ← reset both together
      }, 1000);
    }
  };

  const isLeftMatched = (leftId) => {
    return matches[leftId] !== undefined;
  };

  const isLeftCorrect = (leftId) => {
    return mission.answer[leftId] === matches[leftId];
  };

  const isRightMatched = (rightId) => {
    return Object.values(matches).includes(rightId);
  };

  const isRightCorrect = (rightId) => {
    const entry = Object.entries(matches).find(([, r]) => r === rightId);
    if (!entry) return false;

    const [leftId] = entry;
    return mission.answer[leftId] === rightId;
  };
  useEffect(() => {
    const newLines = [];

    Object.entries(matches).forEach(([leftId, rightId]) => {
      const leftEl = leftRefs.current[leftId];
      const rightEl = rightRefs.current[rightId as string];

      if (!leftEl || !rightEl) return;

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
  console.log("mission left", mission.left);
  console.log("mission right", mission.right);

  return (
    <div ref={containerRef} className="relative flex flex-col flex-1">
      {/* SVG LINES */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={validated ? (error ? "red" : "green") : "cyan"}
            strokeWidth="2"
          />
        ))}
      </svg>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-20 flex-1">
        {/* LEFT */}
        <div className="flex flex-col flex-1">
          {leftItems.map((item) => (
            <button
              key={item.id}
              ref={(el) => (leftRefs.current[item.id] = el)}
              onClick={() => handleLeftClick(item.id)}
              className={`flex-1 m-1 glass-panel rounded-lg flex items-center justify-center
  ${
    selectedLeft === item.id
      ? "neon-border-cyan"
      : isLeftMatched(item.id)
        ? validated
          ? error
            ? "neon-border-red"
            : "neon-border-green"
          : "neon-border-cyan"
        : ""
  }
  ${error && validated && isLeftMatched(item.id) ? "animate-[glitch_0.4s_ease-in-out]" : ""}
`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col flex-1">
          {rightItems.map((item) => {
            const isMatched = Object.values(matches).includes(item.id);

            return (
              <button
                key={item.id}
                ref={(el) => (rightRefs.current[item.id] = el)}
                onClick={() => handleRightClick(item.id)}
                className={`flex-1 m-1 glass-panel rounded-lg flex items-center justify-center
  ${
    isRightMatched(item.id)
      ? validated
        ? error
          ? "neon-border-red"
          : "neon-border-green"
        : "neon-border-cyan"
      : ""
  }
  ${error && validated && isRightMatched(item.id) ? "animate-[glitch_0.4s_ease-in-out]" : ""}
`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* VALIDATE */}
      {isComplete && !validated && (
        <button
          onClick={checkAnswers}
          className="glass-panel neon-border-cyan rounded-lg px-4 py-3 mt-4"
        >
          VALIDATE
        </button>
      )}

      {/* CONTINUE */}
      {validated && (
        <button
          onClick={nextStep}
          className={`glass-panel  rounded-lg px-4 py-3 mt-4 flex items-center justify-center gap-2
            ${error ? "neon-border-red" : "neon-border-green"}`

          }
        >
          CONTINUE <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default MatchMission;
