import { GridDefs } from "../SceneIllustration";


// ════════════════════════════════════════════════════════════
// APPLICATION LAYER — Intro
// ════════════════════════════════════════════════════════════




// visual: "layer-stack"
export const LayerStackIllustration = () => {
  const stack = [
    { y: 50, name: "APPLICATION", color: "200 100% 55%" },
    { y: 130, name: "TRANSPORT", color: "140 100% 50%" },
    { y: 210, name: "INTERNET", color: "30 100% 55%" },
    { y: 290, name: "NETWORK ACCESS", color: "0 80% 55%" },
  ];

  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="TCP/IP layer stack"
    >
      <GridDefs id="grid-stack" />
      <rect width="800" height="400" fill="url(#grid-stack)" opacity="0.2" />

      {stack.map((layer, i) => (
        <g key={i}>
          <rect
            x="200"
            y={layer.y}
            width="400"
            height="60"
            rx="6"
            fill={`hsl(${layer.color} / 0.12)`}
            stroke={`hsl(${layer.color})`}
            strokeWidth="1.5"
          />
          <text
            x="400"
            y={layer.y + 38}
            textAnchor="middle"
            fill={`hsl(${layer.color})`}
            fontSize="16"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="2"
          >
            {layer.name}
          </text>
        </g>
      ))}

      <g>
        <circle
          r="22"
          fill="none"
          stroke="hsl(200 100% 50% / 0.4)"
          strokeWidth="2"
        >
          <animate
            attributeName="cy"
            values="20;370;20"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            values="400;400"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="14;28;14"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          r="10"
          fill="hsl(200 100% 60%)"
          stroke="hsl(200 100% 90%)"
          strokeWidth="2"
        >
          <animate
            attributeName="cy"
            values="20;370;20"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            values="400;400"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
};

