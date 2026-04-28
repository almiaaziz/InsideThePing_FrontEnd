
// ════════════════════════════════════════════════════════════
// TRANSPORT LAYER — Topic 1: PORTS
// ════════════════════════════════════════════════════════════

import { GridDefs } from "../SceneIllustration";

export const MultipleServicesIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Multiple services running on one computer"
  >
    <GridDefs id="grid-multisvc" />
    <rect width="800" height="400" fill="url(#grid-multisvc)" opacity="0.3" />

    {/* Computer in center */}
    <g>
      <rect
        x="320"
        y="150"
        width="160"
        height="100"
        rx="8"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 50%)"
        strokeWidth="2"
      />
      <rect
        x="335"
        y="165"
        width="130"
        height="60"
        rx="3"
        fill="hsl(140 100% 50% / 0.1)"
        stroke="hsl(140 100% 50% / 0.5)"
      />
      <text
        x="400"
        y="200"
        textAnchor="middle"
        fill="hsl(140 100% 80%)"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        COMPUTER
      </text>
    </g>

    {/* Browser top-left */}
    <g transform="translate(120, 70)">
      <rect
        width="90"
        height="65"
        rx="4"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
        strokeWidth="1.5"
      />
      <rect width="90" height="14" fill="hsl(200 100% 60% / 0.3)" />
      <circle cx="8" cy="7" r="2" fill="hsl(200 100% 60%)" />
      <circle cx="16" cy="7" r="2" fill="hsl(200 100% 60%)" />
      <circle cx="24" cy="7" r="2" fill="hsl(200 100% 60%)" />
      <line x1="10" y1="30" x2="80" y2="30" stroke="hsl(200 100% 60% / 0.6)" />
      <line x1="10" y1="42" x2="65" y2="42" stroke="hsl(200 100% 60% / 0.4)" />
      <text
        x="45"
        y="85"
        textAnchor="middle"
        fill="hsl(200 100% 70%)"
        fontSize="10"
        fontFamily="monospace"
      >
        BROWSER
      </text>
    </g>

    {/* Mail top-right */}
    <g transform="translate(590, 75)">
      <rect
        width="90"
        height="55"
        rx="4"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 60%)"
        strokeWidth="1.5"
      />
      <polyline
        points="0,0 45,32 90,0"
        fill="none"
        stroke="hsl(140 100% 60%)"
        strokeWidth="1.5"
      />
      <text
        x="45"
        y="80"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="10"
        fontFamily="monospace"
      >
        MAIL
      </text>
    </g>

    {/* Files bottom-left */}
    <g transform="translate(120, 270)">
      <path
        d="M 0 10 L 30 10 L 35 0 L 90 0 L 90 65 L 0 65 Z"
        fill="hsl(220 30% 8%)"
        stroke="hsl(30 100% 60%)"
        strokeWidth="1.5"
      />
      <line x1="15" y1="30" x2="75" y2="30" stroke="hsl(30 100% 60% / 0.5)" />
      <line x1="15" y1="42" x2="60" y2="42" stroke="hsl(30 100% 60% / 0.5)" />
      <text
        x="45"
        y="85"
        textAnchor="middle"
        fill="hsl(30 100% 70%)"
        fontSize="10"
        fontFamily="monospace"
      >
        FILES
      </text>
    </g>

    {/* Chat bottom-right */}
    <g transform="translate(590, 270)">
      <path
        d="M 5 0 L 85 0 Q 90 0 90 5 L 90 45 Q 90 50 85 50 L 30 50 L 18 62 L 22 50 L 5 50 Q 0 50 0 45 L 0 5 Q 0 0 5 0 Z"
        fill="hsl(220 30% 8%)"
        stroke="hsl(180 100% 60%)"
        strokeWidth="1.5"
      />
      <circle cx="25" cy="25" r="2" fill="hsl(180 100% 70%)" />
      <circle cx="45" cy="25" r="2" fill="hsl(180 100% 70%)" />
      <circle cx="65" cy="25" r="2" fill="hsl(180 100% 70%)" />
      <text
        x="45"
        y="82"
        textAnchor="middle"
        fill="hsl(180 100% 70%)"
        fontSize="10"
        fontFamily="monospace"
      >
        CHAT
      </text>
    </g>

    {/* Connection lines */}
    {[
      { x: 210, y: 102 },
      { x: 590, y: 102 },
      { x: 210, y: 302 },
      { x: 590, y: 295 },
    ].map((p, i) => (
      <line
        key={i}
        x1="400"
        y1="200"
        x2={p.x}
        y2={p.y}
        stroke="hsl(140 100% 50% / 0.3)"
        strokeWidth="1"
        strokeDasharray="3 4"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.2;0.7;0.2"
          dur="2s"
          begin={`${i * 0.4}s`}
          repeatCount="indefinite"
        />
      </line>
    ))}
  </svg>
);

