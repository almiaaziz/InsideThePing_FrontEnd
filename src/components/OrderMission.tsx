import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useGameStore } from "../game/store";
import { shuffle } from "@/lib/utils";

const OrderMission = ({ mission }) => {
  const nextStep = useGameStore((state) => state.nextStep);
  const increaseXP = useGameStore((state) => state.increaseXP);

  const [items, setItems] = useState(() => shuffle([...mission.items]));

  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const status = validated ? "success" : error ? "error" : "idle";
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("index");

    const newItems = [...items];
    const temp = newItems[dragIndex];

    newItems[dragIndex] = newItems[dropIndex];
    newItems[dropIndex] = temp;

    setItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const checkOrder = () => {
    const currentOrder = items.map((i) => i.id);
    const isCorrect =
      JSON.stringify(currentOrder) === JSON.stringify(mission.answer);

    if (isCorrect) {
      setValidated(true);
      increaseXP(20);
    } else {
      setError(true);

      setTimeout(() => {
        setItems(shuffle([...mission.items]));
        setError(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col flex-1 gap-4">
      {/* HEADER */}
      <div className="glass-panel rounded-xl p-4">
        <h2 className="text-lg text-cyan-400">{mission.title}</h2>
        <p className="text-sm text-muted-foreground">{mission.question}</p>
      </div>

      {/* DRAG LIST */}
      <div className="flex flex-col flex-1 gap-5">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className={`glass-panel rounded-lg p-4 cursor-move flex-1 flex items-center justify-center transition-all

      ${
        status === "success"
          ? "neon-border-green"
          : status === "error"
            ? "neon-border-red animate-[glitch_0.4s_ease-in-out]"
            : "hover:neon-border-cyan"
      }

    `}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* VALIDATE */}
      {!validated && (
        <button
          onClick={checkOrder}
          className={`glass-panel neon-border-cyan rounded-lg px-4 py-3
            ${status === "error" ? "neon-border-red animate-[glitch_0.4s_ease-in-out]" : ""}`
          }
        >
          VALIDATE
        </button>
      )}

      {/* CONTINUE */}
      {validated && (
        <button
          onClick={nextStep}
          className="glass-panel neon-border-green rounded-lg px-4 py-3 flex items-center justify-center gap-2"
        >
          CONTINUE <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default OrderMission;