// visual: "pc-to-server"
export const PcToServerIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="PC sending a ping to the game server"
  >
    <GridDefs id="grid-pc2srv" />
    <rect width="800" height="400" fill="url(#grid-pc2srv)" opacity="0.3" />

    {/* ── PC (left) ── */}
    <g transform="translate(60, 110)">
      {/* monitor */}
      <rect
        width="180"
        height="130"
        rx="8"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
        strokeWidth="2"
      />
      <rect
        x="14"
        y="14"
        width="152"
        height="86"
        rx="4"
        fill="hsl(220 30% 4%)"
      />
      {/* screen glow — "trapped" text */}
      <text
        x="90"
        y="52"
        textAnchor="middle"
        fill="hsl(200 100% 80%)"
        fontSize="13"
        fontFamily="monospace"
        fontWeight="bold"
      >
        YOU
      </text>
      <text
        x="90"
        y="72"
        textAnchor="middle"
        fill="hsl(200 100% 50%)"
        fontSize="10"
        fontFamily="monospace"
      >
        TRAPPED
      </text>
      {/* blinking cursor */}
      <rect x="104" y="76" width="8" height="12" fill="hsl(200 100% 60%)">
        <animate
          attributeName="opacity"
          values="1;0;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>
      {/* stand */}
      <rect
        x="80"
        y="130"
        width="20"
        height="20"
        rx="2"
        fill="hsl(220 30% 14%)"
      />
      <rect
        x="55"
        y="148"
        width="70"
        height="10"
        rx="3"
        fill="hsl(220 30% 14%)"
      />
      <text
        x="90"
        y="175"
        textAnchor="middle"
        fill="hsl(200 100% 55%)"
        fontSize="11"
        fontFamily="monospace"
      >
        YOUR PC
      </text>
    </g>

    {/* ── Animated PING packet ── */}
    <g>
      {/* packet body */}
      <rect
        width="54"
        height="28"
        rx="5"
        fill="hsl(200 100% 55%)"
        stroke="hsl(200 100% 88%)"
        strokeWidth="1.5"
      >
        <animate
          attributeName="x"
          from="250"
          to="560"
          dur="2.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="172;172"
          dur="2.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.05;0.9;1"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        fontFamily="monospace"
        fontSize="10"
        fontWeight="bold"
        fill="hsl(220 30% 5%)"
      >
        <animate
          attributeName="x"
          from="255"
          to="565"
          dur="2.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="191;191"
          dur="2.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.05;0.9;1"
          dur="2.2s"
          repeatCount="indefinite"
        />
        PING
      </text>

      {/* trailing glow dots */}
      {[0, 1, 2].map((i) => (
        <circle key={i} r="4" fill="hsl(200 100% 70%)" opacity="0.5">
          <animate
            attributeName="cx"
            from={230 - i * 16}
            to={540 - i * 16}
            dur="2.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="186;186"
            dur="2.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0.5;0.5;0"
            keyTimes="0;0.1;0.85;1"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>

    {/* ── Dashed wire ── */}
    <line
      x1="244"
      y1="186"
      x2="560"
      y2="186"
      stroke="hsl(200 100% 40% / 0.35)"
      strokeWidth="1.5"
      strokeDasharray="6 5"
    />

    {/* ── Game Server (right) ── */}
    <g transform="translate(580, 90)">
      <rect
        width="160"
        height="200"
        rx="10"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 55%)"
        strokeWidth="2"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.5;1;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      {/* rack units */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x="16"
            y={20 + i * 32}
            width="128"
            height="20"
            rx="3"
            fill="hsl(140 100% 60% / 0.12)"
            stroke="hsl(140 100% 60% / 0.4)"
            strokeWidth="1"
          />
          {/* status LED */}
          <circle cx="130" cy={30 + i * 32} r="4" fill="hsl(140 100% 55%)">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.4s"
              begin={`${i * 0.25}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
      <text
        x="80"
        y="182"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        GAME SERVER
      </text>
      <text
        x="80"
        y="210"
        textAnchor="middle"
        fill="hsl(140 100% 50%)"
        fontSize="10"
        fontFamily="monospace"
      >
        destination
      </text>
    </g>

    {/* ── Labels ── */}
    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(200 100% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      send a ping to escape
    </text>
  </svg>
);

// visual: "data-transform"
export const DataTransformIllustration = () => {
  // Each layer wraps the previous one (encapsulation)
  const layers = [
    { name: "APPLICATION", color: "200 100% 55%", width: 160, height: 44 },
    { name: "TRANSPORT", color: "140 100% 50%", width: 260, height: 44 },
    { name: "INTERNET", color: "30  100% 55%", width: 360, height: 44 },
    { name: "NETWORK ACCESS", color: "0   80%  55%", width: 460, height: 44 },
  ];

  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      role="img"
      aria-label="Encapsulation — each layer wraps the data"
    >
      <GridDefs id="grid-datatx" />
      <rect width="800" height="400" fill="url(#grid-datatx)" opacity="0.3" />

      <text
        x="400"
        y="40"
        textAnchor="middle"
        fill="hsl(180 100% 75%)"
        fontSize="14"
        fontFamily="monospace"
        letterSpacing="3"
      >
        ENCAPSULATION
      </text>

      {/* Nested envelope stacks — outermost (NETWORK) at bottom, innermost (APP) at top */}
      {[...layers].reverse().map((layer, revIdx) => {
        const idx = layers.length - 1 - revIdx; // 3,2,1,0
        const cx = 400;
        const cy = 220;
        const w = layer.width;
        const h = layer.height * (idx + 1) + 10; // taller as we go outward

        return (
          <g key={idx}>
            <rect
              x={cx - w / 2}
              y={cy - h / 2}
              width={w}
              height={h}
              rx="6"
              fill={`hsl(${layer.color} / 0.10)`}
              stroke={`hsl(${layer.color})`}
              strokeWidth="1.8"
            >
              <animate
                attributeName="opacity"
                values="0;1"
                dur="0.5s"
                begin={`${revIdx * 0.45}s`}
                fill="freeze"
              />
            </rect>
            {/* Layer label on the left edge */}
            <text
              x={cx - w / 2 + 10}
              y={cy - h / 2 + 16}
              fill={`hsl(${layer.color})`}
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="1"
            >
              <animate
                attributeName="opacity"
                values="0;1"
                dur="0.5s"
                begin={`${revIdx * 0.45}s`}
                fill="freeze"
              />
              {layer.name}
            </text>
          </g>
        );
      })}

      {/* Original data label in the innermost box */}
      <text
        x="400"
        y="225"
        textAnchor="middle"
        fill="hsl(200 100% 85%)"
        fontSize="13"
        fontFamily="monospace"
        fontWeight="bold"
      >
        DATA
      </text>

      {/* Down-arrow showing message travelling down */}
      <g transform="translate(680, 150)">
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="140"
          stroke="hsl(180 100% 55%)"
          strokeWidth="2"
          strokeDasharray="5 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-18"
            dur="1s"
            repeatCount="indefinite"
          />
        </line>
        <polygon points="-7,132 0,150 7,132" fill="hsl(180 100% 55%)" />
        <text
          x="14"
          y="80"
          fill="hsl(180 100% 60%)"
          fontSize="10"
          fontFamily="monospace"
        >
          wrap
        </text>
      </g>

      <text
        x="400"
        y="365"
        textAnchor="middle"
        fill="hsl(180 100% 60%)"
        fontSize="11"
        fontFamily="monospace"
      >
        each layer adds its own header — encapsulation
      </text>
    </svg>
  );
};

// visual: "pause-focus"
export const PauseFocusIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Pause and focus"
  >
    <GridDefs id="grid-pausefocus" />
    <rect width="800" height="400" fill="url(#grid-pausefocus)" opacity="0.3" />

    {/* Animated concentric rings — focus pulse */}
    {[80, 120, 160, 200].map((r, i) => (
      <circle
        key={i}
        cx="400"
        cy="200"
        r={r}
        fill="none"
        stroke="hsl(200 100% 60%)"
        strokeWidth="1.5"
        opacity={0.6 - i * 0.12}
      >
        <animate
          attributeName="r"
          values={`${r};${r + 20};${r}`}
          dur={`${2 + i * 0.5}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values={`${0.6 - i * 0.12};0.1;${0.6 - i * 0.12}`}
          dur={`${2 + i * 0.5}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}

    {/* Center dot */}
    <circle
      cx="400"
      cy="200"
      r="18"
      fill="hsl(200 100% 60%)"
      stroke="hsl(200 100% 90%)"
      strokeWidth="2"
    >
      <animate
        attributeName="r"
        values="14;20;14"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(200 100% 70%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      FOCUS
    </text>
  </svg>
);

// ════════════════════════════════════════════════════════════
// APPLICATION LAYER — Topic 2: Application Protocols
// ════════════════════════════════════════════════════════════

// visual: "rules"
export const RulesIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Protocols are rules">
    <GridDefs id="grid-rules" />
    <rect width="800" height="400" fill="url(#grid-rules)" opacity="0.3" />
 
    <text x="400" y="46" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">PROTOCOLS = RULES</text>
 
    {/* Rulebook */}
    <g transform="translate(260, 70)">
      {/* book shadow */}
      <rect x="6" y="6" width="280" height="230" rx="10" fill="hsl(200 100% 30% / 0.2)" />
      {/* book cover */}
      <rect width="280" height="230" rx="10"
        fill="hsl(220 30% 10%)" stroke="hsl(200 100% 55%)" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
      </rect>
      {/* spine */}
      <rect width="18" height="230" rx="4" fill="hsl(200 100% 55% / 0.3)" />
 
      {/* rules lines appearing one by one */}
      {[
        { text: "§1  Use the right protocol",   color: "200 100% 70%" },
        { text: "§2  Follow message structure", color: "160 100% 60%" },
        { text: "§3  Respect the destination",  color: "140 100% 55%" },
        { text: "§4  Handle errors properly",   color: "30  100% 60%" },
      ].map((rule, i) => (
        <g key={i}>
          <rect x="30" y={40 + i * 44} width="230" height="30" rx="4"
            fill={`hsl(${rule.color} / 0.1)`} stroke={`hsl(${rule.color} / 0.4)`} strokeWidth="1">
            <animate attributeName="opacity" values="0;1" dur="0.4s"
              begin={`${i * 0.5}s`} fill="freeze" />
          </rect>
          <text x="44" y={61 + i * 44} fill={`hsl(${rule.color})`}
            fontSize="11" fontFamily="monospace">
            <animate attributeName="opacity" values="0;1" dur="0.4s"
              begin={`${i * 0.5}s`} fill="freeze" />
            {rule.text}
          </text>
        </g>
      ))}
    </g>
 
    <text x="400" y="358" textAnchor="middle" fill="hsl(200 100% 60%)" fontSize="11" fontFamily="monospace">
      without rules · no communication is possible
    </text>
  </svg>
);
 
// visual: "protocol-purpose"
export const ProtocolPurposeIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Each protocol has a purpose">
    <GridDefs id="grid-protpurp" />
    <rect width="800" height="400" fill="url(#grid-protpurp)" opacity="0.3" />
 
    <text x="400" y="46" textAnchor="middle" fill="hsl(180 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">RIGHT TOOL · RIGHT JOB</text>
 
    {/* Three protocol cards */}
    {[
      { name: "HTTP",  task: "web pages",   icon: "🌐", color: "200 100% 60%", x: 80  },
      { name: "FTP",   task: "file transfer",icon: "📁", color: "140 100% 55%", x: 310 },
      { name: "SMTP",  task: "email",        icon: "✉️", color: "30  100% 60%", x: 540 },
    ].map((p, i) => (
      <g key={i} transform={`translate(${p.x}, 90)`}>
        <rect width="180" height="190" rx="10"
          fill={`hsl(${p.color} / 0.1)`} stroke={`hsl(${p.color})`} strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.5;1;0.5"
            dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
        </rect>
        <text x="90" y="58" textAnchor="middle" fontSize="32">{p.icon}</text>
        <text x="90" y="100" textAnchor="middle" fill={`hsl(${p.color})`}
          fontSize="18" fontFamily="monospace" fontWeight="bold">{p.name}</text>
        <line x1="20" y1="115" x2="160" y2="115" stroke={`hsl(${p.color} / 0.4)`} strokeWidth="1" />
        <text x="90" y="145" textAnchor="middle" fill={`hsl(${p.color} / 0.8)`}
          fontSize="12" fontFamily="monospace">{p.task}</text>
 
        {/* wrong protocol X */}
        <g transform="translate(90, 175)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;0" keyTimes="0;0.6;0.8;1"
            dur="4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          <circle r="14" fill="hsl(0 80% 50% / 0.3)" stroke="hsl(0 80% 60%)" strokeWidth="1.5" />
          <line x1="-7" y1="-7" x2="7" y2="7" stroke="hsl(0 80% 70%)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="-7" y1="7" x2="7" y2="-7" stroke="hsl(0 80% 70%)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>
    ))}
 
    <text x="400" y="358" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="11" fontFamily="monospace">
      wrong protocol → message not understood
    </text>
  </svg>
);
 
// visual: "http-web"
export const HttpWebIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="HTTP for web pages">
    <GridDefs id="grid-httpweb" />
    <rect width="800" height="400" fill="url(#grid-httpweb)" opacity="0.3" />
 
    {/* Browser on left */}
    <g transform="translate(60, 80)">
      <rect width="240" height="190" rx="8" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
      {/* title bar */}
      <rect width="240" height="30" rx="8" fill="hsl(200 100% 60% / 0.25)" />
      <circle cx="16" cy="15" r="5" fill="hsl(0 80% 60%)" />
      <circle cx="32" cy="15" r="5" fill="hsl(45 100% 60%)" />
      <circle cx="48" cy="15" r="5" fill="hsl(140 100% 50%)" />
      {/* URL bar */}
      <rect x="12" y="38" width="216" height="18" rx="4"
        fill="hsl(220 30% 14%)" stroke="hsl(200 100% 50% / 0.4)" strokeWidth="1" />
      <text x="20" y="51" fill="hsl(200 100% 65%)" fontSize="10" fontFamily="monospace">http://example.com</text>
      {/* page content */}
      <rect x="12" y="66" width="216" height="14" rx="2" fill="hsl(200 100% 60% / 0.2)" />
      <rect x="12" y="88" width="180" height="10" rx="2" fill="hsl(200 100% 60% / 0.12)" />
      <rect x="12" y="106" width="200" height="10" rx="2" fill="hsl(200 100% 60% / 0.12)" />
      <rect x="12" y="124" width="160" height="10" rx="2" fill="hsl(200 100% 60% / 0.12)" />
      <rect x="12" y="150" width="216" height="26" rx="4" fill="hsl(200 100% 60% / 0.15)" />
      <text x="120" y="169" textAnchor="middle" fill="hsl(200 100% 70%)" fontSize="10" fontFamily="monospace">BROWSER</text>
    </g>
 
    {/* HTTP label + animated packet */}
    <g>
      <rect x="314" y="164" width="80" height="26" rx="13"
        fill="hsl(200 100% 55%)" stroke="hsl(200 100% 88%)" strokeWidth="1.5">
        <animate attributeName="x" from="308" to="488" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.85;1" dur="2s" repeatCount="indefinite" />
      </rect>
      <text fontFamily="monospace" fontSize="12" fontWeight="bold" fill="hsl(220 30% 5%)" textAnchor="middle">
        <animate attributeName="x" from="354" to="528" dur="2s" repeatCount="indefinite" />
        <animate attributeName="y" values="182;182" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.85;1" dur="2s" repeatCount="indefinite" />
        HTTP
      </text>
    </g>
 
    {/* Web server on right */}
    <g transform="translate(510, 70)">
      <rect width="220" height="220" rx="10" fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      {/* globe icon */}
      <circle cx="110" cy="80" r="45" fill="none" stroke="hsl(140 100% 55%)" strokeWidth="1.5" />
      <ellipse cx="110" cy="80" rx="22" ry="45" fill="none" stroke="hsl(140 100% 55% / 0.5)" strokeWidth="1" />
      <line x1="65" y1="80" x2="155" y2="80" stroke="hsl(140 100% 55% / 0.5)" strokeWidth="1" />
      <line x1="68" y1="58" x2="152" y2="58" stroke="hsl(140 100% 55% / 0.3)" strokeWidth="1" />
      <line x1="68" y1="102" x2="152" y2="102" stroke="hsl(140 100% 55% / 0.3)" strokeWidth="1" />
      <text x="110" y="155" textAnchor="middle" fill="hsl(140 100% 70%)" fontSize="12" fontFamily="monospace" fontWeight="bold">WEB SERVER</text>
      <text x="110" y="185" textAnchor="middle" fill="hsl(140 100% 50%)" fontSize="10" fontFamily="monospace">serves HTML pages</text>
    </g>
 
    <text x="400" y="355" textAnchor="middle" fill="hsl(200 100% 65%)" fontSize="12" fontFamily="monospace">
      HTTP — HyperText Transfer Protocol
    </text>
  </svg>
);
 
// visual: "ftp-transfer"
export const FtpTransferIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="FTP for file transfer">
    <GridDefs id="grid-ftp" />
    <rect width="800" height="400" fill="url(#grid-ftp)" opacity="0.3" />
 
    {/* Client PC */}
    <g transform="translate(60, 110)">
      <rect width="180" height="140" rx="8" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
      <rect x="14" y="14" width="152" height="80" rx="4" fill="hsl(220 30% 8%)" />
      {/* folder icon */}
      <rect x="36" y="24" width="100" height="60" rx="4" fill="hsl(45 100% 50% / 0.2)" stroke="hsl(45 100% 55%)" strokeWidth="1.5" />
      <rect x="36" y="18" width="46" height="12" rx="3" fill="hsl(45 100% 55%)" />
      <text x="86" y="59" textAnchor="middle" fill="hsl(45 100% 75%)" fontSize="10" fontFamily="monospace">files/</text>
      <text x="90" y="120" textAnchor="middle" fill="hsl(200 100% 60%)" fontSize="10" fontFamily="monospace">YOUR PC</text>
    </g>
 
    {/* Animated file packets */}
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect width="44" height="30" rx="4"
          fill="hsl(45 100% 55%)" stroke="hsl(45 100% 85%)" strokeWidth="1">
          <animate attributeName="x" from="248" to="520" dur="2.4s"
            begin={`${i * 0.7}s`} repeatCount="indefinite" />
          <animate attributeName="y" values={`${170 - i * 2};${170 - i * 2}`} dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.88;1"
            dur="2.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
        </rect>
        <text fontSize="9" fontFamily="monospace" fill="hsl(220 30% 5%)" fontWeight="bold">
          <animate attributeName="x" from="252" to="524" dur="2.4s"
            begin={`${i * 0.7}s`} repeatCount="indefinite" />
          <animate attributeName="y" values="189;189" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.88;1"
            dur="2.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
          .zip
        </text>
      </g>
    ))}
 
    {/* FTP label on wire */}
    <line x1="248" y1="183" x2="520" y2="183"
      stroke="hsl(45 100% 50% / 0.25)" strokeWidth="1.5" strokeDasharray="6 5" />
    <rect x="340" y="148" width="60" height="22" rx="11"
      fill="hsl(45 100% 55%)" stroke="hsl(45 100% 85%)" strokeWidth="1.5" />
    <text x="370" y="163" textAnchor="middle" fill="hsl(220 30% 5%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">FTP</text>
 
    {/* FTP Server */}
    <g transform="translate(520, 90)">
      <rect width="200" height="200" rx="10" fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      {/* stacked folder icons */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(30, ${30 + i * 46})`}>
          <rect width="140" height="32" rx="4" fill="hsl(45 100% 50% / 0.15)" stroke="hsl(45 100% 55% / 0.5)" strokeWidth="1" />
          <rect width="54" height="10" rx="2" fill="hsl(45 100% 55% / 0.6)" />
          <text x="70" y="22" textAnchor="middle" fill="hsl(45 100% 70%)" fontSize="10" fontFamily="monospace">
            {["documents/", "images/", "backups/"][i]}
          </text>
        </g>
      ))}
      <text x="100" y="178" textAnchor="middle" fill="hsl(140 100% 70%)" fontSize="12" fontFamily="monospace" fontWeight="bold">FTP SERVER</text>
    </g>
 
    <text x="400" y="355" textAnchor="middle" fill="hsl(45 100% 65%)" fontSize="12" fontFamily="monospace">
      FTP — File Transfer Protocol
    </text>
  </svg>
);