export const DoorsIllustration = () => {
  const doors = [
    { port: "80", label: "HTTP", highlight: true },
    { port: "21", label: "FTP", highlight: false },
    { port: "53", label: "DNS", highlight: false },
    { port: "25", label: "SMTP", highlight: false },
    { port: "22", label: "SSH", highlight: false },
  ];

  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="Network ports as doors"
    >
      <GridDefs id="grid-doors" />
      <rect width="800" height="400" fill="url(#grid-doors)" opacity="0.3" />

      <g>
        <rect
          x="320"
          y="30"
          width="160"
          height="100"
          rx="8"
          fill="hsl(220 30% 8%)"
          stroke="hsl(140 100% 50%)"
          strokeWidth="2"
        />
        <rect
          x="335"
          y="48"
          width="130"
          height="60"
          rx="3"
          fill="hsl(140 100% 50% / 0.1)"
          stroke="hsl(140 100% 50% / 0.5)"
        />
        <text
          x="400"
          y="82"
          textAnchor="middle"
          fill="hsl(140 100% 80%)"
          fontSize="12"
          fontFamily="monospace"
          fontWeight="bold"
        >
          COMPUTER
        </text>
        <text
          x="400"
          y="98"
          textAnchor="middle"
          fill="hsl(140 100% 60%)"
          fontSize="9"
          fontFamily="monospace"
        >
          multiple services
        </text>
      </g>

      {doors.map((_, i) => (
        <line
          key={`l-${i}`}
          x1="400"
          y1="130"
          x2={130 + i * 135}
          y2="220"
          stroke="hsl(140 100% 50% / 0.3)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      ))}

      {doors.map((door, i) => (
        <g key={i} transform={`translate(${100 + i * 135}, 220)`}>
          <rect
            width="60"
            height="130"
            rx="4"
            fill={
              door.highlight ? "hsl(140 100% 50% / 0.25)" : "hsl(220 30% 8%)"
            }
            stroke={
              door.highlight ? "hsl(140 100% 65%)" : "hsl(140 100% 50% / 0.5)"
            }
            strokeWidth={door.highlight ? "2" : "1"}
          >
            {door.highlight && (
              <animate
                attributeName="stroke-opacity"
                values="1;0.4;1"
                dur="1.5s"
                repeatCount="indefinite"
              />
            )}
          </rect>
          <circle
            cx="48"
            cy="65"
            r="3"
            fill={
              door.highlight ? "hsl(140 100% 80%)" : "hsl(140 100% 50% / 0.6)"
            }
          />
          <text
            x="30"
            y="38"
            textAnchor="middle"
            fill={door.highlight ? "hsl(140 100% 85%)" : "hsl(140 100% 60%)"}
            fontSize="16"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {door.port}
          </text>
          <text
            x="30"
            y="115"
            textAnchor="middle"
            fill="hsl(140 100% 60%)"
            fontSize="9"
            fontFamily="monospace"
          >
            {door.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export const PortMappingIllustration = () => {
  const pairs = [
    { proto: "HTTP", port: "80", color: "200 100% 60%", y: 90 },
    { proto: "FTP", port: "21", color: "30 100% 60%", y: 200 },
    { proto: "DNS", port: "53", color: "180 100% 60%", y: 310 },
  ];
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="Protocols mapping to specific ports"
    >
      <GridDefs id="grid-portmap" />
      <rect width="800" height="400" fill="url(#grid-portmap)" opacity="0.3" />

      {pairs.map((p, i) => (
        <g key={i}>
          {/* Protocol packet on left */}
          <rect
            x="100"
            y={p.y - 25}
            width="120"
            height="50"
            rx="6"
            fill={`hsl(${p.color} / 0.2)`}
            stroke={`hsl(${p.color})`}
            strokeWidth="2"
          />
          <text
            x="160"
            y={p.y + 6}
            textAnchor="middle"
            fill={`hsl(${p.color})`}
            fontSize="16"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {p.proto}
          </text>

          {/* Animated arrow */}
          <line
            x1="220"
            y1={p.y}
            x2="560"
            y2={p.y}
            stroke={`hsl(${p.color})`}
            strokeWidth="2"
            strokeDasharray="6 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-20"
              dur="1s"
              repeatCount="indefinite"
            />
          </line>
          <polygon
            points={`555,${p.y - 6} 572,${p.y} 555,${p.y + 6}`}
            fill={`hsl(${p.color})`}
          />

          {/* Door on right */}
          <rect
            x="580"
            y={p.y - 50}
            width="100"
            height="100"
            rx="4"
            fill="hsl(220 30% 8%)"
            stroke={`hsl(${p.color})`}
            strokeWidth="2"
          />
          <circle cx="668" cy={p.y} r="3" fill={`hsl(${p.color})`} />
          <text
            x="630"
            y={p.y + 8}
            textAnchor="middle"
            fill={`hsl(${p.color})`}
            fontSize="22"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {p.port}
          </text>
        </g>
      ))}
    </svg>
  );
};

export const Port80Illustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="HTTP port 80"
  >
    <GridDefs id="grid-p80" />
    <rect width="800" height="400" fill="url(#grid-p80)" opacity="0.3" />

    {/* Browser icon top-left */}
    <g transform="translate(80, 60)">
      <rect
        width="120"
        height="90"
        rx="6"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
        strokeWidth="2"
      />
      <rect width="120" height="20" fill="hsl(200 100% 60% / 0.3)" />
      <circle cx="10" cy="10" r="3" fill="hsl(200 100% 60%)" />
      <circle cx="20" cy="10" r="3" fill="hsl(200 100% 60%)" />
      <line
        x1="15"
        y1="40"
        x2="105"
        y2="40"
        stroke="hsl(200 100% 60% / 0.6)"
        strokeWidth="1.5"
      />
      <line
        x1="15"
        y1="55"
        x2="90"
        y2="55"
        stroke="hsl(200 100% 60% / 0.4)"
        strokeWidth="1.5"
      />
      <line
        x1="15"
        y1="70"
        x2="80"
        y2="70"
        stroke="hsl(200 100% 60% / 0.4)"
        strokeWidth="1.5"
      />
      <text
        x="60"
        y="115"
        textAnchor="middle"
        fill="hsl(200 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        HTTP
      </text>
    </g>

    {/* Animated packet flying toward door */}
    <rect
      width="22"
      height="22"
      rx="3"
      fill="hsl(200 100% 60%)"
      stroke="hsl(200 100% 90%)"
    >
      <animate
        attributeName="x"
        from="220"
        to="500"
        dur="2.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="120;180;120"
        dur="2.5s"
        repeatCount="indefinite"
      />
    </rect>

    {/* Big highlighted door */}
    <g transform="translate(540, 90)">
      <rect
        width="180"
        height="260"
        rx="8"
        fill="hsl(140 100% 50% / 0.25)"
        stroke="hsl(140 100% 65%)"
        strokeWidth="3"
      >
        <animate
          attributeName="stroke-opacity"
          values="1;0.5;1"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="155" cy="130" r="6" fill="hsl(140 100% 80%)" />
      <text
        x="90"
        y="80"
        textAnchor="middle"
        fill="hsl(140 100% 85%)"
        fontSize="48"
        fontFamily="monospace"
        fontWeight="bold"
      >
        80
      </text>
      <text
        x="90"
        y="240"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="14"
        fontFamily="monospace"
      >
        PORT 80
      </text>
    </g>
  </svg>
);

export const Port21Illustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="FTP port 21"
  >
    <GridDefs id="grid-p21" />
    <rect width="800" height="400" fill="url(#grid-p21)" opacity="0.3" />

    {/* Folder icon top-left */}
    <g transform="translate(80, 70)">
      <path
        d="M 0 15 L 40 15 L 50 0 L 130 0 L 130 90 L 0 90 Z"
        fill="hsl(220 30% 8%)"
        stroke="hsl(30 100% 60%)"
        strokeWidth="2"
      />
      <rect
        x="15"
        y="30"
        width="100"
        height="6"
        fill="hsl(30 100% 60% / 0.4)"
      />
      <rect x="15" y="44" width="80" height="6" fill="hsl(30 100% 60% / 0.4)" />
      <rect x="15" y="58" width="90" height="6" fill="hsl(30 100% 60% / 0.4)" />
      <rect x="15" y="72" width="70" height="6" fill="hsl(30 100% 60% / 0.4)" />
      <text
        x="65"
        y="115"
        textAnchor="middle"
        fill="hsl(30 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        FTP
      </text>
    </g>

    <rect
      width="22"
      height="22"
      rx="3"
      fill="hsl(30 100% 60%)"
      stroke="hsl(30 100% 90%)"
    >
      <animate
        attributeName="x"
        from="230"
        to="500"
        dur="2.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="120;180;120"
        dur="2.5s"
        repeatCount="indefinite"
      />
    </rect>

    <g transform="translate(540, 90)">
      <rect
        width="180"
        height="260"
        rx="8"
        fill="hsl(140 100% 50% / 0.25)"
        stroke="hsl(140 100% 65%)"
        strokeWidth="3"
      >
        <animate
          attributeName="stroke-opacity"
          values="1;0.5;1"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="155" cy="130" r="6" fill="hsl(140 100% 80%)" />
      <text
        x="90"
        y="80"
        textAnchor="middle"
        fill="hsl(140 100% 85%)"
        fontSize="48"
        fontFamily="monospace"
        fontWeight="bold"
      >
        21
      </text>
      <text
        x="90"
        y="240"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="14"
        fontFamily="monospace"
      >
        PORT 21
      </text>
    </g>
  </svg>
);

export const CorrectDoorIllustration = () => {
  const doors = [
    { port: "80", correct: true },
    { port: "21", correct: false },
    { port: "53", correct: false },
    { port: "25", correct: false },
    { port: "22", correct: false },
  ];

  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="Choosing the correct port door"
    >
      <GridDefs id="grid-correctdoor" />
      <rect
        width="800"
        height="400"
        fill="url(#grid-correctdoor)"
        opacity="0.3"
      />

      {/* Packet entering correct door */}
      <rect
        width="22"
        height="22"
        rx="3"
        fill="hsl(200 100% 60%)"
        stroke="hsl(200 100% 90%)"
      >
        <animate
          attributeName="x"
          values="60;80;80"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="40;230;230"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>

      {doors.map((door, i) => (
        <g key={i} transform={`translate(${80 + i * 135}, 230)`}>
          <rect
            width="80"
            height="140"
            rx="4"
            fill={door.correct ? "hsl(140 100% 50% / 0.3)" : "hsl(220 30% 8%)"}
            stroke={door.correct ? "hsl(140 100% 65%)" : "hsl(0 70% 40%)"}
            strokeWidth={door.correct ? "2.5" : "1.5"}
            opacity={door.correct ? 1 : 0.4}
          >
            {door.correct && (
              <animate
                attributeName="stroke-opacity"
                values="1;0.4;1"
                dur="1.5s"
                repeatCount="indefinite"
              />
            )}
          </rect>
          <circle
            cx="65"
            cy="70"
            r="3"
            fill={door.correct ? "hsl(140 100% 80%)" : "hsl(0 70% 50%)"}
            opacity={door.correct ? 1 : 0.5}
          />
          <text
            x="40"
            y="40"
            textAnchor="middle"
            fill={door.correct ? "hsl(140 100% 85%)" : "hsl(0 0% 50%)"}
            fontSize="20"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {door.port}
          </text>
          {!door.correct && (
            <g transform="translate(40, 80)">
              <line
                x1="-10"
                y1="-10"
                x2="10"
                y2="10"
                stroke="hsl(0 70% 55%)"
                strokeWidth="2"
              />
              <line
                x1="-10"
                y1="10"
                x2="10"
                y2="-10"
                stroke="hsl(0 70% 55%)"
                strokeWidth="2"
              />
            </g>
          )}
          {door.correct && (
            <text
              x="40"
              y="120"
              textAnchor="middle"
              fill="hsl(140 100% 80%)"
              fontSize="10"
              fontFamily="monospace"
            >
              ✓ OPEN
            </text>
          )}
        </g>
      ))}
    </svg>
  );
};

// ════════════════════════════════════════════════════════════
// TRANSPORT LAYER — Topic 2: SEGMENTATION
// ════════════════════════════════════════════════════════════

export const BigMessageIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Message too big for the conduit"
  >
    <GridDefs id="grid-bigmsg" />
    <rect width="800" height="400" fill="url(#grid-bigmsg)" opacity="0.3" />

    {/* Big oversized data block */}
    <g>
      <rect
        x="100"
        y="50"
        width="320"
        height="300"
        rx="12"
        fill="hsl(140 100% 50% / 0.2)"
        stroke="hsl(140 100% 50%)"
        strokeWidth="3"
      >
        <animate
          attributeName="x"
          values="100;110;100"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="260"
        y="190"
        textAnchor="middle"
        fill="hsl(140 100% 80%)"
        fontSize="28"
        fontFamily="monospace"
        fontWeight="bold"
      >
        MESSAGE
      </text>
      <text
        x="260"
        y="225"
        textAnchor="middle"
        fill="hsl(140 100% 60%)"
        fontSize="14"
        fontFamily="monospace"
      >
        huge
      </text>
    </g>

    {/* Narrow conduit on right */}
    <g>
      <rect
        x="500"
        y="180"
        width="280"
        height="40"
        rx="20"
        fill="hsl(220 30% 8%)"
        stroke="hsl(0 70% 50%)"
        strokeWidth="2"
      />
      <text
        x="640"
        y="160"
        textAnchor="middle"
        fill="hsl(0 70% 60%)"
        fontSize="11"
        fontFamily="monospace"
      >
        NETWORK CONDUIT
      </text>
      <text
        x="640"
        y="245"
        textAnchor="middle"
        fill="hsl(0 70% 60%)"
        fontSize="11"
        fontFamily="monospace"
      >
        too narrow!
      </text>
    </g>

    {/* Crash indicators */}
    <g transform="translate(450, 200)">
      <text
        x="0"
        y="0"
        textAnchor="middle"
        fill="hsl(0 80% 60%)"
        fontSize="32"
        fontFamily="monospace"
        fontWeight="bold"
      >
        ✕
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="1s"
          repeatCount="indefinite"
        />
      </text>
    </g>
  </svg>
);

export const SplitSegmentsIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Data segmentation animation"
  >
    <GridDefs id="grid-segments" />
    <rect width="800" height="400" fill="url(#grid-segments)" opacity="0.3" />

    <g>
      <rect
        x="40"
        y="140"
        width="170"
        height="120"
        rx="8"
        fill="hsl(140 100% 50% / 0.15)"
        stroke="hsl(140 100% 50%)"
        strokeWidth="2"
      />
      <text
        x="125"
        y="195"
        textAnchor="middle"
        fill="hsl(140 100% 80%)"
        fontSize="16"
        fontFamily="monospace"
        fontWeight="bold"
      >
        MESSAGE
      </text>
      <text
        x="125"
        y="220"
        textAnchor="middle"
        fill="hsl(140 100% 60%)"
        fontSize="11"
        fontFamily="monospace"
        opacity="0.7"
      >
        too big to send
      </text>
    </g>

    <g>
      <line
        x1="220"
        y1="200"
        x2="320"
        y2="200"
        stroke="hsl(140 100% 70%)"
        strokeWidth="3"
        strokeDasharray="6 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-20"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </line>
      <polygon points="312,192 328,200 312,208" fill="hsl(140 100% 70%)" />
      <text
        x="270"
        y="185"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="10"
        fontFamily="monospace"
      >
        SPLIT
      </text>
    </g>

    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect
          x={360 + i * 100}
          y={170}
          width="60"
          height="60"
          rx="6"
          fill="hsl(140 100% 50% / 0.2)"
          stroke="hsl(140 100% 50%)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="2s"
            begin={`${i * 0.3}s`}
            repeatCount="indefinite"
          />
        </rect>
        <text
          x={390 + i * 100}
          y={208}
          textAnchor="middle"
          fill="hsl(140 100% 85%)"
          fontSize="22"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {i + 1}
        </text>
        <text
          x={390 + i * 100}
          y={252}
          textAnchor="middle"
          fill="hsl(140 100% 60%)"
          fontSize="9"
          fontFamily="monospace"
        >
          SEG #{i + 1}
        </text>
      </g>
    ))}
  </svg>
);

