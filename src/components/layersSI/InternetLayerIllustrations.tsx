import { GridDefs } from "../SceneIllustration";

// ════════════════════════════════════════════════════════════
// INTERNET LAYER (Layer 3) — All illustrations
// ════════════════════════════════════════════════════════════


// ── INTRO ────────────────────────────────────────────────────

// visual: "segment-ready"
export const SegmentReadyIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Segment ready for addressing">
    <GridDefs id="grid-segready" />
    <rect width="800" height="400" fill="url(#grid-segready)" opacity="0.3" />

    {/* Glowing segment */}
    <circle cx="400" cy="185" r="110" fill="hsl(140 100% 50% / 0.07)">
      <animate attributeName="r" values="100;120;100" dur="3s" repeatCount="indefinite" />
    </circle>
    <rect x="220" y="130" width="360" height="110" rx="10"
      fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>

    {/* Segment label */}
    <text x="400" y="175" textAnchor="middle" fill="hsl(140 100% 80%)" fontSize="16"
      fontFamily="monospace" fontWeight="bold" letterSpacing="3">SEGMENT</text>
    <text x="400" y="200" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11"
      fontFamily="monospace">data · port · sequence #</text>

    {/* Green checkmark */}
    <g transform="translate(530, 148)">
      <circle r="22" fill="hsl(140 100% 50%)" stroke="hsl(140 100% 80%)" strokeWidth="2" />
      <path d="M -10 0 L -3 8 L 12 -8" stroke="hsl(220 30% 5%)" strokeWidth="3.5"
        fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Question: needs address */}
    <text x="400" y="295" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="13" fontFamily="monospace">
      ready · but where does it go?
    </text>
    <text x="400" y="318" textAnchor="middle" fill="hsl(30 100% 50%)" fontSize="11" fontFamily="monospace">
      it needs an address →
    </text>
  </svg>
);

// visual: "welcome-internet"
export const WelcomeInternetIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Welcome to the Internet Layer">
    <GridDefs id="grid-welcomeinet" />
    <rect width="800" height="400" fill="url(#grid-welcomeinet)" opacity="0.3" />

    {/* Globe */}
    <circle cx="400" cy="185" r="130" fill="none" stroke="hsl(30 100% 55%)" strokeWidth="1.5" opacity="0.4" />
    <circle cx="400" cy="185" r="130" fill="hsl(30 100% 50% / 0.06)" />
    <ellipse cx="400" cy="185" rx="55" ry="130" fill="none" stroke="hsl(30 100% 55% / 0.4)" strokeWidth="1" />
    <ellipse cx="400" cy="185" rx="110" ry="50" fill="none" stroke="hsl(30 100% 55% / 0.3)" strokeWidth="1" />
    <ellipse cx="400" cy="185" rx="110" ry="20" fill="none" stroke="hsl(30 100% 55% / 0.2)" strokeWidth="1" />

    {/* Rotating highlight dot */}
    <circle r="7" fill="hsl(30 100% 70%)" opacity="0.9">
      <animateMotion dur="6s" repeatCount="indefinite"
        path="M 400 55 A 130 130 0 1 1 399 55" />
    </circle>

    {/* Layer badge */}
    <rect x="258" y="155" width="284" height="60" rx="30"
      fill="hsl(30 100% 55% / 0.15)" stroke="hsl(30 100% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="191" textAnchor="middle" fill="hsl(30 100% 85%)" fontSize="16"
      fontFamily="monospace" fontWeight="bold" letterSpacing="3">INTERNET LAYER</text>

    <text x="400" y="350" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="11"
      fontFamily="monospace">global identity · global routing</text>
  </svg>
);

// visual: "postal-system"
export const PostalSystemIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Internet as a postal system">
    <GridDefs id="grid-postal" />
    <rect width="800" height="400" fill="url(#grid-postal)" opacity="0.3" />

    <text x="400" y="44" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">LIKE THE POSTAL SYSTEM</text>

    {/* House (sender) */}
    <g transform="translate(60, 150)">
      <polygon points="80,0 0,70 160,70" fill="hsl(30 100% 55% / 0.2)" stroke="hsl(30 100% 60%)" strokeWidth="2" />
      <rect x="20" y="70" width="120" height="90" fill="hsl(220 30% 8%)" stroke="hsl(30 100% 55%)" strokeWidth="2" />
      <rect x="55" y="105" width="30" height="55" rx="2" fill="hsl(30 100% 55% / 0.3)" />
      <text x="80" y="180" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="10" fontFamily="monospace">192.168.1.10</text>
    </g>

    {/* Envelope with address */}
    <g>
      <rect width="100" height="66" rx="5"
        fill="hsl(30 100% 55%)" stroke="hsl(30 100% 88%)" strokeWidth="1.5">
        <animate attributeName="x" from="250" to="500" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="y" values="167;167" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.88;1" dur="2.4s" repeatCount="indefinite" />
      </rect>
      <text fontFamily="monospace" fontSize="9" fill="hsl(220 30% 5%)">
        <animate attributeName="x" from="258" to="508" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="y" values="184;184" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.88;1" dur="2.4s" repeatCount="indefinite" />
        TO: 10.0.0.1
      </text>
      <text fontFamily="monospace" fontSize="9" fill="hsl(220 30% 5%)">
        <animate attributeName="x" from="258" to="508" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="y" values="198;198" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.88;1" dur="2.4s" repeatCount="indefinite" />
        FROM: 192.168.1.10
      </text>
    </g>

    {/* Server (recipient) */}
    <g transform="translate(600, 120)">
      <rect width="140" height="160" rx="8" fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      {[0,1,2,3].map(i => (
        <rect key={i} x="16" y={20+i*30} width="108" height="18" rx="3"
          fill="hsl(140 100% 55% / 0.15)" stroke="hsl(140 100% 55% / 0.4)" strokeWidth="1" />
      ))}
      <text x="70" y="150" textAnchor="middle" fill="hsl(140 100% 65%)" fontSize="10" fontFamily="monospace">10.0.0.1</text>
    </g>

    <text x="400" y="355" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11" fontFamily="monospace">
      every packet carries a source and destination address
    </text>
  </svg>
);