// visual: "smtp-email" 
export const SmtpEmailIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="SMTP for sending email">
    <GridDefs id="grid-smtp" />
    <rect width="800" height="400" fill="url(#grid-smtp)" opacity="0.3" />
 
    {/* Sender */}
    <g transform="translate(55, 130)">
      <circle cx="70" cy="50" r="40" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
      <text x="70" y="46" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="11" fontFamily="monospace" fontWeight="bold">YOU</text>
      <text x="70" y="62" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="9" fontFamily="monospace">sender</text>
    </g>
 
    {/* Animated envelope */}
    <g>
      {/* envelope body */}
      <rect width="70" height="48" rx="5"
        fill="hsl(30 100% 55%)" stroke="hsl(30 100% 85%)" strokeWidth="1.5">
        <animate attributeName="x" from="200" to="480" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="y" values="156;156" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.88;1" dur="2.2s" repeatCount="indefinite" />
      </rect>
      {/* envelope flap V */}
      <polyline fill="none" stroke="hsl(30 100% 85%)" strokeWidth="1.5">
        <animate attributeName="points"
          values="200,156 235,180 270,156; 480,156 515,180 550,156"
          dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.88;1" dur="2.2s" repeatCount="indefinite" />
      </polyline>
    </g>
 
    {/* SMTP badge */}
    <rect x="318" y="140" width="72" height="24" rx="12"
      fill="hsl(30 100% 55%)" stroke="hsl(30 100% 85%)" strokeWidth="1.5" />
    <text x="354" y="156" textAnchor="middle" fill="hsl(220 30% 5%)"
      fontSize="11" fontFamily="monospace" fontWeight="bold">SMTP</text>
 
    {/* SMTP Mail Server (relay) */}
    <g transform="translate(390, 100)">
      <rect width="130" height="170" rx="8" fill="hsl(220 30% 8%)" stroke="hsl(30 100% 55%)" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      {[0, 1, 2, 3].map(i => (
        <rect key={i} x="14" y={20 + i * 32} width="102" height="18" rx="3"
          fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 55% / 0.4)" strokeWidth="1" />
      ))}
      <text x="65" y="155" textAnchor="middle" fill="hsl(30 100% 70%)" fontSize="10" fontFamily="monospace" fontWeight="bold">MAIL SERVER</text>
    </g>
 
    {/* Second arrow → recipient */}
    <line x1="524" y1="185" x2="630" y2="185"
      stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="626,177 644,185 626,193" fill="hsl(30 100% 55%)" />
 
    {/* Recipient inbox */}
    <g transform="translate(648, 140)">
      <rect width="110" height="90" rx="8" fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2" />
      <text x="55" y="38" textAnchor="middle" fill="hsl(140 100% 65%)" fontSize="22">📬</text>
      <text x="55" y="65" textAnchor="middle" fill="hsl(140 100% 70%)" fontSize="10" fontFamily="monospace">INBOX</text>
      <text x="55" y="82" textAnchor="middle" fill="hsl(140 100% 50%)" fontSize="9" fontFamily="monospace">recipient</text>
    </g>
 
    <text x="400" y="355" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="12" fontFamily="monospace">
      SMTP — Simple Mail Transfer Protocol
    </text>
  </svg>
);

// visual: "question-destination"
export const QuestionDestinationIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Where is your destination?"
  >
    <GridDefs id="grid-qdest" />
    <rect width="800" height="400" fill="url(#grid-qdest)" opacity="0.3" />

    {/* Computer on left */}
    <g transform="translate(100, 120)">
      <rect
        width="140"
        height="100"
        rx="8"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
        strokeWidth="2"
      />
      <rect
        x="15"
        y="15"
        width="110"
        height="55"
        rx="3"
        fill="hsl(200 100% 50% / 0.1)"
        stroke="hsl(200 100% 50% / 0.5)"
      />
      <text
        x="70"
        y="48"
        textAnchor="middle"
        fill="hsl(200 100% 75%)"
        fontSize="11"
        fontFamily="monospace"
        fontWeight="bold"
      >
        YOU
      </text>
    </g>

    {/* Dashed arrow with question mark */}
    <line
      x1="250"
      y1="170"
      x2="540"
      y2="170"
      stroke="hsl(30 100% 60%)"
      strokeWidth="2"
      strokeDasharray="6 5"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-22"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </line>
    <polygon points="535,162 555,170 535,178" fill="hsl(30 100% 60%)" />

    {/* Big question mark */}
    <text
      x="600"
      y="190"
      textAnchor="middle"
      fill="hsl(30 100% 70%)"
      fontSize="72"
      fontFamily="monospace"
      fontWeight="bold"
    >
      ?
      <animate
        attributeName="opacity"
        values="0.5;1;0.5"
        dur="1.8s"
        repeatCount="indefinite"
      />
    </text>

    <text
      x="400"
      y="310"
      textAnchor="middle"
      fill="hsl(30 100% 65%)"
      fontSize="13"
      fontFamily="monospace"
    >
      Who are you trying to reach?
    </text>
  </svg>
);