export const SequenceNumbersIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Segments with sequence numbers"
  >
    <GridDefs id="grid-seqnums" />
    <rect width="800" height="400" fill="url(#grid-seqnums)" opacity="0.3" />

    <text
      x="400"
      y="80"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      SEQUENCE NUMBERS
    </text>

    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${100 + i * 160}, 150)`}>
        <rect
          width="120"
          height="140"
          rx="8"
          fill="hsl(140 100% 50% / 0.15)"
          stroke="hsl(140 100% 50%)"
          strokeWidth="2"
        />
        {/* Number tag */}
        <rect
          x="-15"
          y="15"
          width="50"
          height="32"
          rx="6"
          fill="hsl(140 100% 50%)"
          stroke="hsl(140 100% 80%)"
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </rect>
        <text
          x="10"
          y="38"
          textAnchor="middle"
          fill="hsl(220 30% 5%)"
          fontSize="20"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {i + 1}
        </text>
        {/* Segment data */}
        <text
          x="60"
          y="85"
          textAnchor="middle"
          fill="hsl(140 100% 80%)"
          fontSize="14"
          fontFamily="monospace"
          fontWeight="bold"
        >
          SEG
        </text>
        <line
          x1="20"
          y1="100"
          x2="100"
          y2="100"
          stroke="hsl(140 100% 60% / 0.5)"
        />
        <line
          x1="20"
          y1="115"
          x2="80"
          y2="115"
          stroke="hsl(140 100% 60% / 0.5)"
        />
      </g>
    ))}

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(140 100% 60%)"
      fontSize="11"
      fontFamily="monospace"
    >
      each segment knows its position
    </text>
  </svg>
);

export const OutOfOrderIllustration = () => {
  // Segments scattered along curved paths
  const segs = [
    { num: 3, x: 400, y: 80 },
    { num: 1, x: 320, y: 180 },
    { num: 4, x: 480, y: 200 },
    { num: 2, x: 380, y: 300 },
  ];
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="Segments arriving out of order"
    >
      <GridDefs id="grid-ooo" />
      <rect width="800" height="400" fill="url(#grid-ooo)" opacity="0.3" />

      {/* Sender on left */}
      <g>
        <circle
          cx="80"
          cy="200"
          r="40"
          fill="hsl(220 30% 8%)"
          stroke="hsl(140 100% 50%)"
          strokeWidth="2"
        />
        <text
          x="80"
          y="205"
          textAnchor="middle"
          fill="hsl(140 100% 75%)"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="bold"
        >
          SEND
        </text>
      </g>

      {/* Curved paths */}
      {[
        "M 120 200 Q 240 60 400 80",
        "M 120 200 Q 220 200 320 180",
        "M 120 200 Q 280 280 480 200",
        "M 120 200 Q 220 320 380 300",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="hsl(140 100% 50% / 0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
      ))}

      {/* Scattered segments */}
      {segs.map((s, i) => (
        <g key={i} transform={`translate(${s.x}, ${s.y})`}>
          <rect
            x="-25"
            y="-25"
            width="50"
            height="50"
            rx="6"
            fill="hsl(140 100% 50% / 0.25)"
            stroke="hsl(140 100% 50%)"
            strokeWidth="1.5"
          >
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
            />
          </rect>
          <text
            textAnchor="middle"
            y="6"
            fill="hsl(140 100% 85%)"
            fontSize="20"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {s.num}
          </text>
        </g>
      ))}

      {/* Receiver on right */}
      <g>
        <circle
          cx="700"
          cy="200"
          r="40"
          fill="hsl(220 30% 8%)"
          stroke="hsl(140 100% 50%)"
          strokeWidth="2"
        />
        <text
          x="700"
          y="205"
          textAnchor="middle"
          fill="hsl(140 100% 75%)"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="bold"
        >
          RECV
        </text>
      </g>

      <text
        x="400"
        y="370"
        textAnchor="middle"
        fill="hsl(0 80% 65%)"
        fontSize="11"
        fontFamily="monospace"
      >
        arriving out of order
      </text>
    </svg>
  );
};

export const ReassembleIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Reassembling segments in order"
  >
    <GridDefs id="grid-reasm" />
    <rect width="800" height="400" fill="url(#grid-reasm)" opacity="0.3" />

    {/* Scattered incoming segments on left */}
    {[
      { num: 3, x: 80, y: 80 },
      { num: 1, x: 120, y: 180 },
      { num: 4, x: 60, y: 280 },
      { num: 2, x: 140, y: 320 },
    ].map((s, i) => (
      <g key={`in-${i}`} transform={`translate(${s.x}, ${s.y})`}>
        <rect
          x="-22"
          y="-22"
          width="44"
          height="44"
          rx="5"
          fill="hsl(140 100% 50% / 0.2)"
          stroke="hsl(140 100% 50%)"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <text
          textAnchor="middle"
          y="6"
          fill="hsl(140 100% 85%)"
          fontSize="18"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {s.num}
        </text>
      </g>
    ))}

    {/* Magnetic flow lines */}
    {[0, 1, 2, 3].map((i) => (
      <line
        key={`flow-${i}`}
        x1="180"
        y1={100 + i * 70}
        x2="500"
        y2={140 + i * 35}
        stroke="hsl(140 100% 60% / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-20"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </line>
    ))}

    {/* Reassembled in order on right */}
    <g transform="translate(540, 100)">
      <rect
        width="220"
        height="220"
        rx="10"
        fill="hsl(140 100% 50% / 0.08)"
        stroke="hsl(140 100% 50%)"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <text
        x="110"
        y="-10"
        textAnchor="middle"
        fill="hsl(140 100% 75%)"
        fontSize="11"
        fontFamily="monospace"
      >
        RECEIVER
      </text>
      {[1, 2, 3, 4].map((n, i) => (
        <g key={n} transform={`translate(20, ${20 + i * 48})`}>
          <rect
            width="180"
            height="40"
            rx="5"
            fill="hsl(140 100% 50% / 0.25)"
            stroke="hsl(140 100% 60%)"
            strokeWidth="1.5"
          >
            <animate
              attributeName="opacity"
              values="0;1"
              dur="0.8s"
              begin={`${i * 0.4}s`}
              fill="freeze"
            />
          </rect>
          <text
            x="20"
            y="26"
            fill="hsl(140 100% 85%)"
            fontSize="16"
            fontFamily="monospace"
            fontWeight="bold"
          >
            #{n}
          </text>
          <line
            x1="55"
            y1="20"
            x2="160"
            y2="20"
            stroke="hsl(140 100% 60% / 0.5)"
          />
        </g>
      ))}
    </g>
  </svg>
);

export const WhySegmentIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Why segmentation matters"
  >
    <GridDefs id="grid-why" />
    <rect width="800" height="400" fill="url(#grid-why)" opacity="0.3" />

    {/* Divider */}
    <line
      x1="400"
      y1="20"
      x2="400"
      y2="380"
      stroke="hsl(220 30% 25%)"
      strokeDasharray="6 6"
    />

    {/* LEFT — without segmentation (red, broken) */}
    <text
      x="200"
      y="50"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      WITHOUT
    </text>
    <g>
      <rect
        x="60"
        y="120"
        width="160"
        height="120"
        rx="8"
        fill="hsl(0 70% 50% / 0.2)"
        stroke="hsl(0 70% 60%)"
        strokeWidth="2"
      >
        <animate
          attributeName="x"
          values="60;70;60"
          dur="0.4s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="140"
        y="190"
        textAnchor="middle"
        fill="hsl(0 70% 75%)"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="bold"
      >
        BIG
      </text>
      {/* Narrow pipe */}
      <rect
        x="240"
        y="180"
        width="120"
        height="20"
        rx="10"
        fill="hsl(220 30% 8%)"
        stroke="hsl(0 70% 50%)"
      />
      {/* Crack effects */}
      <text
        x="240"
        y="170"
        fill="hsl(0 80% 65%)"
        fontSize="22"
        fontWeight="bold"
      >
        ✕
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </text>
    </g>
    <text
      x="200"
      y="290"
      textAnchor="middle"
      fill="hsl(0 70% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      stuck · breaks
    </text>

    {/* RIGHT — with segmentation (green, smooth) */}
    <text
      x="600"
      y="50"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      WITH
    </text>
    <g>
      <rect
        x="430"
        y="180"
        width="320"
        height="20"
        rx="10"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 50%)"
      />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          y="184"
          width="22"
          height="14"
          rx="2"
          fill="hsl(140 100% 50%)"
        >
          <animate
            attributeName="x"
            from="430"
            to="730"
            dur="2s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </g>
    <text
      x="600"
      y="290"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="11"
      fontFamily="monospace"
    >
      flows · reassembles
    </text>
  </svg>
);

// ════════════════════════════════════════════════════════════
// TRANSPORT LAYER — Topic 3: TCP vs UDP
// ════════════════════════════════════════════════════════════

export const TcpUdpIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="TCP vs UDP comparison"
  >
    <GridDefs id="grid-tcpudp" />
    <rect width="800" height="400" fill="url(#grid-tcpudp)" opacity="0.3" />

    <g>
      <text
        x="55"
        y="80"
        fill="hsl(140 100% 75%)"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
      >
        TCP
      </text>
      <text
        x="55"
        y="100"
        fill="hsl(140 100% 60%)"
        fontSize="11"
        fontFamily="monospace"
      >
        reliable
      </text>
      <rect
        x="140"
        y="75"
        width="600"
        height="60"
        rx="30"
        fill="hsl(140 100% 50% / 0.08)"
        stroke="hsl(140 100% 50%)"
        strokeWidth="2"
      />

      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${260 + i * 170}, 105)`}>
          <circle
            r="14"
            fill="hsl(140 100% 50% / 0.2)"
            stroke="hsl(140 100% 70%)"
            strokeWidth="1.5"
          />
          <path
            d="M -5 0 L -1 4 L 6 -4"
            stroke="hsl(140 100% 80%)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {[0, 1].map((i) => (
        <rect
          key={i}
          x="160"
          y="95"
          width="20"
          height="20"
          rx="3"
          fill="hsl(140 100% 50% / 0.7)"
          stroke="hsl(140 100% 80%)"
        >
          <animate
            attributeName="x"
            from="160"
            to="700"
            dur="6s"
            begin={`${i * 2}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </g>

    <line
      x1="50"
      y1="200"
      x2="750"
      y2="200"
      stroke="hsl(220 30% 30%)"
      strokeDasharray="4 6"
    />

    <g>
      <text
        x="55"
        y="275"
        fill="hsl(180 100% 75%)"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
      >
        UDP
      </text>
      <text
        x="55"
        y="295"
        fill="hsl(180 100% 60%)"
        fontSize="11"
        fontFamily="monospace"
      >
        fast
      </text>
      <rect
        x="140"
        y="265"
        width="600"
        height="60"
        rx="30"
        fill="hsl(180 100% 50% / 0.08)"
        stroke="hsl(180 100% 50%)"
        strokeWidth="2"
      />

      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={210 + i * 130}
          y1="295"
          x2={260 + i * 130}
          y2="295"
          stroke="hsl(180 100% 70% / 0.5)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
      ))}

      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="160"
          y="285"
          width="20"
          height="20"
          rx="3"
          fill="hsl(180 100% 50% / 0.7)"
          stroke="hsl(180 100% 80%)"
        >
          <animate
            attributeName="x"
            from="160"
            to="720"
            dur="2s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </g>
  </svg>
);

export const TcpReliableIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="TCP reliability with checkpoints"
  >
    <GridDefs id="grid-tcprel" />
    <rect width="800" height="400" fill="url(#grid-tcprel)" opacity="0.3" />

    <text
      x="400"
      y="60"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      TCP CHECKS EVERY SEGMENT
    </text>

    {/* Pipeline */}
    <rect
      x="80"
      y="170"
      width="640"
      height="60"
      rx="30"
      fill="hsl(140 100% 50% / 0.08)"
      stroke="hsl(140 100% 50%)"
      strokeWidth="2"
    />

    {/* Checkpoints */}
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${180 + i * 140}, 200)`}>
        <circle
          r="22"
          fill="hsl(140 100% 50% / 0.25)"
          stroke="hsl(140 100% 70%)"
          strokeWidth="2"
        />
        <path
          d="M -8 0 L -2 6 L 9 -6"
          stroke="hsl(140 100% 90%)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          textAnchor="middle"
          y="48"
          fill="hsl(140 100% 70%)"
          fontSize="9"
          fontFamily="monospace"
        >
          CHECK
        </text>
      </g>
    ))}

    {/* Slow careful packets */}
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x="100"
        y="190"
        width="20"
        height="20"
        rx="3"
        fill="hsl(140 100% 50%)"
        stroke="hsl(140 100% 90%)"
      >
        <animate
          attributeName="x"
          from="100"
          to="690"
          dur="6s"
          begin={`${i * 2}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}

    <text
      x="400"
      y="320"
      textAnchor="middle"
      fill="hsl(140 100% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      each segment verified · in correct order
    </text>
  </svg>
);

export const TcpRetransmitIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="TCP retransmits lost segment"
  >
    <GridDefs id="grid-tcpretx" />
    <rect width="800" height="400" fill="url(#grid-tcpretx)" opacity="0.3" />

    <text
      x="400"
      y="50"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      LOST? — RESEND
    </text>

    {/* Sender */}
    <g>
      <circle
        cx="80"
        cy="200"
        r="40"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 50%)"
        strokeWidth="2"
      />
      <text
        x="80"
        y="205"
        textAnchor="middle"
        fill="hsl(140 100% 75%)"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SEND
      </text>
    </g>
    {/* Receiver */}
    <g>
      <circle
        cx="720"
        cy="200"
        r="40"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 50%)"
        strokeWidth="2"
      />
      <text
        x="720"
        y="205"
        textAnchor="middle"
        fill="hsl(140 100% 75%)"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        RECV
      </text>
    </g>

    {/* Pipeline line */}
    <line
      x1="120"
      y1="200"
      x2="680"
      y2="200"
      stroke="hsl(140 100% 50% / 0.4)"
      strokeWidth="1.5"
      strokeDasharray="4 6"
    />

    {/* Lost segment falling */}
    <g>
      <rect
        width="22"
        height="22"
        rx="3"
        fill="hsl(0 80% 60%)"
        stroke="hsl(0 80% 90%)"
      >
        <animate
          attributeName="x"
          from="120"
          to="380"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="190;190;380"
          keyTimes="0;0.5;1"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;1;0"
          keyTimes="0;0.5;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
    </g>

    {/* Alert pulse going back */}
    <g>
      <circle r="12" fill="none" stroke="hsl(0 80% 65%)" strokeWidth="2">
        <animate
          attributeName="cx"
          from="380"
          to="80"
          dur="1.5s"
          begin="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="200;200"
          dur="1.5s"
          begin="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="6;18;6"
          dur="1.5s"
          begin="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0"
          dur="1.5s"
          begin="2s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    {/* Retransmit packet (green) */}
    <g>
      <rect
        width="22"
        height="22"
        rx="3"
        fill="hsl(140 100% 50%)"
        stroke="hsl(140 100% 90%)"
      >
        <animate
          attributeName="x"
          from="120"
          to="680"
          dur="3s"
          begin="3.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="190;190"
          dur="3s"
          begin="3.5s"
          repeatCount="indefinite"
        />
      </rect>
    </g>

    <text
      x="380"
      y="270"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      segment lost
    </text>
    <text
      x="600"
      y="270"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="11"
      fontFamily="monospace"
    >
      resent
    </text>
  </svg>
);

export const TcpUsecasesIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="TCP use cases"
  >
    <GridDefs id="grid-tcpuses" />
    <rect width="800" height="400" fill="url(#grid-tcpuses)" opacity="0.3" />

    <text
      x="400"
      y="60"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      USE TCP WHEN ACCURACY MATTERS
    </text>

    {/* TCP pipe */}
    <rect
      x="100"
      y="180"
      width="600"
      height="40"
      rx="20"
      fill="hsl(140 100% 50% / 0.1)"
      stroke="hsl(140 100% 50%)"
      strokeWidth="2"
    />
    <text
      x="400"
      y="205"
      textAnchor="middle"
      fill="hsl(140 100% 80%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      TCP
    </text>

    {/* Browser */}
    <g transform="translate(110, 270)">
      <rect
        width="120"
        height="80"
        rx="6"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 60%)"
        strokeWidth="1.5"
      />
      <rect width="120" height="16" fill="hsl(140 100% 60% / 0.3)" />
      <circle cx="8" cy="8" r="2.5" fill="hsl(140 100% 60%)" />
      <circle cx="18" cy="8" r="2.5" fill="hsl(140 100% 60%)" />
      <line
        x1="15"
        y1="35"
        x2="105"
        y2="35"
        stroke="hsl(140 100% 60% / 0.6)"
        strokeWidth="1.5"
      />
      <line
        x1="15"
        y1="50"
        x2="85"
        y2="50"
        stroke="hsl(140 100% 60% / 0.4)"
        strokeWidth="1.5"
      />
      <text
        x="60"
        y="103"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        WEB
      </text>
    </g>
    <line
      x1="170"
      y1="270"
      x2="170"
      y2="220"
      stroke="hsl(140 100% 60% / 0.6)"
      strokeDasharray="3 3"
    />

    {/* Mail */}
    <g transform="translate(340, 270)">
      <rect
        width="120"
        height="80"
        rx="6"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 60%)"
        strokeWidth="1.5"
      />
      <polyline
        points="0,0 60,45 120,0"
        fill="none"
        stroke="hsl(140 100% 60%)"
        strokeWidth="1.5"
      />
      <text
        x="60"
        y="103"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        EMAIL
      </text>
    </g>
    <line
      x1="400"
      y1="270"
      x2="400"
      y2="220"
      stroke="hsl(140 100% 60% / 0.6)"
      strokeDasharray="3 3"
    />

    {/* Files */}
    <g transform="translate(570, 270)">
      <path
        d="M 0 12 L 40 12 L 50 0 L 120 0 L 120 80 L 0 80 Z"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 60%)"
        strokeWidth="1.5"
      />
      <line x1="15" y1="30" x2="105" y2="30" stroke="hsl(140 100% 60% / 0.5)" />
      <line x1="15" y1="45" x2="90" y2="45" stroke="hsl(140 100% 60% / 0.5)" />
      <line x1="15" y1="60" x2="80" y2="60" stroke="hsl(140 100% 60% / 0.5)" />
      <text
        x="60"
        y="103"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        FILES
      </text>
    </g>
    <line
      x1="630"
      y1="270"
      x2="630"
      y2="220"
      stroke="hsl(140 100% 60% / 0.6)"
      strokeDasharray="3 3"
    />

    {/* Animated packets */}
    {[0, 1].map((i) => (
      <rect
        key={i}
        y="190"
        width="18"
        height="20"
        rx="3"
        fill="hsl(140 100% 50%)"
        stroke="hsl(140 100% 90%)"
      >
        <animate
          attributeName="x"
          from="120"
          to="680"
          dur="5s"
          begin={`${i * 1.5}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}
  </svg>
);

