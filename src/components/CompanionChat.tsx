import { useState, useEffect } from "react";
import { MessageCircle, Lightbulb, SkipForward, ChevronRight } from "lucide-react";

const messages = [
  { text: "Welcome, Packet! I'm PING, your guide through the network.", emotion: "happy" },
  { text: "Your mission: travel through all 4 TCP/IP layers to reach the destination.", emotion: "happy" },
  { text: "Each layer will test your knowledge. Ready to begin?", emotion: "happy" },
];

const CompanionChat = () => {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentMsg >= messages.length) return;
    setIsTyping(true);
    setDisplayText("");
    const text = messages[currentMsg].text;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [currentMsg]);

  const emotion = messages[currentMsg]?.emotion || "happy";

  return (
    <div className="glass-panel rounded-xl p-4 w-80 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
            style={{
              background: "linear-gradient(135deg, hsl(200 100% 50% / 0.3), hsl(280 80% 60% / 0.3))",
              boxShadow: "0 0 20px hsl(200 100% 50% / 0.3)",
            }}
          >
            {emotion === "happy" ? "😊" : emotion === "warning" ? "⚠️" : "❌"}
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-layer-transport border-2 border-background" />
        </div>
        <div>
          <div className="text-display text-xs tracking-widest glow-text-cyan">PING</div>
          <div className="text-[10px] text-muted-foreground">Network Assistant</div>
        </div>
        <MessageCircle className="w-4 h-4 text-muted-foreground ml-auto" />
      </div>

      {/* Chat area */}
      <div className="glass-panel-highlight rounded-lg p-3 min-h-[100px]">
        <p className="text-sm leading-relaxed">
          {displayText}
          {isTyping && (
            <span className="inline-block w-2 h-4 ml-1 bg-primary animate-pulse-glow" />
          )}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentMsg((prev) => Math.min(prev + 1, messages.length - 1))}
          className="flex-1 glass-panel rounded-lg px-3 py-2 text-xs font-display tracking-wider text-foreground hover:neon-border-cyan transition-all flex items-center justify-center gap-1"
        >
          NEXT <ChevronRight className="w-3 h-3" />
        </button>
        <button className="glass-panel rounded-lg px-3 py-2 text-xs font-display tracking-wider text-muted-foreground hover:text-layer-internet transition-colors flex items-center gap-1">
          <Lightbulb className="w-3 h-3" /> HINT
        </button>
        <button className="glass-panel rounded-lg px-3 py-2 text-xs font-display tracking-wider text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1">
          <SkipForward className="w-3 h-3" /> SKIP
        </button>
      </div>
    </div>
  );
};

export default CompanionChat;