// visual: "client-server-intro"
export const ClientServerIntroIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Client and server introduction"
  >
    <GridDefs id="grid-csintro" />
    <rect width="800" height="400" fill="url(#grid-csintro)" opacity="0.3" />

    {/* CLIENT */}
    <g transform="translate(80, 120)">
      <rect
        width="180"
        height="120"
        rx="10"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
        strokeWidth="2"
      />
      <rect
        x="15"
        y="15"
        width="150"
        height="60"
        rx="4"
        fill="hsl(200 100% 60% / 0.1)"
      />
      <text
        x="90"
        y="52"
        textAnchor="middle"
        fill="hsl(200 100% 80%)"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="bold"
      >
        CLIENT
      </text>
      <text
        x="90"
        y="110"
        textAnchor="middle"
        fill="hsl(200 100% 60%)"
        fontSize="10"
        fontFamily="monospace"
      >
        sends requests
      </text>
    </g>

    {/* SERVER */}
    <g transform="translate(540, 100)">
      <rect
        width="180"
        height="160"
        rx="10"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 60%)"
        strokeWidth="2"
      />
      <rect
        x="15"
        y="15"
        width="150"
        height="90"
        rx="4"
        fill="hsl(140 100% 60% / 0.1)"
      />
      {/* server rack lines */}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="30"
          y={30 + i * 24}
          width="120"
          height="14"
          rx="3"
          fill="hsl(140 100% 60% / 0.2)"
          stroke="hsl(140 100% 60% / 0.5)"
          strokeWidth="1"
        />
      ))}
      <text
        x="90"
        y="140"
        textAnchor="middle"
        fill="hsl(140 100% 80%)"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="bold"
      >
        SERVER
      </text>
      <text
        x="90"
        y="155"
        textAnchor="middle"
        fill="hsl(140 100% 60%)"
        fontSize="10"
        fontFamily="monospace"
      >
        responds
      </text>
    </g>

    {/* connecting arrow */}
    <line
      x1="260"
      y1="180"
      x2="540"
      y2="180"
      stroke="hsl(180 100% 60% / 0.5)"
      strokeWidth="2"
      strokeDasharray="5 5"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-20"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </line>

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(180 100% 70%)"
      fontSize="12"
      fontFamily="monospace"
    >
      every journey needs a destination
    </text>
  </svg>
);

// ════════════════════════════════════════════════════════════
// APPLICATION LAYER — Topic 1: Client-Server Communication
// ════════════════════════════════════════════════════════════

// visual: "client-server"
export const ClientServerIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Client and server communicating"
  >
    <GridDefs id="grid-cs" />
    <rect width="800" height="400" fill="url(#grid-cs)" opacity="0.3" />

    {/* Client */}
    <circle
      cx="140"
      cy="200"
      r="60"
      fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 55%)"
      strokeWidth="2"
    />
    <text
      x="140"
      y="196"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      CLIENT
    </text>
    <text
      x="140"
      y="214"
      textAnchor="middle"
      fill="hsl(200 100% 55%)"
      fontSize="10"
      fontFamily="monospace"
    >
      browser
    </text>

    {/* Server */}
    <rect
      x="560"
      y="130"
      width="120"
      height="140"
      rx="8"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 55%)"
      strokeWidth="2"
    />
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        x="575"
        y={148 + i * 28}
        width="90"
        height="16"
        rx="3"
        fill="hsl(140 100% 60% / 0.2)"
        stroke="hsl(140 100% 60% / 0.4)"
        strokeWidth="1"
      />
    ))}
    <text
      x="620"
      y="290"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      SERVER
    </text>

    {/* Bidirectional arrows */}
    <line
      x1="200"
      y1="185"
      x2="555"
      y2="185"
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
    <polygon points="550,177 568,185 550,193" fill="hsl(200 100% 60%)" />

    <line
      x1="555"
      y1="215"
      x2="200"
      y2="215"
      stroke="hsl(140 100% 60%)"
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
    <polygon points="205,207 187,215 205,223" fill="hsl(140 100% 60%)" />

    <text
      x="375"
      y="170"
      textAnchor="middle"
      fill="hsl(200 100% 70%)"
      fontSize="10"
      fontFamily="monospace"
    >
      REQUEST
    </text>
    <text
      x="375"
      y="232"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="10"
      fontFamily="monospace"
    >
      RESPONSE
    </text>
  </svg>
);

// visual: "client-request"
export const ClientRequestIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Client sends a request"
  >
    <GridDefs id="grid-creq" />
    <rect width="800" height="400" fill="url(#grid-creq)" opacity="0.3" />

    {/* Client glowing */}
    <circle cx="140" cy="200" r="80" fill="hsl(200 100% 50% / 0.12)" />
    <circle
      cx="140"
      cy="200"
      r="55"
      fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 60%)"
      strokeWidth="2.5"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.6;1;0.6"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <text
      x="140"
      y="196"
      textAnchor="middle"
      fill="hsl(200 100% 80%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      CLIENT
    </text>
    <text
      x="140"
      y="214"
      textAnchor="middle"
      fill="hsl(200 100% 60%)"
      fontSize="10"
      fontFamily="monospace"
    >
      initiates
    </text>

    {/* Packet flying right */}
    <rect
      width="60"
      height="34"
      rx="5"
      fill="hsl(200 100% 55%)"
      stroke="hsl(200 100% 90%)"
      strokeWidth="1.5"
    >
      <animate
        attributeName="x"
        from="210"
        to="650"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="183;183"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
    <text
      fontSize="10"
      fontFamily="monospace"
      fill="hsl(220 30% 5%)"
      fontWeight="bold"
    >
      <animate
        attributeName="x"
        from="225"
        to="665"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="205;205"
        dur="2s"
        repeatCount="indefinite"
      />
      REQUEST
    </text>

    {/* Server (dim) */}
    <rect
      x="660"
      y="150"
      width="100"
      height="100"
      rx="8"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 50% / 0.4)"
      strokeWidth="1.5"
    />
    <text
      x="710"
      y="205"
      textAnchor="middle"
      fill="hsl(140 100% 55%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      SERVER
    </text>

    <text
      x="400"
      y="330"
      textAnchor="middle"
      fill="hsl(200 100% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      the client is the one who sends a request
    </text>
  </svg>
);

// visual: "server-response"
export const ServerResponseIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Server sends a response"
  >
    <GridDefs id="grid-srvresp" />
    <rect width="800" height="400" fill="url(#grid-srvresp)" opacity="0.3" />

    {/* Client (dim) */}
    <circle
      cx="140"
      cy="200"
      r="55"
      fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 50% / 0.4)"
      strokeWidth="1.5"
    />
    <text
      x="140"
      y="204"
      textAnchor="middle"
      fill="hsl(200 100% 55%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      CLIENT
    </text>

    {/* Server glowing */}
    <circle cx="660" cy="200" r="85" fill="hsl(140 100% 50% / 0.10)" />
    <rect
      x="600"
      y="145"
      width="120"
      height="110"
      rx="8"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 60%)"
      strokeWidth="2.5"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.6;1;0.6"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x="616"
        y={162 + i * 24}
        width="88"
        height="14"
        rx="2"
        fill="hsl(140 100% 60% / 0.25)"
        stroke="hsl(140 100% 60% / 0.5)"
        strokeWidth="1"
      />
    ))}
    <text
      x="660"
      y="275"
      textAnchor="middle"
      fill="hsl(140 100% 80%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      SERVER
    </text>

    {/* Response packet flying left */}
    <rect
      width="70"
      height="34"
      rx="5"
      fill="hsl(140 100% 55%)"
      stroke="hsl(140 100% 90%)"
      strokeWidth="1.5"
    >
      <animate
        attributeName="x"
        from="580"
        to="130"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="183;183"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
    <text
      fontSize="9"
      fontFamily="monospace"
      fill="hsl(220 30% 5%)"
      fontWeight="bold"
    >
      <animate
        attributeName="x"
        from="585"
        to="135"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="205;205"
        dur="2s"
        repeatCount="indefinite"
      />
      RESPONSE
    </text>

    <text
      x="400"
      y="330"
      textAnchor="middle"
      fill="hsl(140 100% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      the server receives and responds
    </text>
  </svg>
);

// visual: "client-server-example"
export const ClientServerExampleIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Browser and website example"
  >
    <GridDefs id="grid-csex" />
    <rect width="800" height="400" fill="url(#grid-csex)" opacity="0.3" />

    {/* Browser on left */}
    <g transform="translate(60, 80)">
      <rect
        width="200"
        height="150"
        rx="8"
        fill="hsl(220 30% 8%)"
        stroke="hsl(200 100% 60%)"
        strokeWidth="2"
      />
      <rect width="200" height="26" rx="8" fill="hsl(200 100% 60% / 0.3)" />
      <circle cx="14" cy="13" r="4" fill="hsl(200 100% 60%)" />
      <circle cx="26" cy="13" r="4" fill="hsl(200 100% 60%)" />
      <rect
        x="42"
        y="6"
        width="140"
        height="14"
        rx="3"
        fill="hsl(200 100% 60% / 0.2)"
        stroke="hsl(200 100% 60% / 0.5)"
      />
      <line x1="20" y1="55" x2="180" y2="55" stroke="hsl(200 100% 60% / 0.4)" />
      <line x1="20" y1="70" x2="160" y2="70" stroke="hsl(200 100% 60% / 0.3)" />
      <line x1="20" y1="85" x2="170" y2="85" stroke="hsl(200 100% 60% / 0.3)" />
      <text
        x="100"
        y="135"
        textAnchor="middle"
        fill="hsl(200 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        YOUR BROWSER
      </text>
      <text
        x="100"
        y="170"
        textAnchor="middle"
        fill="hsl(200 100% 55%)"
        fontSize="10"
        fontFamily="monospace"
      >
        = CLIENT
      </text>
    </g>

    {/* Arrow */}
    <line
      x1="265"
      y1="155"
      x2="440"
      y2="155"
      stroke="hsl(30 100% 60%)"
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
    <polygon points="435,147 452,155 435,163" fill="hsl(30 100% 60%)" />
    <text
      x="355"
      y="140"
      textAnchor="middle"
      fill="hsl(30 100% 65%)"
      fontSize="10"
      fontFamily="monospace"
    >
      HTTP
    </text>

    {/* Website server on right */}
    <g transform="translate(460, 60)">
      <rect
        width="180"
        height="180"
        rx="8"
        fill="hsl(220 30% 8%)"
        stroke="hsl(140 100% 60%)"
        strokeWidth="2"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="20"
          y={20 + i * 28}
          width="140"
          height="18"
          rx="3"
          fill="hsl(140 100% 60% / 0.15)"
          stroke="hsl(140 100% 60% / 0.4)"
          strokeWidth="1"
        />
      ))}
      <text
        x="90"
        y="165"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="11"
        fontFamily="monospace"
      >
        WEBSITE
      </text>
      <text
        x="90"
        y="195"
        textAnchor="middle"
        fill="hsl(140 100% 55%)"
        fontSize="10"
        fontFamily="monospace"
      >
        = SERVER
      </text>
    </g>

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(180 100% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      every time you open a website
    </text>
  </svg>
);