// visual: "segment-to-packet"
export const SegmentToPacketIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Segment wrapped into a packet">
    <GridDefs id="grid-seg2pkt" />
    <rect width="800" height="400" fill="url(#grid-seg2pkt)" opacity="0.3" />

    <text x="400" y="44" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ENCAPSULATION</text>

    {/* Outer packet */}
    <rect x="160" y="90" width="480" height="220" rx="14"
      fill="hsl(30 100% 55% / 0.10)" stroke="hsl(30 100% 60%)" strokeWidth="2.5">
      <animate attributeName="opacity" values="0;1" dur="0.6s" begin="0.6s" fill="freeze" />
    </rect>
    <text x="190" y="114" fill="hsl(30 100% 65%)" fontSize="10" fontFamily="monospace" fontWeight="bold">
      IP PACKET
      <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.6s" fill="freeze" />
    </text>

    {/* IP Header */}
    <rect x="178" y="120" width="464" height="50" rx="6"
      fill="hsl(30 100% 55% / 0.20)" stroke="hsl(30 100% 60%)" strokeWidth="1.5">
      <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze" />
    </rect>
    <text x="410" y="150" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="13" fontFamily="monospace" fontWeight="bold">
      IP HEADER · SRC: 192.168.1.10 · DST: 10.0.0.1
      <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.4s" fill="freeze" />
    </text>

    {/* Inner segment */}
    <rect x="200" y="185" width="400" height="100" rx="8"
      fill="hsl(140 100% 50% / 0.15)" stroke="hsl(140 100% 55%)" strokeWidth="2" />
    <text x="400" y="228" textAnchor="middle" fill="hsl(140 100% 80%)" fontSize="15"
      fontFamily="monospace" fontWeight="bold">SEGMENT</text>
    <text x="400" y="252" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11" fontFamily="monospace">
      data · port · sequence #
    </text>

    <text x="400" y="355" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11" fontFamily="monospace">
      the segment is wrapped inside an IP packet
    </text>
  </svg>
);

// visual: "routing-overview"
export const RoutingOverviewIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Routing overview across the internet">
    <GridDefs id="grid-routov" />
    <rect width="800" height="400" fill="url(#grid-routov)" opacity="0.3" />

    {/* Source */}
    <circle cx="80" cy="200" r="40" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
    <text x="80" y="204" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="11" fontFamily="monospace" fontWeight="bold">YOU</text>

    {/* Routers along the path */}
    {[220, 360, 500].map((cx, i) => (
      <g key={i}>
        <polygon points={`${cx},160 ${cx-28},200 ${cx},240 ${cx+28},200`}
          fill="hsl(220 30% 8%)" stroke="hsl(30 100% 55%)" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" begin={`${i*0.5}s`} repeatCount="indefinite" />
        </polygon>
        <text x={cx} y={cx === 360 ? 204 : 204} textAnchor="middle"
          fill="hsl(30 100% 65%)" fontSize="9" fontFamily="monospace">R{i+1}</text>
      </g>
    ))}

    {/* Destination */}
    <rect x="620" y="160" width="110" height="80" rx="8"
      fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="675" y="204" textAnchor="middle" fill="hsl(140 100% 70%)" fontSize="11" fontFamily="monospace" fontWeight="bold">SERVER</text>

    {/* Animated packet hopping */}
    <circle r="10" fill="hsl(30 100% 65%)" stroke="hsl(30 100% 90%)" strokeWidth="1.5">
      <animateMotion dur="3s" repeatCount="indefinite"
        path="M 120 200 L 192 200 L 248 200 L 332 200 L 388 200 L 472 200 L 528 200 L 620 200" />
      <animate attributeName="opacity" values="1;1;1;1;0" keyTimes="0;0.8;0.9;0.95;1" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Connecting line */}
    <line x1="120" y1="200" x2="620" y2="200"
      stroke="hsl(30 100% 50% / 0.25)" strokeWidth="1.5" strokeDasharray="6 5" />

    {/* Hop labels */}
    {[220, 360, 500].map((cx, i) => (
      <text key={i} x={cx} y="265" textAnchor="middle"
        fill="hsl(30 100% 50%)" fontSize="9" fontFamily="monospace">hop {i+1}</text>
    ))}

    <text x="400" y="345" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11" fontFamily="monospace">
      routed hop by hop · across thousands of networks
    </text>
  </svg>
);


// ── TOPIC 1: IP ADDRESSING ───────────────────────────────────

// visual: "devices-ip"
export const DevicesIpIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Every device has an IP address">
    <GridDefs id="grid-devip" />
    <rect width="800" height="400" fill="url(#grid-devip)" opacity="0.3" />

    <text x="400" y="44" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">EVERY DEVICE · ONE ADDRESS</text>

    {[
      { label: "LAPTOP",  ip: "192.168.1.10", x: 80,  y: 100, color: "200 100% 60%", icon: "💻" },
      { label: "PHONE",   ip: "192.168.1.11", x: 310, y: 80,  color: "140 100% 55%", icon: "📱" },
      { label: "SERVER",  ip: "10.0.0.1",     x: 540, y: 100, color: "30  100% 60%", icon: "🖥️" },
      { label: "PRINTER", ip: "192.168.1.20", x: 200, y: 250, color: "0   70% 60%",  icon: "🖨️" },
      { label: "ROUTER",  ip: "192.168.1.1",  x: 430, y: 240, color: "180 100% 55%", icon: "📡" },
    ].map((d, i) => (
      <g key={i} transform={`translate(${d.x}, ${d.y})`}>
        <rect width="160" height="90" rx="8"
          fill={`hsl(${d.color} / 0.10)`} stroke={`hsl(${d.color})`} strokeWidth="1.8">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite" />
        </rect>
        <text x="80" y="32" textAnchor="middle" fontSize="24">{d.icon}</text>
        <text x="80" y="57" textAnchor="middle" fill={`hsl(${d.color})`} fontSize="11" fontFamily="monospace" fontWeight="bold">{d.label}</text>
        <text x="80" y="76" textAnchor="middle" fill={`hsl(${d.color} / 0.8)`} fontSize="11" fontFamily="monospace">{d.ip}</text>
      </g>
    ))}
  </svg>
);

// visual: "ip-location"
export const IpLocationIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="IP address as a location identifier">
    <GridDefs id="grid-iploc" />
    <rect width="800" height="400" fill="url(#grid-iploc)" opacity="0.3" />

    {/* Globe outline */}
    <circle cx="400" cy="190" r="140" fill="hsl(30 100% 50% / 0.06)"
      stroke="hsl(30 100% 55%)" strokeWidth="1.5" strokeDasharray="6 4" />
    <ellipse cx="400" cy="190" rx="60" ry="140" fill="none"
      stroke="hsl(30 100% 55% / 0.35)" strokeWidth="1" />
    <ellipse cx="400" cy="190" rx="120" ry="50" fill="none"
      stroke="hsl(30 100% 55% / 0.25)" strokeWidth="1" />

    {/* Pin */}
    <line x1="400" y1="115" x2="400" y2="175"
      stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="y1" values="105;115;105" dur="1.5s" repeatCount="indefinite" />
    </line>
    <circle cx="400" cy="105" r="18" fill="hsl(0 80% 55%)" stroke="hsl(0 80% 85%)" strokeWidth="2">
      <animate attributeName="cy" values="95;105;95" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="110" textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace" fontWeight="bold">
      <animate attributeName="y" values="100;110;100" dur="1.5s" repeatCount="indefinite" />
      IP
    </text>

    {/* IP badge */}
    <rect x="262" y="200" width="276" height="40" rx="20"
      fill="hsl(30 100% 55% / 0.15)" stroke="hsl(30 100% 60%)" strokeWidth="1.8" />
    <text x="400" y="226" textAnchor="middle" fill="hsl(30 100% 85%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold" letterSpacing="2">192.168.1.10</text>

    <text x="400" y="358" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11" fontFamily="monospace">
      the IP address tells the network exactly where you are
    </text>
  </svg>
);