export const UdpFastIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="UDP fast pipeline"
  >
    <GridDefs id="grid-udpfast" />
    <rect width="800" height="400" fill="url(#grid-udpfast)" opacity="0.3" />

    <text
      x="400"
      y="60"
      textAnchor="middle"
      fill="hsl(180 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      UDP — FAST · NO WAIT
    </text>

    {/* Pipeline */}
    <rect
      x="80"
      y="170"
      width="640"
      height="60"
      rx="30"
      fill="hsl(180 100% 50% / 0.08)"
      stroke="hsl(180 100% 50%)"
      strokeWidth="2"
    />

    {/* Speed lines */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line
        key={i}
        x1={100 + i * 110}
        y1="200"
        x2={150 + i * 110}
        y2="200"
        stroke="hsl(180 100% 70% / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-12"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </line>
    ))}

    {/* Fast streaming packets */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect
        key={i}
        y="190"
        width="20"
        height="20"
        rx="3"
        fill="hsl(180 100% 50%)"
        stroke="hsl(180 100% 90%)"
      >
        <animate
          attributeName="x"
          from="80"
          to="720"
          dur="1.5s"
          begin={`${i * 0.2}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}

    <text
      x="400"
      y="320"
      textAnchor="middle"
      fill="hsl(180 100% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      no checkpoints · raw speed
    </text>
  </svg>
);

export const UdpLossyIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="UDP can lose segments"
  >
    <GridDefs id="grid-udploss" />
    <rect width="800" height="400" fill="url(#grid-udploss)" opacity="0.3" />

    <text
      x="400"
      y="60"
      textAnchor="middle"
      fill="hsl(180 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      UDP — LOST? — KEEP GOING
    </text>

    {/* Pipeline */}
    <rect
      x="80"
      y="170"
      width="640"
      height="60"
      rx="30"
      fill="hsl(180 100% 50% / 0.08)"
      stroke="hsl(180 100% 50%)"
      strokeWidth="2"
    />

    {/* Surviving packets continuing forward */}
    {[0, 2, 3, 5].map((i, idx) => (
      <rect
        key={`ok-${i}`}
        y="190"
        width="20"
        height="20"
        rx="3"
        fill="hsl(180 100% 50%)"
        stroke="hsl(180 100% 90%)"
      >
        <animate
          attributeName="x"
          from="80"
          to="720"
          dur="2s"
          begin={`${idx * 0.4}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}

    {/* Packets that fall out (drop downward) */}
    {[1, 4].map((i, idx) => (
      <rect
        key={`drop-${i}`}
        width="20"
        height="20"
        rx="3"
        fill="hsl(0 80% 60%)"
        stroke="hsl(0 80% 90%)"
      >
        <animate
          attributeName="x"
          values="80;320;320"
          keyTimes="0;0.5;1"
          dur="2s"
          begin={`${0.4 + idx * 1.6}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="190;190;360"
          keyTimes="0;0.5;1"
          dur="2s"
          begin={`${0.4 + idx * 1.6}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;1;0"
          keyTimes="0;0.5;1"
          dur="2s"
          begin={`${0.4 + idx * 1.6}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}

    <text
      x="400"
      y="320"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      lost segments are not resent
    </text>
  </svg>
);

export const UdpUsecasesIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="UDP use cases"
  >
    <GridDefs id="grid-udpuses" />
    <rect width="800" height="400" fill="url(#grid-udpuses)" opacity="0.3" />

    <text
      x="400"
      y="60"
      textAnchor="middle"
      fill="hsl(180 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      USE UDP WHEN SPEED MATTERS
    </text>

    {/* UDP pipe */}
    <rect
      x="100"
      y="180"
      width="600"
      height="40"
      rx="20"
      fill="hsl(180 100% 50% / 0.1)"
      stroke="hsl(180 100% 50%)"
      strokeWidth="2"
    />
    <text
      x="400"
      y="205"
      textAnchor="middle"
      fill="hsl(180 100% 80%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      UDP
    </text>

    {/* Video camera */}
    <g transform="translate(110, 270)">
      <rect
        width="100"
        height="60"
        rx="6"
        fill="hsl(220 30% 8%)"
        stroke="hsl(180 100% 60%)"
        strokeWidth="1.5"
      />
      <circle
        cx="35"
        cy="30"
        r="14"
        fill="hsl(220 30% 8%)"
        stroke="hsl(180 100% 60%)"
        strokeWidth="1.5"
      />
      <circle cx="35" cy="30" r="6" fill="hsl(180 100% 60%)" />
      <polygon
        points="80,15 95,5 95,55 80,45"
        fill="hsl(180 100% 60%)"
        stroke="hsl(180 100% 60%)"
      />
      <text
        x="50"
        y="83"
        textAnchor="middle"
        fill="hsl(180 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        VIDEO
      </text>
    </g>
    <line
      x1="160"
      y1="270"
      x2="160"
      y2="220"
      stroke="hsl(180 100% 60% / 0.6)"
      strokeDasharray="3 3"
    />

    {/* Microphone (voice) */}
    <g transform="translate(340, 270)">
      <rect
        x="35"
        y="0"
        width="30"
        height="40"
        rx="15"
        fill="hsl(220 30% 8%)"
        stroke="hsl(180 100% 60%)"
        strokeWidth="1.5"
      />
      <path
        d="M 20 30 Q 20 55 50 55 Q 80 55 80 30"
        fill="none"
        stroke="hsl(180 100% 60%)"
        strokeWidth="1.5"
      />
      <line
        x1="50"
        y1="55"
        x2="50"
        y2="65"
        stroke="hsl(180 100% 60%)"
        strokeWidth="1.5"
      />
      <line
        x1="35"
        y1="65"
        x2="65"
        y2="65"
        stroke="hsl(180 100% 60%)"
        strokeWidth="1.5"
      />
      <text
        x="50"
        y="83"
        textAnchor="middle"
        fill="hsl(180 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        VOICE
      </text>
    </g>
    <line
      x1="390"
      y1="270"
      x2="390"
      y2="220"
      stroke="hsl(180 100% 60% / 0.6)"
      strokeDasharray="3 3"
    />

    {/* Game controller */}
    <g transform="translate(560, 270)">
      <path
        d="M 20 0 L 100 0 Q 130 0 130 25 Q 130 55 100 55 L 80 55 L 60 55 L 40 55 Q 0 55 0 25 Q 0 0 20 0 Z"
        fill="hsl(220 30% 8%)"
        stroke="hsl(180 100% 60%)"
        strokeWidth="1.5"
      />
      <circle cx="40" cy="25" r="6" fill="hsl(180 100% 60%)" />
      <circle cx="100" cy="20" r="4" fill="hsl(180 100% 60%)" />
      <circle cx="115" cy="35" r="4" fill="hsl(180 100% 60%)" />
      <text
        x="65"
        y="83"
        textAnchor="middle"
        fill="hsl(180 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        GAMES
      </text>
    </g>
    <line
      x1="625"
      y1="270"
      x2="625"
      y2="220"
      stroke="hsl(180 100% 60% / 0.6)"
      strokeDasharray="3 3"
    />

    {/* Fast packets */}
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        y="190"
        width="18"
        height="20"
        rx="3"
        fill="hsl(180 100% 50%)"
        stroke="hsl(180 100% 90%)"
      >
        <animate
          attributeName="x"
          from="100"
          to="700"
          dur="2s"
          begin={`${i * 0.4}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}
  </svg>
);

export const ChooseProtocolIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Choose the right protocol"
  >
    <GridDefs id="grid-choose" />
    <rect width="800" height="400" fill="url(#grid-choose)" opacity="0.3" />

    {/* Decision figure (just a head + body) */}
    <g transform="translate(380, 60)">
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
        strokeWidth="2"
      />
      <path
        d="M 0 50 L 0 90 L 40 90 L 40 50 Z"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
        strokeWidth="2"
      />
      <text
        x="20"
        y="115"
        textAnchor="middle"
        fill="hsl(200 100% 70%)"
        fontSize="10"
        fontFamily="monospace"
      >
        YOU
      </text>
    </g>

    {/* Fork lines */}
    <line
      x1="400"
      y1="170"
      x2="200"
      y2="240"
      stroke="hsl(140 100% 50%)"
      strokeWidth="2"
      strokeDasharray="6 4"
    />
    <line
      x1="400"
      y1="170"
      x2="600"
      y2="240"
      stroke="hsl(180 100% 50%)"
      strokeWidth="2"
      strokeDasharray="6 4"
    />

    {/* Left path: TCP */}
    <g transform="translate(60, 250)">
      <rect
        width="280"
        height="100"
        rx="50"
        fill="hsl(140 100% 50% / 0.1)"
        stroke="hsl(140 100% 50%)"
        strokeWidth="2"
      />
      {/* shield */}
      <path
        d="M 50 25 L 70 17 L 90 25 L 90 55 Q 90 75 70 85 Q 50 75 50 55 Z"
        fill="hsl(140 100% 50% / 0.3)"
        stroke="hsl(140 100% 70%)"
        strokeWidth="1.5"
      />
      <path
        d="M 60 50 L 67 57 L 80 42"
        stroke="hsl(140 100% 80%)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="180"
        y="45"
        textAnchor="middle"
        fill="hsl(140 100% 80%)"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
      >
        TCP
      </text>
      <text
        x="180"
        y="68"
        textAnchor="middle"
        fill="hsl(140 100% 65%)"
        fontSize="11"
        fontFamily="monospace"
      >
        careful · reliable
      </text>
    </g>

    {/* Right path: UDP */}
    <g transform="translate(460, 250)">
      <rect
        width="280"
        height="100"
        rx="50"
        fill="hsl(180 100% 50% / 0.1)"
        stroke="hsl(180 100% 50%)"
        strokeWidth="2"
      />
      {/* lightning bolt */}
      <polygon
        points="75,15 60,55 78,55 65,90 95,45 78,45 88,15"
        fill="hsl(180 100% 50% / 0.4)"
        stroke="hsl(180 100% 80%)"
        strokeWidth="1.5"
      />
      <text
        x="180"
        y="45"
        textAnchor="middle"
        fill="hsl(180 100% 80%)"
        fontSize="20"
        fontFamily="monospace"
        fontWeight="bold"
      >
        UDP
      </text>
      <text
        x="180"
        y="68"
        textAnchor="middle"
        fill="hsl(180 100% 65%)"
        fontSize="11"
        fontFamily="monospace"
      >
        fast · raw
      </text>
    </g>
  </svg>
);

// ════════════════════════════════════════════════════════════
// TRANSPORT LAYER — Topic 4: THREE-WAY HANDSHAKE
// ════════════════════════════════════════════════════════════

// Reusable client/server figures used across handshake scenes
export const HandshakeFigures = ({
  clientGlow = false,
  serverGlow = false,
}: {
  clientGlow?: boolean;
  serverGlow?: boolean;
}) => (
  <>
    <defs>
      <radialGradient id="clientHaze" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(200 100% 50%)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="hsl(200 100% 50%)" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="serverHaze" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(140 100% 50%)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="hsl(140 100% 50%)" stopOpacity="0" />
      </radialGradient>
    </defs>
    {clientGlow && <circle cx="120" cy="200" r="120" fill="url(#clientHaze)" />}
    {serverGlow && <circle cx="680" cy="200" r="120" fill="url(#serverHaze)" />}
    <circle
      cx="120"
      cy="200"
      r="50"
      fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 50%)"
      strokeWidth="2"
    />
    <text
      x="120"
      y="206"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      fontWeight="bold"
    >
      CLIENT
    </text>
    <circle
      cx="680"
      cy="200"
      r="50"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 50%)"
      strokeWidth="2"
    />
    <text
      x="680"
      y="206"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      fontWeight="bold"
    >
      SERVER
    </text>
  </>
);

export const HandshakeIntroIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Client and server about to talk"
  >
    <GridDefs id="grid-hsintro" />
    <rect width="800" height="400" fill="url(#grid-hsintro)" opacity="0.3" />
    <HandshakeFigures clientGlow serverGlow />

    {/* Dotted handshake line forming */}
    <line
      x1="170"
      y1="200"
      x2="630"
      y2="200"
      stroke="hsl(140 100% 50% / 0.5)"
      strokeWidth="2"
      strokeDasharray="4 8"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-24"
        dur="2s"
        repeatCount="indefinite"
      />
    </line>

    <text
      x="400"
      y="120"
      textAnchor="middle"
      fill="hsl(180 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      BEFORE TALKING…
    </text>
    <text
      x="400"
      y="290"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="11"
      fontFamily="monospace"
    >
      they must agree to connect
    </text>
  </svg>
);