// visual: "request-flow"
export const RequestFlowIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="HTTP request-response flow"
  >
    <GridDefs id="grid-reqflow" />
    <rect width="800" height="400" fill="url(#grid-reqflow)" opacity="0.3" />

    {/* Client */}
    <circle
      cx="110"
      cy="200"
      r="50"
      fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 60%)"
      strokeWidth="2"
    />
    <text
      x="110"
      y="205"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      CLIENT
    </text>

    {/* Server */}
    <rect
      x="620"
      y="155"
      width="110"
      height="90"
      rx="8"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 60%)"
      strokeWidth="2"
    />
    <text
      x="675"
      y="204"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      SERVER
    </text>

    {/* Top arrow: request */}
    <line
      x1="162"
      y1="175"
      x2="618"
      y2="175"
      stroke="hsl(200 100% 60%)"
      strokeWidth="2.5"
      strokeDasharray="8 5"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-26"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </line>
    <polygon points="613,167 631,175 613,183" fill="hsl(200 100% 60%)" />
    {/* HTTP label */}
    <rect
      x="340"
      y="155"
      width="90"
      height="24"
      rx="5"
      fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 60%)"
      strokeWidth="1.5"
    />
    <text
      x="385"
      y="172"
      textAnchor="middle"
      fill="hsl(200 100% 80%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      HTTP GET
    </text>

    {/* Bottom arrow: response */}
    <line
      x1="618"
      y1="225"
      x2="162"
      y2="225"
      stroke="hsl(140 100% 60%)"
      strokeWidth="2.5"
      strokeDasharray="8 5"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="26"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </line>
    <polygon points="167,217 149,225 167,233" fill="hsl(140 100% 60%)" />
    {/* 200 OK label */}
    <rect
      x="330"
      y="221"
      width="110"
      height="24"
      rx="5"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 60%)"
      strokeWidth="1.5"
    />
    <text
      x="385"
      y="238"
      textAnchor="middle"
      fill="hsl(140 100% 80%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      200 OK
    </text>

    <text
      x="400"
      y="330"
      textAnchor="middle"
      fill="hsl(180 100% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      client sends · server processes · server replies
    </text>
  </svg>
);

// visual: "cycle"
export const CycleIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Request-response cycle"
  >
    <GridDefs id="grid-cycle" />
    <rect width="800" height="400" fill="url(#grid-cycle)" opacity="0.3" />

    {/* Circular arrow path */}
    <path
      d="M 400 80 A 150 120 0 1 1 399 80"
      fill="none"
      stroke="hsl(180 100% 50% / 0.3)"
      strokeWidth="40"
      strokeLinecap="round"
    />
    <path
      d="M 400 80 A 150 120 0 1 1 399 80"
      fill="none"
      stroke="hsl(180 100% 50%)"
      strokeWidth="2"
      strokeDasharray="10 6"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-32"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>

    {/* Labels on arc */}
    <text
      x="260"
      y="130"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      REQUEST
    </text>
    <text
      x="540"
      y="300"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="13"
      fontFamily="monospace"
      fontWeight="bold"
    >
      RESPONSE
    </text>

    {/* Center label */}
    <text
      x="400"
      y="196"
      textAnchor="middle"
      fill="hsl(180 100% 70%)"
      fontSize="12"
      fontFamily="monospace"
      letterSpacing="2"
    >
      REQUEST
    </text>
    <text
      x="400"
      y="216"
      textAnchor="middle"
      fill="hsl(180 100% 70%)"
      fontSize="12"
      fontFamily="monospace"
      letterSpacing="2"
    >
      RESPONSE
    </text>
    <text
      x="400"
      y="236"
      textAnchor="middle"
      fill="hsl(180 100% 50%)"
      fontSize="12"
      fontFamily="monospace"
      letterSpacing="2"
    >
      CYCLE
    </text>

    {/* Arrowhead on cycle */}
    <polygon points="390,82 410,62 415,88" fill="hsl(180 100% 60%)" />

    <text
      x="400"
      y="360"
      textAnchor="middle"
      fill="hsl(180 100% 60%)"
      fontSize="11"
      fontFamily="monospace"
    >
      this exchange repeats every time you browse
    </text>
  </svg>
);

// visual: "to-transport"
export const ToTransportIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Message moving deeper into the network"
  >
    <GridDefs id="grid-totransport" />
    <rect
      width="800"
      height="400"
      fill="url(#grid-totransport)"
      opacity="0.3"
    />

    {/* Layer stack with descending highlight */}
    {[
      { y: 60, name: "APPLICATION", color: "200 100% 55%", active: true },
      { y: 140, name: "TRANSPORT", color: "140 100% 50%", active: false },
      { y: 220, name: "INTERNET", color: "30 100% 55%", active: false },
      { y: 300, name: "NETWORK ACCESS", color: "0 80% 55%", active: false },
    ].map((layer, i) => (
      <g key={i}>
        <rect
          x="220"
          y={layer.y}
          width="360"
          height="60"
          rx="6"
          fill={
            layer.active
              ? `hsl(${layer.color} / 0.25)`
              : `hsl(${layer.color} / 0.06)`
          }
          stroke={`hsl(${layer.color})`}
          strokeWidth={layer.active ? "2.5" : "1"}
          opacity={layer.active ? 1 : 0.5}
        />
        <text
          x="400"
          y={layer.y + 37}
          textAnchor="middle"
          fill={`hsl(${layer.color})`}
          fontSize="14"
          fontFamily="monospace"
          fontWeight="bold"
          letterSpacing="2"
        >
          {layer.name}
        </text>
      </g>
    ))}

    {/* Descending arrow */}
    <line
      x1="620"
      y1="90"
      x2="620"
      y2="320"
      stroke="hsl(140 100% 60%)"
      strokeWidth="2.5"
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
    <polygon points="612,315 620,335 628,315" fill="hsl(140 100% 60%)" />

    <text
      x="400"
      y="378"
      textAnchor="middle"
      fill="hsl(140 100% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      your message moves deeper
    </text>
  </svg>
);

// visual: "client-ready"
export const ClientReadyIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Client ready to send"
  >
    <GridDefs id="grid-clready" />
    <rect width="800" height="400" fill="url(#grid-clready)" opacity="0.3" />

    {/* Glowing client */}
    <circle cx="200" cy="200" r="100" fill="hsl(200 100% 50% / 0.1)">
      <animate
        attributeName="r"
        values="100;115;100"
        dur="2.5s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="200"
      cy="200"
      r="65"
      fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 65%)"
      strokeWidth="2.5"
    />
    <text
      x="200"
      y="196"
      textAnchor="middle"
      fill="hsl(200 100% 80%)"
      fontSize="14"
      fontFamily="monospace"
      fontWeight="bold"
    >
      CLIENT
    </text>
    <text
      x="200"
      y="215"
      textAnchor="middle"
      fill="hsl(200 100% 60%)"
      fontSize="10"
      fontFamily="monospace"
    >
      ready
    </text>

    {/* Checkmark */}
    <g transform="translate(240, 145)">
      <circle
        r="20"
        fill="hsl(140 100% 50%)"
        stroke="hsl(140 100% 80%)"
        strokeWidth="2"
      />
      <path
        d="M -8 0 L -2 6 L 9 -6"
        stroke="hsl(220 30% 5%)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* Server target */}
    <rect
      x="560"
      y="150"
      width="110"
      height="100"
      rx="8"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 50%)"
      strokeWidth="2"
    />
    <text
      x="615"
      y="205"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      SERVER
    </text>

    {/* Aimed arrow */}
    <line
      x1="268"
      y1="200"
      x2="555"
      y2="200"
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
    <polygon points="550,192 568,200 550,208" fill="hsl(200 100% 60%)" />

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(200 100% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      you are the client · the server awaits
    </text>
  </svg>
);

// visual: "server-confused"
export const ServerConfusedIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Server confused by unstructured message"
  >
    <GridDefs id="grid-srvconf" />
    <rect width="800" height="400" fill="url(#grid-srvconf)" opacity="0.3" />

    {/* Garbled packet from left */}
    <g>
      {["@#!", "???", "...", "%%%"].map((s, i) => (
        <text
          key={i}
          x={120 + i * 70}
          y={180 + (i % 2) * 30}
          fill="hsl(30 100% 60%)"
          fontSize="18"
          fontFamily="monospace"
          opacity="0.7"
        >
          {s}
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="1.2s"
            begin={`${i * 0.3}s`}
            repeatCount="indefinite"
          />
        </text>
      ))}
    </g>

    {/* Arrow */}
    <line
      x1="430"
      y1="200"
      x2="545"
      y2="200"
      stroke="hsl(30 100% 60% / 0.6)"
      strokeWidth="2"
      strokeDasharray="5 5"
    />
    <polygon points="540,192 558,200 540,208" fill="hsl(30 100% 60%)" />

    {/* Confused server */}
    <rect
      x="570"
      y="130"
      width="160"
      height="140"
      rx="10"
      fill="hsl(220 30% 8%)"
      stroke="hsl(0 80% 55%)"
      strokeWidth="2"
    />
    <text
      x="650"
      y="200"
      textAnchor="middle"
      fill="hsl(0 0% 50%)"
      fontSize="36"
    >
      ?
    </text>
    <text
      x="650"
      y="250"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      SERVER
    </text>

    {/* Shake animation on server */}
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0 0; 3 0; -3 0; 0 0"
      dur="0.5s"
      repeatCount="indefinite"
      href="#server-confused-rect"
    />

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      without structure, the server cannot understand
    </text>
  </svg>
);