// visual: "ipv4-format"
export const Ipv4FormatIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="IPv4 address format">
    <GridDefs id="grid-ipv4fmt" />
    <rect width="800" height="400" fill="url(#grid-ipv4fmt)" opacity="0.3" />

    <text x="400" y="60" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">IPv4 ADDRESS</text>

    {/* Big IP display */}
    <rect x="140" y="120" width="520" height="90" rx="12"
      fill="hsl(220 30% 8%)" stroke="hsl(30 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="180" textAnchor="middle" fill="hsl(30 100% 85%)" fontSize="40"
      fontFamily="monospace" fontWeight="bold" letterSpacing="4">192.168.1.10</text>

    {/* Labels under each octet */}
    {[
      { label: "192", x: 210 },
      { label: "168", x: 320 },
      { label: "1",   x: 440 },
      { label: "10",  x: 555 },
    ].map((o, i) => (
      <g key={i}>
        <line x1={o.x} y1="210" x2={o.x} y2="240"
          stroke="hsl(30 100% 55% / 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x={o.x - 36} y="240" width="72" height="30" rx="6"
          fill={`hsl(${[200,140,30,0][i]} 100% 55% / 0.15)`}
          stroke={`hsl(${[200,140,30,0][i]} 100% 55%)`} strokeWidth="1.5" />
        <text x={o.x} y="261" textAnchor="middle"
          fill={`hsl(${[200,140,30,0][i]} 100% 75%)`} fontSize="13" fontFamily="monospace">{o.label}</text>
      </g>
    ))}

    <text x="400" y="320" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="11" fontFamily="monospace">
      4 numbers · separated by dots · each 0–255
    </text>
    <text x="400" y="355" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="11" fontFamily="monospace">
      = 32 bits total
    </text>
  </svg>
);

// visual: "ipv4-structure"
export const Ipv4StructureIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="IPv4 structure — 4 octets">
    <GridDefs id="grid-ipv4struct" />
    <rect width="800" height="400" fill="url(#grid-ipv4struct)" opacity="0.3" />

    <text x="400" y="50" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">4 OCTETS · 32 BITS</text>

    {/* 4 octet boxes */}
    {[
      { val: "192", color: "200 100% 60%", x: 80  },
      { val: "168", color: "140 100% 55%", x: 250 },
      { val: "1",   color: "30  100% 60%", x: 420 },
      { val: "10",  color: "0   70%  60%", x: 590 },
    ].map((o, i) => (
      <g key={i}>
        <rect x={o.x} y="90" width="150" height="130" rx="10"
          fill={`hsl(${o.color} / 0.12)`} stroke={`hsl(${o.color})`} strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite" />
        </rect>
        <text x={o.x+75} y="158" textAnchor="middle"
          fill={`hsl(${o.color})`} fontSize="32" fontFamily="monospace" fontWeight="bold">{o.val}</text>
        <text x={o.x+75} y="200" textAnchor="middle"
          fill={`hsl(${o.color} / 0.7)`} fontSize="10" fontFamily="monospace">octet {i+1}</text>

        {/* Dot separator */}
        {i < 3 && (
          <text x={o.x + 164} y="164" fill="hsl(0 0% 60%)" fontSize="28" fontFamily="monospace">.</text>
        )}
      </g>
    ))}

    {/* Range indicator */}
    <rect x="200" y="270" width="400" height="36" rx="8"
      fill="hsl(30 100% 55% / 0.10)" stroke="hsl(30 100% 55% / 0.4)" strokeWidth="1.5" />
    <text x="400" y="294" textAnchor="middle" fill="hsl(30 100% 70%)" fontSize="13" fontFamily="monospace">
      each number: 0 → 255
    </text>

    <text x="400" y="355" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      4 × 8 bits = 32 bits = ~4 billion possible addresses
    </text>
  </svg>
);

// visual: "binary-octet"
export const BinaryOctetIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Each octet is 8 binary digits">
    <GridDefs id="grid-binoct" />
    <rect width="800" height="400" fill="url(#grid-binoct)" opacity="0.3" />

    <text x="400" y="50" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">OCTET = 8 BITS</text>

    {/* 8 bit boxes */}
    {["1","1","0","0","0","0","0","0"].map((bit, i) => (
      <g key={i} transform={`translate(${90 + i * 80}, 100)`}>
        <rect width="64" height="100" rx="6"
          fill={bit === "1" ? "hsl(30 100% 55% / 0.25)" : "hsl(220 30% 12%)"}
          stroke={bit === "1" ? "hsl(30 100% 60%)" : "hsl(220 30% 30%)"}
          strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4"
            dur="2s" begin={`${i*0.15}s`} repeatCount="indefinite" />
        </rect>
        <text x="32" y="62" textAnchor="middle"
          fill={bit === "1" ? "hsl(30 100% 85%)" : "hsl(0 0% 35%)"}
          fontSize="30" fontFamily="monospace" fontWeight="bold">{bit}</text>
        {/* power of 2 */}
        <text x="32" y="88" textAnchor="middle"
          fill="hsl(0 0% 40%)" fontSize="10" fontFamily="monospace">
          2^{7-i}={[128,64,32,16,8,4,2,1][i]}
        </text>
      </g>
    ))}

    {/* Equals */}
    <text x="400" y="250" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="14" fontFamily="monospace">
      = 128 + 64 = 192
    </text>

    {/* Arrow */}
    <rect x="260" y="265" width="280" height="40" rx="8"
      fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" />
    <text x="400" y="291" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="15"
      fontFamily="monospace" fontWeight="bold">11000000 = 192</text>

    <text x="400" y="355" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      computers store every octet as 8 binary digits
    </text>
  </svg>
);