export const HandshakeStepsIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="TCP three-way handshake animation"
  >
    <GridDefs id="grid-handshake" />
    <rect width="800" height="400" fill="url(#grid-handshake)" opacity="0.3" />
    <HandshakeFigures clientGlow serverGlow />

    {/* SYN */}
    <g>
      <line
        x1="170"
        y1="130"
        x2="630"
        y2="130"
        stroke="hsl(200 100% 60%)"
        strokeWidth="2"
        strokeDasharray="6 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-20"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      <polygon points="625,124 642,130 625,136" fill="hsl(200 100% 60%)" />
      <rect
        x="365"
        y="115"
        width="70"
        height="22"
        rx="4"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
      />
      <text
        x="400"
        y="131"
        textAnchor="middle"
        fill="hsl(200 100% 80%)"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SYN
      </text>
      <circle
        cx="155"
        cy="115"
        r="10"
        fill="hsl(200 100% 50%)"
        stroke="hsl(200 100% 80%)"
      />
      <text
        x="155"
        y="119"
        textAnchor="middle"
        fill="hsl(220 30% 8%)"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        1
      </text>
    </g>

    {/* SYN-ACK */}
    <g>
      <line
        x1="630"
        y1="200"
        x2="170"
        y2="200"
        stroke="hsl(160 100% 60%)"
        strokeWidth="2"
        strokeDasharray="6 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="20"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      <polygon points="175,194 158,200 175,206" fill="hsl(160 100% 60%)" />
      <rect
        x="345"
        y="186"
        width="100"
        height="22"
        rx="4"
        fill="hsl(220 30% 8%)"
        stroke="hsl(160 100% 60%)"
      />
      <text
        x="395"
        y="202"
        textAnchor="middle"
        fill="hsl(160 100% 80%)"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SYN-ACK
      </text>
      <circle
        cx="645"
        cy="185"
        r="10"
        fill="hsl(160 100% 50%)"
        stroke="hsl(160 100% 80%)"
      />
      <text
        x="645"
        y="189"
        textAnchor="middle"
        fill="hsl(220 30% 8%)"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        2
      </text>
    </g>

    {/* ACK */}
    <g>
      <line
        x1="170"
        y1="270"
        x2="630"
        y2="270"
        stroke="hsl(140 100% 60%)"
        strokeWidth="2"
        strokeDasharray="6 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-20"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      <polygon points="625,264 642,270 625,276" fill="hsl(140 100% 60%)" />
      <rect
        x="370"
        y="255"
        width="60"
        height="22"
        rx="4"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 60%)"
      />
      <text
        x="400"
        y="271"
        textAnchor="middle"
        fill="hsl(140 100% 80%)"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        ACK
      </text>
      <circle
        cx="155"
        cy="290"
        r="10"
        fill="hsl(140 100% 50%)"
        stroke="hsl(140 100% 80%)"
      />
      <text
        x="155"
        y="294"
        textAnchor="middle"
        fill="hsl(220 30% 8%)"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        3
      </text>
    </g>
  </svg>
);