// visual: "invalid-communication"
export const InvalidCommunicationIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Invalid communication ignored"
  >
    <GridDefs id="grid-invalidcomm" />
    <rect
      width="800"
      height="400"
      fill="url(#grid-invalidcomm)"
      opacity="0.3"
    />

    {/* Client */}
    <circle
      cx="140"
      cy="200"
      r="55"
      fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 55%)"
      strokeWidth="2"
    />
    <text
      x="140"
      y="204"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      CLIENT
    </text>

    {/* Broken packet */}
    <g>
      <rect
        x="215"
        y="183"
        width="80"
        height="34"
        rx="5"
        fill="hsl(0 70% 50% / 0.3)"
        stroke="hsl(0 70% 60%)"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <text
        x="255"
        y="205"
        textAnchor="middle"
        fill="hsl(0 70% 70%)"
        fontSize="10"
        fontFamily="monospace"
      >
        WRONG
      </text>
    </g>

    {/* X blocker */}
    <g transform="translate(360, 185)">
      <circle
        r="30"
        fill="hsl(0 80% 40% / 0.3)"
        stroke="hsl(0 80% 60%)"
        strokeWidth="2.5"
      />
      <line
        x1="-16"
        y1="-16"
        x2="16"
        y2="16"
        stroke="hsl(0 80% 70%)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line
        x1="-16"
        y1="16"
        x2="16"
        y2="-16"
        stroke="hsl(0 80% 70%)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </g>

    {/* Server (turned away) */}
    <rect
      x="560"
      y="145"
      width="120"
      height="110"
      rx="8"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 50% / 0.35)"
      strokeWidth="1.5"
      opacity="0.5"
    />
    <text
      x="620"
      y="205"
      textAnchor="middle"
      fill="hsl(0 0% 45%)"
      fontSize="12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      SERVER
    </text>
    <text
      x="620"
      y="225"
      textAnchor="middle"
      fill="hsl(0 0% 40%)"
      fontSize="10"
      fontFamily="monospace"
    >
      ignoring
    </text>

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      wrong protocol · message ignored
    </text>
  </svg>
);


// ════════════════════════════════════════════════════════════
// APPLICATION LAYER — Topic 3: Message Structure
// ════════════════════════════════════════════════════════════

// visual: "raw-data"
export const RawDataIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Raw unstructured data"
  >
    <GridDefs id="grid-rawdata" />
    <rect width="800" height="400" fill="url(#grid-rawdata)" opacity="0.3" />

    <text
      x="400"
      y="70"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      RAW DATA
    </text>

    {/* Flowing binary/hex chaos */}
    {[
      { x: 80, y: 120, val: "48 65 6C" },
      { x: 300, y: 100, val: "6C 6F 20" },
      { x: 530, y: 130, val: "57 6F 72" },
      { x: 100, y: 200, val: "1A FF 3C" },
      { x: 350, y: 185, val: "0D 0A 47" },
      { x: 580, y: 210, val: "45 54 20" },
      { x: 130, y: 280, val: "2F 20 48" },
      { x: 390, y: 265, val: "54 54 50" },
      { x: 600, y: 285, val: "2F 31 2E" },
    ].map((item, i) => (
      <text
        key={i}
        x={item.x}
        y={item.y}
        fill="hsl(200 100% 60%)"
        fontSize="15"
        fontFamily="monospace"
        opacity="0.7"
      >
        {item.val}
        <animate
          attributeName="opacity"
          values="0.4;0.9;0.4"
          dur="3s"
          begin={`${i * 0.3}s`}
          repeatCount="indefinite"
        />
      </text>
    ))}

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(200 100% 55%)"
      fontSize="11"
      fontFamily="monospace"
    >
      computers need structure, not just raw bytes
    </text>
  </svg>
);

// visual: "computer-confused"
export const ComputerConfusedIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Computer confused by unstructured data"
  >
    <GridDefs id="grid-compconf" />
    <rect width="800" height="400" fill="url(#grid-compconf)" opacity="0.3" />

    {/* Monitor */}
    <rect
      x="260"
      y="80"
      width="280"
      height="200"
      rx="10"
      fill="hsl(220 30% 8%)"
      stroke="hsl(0 80% 55%)"
      strokeWidth="2.5"
    />
    <rect
      x="280"
      y="100"
      width="240"
      height="150"
      rx="5"
      fill="hsl(220 30% 4%)"
    />

    {/* Confused glyphs on screen */}
    {["?!?", "#@!", "???", "!?#"].map((s, i) => (
      <text
        key={i}
        x={310 + (i % 2) * 110}
        y={145 + Math.floor(i / 2) * 55}
        fill="hsl(0 70% 60%)"
        fontSize="22"
        fontFamily="monospace"
      >
        {s}
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1s"
          begin={`${i * 0.25}s`}
          repeatCount="indefinite"
        />
      </text>
    ))}

    {/* Stand */}
    <rect
      x="380"
      y="280"
      width="40"
      height="30"
      rx="2"
      fill="hsl(220 30% 15%)"
    />
    <rect
      x="340"
      y="308"
      width="120"
      height="12"
      rx="4"
      fill="hsl(220 30% 15%)"
    />

    {/* Error icon */}
    <circle
      cx="600"
      cy="140"
      r="30"
      fill="hsl(0 80% 40% / 0.3)"
      stroke="hsl(0 80% 60%)"
      strokeWidth="2"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.5;1;0.5"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
    <text
      x="600"
      y="150"
      textAnchor="middle"
      fill="hsl(0 80% 70%)"
      fontSize="28"
      fontFamily="monospace"
    >
      !
    </text>

    <text
      x="400"
      y="360"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      computers expect data in a precise format
    </text>
  </svg>
);

// visual: "structure-build"
export const StructureBuildIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Building a structured message"
  >
    <GridDefs id="grid-structbuild" />
    <rect
      width="800"
      height="400"
      fill="url(#grid-structbuild)"
      opacity="0.3"
    />

    <text
      x="400"
      y="55"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      STRUCTURED REQUEST
    </text>

    {/* Building blocks appearing */}
    {[
      { label: "METHOD", color: "200 100% 60%", y: 80 },
      { label: "HEADERS", color: "160 100% 55%", y: 170 },
      { label: "BODY", color: "140 100% 50%", y: 260 },
    ].map((block, i) => (
      <g key={i}>
        <rect
          x="220"
          y={block.y}
          width="360"
          height="70"
          rx="6"
          fill={`hsl(${block.color} / 0.15)`}
          stroke={`hsl(${block.color})`}
          strokeWidth="2"
        >
          <animate
            attributeName="opacity"
            values="0;1"
            dur="0.6s"
            begin={`${i * 0.5}s`}
            fill="freeze"
            repeatCount="1"
          />
          <animate
            attributeName="x"
            values="280;220"
            dur="0.6s"
            begin={`${i * 0.5}s`}
            fill="freeze"
            repeatCount="1"
          />
        </rect>
        <text
          x="400"
          y={block.y + 42}
          textAnchor="middle"
          fill={`hsl(${block.color})`}
          fontSize="18"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {block.label}
          <animate
            attributeName="opacity"
            values="0;1"
            dur="0.6s"
            begin={`${i * 0.5}s`}
            fill="freeze"
            repeatCount="1"
          />
        </text>
      </g>
    ))}
  </svg>
);

// visual: "http-overview"
export const HttpOverviewIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="HTTP request structure overview"
  >
    <GridDefs id="grid-httpov" />
    <rect width="800" height="400" fill="url(#grid-httpov)" opacity="0.3" />

    <text
      x="400"
      y="48"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      HTTP REQUEST
    </text>

    {/* Three parts */}
    {[
      {
        label: "1. METHOD",
        sub: "GET / POST / PUT",
        color: "200 100% 60%",
        y: 70,
      },
      {
        label: "2. HEADERS",
        sub: "host · content-type · auth",
        color: "160 100% 55%",
        y: 185,
      },
      {
        label: "3. BODY",
        sub: "the actual data payload",
        color: "140 100% 50%",
        y: 300,
      },
    ].map((part, i) => (
      <g key={i}>
        <rect
          x="160"
          y={part.y}
          width="480"
          height="90"
          rx="8"
          fill={`hsl(${part.color} / 0.12)`}
          stroke={`hsl(${part.color})`}
          strokeWidth="1.8"
        />
        <text
          x="190"
          y={part.y + 38}
          fill={`hsl(${part.color})`}
          fontSize="16"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {part.label}
        </text>
        <text
          x="190"
          y={part.y + 60}
          fill={`hsl(${part.color} / 0.8)`}
          fontSize="12"
          fontFamily="monospace"
        >
          {part.sub}
        </text>
      </g>
    ))}
  </svg>
);