// visual: "binary-example"
export const BinaryExampleIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="192 in binary is 11000000">
    <GridDefs id="grid-binex" />
    <rect width="800" height="400" fill="url(#grid-binex)" opacity="0.3" />

    <text x="400" y="50" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">192 → BINARY</text>

    {/* Conversion steps */}
    {[
      { step: "192 ÷ 2", r: "96 r 0",  bit: "0", y: 90  },
      { step: "96  ÷ 2", r: "48 r 0",  bit: "0", y: 135 },
      { step: "48  ÷ 2", r: "24 r 0",  bit: "0", y: 180 },
      { step: "24  ÷ 2", r: "12 r 0",  bit: "0", y: 225 },
      { step: "12  ÷ 2", r: "6  r 0",  bit: "0", y: 270 },
      { step: "6   ÷ 2", r: "3  r 0",  bit: "0", y: 315 },
      { step: "3   ÷ 2", r: "1  r 1",  bit: "1", y: 360 },  // simplified display
    ].slice(0, 4).map((row, i) => (
      <g key={i}>
        <text x="160" y={row.y} fill="hsl(0 0% 55%)" fontSize="13" fontFamily="monospace">{row.step}</text>
        <text x="330" y={row.y} fill="hsl(0 0% 45%)" fontSize="13" fontFamily="monospace">= {row.r}</text>
        <circle cx="520" cy={row.y - 10} r="16"
          fill={row.bit === "1" ? "hsl(30 100% 55% / 0.3)" : "hsl(220 30% 14%)"}
          stroke={row.bit === "1" ? "hsl(30 100% 60%)" : "hsl(220 30% 30%)"} strokeWidth="1.5" />
        <text x="520" y={row.y - 4} textAnchor="middle"
          fill={row.bit === "1" ? "hsl(30 100% 80%)" : "hsl(0 0% 40%)"}
          fontSize="14" fontFamily="monospace" fontWeight="bold">{row.bit}</text>
      </g>
    ))}

    {/* Result */}
    <rect x="200" y="200" width="400" height="60" rx="10"
      fill="hsl(30 100% 55% / 0.15)" stroke="hsl(30 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="240" textAnchor="middle" fill="hsl(30 100% 85%)" fontSize="24"
      fontFamily="monospace" fontWeight="bold" letterSpacing="6">11000000</text>

    <text x="400" y="315" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="14" fontFamily="monospace">
      192 in binary = 11000000
    </text>
    <text x="400" y="345" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="11" fontFamily="monospace">
      128 + 64 = 192 ✓
    </text>
  </svg>
);

// visual: "binary-purpose"
export const BinaryPurposeIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Why binary matters for IP addresses">
    <GridDefs id="grid-binpurp" />
    <rect width="800" height="400" fill="url(#grid-binpurp)" opacity="0.3" />

    <text x="400" y="50" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">HUMAN vs MACHINE</text>

    {/* Human side */}
    <g transform="translate(80, 90)">
      <rect width="240" height="200" rx="10" fill="hsl(200 100% 60% / 0.10)"
        stroke="hsl(200 100% 60%)" strokeWidth="2" />
      <text x="120" y="44" textAnchor="middle" fill="hsl(200 100% 70%)" fontSize="13"
        fontFamily="monospace" fontWeight="bold">HUMAN READS</text>
      <text x="120" y="110" textAnchor="middle" fill="hsl(200 100% 85%)" fontSize="28"
        fontFamily="monospace" fontWeight="bold">192.168</text>
      <text x="120" y="145" textAnchor="middle" fill="hsl(200 100% 65%)" fontSize="18"
        fontFamily="monospace">.1.10</text>
      <text x="120" y="185" textAnchor="middle" fill="hsl(200 100% 50%)" fontSize="10"
        fontFamily="monospace">easy for you</text>
    </g>

    {/* Conversion arrow */}
    <text x="400" y="195" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="22">⇄</text>
    <text x="400" y="220" textAnchor="middle" fill="hsl(0 0% 35%)" fontSize="9" fontFamily="monospace">converts</text>

    {/* Machine side */}
    <g transform="translate(480, 90)">
      <rect width="240" height="200" rx="10" fill="hsl(30 100% 55% / 0.10)"
        stroke="hsl(30 100% 55%)" strokeWidth="2" />
      <text x="120" y="44" textAnchor="middle" fill="hsl(30 100% 70%)" fontSize="13"
        fontFamily="monospace" fontWeight="bold">MACHINE READS</text>
      {["11000000","10101000","00000001","00001010"].map((b, i) => (
        <text key={i} x="120" y={88 + i * 26} textAnchor="middle"
          fill="hsl(30 100% 65%)" fontSize="14" fontFamily="monospace">{b}</text>
      ))}
      <text x="120" y="185" textAnchor="middle" fill="hsl(30 100% 50%)" fontSize="10"
        fontFamily="monospace">easy for computers</text>
    </g>

    <text x="400" y="355" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      binary is the language computers actually use
    </text>
  </svg>
);


// ── TOPIC 2: SUBNET MASK ─────────────────────────────────────

// visual: "network-vs-host"
export const NetworkVsHostIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Network part vs host part of an IP">
    <GridDefs id="grid-netvhost" />
    <rect width="800" height="400" fill="url(#grid-netvhost)" opacity="0.3" />

    <text x="400" y="50" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">NETWORK · HOST</text>

    {/* IP octets split */}
    <rect x="110" y="100" width="270" height="120" rx="10"
      fill="hsl(200 100% 55% / 0.12)" stroke="hsl(200 100% 60%)" strokeWidth="2.5" />
    <text x="245" y="150" textAnchor="middle" fill="hsl(200 100% 80%)" fontSize="22"
      fontFamily="monospace" fontWeight="bold">192.168.1</text>
    <text x="245" y="176" textAnchor="middle" fill="hsl(200 100% 60%)" fontSize="12"
      fontFamily="monospace">NETWORK PART</text>
    <text x="245" y="198" textAnchor="middle" fill="hsl(200 100% 45%)" fontSize="10"
      fontFamily="monospace">which street</text>

    {/* Dot */}
    <text x="398" y="168" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="28">.</text>

    <rect x="420" y="100" width="270" height="120" rx="10"
      fill="hsl(0 70% 55% / 0.12)" stroke="hsl(0 70% 60%)" strokeWidth="2.5" />
    <text x="555" y="150" textAnchor="middle" fill="hsl(0 70% 80%)" fontSize="22"
      fontFamily="monospace" fontWeight="bold">10</text>
    <text x="555" y="176" textAnchor="middle" fill="hsl(0 70% 65%)" fontSize="12"
      fontFamily="monospace">HOST PART</text>
    <text x="555" y="198" textAnchor="middle" fill="hsl(0 70% 45%)" fontSize="10"
      fontFamily="monospace">which house</text>

    {/* Full IP label */}
    <text x="400" y="280" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="16"
      fontFamily="monospace">192.168.1.10</text>

    <text x="400" y="355" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      an IP address has two parts: network + host
    </text>
  </svg>
);

// visual: "subnet-intro"
export const SubnetIntroIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Subnet mask introduction">
    <GridDefs id="grid-subintro" />
    <rect width="800" height="400" fill="url(#grid-subintro)" opacity="0.3" />

    {/* Mask metaphor */}
    <rect x="240" y="90" width="320" height="200" rx="14"
      fill="hsl(30 100% 55% / 0.10)" stroke="hsl(30 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
    </rect>

    <text x="400" y="155" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold" letterSpacing="2">SUBNET MASK</text>

    <rect x="280" y="168" width="240" height="44" rx="8"
      fill="hsl(30 100% 55% / 0.20)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" />
    <text x="400" y="196" textAnchor="middle" fill="hsl(30 100% 90%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">255.255.255.0</text>

    <text x="400" y="245" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="12"
      fontFamily="monospace">separates network from host</text>
    <text x="400" y="268" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="11"
      fontFamily="monospace">applied alongside the IP address</text>

    <text x="400" y="350" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11" fontFamily="monospace">
      the mask reveals which part is which
    </text>
  </svg>
);