export const SynIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="SYN — client requests connection"
  >
    <GridDefs id="grid-syn" />
    <rect width="800" height="400" fill="url(#grid-syn)" opacity="0.3" />
    <HandshakeFigures clientGlow />

    <text
      x="400"
      y="100"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="16"
      fontFamily="monospace"
      letterSpacing="3"
    >
      STEP 1 — SYN
    </text>

    {/* Pulse arrow client → server */}
    <line
      x1="170"
      y1="200"
      x2="630"
      y2="200"
      stroke="hsl(200 100% 60%)"
      strokeWidth="3"
      strokeDasharray="8 4"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-24"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </line>
    <polygon points="625,192 645,200 625,208" fill="hsl(200 100% 60%)" />

    {/* Floating SYN sigil */}
    <g>
      <rect
        x="365"
        y="180"
        width="80"
        height="40"
        rx="6"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 70%)"
        strokeWidth="2"
      >
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="405"
        y="207"
        textAnchor="middle"
        fill="hsl(200 100% 85%)"
        fontSize="18"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SYN
      </text>
    </g>

    <text
      x="400"
      y="320"
      textAnchor="middle"
      fill="hsl(200 100% 70%)"
      fontSize="12"
      fontFamily="monospace"
    >
      "I want to talk to you"
    </text>
  </svg>
);