// visual: "method"
export const MethodIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="HTTP METHOD explained"
  >
    <GridDefs id="grid-method" />
    <rect width="800" height="400" fill="url(#grid-method)" opacity="0.3" />

    <text
      x="400"
      y="50"
      textAnchor="middle"
      fill="hsl(200 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      METHOD
    </text>

    {/* Highlighted METHOD block */}
    <rect
      x="160"
      y="70"
      width="480"
      height="80"
      rx="8"
      fill="hsl(200 100% 60% / 0.25)"
      stroke="hsl(200 100% 65%)"
      strokeWidth="2.5"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.6;1;0.6"
        dur="1.8s"
        repeatCount="indefinite"
      />
    </rect>
    <text
      x="400"
      y="120"
      textAnchor="middle"
      fill="hsl(200 100% 85%)"
      fontSize="22"
      fontFamily="monospace"
      fontWeight="bold"
    >
      METHOD
    </text>

    {/* Method types */}
    {[
      { name: "GET", desc: "retrieve data", color: "200 100% 65%", x: 130 },
      { name: "POST", desc: "send data", color: "160 100% 55%", x: 360 },
      { name: "DELETE", desc: "remove data", color: "0 80% 60%", x: 575 },
    ].map((m, i) => (
      <g key={i}>
        <rect
          x={m.x}
          y="200"
          width="130"
          height="80"
          rx="6"
          fill={`hsl(${m.color} / 0.15)`}
          stroke={`hsl(${m.color})`}
          strokeWidth="1.8"
        />
        <text
          x={m.x + 65}
          y="242"
          textAnchor="middle"
          fill={`hsl(${m.color})`}
          fontSize="18"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {m.name}
        </text>
        <text
          x={m.x + 65}
          y="263"
          textAnchor="middle"
          fill={`hsl(${m.color} / 0.8)`}
          fontSize="10"
          fontFamily="monospace"
        >
          {m.desc}
        </text>
      </g>
    ))}

    <text
      x="400"
      y="340"
      textAnchor="middle"
      fill="hsl(200 100% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      tells the server what action you want
    </text>
  </svg>
);

// visual: "headers"
export const HeadersIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="HTTP HEADERS explained"
  >
    <GridDefs id="grid-headers" />
    <rect width="800" height="400" fill="url(#grid-headers)" opacity="0.3" />

    <text
      x="400"
      y="50"
      textAnchor="middle"
      fill="hsl(160 100% 70%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      HEADERS
    </text>

    {/* Highlighted HEADERS block */}
    <rect
      x="160"
      y="70"
      width="480"
      height="80"
      rx="8"
      fill="hsl(160 100% 55% / 0.20)"
      stroke="hsl(160 100% 60%)"
      strokeWidth="2.5"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.6;1;0.6"
        dur="1.8s"
        repeatCount="indefinite"
      />
    </rect>
    <text
      x="400"
      y="120"
      textAnchor="middle"
      fill="hsl(160 100% 85%)"
      fontSize="22"
      fontFamily="monospace"
      fontWeight="bold"
    >
      HEADERS
    </text>

    {/* Header rows */}
    {[
      { key: "Host:", val: "example.com" },
      { key: "Content-Type:", val: "application/json" },
      { key: "Accept:", val: "text/html" },
      { key: "Authorization:", val: "Bearer token…" },
    ].map((row, i) => (
      <g key={i} transform={`translate(160, ${185 + i * 44})`}>
        <rect
          width="480"
          height="36"
          rx="4"
          fill="hsl(160 100% 55% / 0.08)"
          stroke="hsl(160 100% 55% / 0.3)"
          strokeWidth="1"
        />
        <text
          x="16"
          y="24"
          fill="hsl(160 100% 70%)"
          fontSize="13"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {row.key}
        </text>
        <text
          x="220"
          y="24"
          fill="hsl(160 100% 55%)"
          fontSize="13"
          fontFamily="monospace"
        >
          {row.val}
        </text>
      </g>
    ))}
  </svg>
);

// visual: "body"
export const BodyIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="HTTP BODY explained"
  >
    <GridDefs id="grid-body" />
    <rect width="800" height="400" fill="url(#grid-body)" opacity="0.3" />

    <text
      x="400"
      y="50"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      BODY
    </text>

    {/* Highlighted BODY block */}
    <rect
      x="160"
      y="70"
      width="480"
      height="80"
      rx="8"
      fill="hsl(140 100% 50% / 0.20)"
      stroke="hsl(140 100% 60%)"
      strokeWidth="2.5"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.6;1;0.6"
        dur="1.8s"
        repeatCount="indefinite"
      />
    </rect>
    <text
      x="400"
      y="120"
      textAnchor="middle"
      fill="hsl(140 100% 85%)"
      fontSize="22"
      fontFamily="monospace"
      fontWeight="bold"
    >
      BODY
    </text>

    {/* JSON payload visualization */}
    <rect
      x="180"
      y="175"
      width="440"
      height="165"
      rx="8"
      fill="hsl(220 30% 4%)"
      stroke="hsl(140 100% 50% / 0.5)"
      strokeWidth="1.5"
    />
    {[
      { t: "{", x: 200, y: 200, c: "hsl(0 0% 70%)" },
      {
        t: '  "username": "player_01",',
        x: 200,
        y: 222,
        c: "hsl(140 100% 60%)",
      },
      { t: '  "action":   "ping",', x: 200, y: 244, c: "hsl(140 100% 60%)" },
      {
        t: '  "target":   "game-server"',
        x: 200,
        y: 266,
        c: "hsl(140 100% 60%)",
      },
      { t: "}", x: 200, y: 288, c: "hsl(0 0% 70%)" },
    ].map((line, i) => (
      <text
        key={i}
        x={line.x}
        y={line.y}
        fill={line.c}
        fontSize="13"
        fontFamily="monospace"
      >
        {line.t}
      </text>
    ))}

    <text
      x="400"
      y="365"
      textAnchor="middle"
      fill="hsl(140 100% 60%)"
      fontSize="11"
      fontFamily="monospace"
    >
      the actual data you want to send
    </text>
  </svg>
);

// visual: "invalid-request"
export const InvalidRequestIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Invalid request rejected"
  >
    <GridDefs id="grid-invalidreq" />
    <rect width="800" height="400" fill="url(#grid-invalidreq)" opacity="0.3" />

    {/* Broken request envelope */}
    <g transform="translate(140, 100)">
      <rect
        width="240"
        height="200"
        rx="10"
        fill="hsl(0 70% 40% / 0.2)"
        stroke="hsl(0 70% 60%)"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      {/* crack lines */}
      <line
        x1="80"
        y1="0"
        x2="100"
        y2="60"
        stroke="hsl(0 70% 60%)"
        strokeWidth="2"
      />
      <line
        x1="100"
        y1="60"
        x2="70"
        y2="120"
        stroke="hsl(0 70% 60%)"
        strokeWidth="2"
      />
      <text
        x="120"
        y="110"
        textAnchor="middle"
        fill="hsl(0 0% 45%)"
        fontSize="13"
        fontFamily="monospace"
      >
        METHOD: ???
      </text>
      <text
        x="120"
        y="132"
        textAnchor="middle"
        fill="hsl(0 0% 35%)"
        fontSize="13"
        fontFamily="monospace"
      >
        HEADERS: ∅
      </text>
      <text
        x="120"
        y="154"
        textAnchor="middle"
        fill="hsl(0 0% 35%)"
        fontSize="13"
        fontFamily="monospace"
      >
        BODY: ∅
      </text>
      <text
        x="120"
        y="220"
        textAnchor="middle"
        fill="hsl(0 70% 65%)"
        fontSize="12"
        fontFamily="monospace"
      >
        INVALID
      </text>
    </g>

    {/* Rejection arrow */}
    <g transform="translate(390, 195)">
      <circle
        r="28"
        fill="hsl(0 80% 40% / 0.3)"
        stroke="hsl(0 80% 60%)"
        strokeWidth="2.5"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.5;1;0.5"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <line
        x1="-14"
        y1="-14"
        x2="14"
        y2="14"
        stroke="hsl(0 80% 70%)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line
        x1="-14"
        y1="14"
        x2="14"
        y2="-14"
        stroke="hsl(0 80% 70%)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </g>

    {/* Server frowning */}
    <rect
      x="470"
      y="120"
      width="160"
      height="160"
      rx="8"
      fill="hsl(220 30% 8%)"
      stroke="hsl(0 70% 50%)"
      strokeWidth="1.5"
    />
    <text
      x="550"
      y="200"
      textAnchor="middle"
      fill="hsl(0 0% 50%)"
      fontSize="32"
    >
      :(
    </text>
    <text
      x="550"
      y="255"
      textAnchor="middle"
      fill="hsl(0 70% 60%)"
      fontSize="12"
      fontFamily="monospace"
    >
      SERVER
    </text>

    <text
      x="400"
      y="360"
      textAnchor="middle"
      fill="hsl(0 80% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      without structure · the server rejects it
    </text>
  </svg>
);