// visual: "subnet-format"
export const SubnetFormatIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Subnet mask format">
    <GridDefs id="grid-subfmt" />
    <rect width="800" height="400" fill="url(#grid-subfmt)" opacity="0.3" />

    <text x="400" y="50" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">SUBNET MASK FORMAT</text>

    {/* IP address row */}
    <text x="120" y="130" fill="hsl(0 0% 55%)" fontSize="12" fontFamily="monospace">IP ADDRESS:</text>
    <rect x="280" y="108" width="400" height="40" rx="6"
      fill="hsl(200 100% 55% / 0.12)" stroke="hsl(200 100% 55%)" strokeWidth="1.8" />
    <text x="480" y="134" textAnchor="middle" fill="hsl(200 100% 80%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">192 . 168 . 1 . 10</text>

    {/* Subnet mask row */}
    <text x="120" y="210" fill="hsl(0 0% 55%)" fontSize="12" fontFamily="monospace">SUBNET MASK:</text>
    <rect x="280" y="188" width="400" height="40" rx="6"
      fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 55%)" strokeWidth="1.8">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="480" y="214" textAnchor="middle" fill="hsl(30 100% 85%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">255 . 255 . 255 . 0</text>

    {/* Similar structure callout */}
    <text x="400" y="285" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="12" fontFamily="monospace">
      same format as an IP address — 4 octets
    </text>
    <text x="400" y="310" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="12" fontFamily="monospace">
      but the values are either 255 or 0
    </text>

    <text x="400" y="360" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="10" fontFamily="monospace">
      255 = 11111111 in binary · 0 = 00000000
    </text>
  </svg>
);

// visual: "subnet-network-part"
export const SubnetNetworkPartIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="255 in mask = network part">
    <GridDefs id="grid-subnetpart" />
    <rect width="800" height="400" fill="url(#grid-subnetpart)" opacity="0.3" />

    <text x="400" y="50" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">255 → NETWORK</text>

    {[
      { ip: "192", mask: "255", isNet: true,  x: 80  },
      { ip: "168", mask: "255", isNet: true,  x: 250 },
      { ip: "1",   mask: "255", isNet: true,  x: 420 },
      { ip: "10",  mask: "0",   isNet: false, x: 590 },
    ].map((o, i) => (
      <g key={i} transform={`translate(${o.x}, 80)`}>
        {/* IP octet */}
        <rect width="130" height="70" rx="8"
          fill={o.isNet ? "hsl(200 100% 55% / 0.18)" : "hsl(220 30% 10%)"}
          stroke={o.isNet ? "hsl(200 100% 60%)" : "hsl(220 30% 30%)"}
          strokeWidth={o.isNet ? "2.5" : "1"} />
        <text x="65" y="46" textAnchor="middle"
          fill={o.isNet ? "hsl(200 100% 85%)" : "hsl(0 0% 40%)"}
          fontSize="24" fontFamily="monospace" fontWeight="bold">{o.ip}</text>

        {/* Mask octet */}
        <rect width="130" height="56" rx="8" y="90"
          fill={o.isNet ? "hsl(200 100% 55% / 0.12)" : "hsl(220 30% 8%)"}
          stroke={o.isNet ? "hsl(200 100% 55%)" : "hsl(220 30% 25%)"}
          strokeWidth="1.5" />
        <text x="65" y="126" textAnchor="middle"
          fill={o.isNet ? "hsl(200 100% 70%)" : "hsl(0 0% 30%)"}
          fontSize="18" fontFamily="monospace">{o.mask}</text>

        {/* Labels */}
        <text x="65" y="168" textAnchor="middle"
          fill={o.isNet ? "hsl(200 100% 55%)" : "hsl(0 0% 35%)"}
          fontSize="9" fontFamily="monospace">{o.isNet ? "NETWORK" : "host"}</text>
      </g>
    ))}

    <text x="400" y="335" textAnchor="middle" fill="hsl(200 100% 60%)" fontSize="12" fontFamily="monospace">
      where mask = 255 → that octet identifies the network
    </text>
  </svg>
);

// visual: "subnet-host-part"
export const SubnetHostPartIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="0 in mask = host part">
    <GridDefs id="grid-subhostpart" />
    <rect width="800" height="400" fill="url(#grid-subhostpart)" opacity="0.3" />

    <text x="400" y="50" textAnchor="middle" fill="hsl(0 70% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">0 → HOST</text>

    {[
      { ip: "192", mask: "255", isHost: false, x: 80  },
      { ip: "168", mask: "255", isHost: false, x: 250 },
      { ip: "1",   mask: "255", isHost: false, x: 420 },
      { ip: "10",  mask: "0",   isHost: true,  x: 590 },
    ].map((o, i) => (
      <g key={i} transform={`translate(${o.x}, 80)`}>
        <rect width="130" height="70" rx="8"
          fill={o.isHost ? "hsl(0 70% 55% / 0.18)" : "hsl(220 30% 10%)"}
          stroke={o.isHost ? "hsl(0 70% 60%)" : "hsl(220 30% 30%)"}
          strokeWidth={o.isHost ? "2.5" : "1"} />
        <text x="65" y="46" textAnchor="middle"
          fill={o.isHost ? "hsl(0 70% 85%)" : "hsl(0 0% 40%)"}
          fontSize="24" fontFamily="monospace" fontWeight="bold">{o.ip}</text>

        <rect width="130" height="56" rx="8" y="90"
          fill={o.isHost ? "hsl(0 70% 55% / 0.12)" : "hsl(220 30% 8%)"}
          stroke={o.isHost ? "hsl(0 70% 55%)" : "hsl(220 30% 25%)"}
          strokeWidth="1.5" />
        <text x="65" y="126" textAnchor="middle"
          fill={o.isHost ? "hsl(0 70% 70%)" : "hsl(0 0% 30%)"}
          fontSize="18" fontFamily="monospace">{o.mask}</text>

        <text x="65" y="168" textAnchor="middle"
          fill={o.isHost ? "hsl(0 70% 60%)" : "hsl(0 0% 35%)"}
          fontSize="9" fontFamily="monospace">{o.isHost ? "HOST" : "network"}</text>
      </g>
    ))}

    <text x="400" y="335" textAnchor="middle" fill="hsl(0 70% 65%)" fontSize="12" fontFamily="monospace">
      where mask = 0 → that octet identifies the device
    </text>
  </svg>
);