export const SynAckIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="SYN-ACK — server replies"
  >
    <GridDefs id="grid-synack" />
    <rect width="800" height="400" fill="url(#grid-synack)" opacity="0.3" />
    <HandshakeFigures serverGlow />

    <text
      x="400"
      y="100"
      textAnchor="middle"
      fill="hsl(160 100% 75%)"
      fontSize="16"
      fontFamily="monospace"
      letterSpacing="3"
    >
      STEP 2 — SYN-ACK
    </text>

    {/* Pulse arrow server → client */}
    <line
      x1="630"
      y1="200"
      x2="170"
      y2="200"
      stroke="hsl(160 100% 60%)"
      strokeWidth="3"
      strokeDasharray="8 4"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="24"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </line>
    <polygon points="175,192 155,200 175,208" fill="hsl(160 100% 60%)" />

    <g>
      <rect
        x="350"
        y="180"
        width="100"
        height="40"
        rx="6"
        fill="hsl(220 30% 8%)"
        stroke="hsl(160 100% 70%)"
        strokeWidth="2"
      >
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="400"
        y="207"
        textAnchor="middle"
        fill="hsl(160 100% 85%)"
        fontSize="16"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SYN-ACK
      </text>
    </g>

    <text
      x="400"
      y="320"
      textAnchor="middle"
      fill="hsl(160 100% 70%)"
      fontSize="12"
      fontFamily="monospace"
    >
      "I hear you, and I want to talk too"
    </text>
  </svg>
);