// visual: "valid-request"
export const ValidRequestIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Valid structured request accepted"
  >
    <GridDefs id="grid-validreq" />
    <rect width="800" height="400" fill="url(#grid-validreq)" opacity="0.3" />

    {/* Valid request envelope */}
    <g transform="translate(80, 80)">
      <rect
        width="260"
        height="220"
        rx="10"
        fill="hsl(140 100% 50% / 0.12)"
        stroke="hsl(140 100% 60%)"
        strokeWidth="2"
      >
        <animate
          attributeName="stroke-opacity"
          values="0.6;1;0.6"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      {[
        { label: "METHOD:", val: "GET", color: "200 100% 65%" },
        { label: "HEADERS:", val: "host, type…", color: "160 100% 60%" },
        { label: "BODY:", val: '{ "ping": true }', color: "140 100% 55%" },
      ].map((row, i) => (
        <g key={i}>
          <text
            x="20"
            y={70 + i * 50}
            fill={`hsl(${row.color})`}
            fontSize="13"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {row.label}
          </text>
          <text
            x="20"
            y={90 + i * 50}
            fill={`hsl(${row.color} / 0.8)`}
            fontSize="12"
            fontFamily="monospace"
          >
            {row.val}
          </text>
        </g>
      ))}
      <text
        x="130"
        y="206"
        textAnchor="middle"
        fill="hsl(140 100% 70%)"
        fontSize="12"
        fontFamily="monospace"
      >
        VALID ✓
      </text>
    </g>

    {/* Checkmark */}
    <g transform="translate(360, 195)">
      <circle
        r="28"
        fill="hsl(140 100% 50%)"
        stroke="hsl(140 100% 80%)"
        strokeWidth="2"
      />
      <path
        d="M -12 0 L -4 8 L 14 -10"
        stroke="hsl(220 30% 5%)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* Happy server */}
    <rect
      x="440"
      y="100"
      width="200"
      height="200"
      rx="10"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 60%)"
      strokeWidth="2"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.5;1;0.5"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        x="460"
        y={120 + i * 36}
        width="160"
        height="24"
        rx="3"
        fill="hsl(140 100% 60% / 0.2)"
        stroke="hsl(140 100% 60% / 0.5)"
        strokeWidth="1"
      />
    ))}
    <text
      x="540"
      y="278"
      textAnchor="middle"
      fill="hsl(140 100% 70%)"
      fontSize="12"
      fontFamily="monospace"
    >
      SERVER ✓
    </text>

    <text
      x="400"
      y="360"
      textAnchor="middle"
      fill="hsl(140 100% 65%)"
      fontSize="12"
      fontFamily="monospace"
    >
      well-structured · correctly processed
    </text>
  </svg>
);

// visual: "message-complete"
export const MessageCompleteIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Message is complete and ready"
  >
    <GridDefs id="grid-msgcomplete" />
    <rect
      width="800"
      height="400"
      fill="url(#grid-msgcomplete)"
      opacity="0.3"
    />

    {/* Glowing completed message */}
    <circle cx="400" cy="180" r="120" fill="hsl(140 100% 50% / 0.07)">
      <animate
        attributeName="r"
        values="110;130;110"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <rect
      x="230"
      y="90"
      width="340"
      height="180"
      rx="14"
      fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 60%)"
      strokeWidth="2.5"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.5;1;0.5"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>

    {/* Contents */}
    {[
      { t: "METHOD:  GET", c: "200 100% 65%" },
      { t: "HEADERS: host, auth", c: "160 100% 55%" },
      { t: 'BODY:    { "ping" }', c: "140 100% 50%" },
    ].map((row, i) => (
      <text
        key={i}
        x="260"
        y={140 + i * 40}
        fill={`hsl(${row.c})`}
        fontSize="15"
        fontFamily="monospace"
      >
        {row.t}
      </text>
    ))}

    {/* Big green checkmark */}
    <g transform="translate(580, 150)">
      <circle
        r="40"
        fill="hsl(140 100% 50%)"
        stroke="hsl(140 100% 80%)"
        strokeWidth="2.5"
      />
      <path
        d="M -16 0 L -4 14 L 18 -14"
        stroke="hsl(220 30% 5%)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <text
      x="400"
      y="330"
      textAnchor="middle"
      fill="hsl(140 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="2"
    >
      MESSAGE COMPLETE
    </text>
    <text
      x="400"
      y="355"
      textAnchor="middle"
      fill="hsl(140 100% 55%)"
      fontSize="11"
      fontFamily="monospace"
    >
      protocol · structure · destination — all set
    </text>
  </svg>
);

// visual: "recap"
export const RecapIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Application layer recap"
  >
    <GridDefs id="grid-recap" />
    <rect width="800" height="400" fill="url(#grid-recap)" opacity="0.3" />

    <text
      x="400"
      y="48"
      textAnchor="middle"
      fill="hsl(180 100% 75%)"
      fontSize="14"
      fontFamily="monospace"
      letterSpacing="3"
    >
      RECAP
    </text>

    {[
      {
        icon: "✓",
        label: "Right protocol",
        sub: "HTTP chosen",
        color: "200 100% 60%",
        x: 100,
        y: 80,
      },
      {
        icon: "✓",
        label: "Valid request",
        sub: "method · headers · body",
        color: "160 100% 55%",
        x: 480,
        y: 80,
      },
      {
        icon: "✓",
        label: "Destination",
        sub: "server identified",
        color: "140 100% 50%",
        x: 280,
        y: 230,
      },
    ].map((item, i) => (
      <g key={i} transform={`translate(${item.x}, ${item.y})`}>
        <rect
          width="220"
          height="110"
          rx="10"
          fill={`hsl(${item.color} / 0.12)`}
          stroke={`hsl(${item.color})`}
          strokeWidth="1.8"
        />
        <text
          x="30"
          y="50"
          fill={`hsl(${item.color})`}
          fontSize="28"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {item.icon}
        </text>
        <text
          x="60"
          y="50"
          fill={`hsl(${item.color})`}
          fontSize="15"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {item.label}
        </text>
        <text
          x="30"
          y="78"
          fill={`hsl(${item.color} / 0.8)`}
          fontSize="11"
          fontFamily="monospace"
        >
          {item.sub}
        </text>
      </g>
    ))}

    <text
      x="400"
      y="380"
      textAnchor="middle"
      fill="hsl(180 100% 65%)"
      fontSize="11"
      fontFamily="monospace"
    >
      application layer — complete
    </text>
  </svg>
);

// visual: "send-button"
export const SendButtonIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Ready to send the message"
  >
    <GridDefs id="grid-sendbtn" />
    <rect width="800" height="400" fill="url(#grid-sendbtn)" opacity="0.3" />

    {/* Big glowing SEND button */}
    <rect
      x="230"
      y="140"
      width="340"
      height="120"
      rx="60"
      fill="hsl(140 100% 50% / 0.2)"
      stroke="hsl(140 100% 65%)"
      strokeWidth="3"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.5;1;0.5"
        dur="1.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        values="0.15;0.3;0.15"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </rect>
    <text
      x="400"
      y="215"
      textAnchor="middle"
      fill="hsl(140 100% 85%)"
      fontSize="36"
      fontFamily="monospace"
      fontWeight="bold"
      letterSpacing="4"
    >
      SEND
    </text>

    {/* Radiating energy */}
    {[70, 100, 130].map((r, i) => (
      <circle
        key={i}
        cx="400"
        cy="200"
        r={r + 120}
        fill="none"
        stroke="hsl(140 100% 50%)"
        strokeWidth="1"
        opacity="0.2"
      >
        <animate
          attributeName="r"
          values={`${r + 120};${r + 160};${r + 120}`}
          dur={`${2 + i * 0.5}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.2;0.05;0.2"
          dur={`${2 + i * 0.5}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}

    <text
      x="400"
      y="320"
      textAnchor="middle"
      fill="hsl(140 100% 65%)"
      fontSize="13"
      fontFamily="monospace"
    >
      time to send it
    </text>
  </svg>
);

// visual: "descend-layer"
export const DescendLayerIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="Descending to the next network layer"
  >
    <GridDefs id="grid-descend" />
    <rect width="800" height="400" fill="url(#grid-descend)" opacity="0.3" />

    {/* Layer stack — APPLICATION dimming, TRANSPORT lighting up */}
    {[
      { y: 60, name: "APPLICATION", color: "200 100% 55%", opacity: 0.4 },
      { y: 150, name: "TRANSPORT", color: "140 100% 50%", opacity: 1 },
      { y: 240, name: "INTERNET", color: "30 100% 55%", opacity: 0.3 },
      { y: 330, name: "NETWORK ACCESS", color: "0 80% 55%", opacity: 0.3 },
    ].map((layer, i) => (
      <g key={i} opacity={layer.opacity}>
        <rect
          x="200"
          y={layer.y}
          width="400"
          height="60"
          rx="6"
          fill={`hsl(${layer.color} / 0.15)`}
          stroke={`hsl(${layer.color})`}
          strokeWidth={i === 1 ? "2.5" : "1"}
        />
        <text
          x="400"
          y={layer.y + 37}
          textAnchor="middle"
          fill={`hsl(${layer.color})`}
          fontSize="15"
          fontFamily="monospace"
          fontWeight="bold"
          letterSpacing="2"
        >
          {layer.name}
        </text>
        {i === 1 && (
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </g>
    ))}

    {/* Descending packet */}
    <circle
      r="14"
      fill="hsl(140 100% 60%)"
      stroke="hsl(140 100% 90%)"
      strokeWidth="2"
    >
      <animate
        attributeName="cx"
        values="400;400"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="cy"
        values="90;180"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.2;0.8;1"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>

    <text
      x="640"
      y="180"
      fill="hsl(140 100% 70%)"
      fontSize="11"
      fontFamily="monospace"
    >
      ← next layer
    </text>
  </svg>
);