// visual: "subnet-example"
export const SubnetExampleIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Subnet mask example explained">
    <GridDefs id="grid-subex" />
    <rect width="800" height="400" fill="url(#grid-subex)" opacity="0.3" />

    <text x="400" y="48" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="13"
      fontFamily="monospace" letterSpacing="3">EXAMPLE</text>

    {/* IP row */}
    <text x="80" y="106" fill="hsl(0 0% 55%)" fontSize="12" fontFamily="monospace">IP:</text>
    {["192","168","1","10"].map((o, i) => (
      <g key={i} transform={`translate(${140 + i * 150}, 80)`}>
        <rect width="120" height="44" rx="6"
          fill={i < 3 ? "hsl(200 100% 55% / 0.15)" : "hsl(0 70% 55% / 0.15)"}
          stroke={i < 3 ? "hsl(200 100% 55%)" : "hsl(0 70% 55%)"} strokeWidth="2" />
        <text x="60" y="30" textAnchor="middle"
          fill={i < 3 ? "hsl(200 100% 80%)" : "hsl(0 70% 80%)"}
          fontSize="20" fontFamily="monospace" fontWeight="bold">{o}</text>
      </g>
    ))}

    {/* Mask row */}
    <text x="80" y="186" fill="hsl(0 0% 55%)" fontSize="12" fontFamily="monospace">MASK:</text>
    {["255","255","255","0"].map((o, i) => (
      <g key={i} transform={`translate(${140 + i * 150}, 160)`}>
        <rect width="120" height="44" rx="6"
          fill={o === "255" ? "hsl(200 100% 55% / 0.12)" : "hsl(220 30% 8%)"}
          stroke={o === "255" ? "hsl(200 100% 50%)" : "hsl(220 30% 30%)"} strokeWidth="1.5" />
        <text x="60" y="30" textAnchor="middle"
          fill={o === "255" ? "hsl(200 100% 70%)" : "hsl(0 0% 35%)"}
          fontSize="18" fontFamily="monospace">{o}</text>
      </g>
    ))}

    {/* Result */}
    <text x="80" y="255" fill="hsl(0 0% 55%)" fontSize="12" fontFamily="monospace">RESULT:</text>
    <rect x="140" y="235" width="450" height="44" rx="8"
      fill="hsl(140 100% 50% / 0.12)" stroke="hsl(140 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="365" y="263" textAnchor="middle" fill="hsl(140 100% 80%)" fontSize="16"
      fontFamily="monospace" fontWeight="bold">network: 192.168.1 · host: 10</text>

    <text x="400" y="340" textAnchor="middle" fill="hsl(200 100% 60%)" fontSize="11" fontFamily="monospace">
      192.168.1 = the street · 10 = your house number
    </text>
  </svg>
);

// visual: "local-or-remote"
export const LocalOrRemoteIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Local or remote destination decision">
    <GridDefs id="grid-localremote" />
    <rect width="800" height="400" fill="url(#grid-localremote)" opacity="0.3" />

    {/* Device */}
    <circle cx="130" cy="200" r="55" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="130" y="196" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="12" fontFamily="monospace" fontWeight="bold">MY</text>
    <text x="130" y="214" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="12" fontFamily="monospace" fontWeight="bold">DEVICE</text>

    {/* Fork */}
    <line x1="185" y1="200" x2="340" y2="200" stroke="hsl(0 0% 40%)" strokeWidth="2" />
    <line x1="340" y1="200" x2="420" y2="120" stroke="hsl(200 100% 55%)" strokeWidth="2.5" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <line x1="340" y1="200" x2="420" y2="280" stroke="hsl(30 100% 55%)" strokeWidth="2.5" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>

    {/* Local branch */}
    <rect x="420" y="70" width="160" height="100" rx="10"
      fill="hsl(200 100% 55% / 0.12)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
    <text x="500" y="110" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="12" fontFamily="monospace" fontWeight="bold">LOCAL</text>
    <text x="500" y="130" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="10" fontFamily="monospace">same network</text>
    <text x="500" y="148" textAnchor="middle" fill="hsl(200 100% 45%)" fontSize="10" fontFamily="monospace">→ direct delivery</text>

    {/* Remote branch */}
    <rect x="420" y="230" width="160" height="100" rx="10"
      fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 60%)" strokeWidth="2" />
    <text x="500" y="270" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="12" fontFamily="monospace" fontWeight="bold">REMOTE</text>
    <text x="500" y="290" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="10" fontFamily="monospace">different network</text>
    <text x="500" y="308" textAnchor="middle" fill="hsl(30 100% 45%)" fontSize="10" fontFamily="monospace">→ send to router</text>

    {/* Question */}
    <text x="320" y="194" textAnchor="middle" fill="hsl(0 0% 60%)" fontSize="20" fontFamily="monospace">?</text>

    <text x="650" y="200" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="11" fontFamily="monospace">subnet</text>
    <text x="650" y="218" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="11" fontFamily="monospace">mask</text>
    <text x="650" y="236" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="11" fontFamily="monospace">decides</text>
  </svg>
);


// ── TOPIC 3: ROUTING DECISION ────────────────────────────────

// visual: "routing-decision"
export const RoutingDecisionIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Routing decision point">
    <GridDefs id="grid-routdec" />
    <rect width="800" height="400" fill="url(#grid-routdec)" opacity="0.3" />

    <text x="400" y="48" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ROUTING DECISION</text>

    {/* IP Packet */}
    <rect x="60" y="155" width="180" height="90" rx="10"
      fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="150" y="195" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="13" fontFamily="monospace" fontWeight="bold">IP PACKET</text>
    <text x="150" y="215" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="10" fontFamily="monospace">DST: 10.0.0.1</text>
    <text x="150" y="232" textAnchor="middle" fill="hsl(30 100% 45%)" fontSize="10" fontFamily="monospace">SRC: 192.168.1.10</text>

    {/* Arrow to decision diamond */}
    <line x1="242" y1="200" x2="326" y2="200" stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="322,192 340,200 322,208" fill="hsl(30 100% 55%)" />

    {/* Diamond */}
    <polygon points="400,120 480,200 400,280 320,200"
      fill="hsl(220 30% 8%)" stroke="hsl(180 100% 55%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
    </polygon>
    <text x="400" y="196" textAnchor="middle" fill="hsl(180 100% 75%)" fontSize="10" fontFamily="monospace" fontWeight="bold">LOCAL?</text>
    <text x="400" y="212" textAnchor="middle" fill="hsl(180 100% 55%)" fontSize="9" fontFamily="monospace">same subnet?</text>

    {/* YES path */}
    <line x1="480" y1="200" x2="580" y2="140" stroke="hsl(140 100% 55%)" strokeWidth="2" />
    <polygon points="574,134 594,138 578,154" fill="hsl(140 100% 55%)" />
    <text x="540" y="158" fill="hsl(140 100% 65%)" fontSize="11" fontFamily="monospace" fontWeight="bold">YES</text>
    <rect x="590" y="105" width="120" height="70" rx="8"
      fill="hsl(140 100% 50% / 0.12)" stroke="hsl(140 100% 55%)" strokeWidth="1.8" />
    <text x="650" y="143" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="11" fontFamily="monospace">DIRECT</text>
    <text x="650" y="160" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="10" fontFamily="monospace">delivery</text>

    {/* NO path */}
    <line x1="480" y1="200" x2="580" y2="260" stroke="hsl(0 70% 55%)" strokeWidth="2" />
    <polygon points="574,254 594,262 578,278" fill="hsl(0 70% 55%)" />
    <text x="540" y="248" fill="hsl(0 70% 65%)" fontSize="11" fontFamily="monospace" fontWeight="bold">NO</text>
    <rect x="590" y="230" width="120" height="70" rx="8"
      fill="hsl(0 70% 50% / 0.12)" stroke="hsl(0 70% 55%)" strokeWidth="1.8" />
    <text x="650" y="268" textAnchor="middle" fill="hsl(0 70% 75%)" fontSize="11" fontFamily="monospace">→ ROUTER</text>
    <text x="650" y="285" textAnchor="middle" fill="hsl(0 70% 55%)" fontSize="10" fontFamily="monospace">gateway</text>
  </svg>
);