export const AckIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="ACK — client confirms"
  >
    <GridDefs id="grid-ack" />
    <rect width="800" height="400" fill="url(#grid-ack)" opacity="0.3" />
    <HandshakeFigures clientGlow />

    <text
      x="400"
      y="100"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="16"
      fontFamily="monospace"
      letterSpacing="3"
    >
      STEP 3 — ACK
    </text>

    <line
      x1="170"
      y1="200"
      x2="630"
      y2="200"
      stroke="hsl(140 100% 60%)"
      strokeWidth="3"
      strokeDasharray="8 4"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-24"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </line>
    <polygon points="625,192 645,200 625,208" fill="hsl(140 100% 60%)" />

    <g>
      <rect
        x="370"
        y="180"
        width="60"
        height="40"
        rx="6"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 70%)"
        strokeWidth="2"
      >
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="400"
        y="207"
        textAnchor="middle"
        fill="hsl(140 100% 85%)"
        fontSize="18"
        fontFamily="monospace"
        fontWeight="bold"
      >
        ACK
      </text>
    </g>

    <text
      x="400"
      y="320"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="12"
      fontFamily="monospace"
    >
      "Great, let's start"
    </text>
  </svg>
);

export const ConnectionOpenIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Connection established, segments flowing"
  >
    <GridDefs id="grid-connopen" />
    <rect width="800" height="400" fill="url(#grid-connopen)" opacity="0.3" />
    <HandshakeFigures clientGlow serverGlow />

    {/* Solid stable conduit */}
    <rect
      x="170"
      y="180"
      width="460"
      height="40"
      rx="20"
      fill="hsl(140 100% 50% / 0.15)"
      stroke="hsl(140 100% 60%)"
      strokeWidth="2.5"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.7;1;0.7"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>

    {/* Packets flowing right */}
    {[0, 1].map((i) => (
      <rect
        key={`r-${i}`}
        y="190"
        width="20"
        height="20"
        rx="3"
        fill="hsl(140 100% 50%)"
        stroke="hsl(140 100% 90%)"
      >
        <animate
          attributeName="x"
          from="180"
          to="610"
          dur="3s"
          begin={`${i * 1.5}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}

    {/* Packets flowing left */}
    {[0, 1].map((i) => (
      <rect
        key={`l-${i}`}
        y="190"
        width="20"
        height="20"
        rx="3"
        fill="hsl(160 100% 50%)"
        stroke="hsl(160 100% 90%)"
      >
        <animate
          attributeName="x"
          from="610"
          to="180"
          dur="3s"
          begin={`${0.75 + i * 1.5}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}

    <text
      x="400"
      y="100"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="16"
      fontFamily="monospace"
      letterSpacing="3"
    >
      CONNECTION OPEN
    </text>
    <text
      x="400"
      y="320"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="11"
      fontFamily="monospace"
    >
      data flows reliably both ways
    </text>
  </svg>
);

export const NoHandshakeIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Without a handshake — broken"
  >
    <GridDefs id="grid-nohs" />
    <rect width="800" height="400" fill="url(#grid-nohs)" opacity="0.3" />

    {/* Sender on left */}
    <circle
      cx="120"
      cy="200"
      r="50"
      fill="hsl(220 30% 8%)"
      stroke="hsl(0 70% 55%)"
      strokeWidth="2"
    />
    <text
      x="120"
      y="206"
      textAnchor="middle"
      fill="hsl(0 80% 70%)"
      fontSize="14"
      fontFamily="monospace"
      fontWeight="bold"
    >
      SEND
    </text>

    {/* No receiver — empty space with question mark */}
    <text
      x="680"
      y="190"
      textAnchor="middle"
      fill="hsl(0 70% 55% / 0.6)"
      fontSize="48"
      fontFamily="monospace"
    >
      ?
    </text>
    <text
      x="680"
      y="230"
      textAnchor="middle"
      fill="hsl(0 70% 60%)"
      fontSize="11"
      fontFamily="monospace"
    >
      no acknowledgement
    </text>

    {/* Scattered packets dissolving into red sparks */}
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect
          width="20"
          height="20"
          rx="3"
          fill="hsl(0 80% 60%)"
          stroke="hsl(0 80% 90%)"
        >
          <animate
            attributeName="x"
            values="170;400;500"
            keyTimes="0;0.6;1"
            dur="2.5s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${180 + (i % 2) * 20};${160 + i * 10};${140 + i * 30}`}
            dur="2.5s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.6;0"
            keyTimes="0;0.6;1"
            dur="2.5s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 10 10"
            to="180 10 10"
            dur="2.5s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </rect>
      </g>
    ))}

    <text
      x="400"
      y="80"
      textAnchor="middle"
      fill="hsl(0 80% 70%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      NO HANDSHAKE — NO TRUST
    </text>
    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      data scattered into the void
    </text>
  </svg>
);
