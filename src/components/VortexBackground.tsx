const VortexBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(200 100% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(200 100% 50% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "grid-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Vortex rings */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border opacity-20"
          style={{
            width: `${i * 250}px`,
            height: `${i * 250}px`,
            marginLeft: `${-i * 125}px`,
            marginTop: `${-i * 125}px`,
            borderColor: `hsl(200 100% 50% / ${0.3 - i * 0.05})`,
            animation: `rotate-slow ${15 + i * 5}s linear infinite ${i % 2 === 0 ? "reverse" : ""}`,
            boxShadow: `0 0 ${20 + i * 10}px hsl(200 100% 50% / ${0.1 - i * 0.02}), inset 0 0 ${20 + i * 10}px hsl(200 100% 50% / ${0.05})`,
          }}
        />
      ))}

      {/* Central glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(200 100% 50% / 0.08) 0%, transparent 70%)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />

      {/* Radial fade edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(220 20% 4%) 80%)",
        }}
      />
    </div>
  );
};

export default VortexBackground;