// visual: "same-or-different"
export const SameOrDifferentIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Same network or different network">
    <GridDefs id="grid-sameordiff" />
    <rect width="800" height="400" fill="url(#grid-sameordiff)" opacity="0.3" />

    {/* Local network bubble */}
    <ellipse cx="220" cy="200" rx="170" ry="150"
      fill="hsl(200 100% 55% / 0.06)" stroke="hsl(200 100% 55%)" strokeWidth="1.5" strokeDasharray="8 5" />
    <text x="220" y="70" textAnchor="middle" fill="hsl(200 100% 60%)" fontSize="11" fontFamily="monospace" fontWeight="bold">192.168.1.x</text>

    {/* Devices in local */}
    <circle cx="160" cy="185" r="30" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
    <text x="160" y="190" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="10" fontFamily="monospace">.10</text>
    <circle cx="280" cy="220" r="30" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 55%)" strokeWidth="2" />
    <text x="280" y="225" textAnchor="middle" fill="hsl(200 100% 70%)" fontSize="10" fontFamily="monospace">.11</text>
    <text x="220" y="290" textAnchor="middle" fill="hsl(200 100% 50%)" fontSize="10" fontFamily="monospace">SAME NETWORK ✓</text>

    {/* Divider */}
    <line x1="400" y1="60" x2="400" y2="340" stroke="hsl(0 0% 25%)" strokeWidth="1.5" strokeDasharray="4 4" />

    {/* Remote */}
    <ellipse cx="580" cy="200" rx="170" ry="150"
      fill="hsl(30 100% 55% / 0.06)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" strokeDasharray="8 5" />
    <text x="580" y="70" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11" fontFamily="monospace" fontWeight="bold">10.0.0.x</text>
    <circle cx="580" cy="195" r="38" fill="hsl(220 30% 8%)" stroke="hsl(30 100% 55%)" strokeWidth="2" />
    <text x="580" y="190" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="11" fontFamily="monospace">GAME</text>
    <text x="580" y="207" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="11" fontFamily="monospace">SERVER</text>
    <text x="580" y="290" textAnchor="middle" fill="hsl(30 100% 50%)" fontSize="10" fontFamily="monospace">DIFFERENT NETWORK</text>

    <text x="400" y="365" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      different subnet → must go through the router
    </text>
  </svg>
);

// visual: "local-delivery"
export const LocalDeliveryIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Local direct delivery">
    <GridDefs id="grid-localdel" />
    <rect width="800" height="400" fill="url(#grid-localdel)" opacity="0.3" />

    {/* Network bubble */}
    <ellipse cx="400" cy="190" rx="320" ry="160"
      fill="hsl(200 100% 55% / 0.05)" stroke="hsl(200 100% 55%)" strokeWidth="1.5" strokeDasharray="8 5" />
    <text x="400" y="55" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="11" fontFamily="monospace">LOCAL NETWORK — 192.168.1.x</text>

    {/* Sender */}
    <circle cx="160" cy="190" r="50" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="160" y="186" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="11" fontFamily="monospace" fontWeight="bold">YOU</text>
    <text x="160" y="204" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="9" fontFamily="monospace">.10</text>

    {/* Packet direct */}
    <rect width="60" height="32" rx="5" fill="hsl(200 100% 55%)" stroke="hsl(200 100% 88%)" strokeWidth="1.5">
      <animate attributeName="x" from="218" to="490" dur="2s" repeatCount="indefinite" />
      <animate attributeName="y" values="174;174" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.88;1" dur="2s" repeatCount="indefinite" />
    </rect>

    {/* Recipient */}
    <circle cx="560" cy="190" r="50" fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="560" y="186" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="11" fontFamily="monospace" fontWeight="bold">DEVICE</text>
    <text x="560" y="204" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="9" fontFamily="monospace">.11</text>

    {/* Label */}
    <rect x="290" y="265" width="220" height="32" rx="8"
      fill="hsl(140 100% 50% / 0.12)" stroke="hsl(140 100% 55%)" strokeWidth="1.5" />
    <text x="400" y="286" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="13" fontFamily="monospace" fontWeight="bold">DIRECT DELIVERY</text>

    <text x="400" y="348" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11" fontFamily="monospace">
      same subnet → no router needed
    </text>
  </svg>
);

// visual: "gateway-needed"
export const GatewayNeededIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Gateway needed for remote destination">
    <GridDefs id="grid-gwneed" />
    <rect width="800" height="400" fill="url(#grid-gwneed)" opacity="0.3" />

    {/* Sender */}
    <circle cx="100" cy="200" r="46" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
    <text x="100" y="196" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="11" fontFamily="monospace" fontWeight="bold">YOU</text>
    <text x="100" y="213" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="9" fontFamily="monospace">192.168.1.10</text>

    {/* Arrow to gateway */}
    <line x1="148" y1="200" x2="260" y2="200" stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="256,192 274,200 256,208" fill="hsl(30 100% 55%)" />

    {/* Router / gateway */}
    <polygon points="340,150 280,200 340,250 400,200"
      fill="hsl(220 30% 8%)" stroke="hsl(30 100% 65%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
    </polygon>
    <text x="340" y="196" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="10" fontFamily="monospace" fontWeight="bold">GATE</text>
    <text x="340" y="212" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="10" fontFamily="monospace" fontWeight="bold">WAY</text>
    <text x="340" y="270" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="9" fontFamily="monospace">192.168.1.1</text>

    {/* Arrow to internet */}
    <line x1="400" y1="200" x2="520" y2="200" stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="516,192 534,200 516,208" fill="hsl(30 100% 55%)" />

    {/* Internet cloud */}
    <ellipse cx="620" cy="200" rx="120" ry="80"
      fill="hsl(30 100% 55% / 0.07)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" strokeDasharray="6 5" />
    <text x="620" y="196" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="13" fontFamily="monospace" fontWeight="bold">INTERNET</text>
    <text x="620" y="215" textAnchor="middle" fill="hsl(30 100% 45%)" fontSize="10" fontFamily="monospace">→ 10.0.0.1</text>

    <text x="400" y="350" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11" fontFamily="monospace">
      different network → packet goes to the gateway first
    </text>
  </svg>
);

// visual: "router-gateway"
export const RouterGatewayIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Router as the gateway">
    <GridDefs id="grid-routgw" />
    <rect width="800" height="400" fill="url(#grid-routgw)" opacity="0.3" />

    <text x="400" y="48" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">THE ROUTER = GATEWAY</text>

    {/* Router box */}
    <rect x="280" y="110" width="240" height="160" rx="14"
      fill="hsl(220 30% 8%)" stroke="hsl(30 100% 65%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    {/* Antenna */}
    <line x1="360" y1="110" x2="350" y2="70" stroke="hsl(30 100% 55%)" strokeWidth="2" />
    <circle cx="350" cy="66" r="6" fill="hsl(30 100% 65%)">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
    </circle>
    <line x1="440" y1="110" x2="450" y2="70" stroke="hsl(30 100% 55%)" strokeWidth="2" />
    <circle cx="450" cy="66" r="6" fill="hsl(30 100% 65%)">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
    </circle>

    {/* Ports */}
    {[0,1,2,3].map(i => (
      <rect key={i} x={300 + i*44} y="240" width="30" height="20" rx="3"
        fill="hsl(30 100% 55% / 0.3)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" />
    ))}

    <text x="400" y="180" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="15" fontFamily="monospace" fontWeight="bold">ROUTER</text>
    <text x="400" y="205" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="11" fontFamily="monospace">192.168.1.1</text>
    <text x="400" y="225" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="10" fontFamily="monospace">default gateway</text>

    {/* In / out arrows */}
    <line x1="80" y1="190" x2="278" y2="190" stroke="hsl(200 100% 55%)" strokeWidth="2.5" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.2s" repeatCount="indefinite" />
    </line>
    <polygon points="274,182 292,190 274,198" fill="hsl(200 100% 55%)" />
    <text x="180" y="178" textAnchor="middle" fill="hsl(200 100% 60%)" fontSize="10" fontFamily="monospace">local packet in</text>

    <line x1="522" y1="190" x2="720" y2="190" stroke="hsl(30 100% 55%)" strokeWidth="2.5" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.2s" repeatCount="indefinite" />
    </line>
    <polygon points="716,182 734,190 716,198" fill="hsl(30 100% 55%)" />
    <text x="622" y="178" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="10" fontFamily="monospace">internet packet out</text>

    <text x="400" y="360" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11" fontFamily="monospace">
      the router forwards your packet to the outside world
    </text>
  </svg>
);

// visual: "routing-table-preview"
export const RoutingTablePreviewIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Routing table preview">
    <GridDefs id="grid-routbl" />
    <rect width="800" height="400" fill="url(#grid-routbl)" opacity="0.3" />

    <text x="400" y="48" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ROUTING TABLE</text>

    {/* Table */}
    <rect x="80" y="72" width="640" height="240" rx="10"
      fill="hsl(220 30% 6%)" stroke="hsl(30 100% 55%)" strokeWidth="2" />

    {/* Header */}
    <rect x="80" y="72" width="640" height="40" rx="10"
      fill="hsl(30 100% 55% / 0.20)" />
    {["DESTINATION", "MASK", "GATEWAY", "INTERFACE"].map((h, i) => (
      <text key={i} x={140 + i * 150} y="98" fill="hsl(30 100% 80%)"
        fontSize="12" fontFamily="monospace" fontWeight="bold">{h}</text>
    ))}

    {/* Rows */}
    {[
      ["192.168.1.0",  "255.255.255.0", "—",         "eth0", "200 100% 60%", true ],
      ["0.0.0.0",      "0.0.0.0",       "192.168.1.1","eth0", "30  100% 60%", false],
      ["10.0.0.0",     "255.0.0.0",     "192.168.1.1","eth0", "140 100% 55%", false],
    ].map(([dest, mask, gw, iface, color, active], i) => (
      <g key={i}>
        <rect x="82" y={116 + i * 58} width="636" height="54" rx="4"
          fill={active ? `hsl(${color} / 0.08)` : "transparent"}
          stroke={active ? `hsl(${color} / 0.3)` : "none"} strokeWidth="1" />
        {[dest, mask, gw, iface].map((v, j) => (
          <text key={j} x={140 + j * 150} y={148 + i * 58}
            fill={`hsl(${color})`} fontSize="12" fontFamily="monospace">{v as string}</text>
        ))}
        {active && (
          <circle cx="762" cy={142 + i * 58} r="6" fill={`hsl(${color})`}>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
          </circle>
        )}
      </g>
    ))}

    <text x="400" y="355" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="11" fontFamily="monospace">
      the router reads the destination IP and matches it here
    </text>
  </svg>
);

// visual: "hop-by-hop"
export const HopByHopIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Hop by hop routing">
    <GridDefs id="grid-hopbyhop" />
    <rect width="800" height="400" fill="url(#grid-hopbyhop)" opacity="0.3" />

    <text x="400" y="48" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">HOP BY HOP</text>

    {/* Nodes */}
    {[
      { cx: 80,  label: "YOU",      color: "200 100% 60%", shape: "circle" },
      { cx: 220, label: "R1",       color: "30  100% 60%", shape: "diamond" },
      { cx: 360, label: "R2",       color: "30  100% 60%", shape: "diamond" },
      { cx: 500, label: "R3",       color: "30  100% 60%", shape: "diamond" },
      { cx: 640, label: "R4",       color: "30  100% 60%", shape: "diamond" },
      { cx: 760, label: "SERVER",   color: "140 100% 55%", shape: "circle" },
    ].map((n, i) => (
      <g key={i}>
        {n.shape === "circle" ? (
          <circle cx={n.cx} cy="200" r="36"
            fill="hsl(220 30% 8%)" stroke={`hsl(${n.color})`} strokeWidth="2">
            <animate attributeName="stroke-opacity" values="0.4;1;0.4"
              dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite" />
          </circle>
        ) : (
          <polygon points={`${n.cx},162 ${n.cx-30},200 ${n.cx},238 ${n.cx+30},200`}
            fill="hsl(220 30% 8%)" stroke={`hsl(${n.color})`} strokeWidth="2">
            <animate attributeName="stroke-opacity" values="0.4;1;0.4"
              dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite" />
          </polygon>
        )}
        <text x={n.cx} y={n.label === "SERVER" ? 204 : 204} textAnchor="middle"
          fill={`hsl(${n.color})`} fontSize="10" fontFamily="monospace" fontWeight="bold">{n.label}</text>
        {/* Hop number */}
        {i > 0 && i < 5 && (
          <text x={n.cx} y="258" textAnchor="middle"
            fill="hsl(30 100% 45%)" fontSize="9" fontFamily="monospace">hop {i}</text>
        )}
      </g>
    ))}

    {/* Connecting lines */}
    {[80, 220, 360, 500, 640].map((x, i) => (
      <line key={i} x1={x + 36} y1="200" x2={x + 144} y2="200"
        stroke="hsl(30 100% 45% / 0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
    ))}

    {/* Animated packet */}
    <circle r="10" fill="hsl(30 100% 65%)" stroke="hsl(30 100% 90%)" strokeWidth="1.5">
      <animateMotion dur="4s" repeatCount="indefinite"
        path="M 80 200 L 220 200 L 360 200 L 500 200 L 640 200 L 760 200" />
      <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.9;1" dur="4s" repeatCount="indefinite" />
    </circle>

    <text x="400" y="340" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="11" fontFamily="monospace">
      each router forwards to the next · until destination reached
    </text>
  </svg>
);

