// ════════════════════════════════════════════════════════════
// NETWORK ACCESS LAYER — Intro (12 scenes)
// ════════════════════════════════════════════════════════════

import { GridDefs } from "../SceneIllustration";

// visual: "packet-ready"
export const PacketReadyIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Packet ready with IP address">
    <GridDefs id="grid-pktready" />
    <rect width="800" height="400" fill="url(#grid-pktready)" opacity="0.3" />

    {/* Glow */}
    <circle cx="400" cy="190" r="130" fill="hsl(30 100% 55% / 0.07)">
      <animate attributeName="r" values="120;140;120" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Packet box */}
    <rect x="180" y="100" width="440" height="180" rx="14"
      fill="hsl(220 30% 8%)" stroke="hsl(30 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>

    {/* IP Header band */}
    <rect x="180" y="100" width="440" height="52" rx="14"
      fill="hsl(30 100% 55% / 0.22)" />
    <text x="400" y="133" textAnchor="middle" fill="hsl(30 100% 85%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">IP HEADER · SRC: 192.168.1.10 · DST: 10.0.0.1</text>

    {/* Segment inside */}
    <rect x="206" y="166" width="388" height="96" rx="8"
      fill="hsl(140 100% 50% / 0.15)" stroke="hsl(140 100% 55%)" strokeWidth="2" />
    <text x="400" y="210" textAnchor="middle" fill="hsl(140 100% 80%)" fontSize="15"
      fontFamily="monospace" fontWeight="bold">SEGMENT</text>
    <text x="400" y="235" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11"
      fontFamily="monospace">port · seq · data</text>

    {/* Checkmark */}
    <g transform="translate(578, 118)">
      <circle r="20" fill="hsl(140 100% 50%)" stroke="hsl(140 100% 80%)" strokeWidth="2" />
      <path d="M -9 0 L -3 7 L 11 -8" stroke="hsl(220 30% 5%)" strokeWidth="3.5"
        fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <text x="400" y="330" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="12" fontFamily="monospace">
      IP address set · destination known
    </text>
    <text x="400" y="354" textAnchor="middle" fill="hsl(0 70% 55%)" fontSize="11" fontFamily="monospace">
      but one final challenge remains…
    </text>
  </svg>
);

// visual: "highlight-network-access"
export const HighlightNetworkAccessIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Network Access Layer highlighted">
    <GridDefs id="grid-hlna" />
    <rect width="800" height="400" fill="url(#grid-hlna)" opacity="0.3" />

    {/* Glow rings */}
    {[180, 140, 100].map((r, i) => (
      <ellipse key={i} cx="400" cy="195" rx={r + 80} ry={r * 0.5}
        fill="none" stroke="hsl(0 80% 55%)" strokeWidth="1" opacity={0.12 - i * 0.03}>
        <animate attributeName="rx" values={`${r+80};${r+100};${r+80}`}
          dur={`${2.5+i*0.5}s`} repeatCount="indefinite" />
      </ellipse>
    ))}

    {/* Dim upper layers */}
    {[
      { y: 44,  name: "APPLICATION",    color: "200 100% 55%" },
      { y: 104, name: "TRANSPORT",      color: "140 100% 50%" },
      { y: 164, name: "INTERNET",       color: "30  100% 55%" },
    ].map((l, i) => (
      <g key={i} opacity="0.25">
        <rect x="200" y={l.y} width="400" height="50" rx="6"
          fill={`hsl(${l.color} / 0.08)`} stroke={`hsl(${l.color})`} strokeWidth="1" />
        <text x="400" y={l.y+32} textAnchor="middle" fill={`hsl(${l.color})`}
          fontSize="13" fontFamily="monospace" letterSpacing="2">{l.name} ✓</text>
      </g>
    ))}

    {/* Active layer */}
    <rect x="140" y="234" width="520" height="90" rx="14"
      fill="hsl(0 80% 55% / 0.18)" stroke="hsl(0 80% 60%)" strokeWidth="3">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="286" textAnchor="middle" fill="hsl(0 80% 88%)" fontSize="22"
      fontFamily="monospace" fontWeight="bold" letterSpacing="4">NETWORK ACCESS</text>
    <text x="400" y="310" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="12"
      fontFamily="monospace">layer 4 of 4 · the deepest</text>

    <text x="400" y="372" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      welcome to the final layer
    </text>
  </svg>
);

// visual: "physical-world"
export const PhysicalWorldIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Data touching the physical world">
    <GridDefs id="grid-phyworld" />
    <rect width="800" height="400" fill="url(#grid-phyworld)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">PHYSICAL WORLD</text>

    {/* Cable */}
    <path d="M 80 200 Q 200 200 260 200 Q 320 200 360 200"
      fill="none" stroke="hsl(30 100% 55%)" strokeWidth="8" strokeLinecap="round" />
    <path d="M 80 200 Q 200 200 260 200 Q 320 200 360 200"
      fill="none" stroke="hsl(30 100% 80%)" strokeWidth="2" strokeLinecap="round"
      strokeDasharray="10 8">
      <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="1s" repeatCount="indefinite" />
    </path>
    <text x="200" y="240" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="11" fontFamily="monospace">CABLE</text>

    {/* WiFi waves */}
    {[30, 55, 80].map((r, i) => (
      <path key={i}
        d={`M ${540-r} ${190-r*0.5} A ${r} ${r*0.5} 0 0 1 ${540+r} ${190-r*0.5}`}
        fill="none" stroke="hsl(200 100% 60%)" strokeWidth="2.5" strokeLinecap="round"
        opacity={0.8 - i * 0.2}>
        <animate attributeName="opacity" values={`0;${0.8-i*0.2};0`}
          dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite" />
      </path>
    ))}
    <circle cx="540" cy="220" r="8" fill="hsl(200 100% 60%)" />
    <text x="540" y="270" textAnchor="middle" fill="hsl(200 100% 65%)" fontSize="11" fontFamily="monospace">WIRELESS</text>

    {/* NIC chip */}
    <rect x="310" y="145" width="100" height="110" rx="8"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
    </rect>
    {[0,1,2,3].map(i => (
      <rect key={i} x={322+i*20} y="160" width="10" height="30" rx="2"
        fill="hsl(0 80% 55% / 0.4)" stroke="hsl(0 80% 55%)" strokeWidth="1" />
    ))}
    <text x="360" y="222" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="10" fontFamily="monospace" fontWeight="bold">NIC</text>
    <text x="360" y="238" textAnchor="middle" fill="hsl(0 80% 50%)" fontSize="9" fontFamily="monospace">hardware</text>

    <text x="400" y="340" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="11" fontFamily="monospace">
      cables · signals · hardware — this is the physical world
    </text>
  </svg>
);

// visual: "packet-to-frame"
export const PacketToFrameIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Packet wrapped into a frame">
    <GridDefs id="grid-pkt2frm" />
    <rect width="800" height="400" fill="url(#grid-pkt2frm)" opacity="0.3" />

    <text x="400" y="44" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ENCAPSULATION → FRAME</text>

    {/* Frame outer */}
    <rect x="120" y="80" width="560" height="250" rx="14"
      fill="hsl(0 80% 55% / 0.10)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.8s" fill="freeze" />
    </rect>
    <text x="152" y="104" fill="hsl(0 80% 65%)" fontSize="10" fontFamily="monospace" fontWeight="bold">
      FRAME
      <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.8s" fill="freeze" />
    </text>

    {/* Frame header */}
    <rect x="138" y="112" width="524" height="48" rx="6"
      fill="hsl(0 80% 55% / 0.22)" stroke="hsl(0 80% 55%)" strokeWidth="1.5">
      <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.5s" fill="freeze" />
    </rect>
    <text x="400" y="141" textAnchor="middle" fill="hsl(0 80% 85%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">
      FRAME HEADER · DST MAC · SRC MAC · TYPE
      <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.5s" fill="freeze" />
    </text>

    {/* IP Packet inside */}
    <rect x="155" y="172" width="490" height="110" rx="10"
      fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 60%)" strokeWidth="2" />
    <text x="400" y="215" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">IP PACKET</text>
    <text x="400" y="238" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="11"
      fontFamily="monospace">SRC IP · DST IP · SEGMENT</text>
    <text x="400" y="263" textAnchor="middle" fill="hsl(140 100% 50%)" fontSize="10"
      fontFamily="monospace">[ your actual data ]</text>

    {/* Frame trailer */}
    <rect x="138" y="292" width="524" height="30" rx="6"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 50%)" strokeWidth="1.5">
      <animate attributeName="opacity" values="0;1" dur="0.4s" begin="1.1s" fill="freeze" />
    </rect>
    <text x="400" y="313" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">
      TRAILER · FCS (error check)
      <animate attributeName="opacity" values="0;1" dur="0.4s" begin="1.1s" fill="freeze" />
    </text>

    <text x="400" y="368" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      the packet is wrapped into a frame for local delivery
    </text>
  </svg>
);

// visual: "ip-vs-mac"
export const IpVsMacIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="IP address vs MAC address">
    <GridDefs id="grid-ipvsmac" />
    <rect width="800" height="400" fill="url(#grid-ipvsmac)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(180 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">IP vs MAC</text>

    {/* IP side */}
    <rect x="60" y="80" width="300" height="240" rx="12"
      fill="hsl(30 100% 55% / 0.10)" stroke="hsl(30 100% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="210" y="120" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">IP ADDRESS</text>
    <text x="210" y="154" textAnchor="middle" fill="hsl(30 100% 65%)" fontSize="14"
      fontFamily="monospace">10.0.0.1</text>
    <line x1="90" y1="170" x2="330" y2="170" stroke="hsl(30 100% 40%)" strokeWidth="1" />
    {["logical address","changes by network","used for routing","Internet Layer"].map((t, i) => (
      <text key={i} x="210" y={192+i*26} textAnchor="middle"
        fill="hsl(30 100% 55%)" fontSize="11" fontFamily="monospace">{t}</text>
    ))}

    {/* Divider */}
    <line x1="400" y1="80" x2="400" y2="320" stroke="hsl(0 0% 25%)" strokeWidth="1.5" strokeDasharray="5 4" />
    <text x="400" y="210" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="20" fontFamily="monospace">≠</text>

    {/* MAC side */}
    <rect x="440" y="80" width="300" height="240" rx="12"
      fill="hsl(0 80% 55% / 0.10)" stroke="hsl(0 80% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2.3s" repeatCount="indefinite" />
    </rect>
    <text x="590" y="120" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">MAC ADDRESS</text>
    <text x="590" y="154" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="13"
      fontFamily="monospace">00:1A:2B:3C:4D:5E</text>
    <line x1="470" y1="170" x2="710" y2="170" stroke="hsl(0 80% 40%)" strokeWidth="1" />
    {["physical address","burned in hardware","used for delivery","Network Access Layer"].map((t, i) => (
      <text key={i} x="590" y={192+i*26} textAnchor="middle"
        fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">{t}</text>
    ))}

    <text x="400" y="358" textAnchor="middle" fill="hsl(180 100% 55%)" fontSize="11" fontFamily="monospace">
      both are needed · different purposes · different scopes
    </text>
  </svg>
);

// visual: "mac-identity"
export const MacIdentityIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="MAC address as hardware identity">
    <GridDefs id="grid-macid" />
    <rect width="800" height="400" fill="url(#grid-macid)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">PHYSICAL IDENTITY</text>

    {/* NIC chip */}
    <rect x="260" y="80" width="280" height="180" rx="12"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    {/* chip pins top */}
    {[0,1,2,3,4,5].map(i => (
      <rect key={i} x={276+i*36} y="64" width="16" height="18" rx="2"
        fill="hsl(0 80% 50%)" />
    ))}
    {/* chip pins bottom */}
    {[0,1,2,3,4,5].map(i => (
      <rect key={i} x={276+i*36} y="258" width="16" height="18" rx="2"
        fill="hsl(0 80% 50%)" />
    ))}
    <text x="400" y="148" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">NETWORK CARD</text>
    <text x="400" y="172" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11"
      fontFamily="monospace">NIC</text>

    {/* Burned-in label */}
    <rect x="290" y="188" width="220" height="50" rx="6"
      fill="hsl(0 80% 55% / 0.25)" stroke="hsl(0 80% 65%)" strokeWidth="1.5" />
    <text x="400" y="212" textAnchor="middle" fill="hsl(0 80% 85%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">00:1A:2B:3C:4D:5E</text>
    <text x="400" y="228" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="9"
      fontFamily="monospace">BURNED IN AT FACTORY</text>

    <text x="400" y="318" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="12" fontFamily="monospace">
      unique to every network card · forever
    </text>
    <text x="400" y="342" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="11" fontFamily="monospace">
      cannot be changed · cannot be duplicated
    </text>
  </svg>
);

// visual: "ip-mac-analogy"
export const IpMacAnalogyIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="IP address like postal address, MAC like name on door">
    <GridDefs id="grid-ipmacana" />
    <rect width="800" height="400" fill="url(#grid-ipmacana)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(180 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ANALOGY</text>

    {/* House */}
    <g transform="translate(140, 80)">
      <polygon points="200,0 0,120 400,120" fill="hsl(30 100% 55% / 0.2)"
        stroke="hsl(30 100% 60%)" strokeWidth="2" />
      <rect x="40" y="120" width="320" height="200" fill="hsl(220 30% 8%)"
        stroke="hsl(30 100% 55%)" strokeWidth="2" />
      {/* door */}
      <rect x="160" y="200" width="80" height="120" rx="4"
        fill="hsl(30 100% 40% / 0.3)" stroke="hsl(30 100% 55%)" strokeWidth="2" />
      {/* name plate on door */}
      <rect x="168" y="230" width="64" height="28" rx="3"
        fill="hsl(0 80% 55% / 0.3)" stroke="hsl(0 80% 60%)" strokeWidth="1.5" />
      <text x="200" y="249" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="8" fontFamily="monospace" fontWeight="bold">J. SMITH</text>

      {/* Street sign */}
      <rect x="0" y="285" width="140" height="30" rx="4"
        fill="hsl(30 100% 55% / 0.2)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" />
      <text x="70" y="305" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="10" fontFamily="monospace">192.168.1.10</text>
    </g>

    {/* Legend */}
    <rect x="60" y="295" width="300" height="54" rx="8"
      fill="hsl(30 100% 55% / 0.10)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" />
    <text x="210" y="320" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="12" fontFamily="monospace" fontWeight="bold">IP = postal address</text>
    <text x="210" y="340" textAnchor="middle" fill="hsl(30 100% 50%)" fontSize="10" fontFamily="monospace">tells the postman which house</text>

    <rect x="440" y="295" width="300" height="54" rx="8"
      fill="hsl(0 80% 55% / 0.10)" stroke="hsl(0 80% 55%)" strokeWidth="1.5" />
    <text x="590" y="320" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="12" fontFamily="monospace" fontWeight="bold">MAC = name on door</text>
    <text x="590" y="340" textAnchor="middle" fill="hsl(0 80% 50%)" fontSize="10" fontFamily="monospace">identifies who actually lives there</text>
  </svg>
);

// visual: "next-hop-mac"
export const NextHopMacIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Finding the MAC of the next hop">
    <GridDefs id="grid-nexthop" />
    <rect width="800" height="400" fill="url(#grid-nexthop)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">NEXT HOP MAC?</text>

    {/* Sender */}
    <circle cx="110" cy="200" r="55" fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 60%)" strokeWidth="2" />
    <text x="110" y="196" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">YOUR</text>
    <text x="110" y="214" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="11"
      fontFamily="monospace">DEVICE</text>

    {/* Question beam */}
    <line x1="166" y1="200" x2="320" y2="200"
      stroke="hsl(0 80% 55%)" strokeWidth="2" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
    </line>
    <text x="244" y="188" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="11" fontFamily="monospace">WHO?</text>

    {/* Gateway/Router with question mark */}
    <polygon points="400,148 340,200 400,252 460,200"
      fill="hsl(220 30% 8%)" stroke="hsl(30 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </polygon>
    <text x="400" y="196" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">ROUTER</text>
    <text x="400" y="212" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="9"
      fontFamily="monospace">gateway</text>

    {/* MAC label being revealed */}
    <rect x="480" y="170" width="220" height="60" rx="8"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 60%)" strokeWidth="2">
      <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.5;1"
        dur="2.5s" repeatCount="indefinite" />
    </rect>
    <text x="590" y="196" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">
      <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.5;1"
        dur="2.5s" repeatCount="indefinite" />
      AA:BB:CC:DD:EE:FF
    </text>
    <text x="590" y="218" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="10"
      fontFamily="monospace">
      <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.5;1"
        dur="2.5s" repeatCount="indefinite" />
      MAC found!
    </text>

    <text x="400" y="340" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      the frame needs the MAC of the very next stop
    </text>
  </svg>
);

// visual: "arp-bridge"
export const ArpBridgeIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="ARP bridges IP to MAC">
    <GridDefs id="grid-arpbridge" />
    <rect width="800" height="400" fill="url(#grid-arpbridge)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ARP — THE BRIDGE</text>

    {/* IP box */}
    <rect x="60" y="140" width="180" height="100" rx="10"
      fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 60%)" strokeWidth="2" />
    <text x="150" y="183" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">IP</text>
    <text x="150" y="203" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="12"
      fontFamily="monospace">10.0.0.1</text>
    <text x="150" y="222" textAnchor="middle" fill="hsl(30 100% 45%)" fontSize="10"
      fontFamily="monospace">known</text>

    {/* ARP bridge */}
    <rect x="300" y="110" width="200" height="160" rx="14"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="178" textAnchor="middle" fill="hsl(0 80% 85%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">ARP</text>
    <text x="400" y="202" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="11"
      fontFamily="monospace">Address</text>
    <text x="400" y="220" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="11"
      fontFamily="monospace">Resolution</text>
    <text x="400" y="238" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="11"
      fontFamily="monospace">Protocol</text>

    {/* MAC box */}
    <rect x="560" y="140" width="180" height="100" rx="10"
      fill="hsl(0 80% 55% / 0.12)" stroke="hsl(0 80% 60%)" strokeWidth="2" />
    <text x="650" y="183" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">MAC</text>
    <text x="650" y="203" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="11"
      fontFamily="monospace">00:1A:2B:3C</text>
    <text x="650" y="218" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="10"
      fontFamily="monospace">:4D:5E</text>
    <text x="650" y="234" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="10"
      fontFamily="monospace">resolved!</text>

    {/* Arrows */}
    <line x1="242" y1="190" x2="298" y2="190" stroke="hsl(30 100% 55%)" strokeWidth="2.5" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="294,182 312,190 294,198" fill="hsl(30 100% 55%)" />

    <line x1="502" y1="190" x2="558" y2="190" stroke="hsl(0 80% 60%)" strokeWidth="2.5" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="554,182 572,190 554,198" fill="hsl(0 80% 60%)" />

    <text x="400" y="338" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="11" fontFamily="monospace">
      ARP translates IP → MAC for local delivery
    </text>
  </svg>
);

// visual: "switch-decision"
export const SwitchDecisionIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Switch decides where to send the frame">
    <GridDefs id="grid-switchdec" />
    <rect width="800" height="400" fill="url(#grid-switchdec)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">SWITCH DECIDES</text>

    {/* Switch */}
    <rect x="290" y="140" width="220" height="120" rx="10"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    {[0,1,2,3,4].map(i => (
      <rect key={i} x={308+i*32} y="240" width="20" height="14" rx="3"
        fill="hsl(0 80% 55% / 0.3)" stroke="hsl(0 80% 55%)" strokeWidth="1.5" />
    ))}
    <text x="400" y="185" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="15"
      fontFamily="monospace" fontWeight="bold">SWITCH</text>
    <text x="400" y="208" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="10"
      fontFamily="monospace">reads DST MAC</text>
    <text x="400" y="226" textAnchor="middle" fill="hsl(0 80% 40%)" fontSize="10"
      fontFamily="monospace">consults CAM table</text>

    {/* Frame in */}
    <line x1="80" y1="200" x2="288" y2="200" stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="284,192 302,200 284,208" fill="hsl(30 100% 55%)" />
    <text x="180" y="186" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="10" fontFamily="monospace">FRAME IN</text>

    {/* Port 1 — correct */}
    <line x1="512" y1="180" x2="660" y2="120" stroke="hsl(140 100% 55%)" strokeWidth="2.5" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <circle cx="690" cy="106" r="30" fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2" />
    <text x="690" y="110" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="10" fontFamily="monospace" fontWeight="bold">✓ PORT 2</text>

    {/* Port 2 — wrong, dim */}
    <line x1="512" y1="220" x2="660" y2="280" stroke="hsl(0 0% 30%)" strokeWidth="1.5" opacity="0.4" />
    <circle cx="690" cy="294" r="30" fill="hsl(220 30% 8%)" stroke="hsl(0 0% 30%)" strokeWidth="1.5" opacity="0.4" />
    <text x="690" y="298" textAnchor="middle" fill="hsl(0 0% 35%)" fontSize="10" fontFamily="monospace">PORT 3</text>

    <text x="400" y="348" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      the switch forwards only to the correct port
    </text>
  </svg>
);

// visual: "final-frontier"
export const FinalFrontierIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Final frontier before physical transmission">
    <GridDefs id="grid-finalfront" />
    <rect width="800" height="400" fill="url(#grid-finalfront)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FINAL FRONTIER</text>

    {/* Frame box */}
    <rect x="160" y="90" width="480" height="140" rx="12"
      fill="hsl(0 80% 55% / 0.12)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="145" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">FRAME</text>
    <text x="400" y="168" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="11"
      fontFamily="monospace">MAC addresses · payload · FCS</text>
    <text x="400" y="190" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="10"
      fontFamily="monospace">ready for physical transmission</text>
    <text x="400" y="212" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11"
      fontFamily="monospace">✓ complete</text>

    {/* Conversion arrow */}
    <line x1="400" y1="234" x2="400" y2="278"
      stroke="hsl(0 0% 40%)" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="392,274 400,292 408,274" fill="hsl(0 0% 40%)" />

    {/* Signal output */}
    <text x="200" y="325" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="12" fontFamily="monospace">⚡ electrical</text>
    <text x="400" y="325" textAnchor="middle" fill="hsl(200 100% 60%)" fontSize="12" fontFamily="monospace">📡 radio</text>
    <text x="600" y="325" textAnchor="middle" fill="hsl(60 100% 60%)" fontSize="12" fontFamily="monospace">💡 optical</text>

    <text x="400" y="368" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      next stop: the physical medium
    </text>
  </svg>
);

// visual: "packet_v2" — PACKET mascot (same style as welcome-packet)
export const PacketV2Illustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img"
    aria-label="PACKET — almost there!">
    <defs>
      <pattern id="grid-pktv2" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(220 30% 25%)" strokeWidth="0.5" />
      </pattern>
      <radialGradient id="glow-pktv2" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="hsl(45 100% 60%)" stopOpacity="0.55" />
        <stop offset="60%"  stopColor="hsl(45 100% 50%)" stopOpacity="0.18" />
        <stop offset="100%" stopColor="hsl(45 100% 40%)" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="vig-pktv2" cx="50%" cy="50%" r="50%">
        <stop offset="55%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <mask id="vig-mask-pktv2">
        <rect width="800" height="400" fill="url(#vig-pktv2)" />
      </mask>
    </defs>

    <rect width="800" height="400" fill="hsl(220 30% 6%)" />
    <rect width="800" height="400" fill="url(#grid-pktv2)" opacity="0.3" />

    {/* Golden aura */}
    {[130, 105, 80].map((r, i) => (
      <ellipse key={i} cx="400" cy="200" rx={r} ry={r * 0.85}
        fill="url(#glow-pktv2)" opacity={0.7 - i * 0.15}>
        <animate attributeName="rx" values={`${r};${r+14};${r}`} dur={`${2.5+i*0.6}s`} repeatCount="indefinite" />
        <animate attributeName="ry" values={`${r*0.85};${(r+14)*0.85};${r*0.85}`} dur={`${2.5+i*0.6}s`} repeatCount="indefinite" />
      </ellipse>
    ))}

    {/* Sparkles */}
    {[{cx:280,cy:125},{cx:520,cy:110},{cx:310,cy:285},{cx:500,cy:280},{cx:240,cy:205},{cx:555,cy:195}].map((s,i)=>(
      <circle key={i} cx={s.cx} cy={s.cy} r={i%2===0?3:2} fill="hsl(45 100% 75%)">
        <animate attributeName="opacity" values="0;1;0" dur={`${1.8+i*0.2}s`} begin={`${i*0.4}s`} repeatCount="indefinite"/>
      </circle>
    ))}

    {/* PACKET mascot */}
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 -8; 0 0" dur="3s" repeatCount="indefinite" />
      <image href="/assets/images/packet.png"
        x="288" y="55" width="224" height="280"
        preserveAspectRatio="xMidYMid meet" mask="url(#vig-mask-pktv2)" />
    </g>

    {/* Badge */}
    <rect x="275" y="342" width="250" height="34" rx="17"
      fill="hsl(45 100% 50% / 0.15)" stroke="hsl(45 100% 60%)" strokeWidth="1.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="365" textAnchor="middle"
      fill="hsl(45 100% 80%)" fontSize="14" fontFamily="monospace" fontWeight="bold" letterSpacing="3">
      ALMOST THERE!
    </text>
  </svg>
);


// ════════════════════════════════════════════════════════════
// NETWORK ACCESS LAYER — Topic 1: MAC Addresses
// ════════════════════════════════════════════════════════════

// visual: "nic-intro"
export const NicIntroIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Network Interface Card intro">
    <GridDefs id="grid-nicintro" />
    <rect width="800" height="400" fill="url(#grid-nicintro)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">NETWORK INTERFACE CARD</text>

    {/* NIC board */}
    <rect x="180" y="90" width="440" height="200" rx="10"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    {/* Gold pins along bottom */}
    {Array.from({length:14}).map((_,i) => (
      <rect key={i} x={196+i*28} y="278" width="16" height="24" rx="2"
        fill="hsl(45 100% 55%)" />
    ))}
    {/* Chip */}
    <rect x="295" y="120" width="120" height="120" rx="6"
      fill="hsl(220 30% 14%)" stroke="hsl(0 80% 50%)" strokeWidth="2" />
    {/* chip pins */}
    {[0,1,2].map(i => (
      <rect key={i} x={305+i*32} y="108" width="14" height="14" rx="2" fill="hsl(0 80% 50%)" />
    ))}
    {[0,1,2].map(i => (
      <rect key={i} x={305+i*32} y="238" width="14" height="14" rx="2" fill="hsl(0 80% 50%)" />
    ))}
    <text x="355" y="186" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">NIC</text>

    {/* Port */}
    <rect x="460" y="160" width="100" height="60" rx="4"
      fill="hsl(0 80% 40% / 0.2)" stroke="hsl(0 80% 55%)" strokeWidth="2" />
    <rect x="476" y="172" width="68" height="36" rx="3" fill="hsl(220 30% 4%)" />
    <text x="510" y="218" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="9" fontFamily="monospace">RJ-45</text>

    <text x="400" y="342" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="12" fontFamily="monospace">
      every device that connects to a network has one
    </text>
    <text x="400" y="366" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="11" fontFamily="monospace">
      NIC = Network Interface Card
    </text>
  </svg>
);

// visual: "mac-factory"
export const MacFactoryIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="MAC address burned in at factory">
    <GridDefs id="grid-macfact" />
    <rect width="800" height="400" fill="url(#grid-macfact)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">BURNED IN AT FACTORY</text>

    {/* Factory */}
    <rect x="60" y="110" width="220" height="180" rx="8"
      fill="hsl(220 30% 8%)" stroke="hsl(0 0% 35%)" strokeWidth="2" />
    <rect x="80" y="90" width="60" height="24" rx="4" fill="hsl(0 0% 25%)" />
    <rect x="160" y="80" width="60" height="34" rx="4" fill="hsl(0 0% 25%)" />
    {/* smoke */}
    {[90,190].map((x,i)=>(
      <path key={i} d={`M ${x} 80 Q ${x-8} 60 ${x} 40 Q ${x+8} 20 ${x} 0`}
        fill="none" stroke="hsl(0 0% 45%)" strokeWidth="3" strokeLinecap="round" opacity="0.5">
        <animate attributeName="d"
          values={`M ${x} 80 Q ${x-8} 60 ${x} 40 Q ${x+8} 20 ${x} 0;M ${x} 80 Q ${x+8} 60 ${x} 40 Q ${x-8} 20 ${x} 0;M ${x} 80 Q ${x-8} 60 ${x} 40 Q ${x+8} 20 ${x} 0`}
          dur="3s" begin={`${i*0.8}s`} repeatCount="indefinite" />
      </path>
    ))}
    <text x="170" y="215" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="12" fontFamily="monospace" fontWeight="bold">FACTORY</text>

    {/* Arrow */}
    <line x1="284" y1="200" x2="366" y2="200" stroke="hsl(45 100% 55%)" strokeWidth="2.5" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="362,192 380,200 362,208" fill="hsl(45 100% 55%)" />

    {/* NIC with burned address */}
    <rect x="380" y="120" width="200" height="160" rx="10"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="480" y="170" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">NIC</text>
    {/* Burned label */}
    <rect x="398" y="185" width="164" height="40" rx="5"
      fill="hsl(45 100% 50% / 0.2)" stroke="hsl(45 100% 55%)" strokeWidth="1.5" />
    <text x="480" y="202" textAnchor="middle" fill="hsl(45 100% 80%)" fontSize="10"
      fontFamily="monospace" fontWeight="bold">00:1A:2B:3C</text>
    <text x="480" y="218" textAnchor="middle" fill="hsl(45 100% 70%)" fontSize="10"
      fontFamily="monospace" fontWeight="bold">:4D:5E</text>
    <text x="480" y="254" textAnchor="middle" fill="hsl(45 100% 55%)" fontSize="9"
      fontFamily="monospace">MAC · permanent</text>

    {/* Lock icon */}
    <g transform="translate(626, 166)">
      <rect width="36" height="30" rx="4" fill="hsl(45 100% 50% / 0.3)" stroke="hsl(45 100% 60%)" strokeWidth="2" />
      <path d="M 6 0 A 12 12 0 0 1 30 0 L 30 6 L 6 6 Z" fill="none"
        stroke="hsl(45 100% 60%)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="18" r="4" fill="hsl(45 100% 70%)" />
    </g>

    <text x="400" y="342" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      the MAC address is assigned at manufacturing · it never changes
    </text>
  </svg>
);

// visual: "mac-meaning"
export const MacMeaningIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="MAC stands for Media Access Control">
    <GridDefs id="grid-macmeaning" />
    <rect width="800" height="400" fill="url(#grid-macmeaning)" opacity="0.3" />

    {/* Big MAC acronym */}
    <text x="400" y="100" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="52"
      fontFamily="monospace" fontWeight="bold" letterSpacing="10">MAC</text>

    {/* Expanded letters */}
    {[
      { letter: "M", word: "MEDIA",   sub: "the medium (cable, wifi)",  color: "0 80% 65%",   x: 140 },
      { letter: "A", word: "ACCESS",  sub: "controlling access to it",  color: "30 100% 60%",  x: 400 },
      { letter: "C", word: "CONTROL", sub: "who gets to transmit when", color: "200 100% 60%", x: 660 },
    ].map((item, i) => (
      <g key={i}>
        <line x1={item.x} y1="118" x2={item.x} y2="148"
          stroke={`hsl(${item.color} / 0.5)`} strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x={item.x-110} y="148" width="220" height="110" rx="10"
          fill={`hsl(${item.color} / 0.10)`} stroke={`hsl(${item.color})`} strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4"
            dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite" />
        </rect>
        <text x={item.x} y="192" textAnchor="middle" fill={`hsl(${item.color})`}
          fontSize="20" fontFamily="monospace" fontWeight="bold">{item.word}</text>
        <text x={item.x} y="220" textAnchor="middle" fill={`hsl(${item.color} / 0.7)`}
          fontSize="10" fontFamily="monospace">{item.sub}</text>
      </g>
    ))}

    <rect x="220" y="305" width="360" height="46" rx="10"
      fill="hsl(0 80% 55% / 0.12)" stroke="hsl(0 80% 55%)" strokeWidth="1.8" />
    <text x="400" y="334" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">= physical address of hardware</text>
  </svg>
);

// visual: "mac-format"
export const MacFormatIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="MAC address format">
    <GridDefs id="grid-macfmt" />
    <rect width="800" height="400" fill="url(#grid-macfmt)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">MAC ADDRESS FORMAT</text>

    {/* Big MAC display */}
    <rect x="120" y="110" width="560" height="90" rx="12"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="172" textAnchor="middle" fill="hsl(0 80% 85%)" fontSize="38"
      fontFamily="monospace" fontWeight="bold" letterSpacing="4">00:1A:2B:3C:4D:5E</text>

    {/* Group callouts */}
    {["00","1A","2B","3C","4D","5E"].map((g, i) => (
      <g key={i}>
        <line x1={164 + i * 82} y1="202" x2={164 + i * 82} y2="232"
          stroke="hsl(0 80% 55% / 0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x={124 + i * 82} y="232" width="80" height="36" rx="5"
          fill={`hsl(${i < 3 ? "200 100% 55" : "0 80% 55"} / 0.15)`}
          stroke={`hsl(${i < 3 ? "200 100% 55" : "0 80% 55"})`} strokeWidth="1.5" />
        <text x={164 + i * 82} y="256" textAnchor="middle"
          fill={`hsl(${i < 3 ? "200 100% 75" : "0 80% 75"})`}
          fontSize="16" fontFamily="monospace" fontWeight="bold">{g}</text>
      </g>
    ))}

    {/* Legend */}
    <rect x="120" y="296" width="240" height="36" rx="8"
      fill="hsl(200 100% 55% / 0.10)" stroke="hsl(200 100% 55%)" strokeWidth="1.5" />
    <text x="240" y="319" textAnchor="middle" fill="hsl(200 100% 70%)" fontSize="11" fontFamily="monospace">
      manufacturer (OUI)
    </text>
    <rect x="440" y="296" width="240" height="36" rx="8"
      fill="hsl(0 80% 55% / 0.10)" stroke="hsl(0 80% 55%)" strokeWidth="1.5" />
    <text x="560" y="319" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="11" fontFamily="monospace">
      device identifier
    </text>

    <text x="400" y="368" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="10" fontFamily="monospace">
      6 groups · 2 hex digits each · separated by colons
    </text>
  </svg>
);

// visual: "mac-structure"
export const MacStructureIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="MAC address structure — 6 hex groups">
    <GridDefs id="grid-macstruct" />
    <rect width="800" height="400" fill="url(#grid-macstruct)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">6 GROUPS · HEXADECIMAL</text>

    {["00","1A","2B","3C","4D","5E"].map((g, i) => (
      <g key={i} transform={`translate(${68+i*112}, 80)`}>
        <rect width="96" height="120" rx="10"
          fill={`hsl(${i < 3 ? "200 100% 55" : "0 80% 55"} / 0.12)`}
          stroke={`hsl(${i < 3 ? "200 100% 60" : "0 80% 60"})`} strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4"
            dur="2s" begin={`${i*0.25}s`} repeatCount="indefinite" />
        </rect>
        <text x="48" y="66" textAnchor="middle"
          fill={`hsl(${i < 3 ? "200 100% 85" : "0 80% 85"})`}
          fontSize="26" fontFamily="monospace" fontWeight="bold">{g}</text>
        <text x="48" y="90" textAnchor="middle"
          fill={`hsl(${i < 3 ? "200 100% 55" : "0 80% 55"})`}
          fontSize="10" fontFamily="monospace">group {i+1}</text>
        <text x="48" y="108" textAnchor="middle"
          fill="hsl(0 0% 40%)" fontSize="9" fontFamily="monospace">hex</text>
        {i < 5 && (
          <text x="106" y="66" fill="hsl(0 0% 50%)" fontSize="22" fontFamily="monospace">:</text>
        )}
      </g>
    ))}

    {/* Hex explanation */}
    <rect x="200" y="252" width="400" height="80" rx="10"
      fill="hsl(0 0% 8%)" stroke="hsl(0 0% 25%)" strokeWidth="1.5" />
    <text x="400" y="278" textAnchor="middle" fill="hsl(0 0% 65%)" fontSize="12" fontFamily="monospace">
      hexadecimal = base 16
    </text>
    <text x="400" y="300" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="11" fontFamily="monospace">
      digits: 0-9, A, B, C, D, E, F
    </text>
    <text x="400" y="320" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="10" fontFamily="monospace">
      each group = 1 byte = 8 bits
    </text>
  </svg>
);

// visual: "mac-oui-device"
export const MacOuiDeviceIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="OUI manufacturer vs device identifier">
    <GridDefs id="grid-macoui" />
    <rect width="800" height="400" fill="url(#grid-macoui)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">MANUFACTURER · DEVICE</text>

    {/* Full MAC */}
    <text x="400" y="110" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="30"
      fontFamily="monospace" fontWeight="bold" letterSpacing="6">00:1A:2B:3C:4D:5E</text>

    {/* OUI bracket */}
    <rect x="112" y="120" width="248" height="100" rx="8"
      fill="hsl(200 100% 55% / 0.12)" stroke="hsl(200 100% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="236" y="155" textAnchor="middle" fill="hsl(200 100% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">00:1A:2B</text>
    <text x="236" y="178" textAnchor="middle" fill="hsl(200 100% 65%)" fontSize="12"
      fontFamily="monospace">MANUFACTURER</text>
    <text x="236" y="198" textAnchor="middle" fill="hsl(200 100% 45%)" fontSize="10"
      fontFamily="monospace">OUI (Organizationally Unique ID)</text>

    {/* Device bracket */}
    <rect x="440" y="120" width="248" height="100" rx="8"
      fill="hsl(0 80% 55% / 0.12)" stroke="hsl(0 80% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2.3s" repeatCount="indefinite" />
    </rect>
    <text x="564" y="155" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">3C:4D:5E</text>
    <text x="564" y="178" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="12"
      fontFamily="monospace">DEVICE ID</text>
    <text x="564" y="198" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="10"
      fontFamily="monospace">unique to this specific NIC</text>

    {/* Examples */}
    <rect x="112" y="262" width="248" height="60" rx="8"
      fill="hsl(200 100% 55% / 0.07)" stroke="hsl(200 100% 50% / 0.5)" strokeWidth="1" />
    <text x="236" y="286" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="10" fontFamily="monospace">e.g. Intel · Apple · Cisco</text>
    <text x="236" y="308" textAnchor="middle" fill="hsl(200 100% 40%)" fontSize="10" fontFamily="monospace">registered with IEEE</text>

    <rect x="440" y="262" width="248" height="60" rx="8"
      fill="hsl(0 80% 55% / 0.07)" stroke="hsl(0 80% 50% / 0.5)" strokeWidth="1" />
    <text x="564" y="286" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="10" fontFamily="monospace">assigned by manufacturer</text>
    <text x="564" y="308" textAnchor="middle" fill="hsl(0 80% 40%)" fontSize="10" fontFamily="monospace">never repeated globally</text>
  </svg>
);

// visual: "mac-fixed"
export const MacFixedIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="MAC address is fixed and never changes">
    <GridDefs id="grid-macfix" />
    <rect width="800" height="400" fill="url(#grid-macfix)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FIXED · PERMANENT</text>

    {/* Timeline */}
    <line x1="80" y1="200" x2="720" y2="200" stroke="hsl(0 0% 30%)" strokeWidth="2" />

    {[
      { label: "Factory",   year: "2018", mac: "00:1A:2B:3C:4D:5E", x: 140, color: "45 100% 60%"  },
      { label: "Home WiFi", year: "2020", mac: "00:1A:2B:3C:4D:5E", x: 360, color: "200 100% 60%" },
      { label: "Office LAN",year: "2024", mac: "00:1A:2B:3C:4D:5E", x: 580, color: "140 100% 55%" },
    ].map((point, i) => (
      <g key={i}>
        <circle cx={point.x} cy="200" r="10" fill={`hsl(${point.color})`} stroke="hsl(0 0% 80%)" strokeWidth="1.5" />
        <line x1={point.x} y1="190" x2={point.x} y2="130" stroke={`hsl(${point.color} / 0.5)`} strokeWidth="1.5" />
        <rect x={point.x-80} y="80" width="160" height="52" rx="6"
          fill={`hsl(${point.color} / 0.10)`} stroke={`hsl(${point.color})`} strokeWidth="1.5" />
        <text x={point.x} y="105" textAnchor="middle" fill={`hsl(${point.color})`}
          fontSize="11" fontFamily="monospace" fontWeight="bold">{point.label} · {point.year}</text>
        <text x={point.x} y="122" textAnchor="middle" fill="hsl(0 80% 75%)"
          fontSize="10" fontFamily="monospace">{point.mac}</text>
      </g>
    ))}

    {/* Same MAC indicator */}
    <rect x="200" y="252" width="400" height="46" rx="10"
      fill="hsl(140 100% 50% / 0.12)" stroke="hsl(140 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="281" textAnchor="middle" fill="hsl(140 100% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">always the same MAC address</text>

    <text x="400" y="355" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      IP addresses change · MAC addresses never do
    </text>
  </svg>
);

// visual: "mac-local-scope"
export const MacLocalScopeIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="MAC addresses only work locally">
    <GridDefs id="grid-macloc" />
    <rect width="800" height="400" fill="url(#grid-macloc)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">LOCAL SCOPE ONLY</text>

    {/* Local network bubble */}
    <ellipse cx="220" cy="210" rx="180" ry="150"
      fill="hsl(0 80% 55% / 0.06)" stroke="hsl(0 80% 55%)" strokeWidth="2" strokeDasharray="8 5" />
    <text x="220" y="80" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">LOCAL NETWORK</text>

    {/* Devices with MAC arrows */}
    <circle cx="160" cy="200" r="36" fill="hsl(220 30% 8%)" stroke="hsl(0 80% 55%)" strokeWidth="2" />
    <text x="160" y="196" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="9" fontFamily="monospace">AA:BB</text>
    <text x="160" y="210" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="9" fontFamily="monospace">:CC:…</text>

    <circle cx="280" cy="280" r="36" fill="hsl(220 30% 8%)" stroke="hsl(0 80% 55%)" strokeWidth="2" />
    <text x="280" y="276" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="9" fontFamily="monospace">11:22</text>
    <text x="280" y="290" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="9" fontFamily="monospace">:33:…</text>

    <line x1="194" y1="216" x2="246" y2="260" stroke="hsl(0 80% 55%)" strokeWidth="2" strokeDasharray="4 3">
      <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1s" repeatCount="indefinite" />
    </line>

    {/* Barrier */}
    <rect x="400" y="60" width="8" height="300" rx="4"
      fill="hsl(0 0% 25%)" />
    <text x="404" y="220" fill="hsl(0 0% 35%)" fontSize="22">🚫</text>
    <text x="424" y="214" fill="hsl(0 0% 35%)" fontSize="10" fontFamily="monospace">MAC</text>
    <text x="424" y="230" fill="hsl(0 0% 35%)" fontSize="10" fontFamily="monospace">stops</text>
    <text x="424" y="246" fill="hsl(0 0% 35%)" fontSize="10" fontFamily="monospace">here</text>

    {/* Internet */}
    <ellipse cx="620" cy="210" rx="150" ry="120"
      fill="hsl(30 100% 55% / 0.06)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" strokeDasharray="6 5" />
    <text x="620" y="200" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">INTERNET</text>
    <text x="620" y="225" textAnchor="middle" fill="hsl(30 100% 45%)" fontSize="11"
      fontFamily="monospace">IP only</text>

    <text x="400" y="390" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      MAC addresses are stripped at the router · IP takes over
    </text>
  </svg>
);

// visual: "mac-ip-together"
export const MacIpTogetherIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="IP and MAC work together">
    <GridDefs id="grid-maciptog" />
    <rect width="800" height="400" fill="url(#grid-maciptog)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(180 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">IP + MAC = COMPLETE DELIVERY</text>

    {/* IP role */}
    <rect x="60" y="100" width="280" height="160" rx="12"
      fill="hsl(30 100% 55% / 0.10)" stroke="hsl(30 100% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="200" y="148" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">IP ADDRESS</text>
    <text x="200" y="178" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="12"
      fontFamily="monospace">global routing</text>
    <text x="200" y="200" textAnchor="middle" fill="hsl(30 100% 45%)" fontSize="11"
      fontFamily="monospace">finds the right network</text>
    <text x="200" y="222" textAnchor="middle" fill="hsl(30 100% 40%)" fontSize="10"
      fontFamily="monospace">across the internet</text>
    <text x="200" y="244" textAnchor="middle" fill="hsl(30 100% 35%)" fontSize="10"
      fontFamily="monospace">🌍</text>

    {/* Plus */}
    <text x="400" y="192" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="36"
      fontFamily="monospace">+</text>

    {/* MAC role */}
    <rect x="460" y="100" width="280" height="160" rx="12"
      fill="hsl(0 80% 55% / 0.10)" stroke="hsl(0 80% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2.3s" repeatCount="indefinite" />
    </rect>
    <text x="600" y="148" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">MAC ADDRESS</text>
    <text x="600" y="178" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="12"
      fontFamily="monospace">local delivery</text>
    <text x="600" y="200" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="11"
      fontFamily="monospace">finds the right device</text>
    <text x="600" y="222" textAnchor="middle" fill="hsl(0 80% 40%)" fontSize="10"
      fontFamily="monospace">within the network</text>
    <text x="600" y="244" textAnchor="middle" fill="hsl(0 80% 35%)" fontSize="10"
      fontFamily="monospace">🏠</text>

    {/* Result */}
    <rect x="200" y="300" width="400" height="54" rx="12"
      fill="hsl(140 100% 50% / 0.12)" stroke="hsl(140 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="332" textAnchor="middle" fill="hsl(140 100% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">packet reaches its destination ✓</text>
  </svg>
);

// visual: "packet_v1" — same PACKET mascot style
export const PacketV1Illustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="PACKET — good question!">
    <defs>
      <pattern id="grid-pktv1" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(220 30% 25%)" strokeWidth="0.5" />
      </pattern>
      <radialGradient id="glow-pktv1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(45 100% 60%)" stopOpacity="0.55" />
        <stop offset="60%" stopColor="hsl(45 100% 50%)" stopOpacity="0.18" />
        <stop offset="100%" stopColor="hsl(45 100% 40%)" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="vig-pktv1" cx="50%" cy="50%" r="50%">
        <stop offset="55%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <mask id="vig-mask-pktv1">
        <rect width="800" height="400" fill="url(#vig-pktv1)" />
      </mask>
    </defs>
    <rect width="800" height="400" fill="hsl(220 30% 6%)" />
    <rect width="800" height="400" fill="url(#grid-pktv1)" opacity="0.3" />
    {[130,105,80].map((r,i)=>(
      <ellipse key={i} cx="400" cy="200" rx={r} ry={r*0.85}
        fill="url(#glow-pktv1)" opacity={0.7-i*0.15}>
        <animate attributeName="rx" values={`${r};${r+14};${r}`} dur={`${2.5+i*0.6}s`} repeatCount="indefinite"/>
        <animate attributeName="ry" values={`${r*0.85};${(r+14)*0.85};${r*0.85}`} dur={`${2.5+i*0.6}s`} repeatCount="indefinite"/>
      </ellipse>
    ))}
    {[{cx:280,cy:125},{cx:520,cy:110},{cx:310,cy:285},{cx:500,cy:280}].map((s,i)=>(
      <circle key={i} cx={s.cx} cy={s.cy} r={3} fill="hsl(45 100% 75%)">
        <animate attributeName="opacity" values="0;1;0" dur={`${1.8+i*0.3}s`} begin={`${i*0.5}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 -8; 0 0" dur="3s" repeatCount="indefinite"/>
      <image href="/assets/images/packet.png"
        x="288" y="55" width="224" height="280"
        preserveAspectRatio="xMidYMid meet" mask="url(#vig-mask-pktv1)"/>
    </g>
    <rect x="264" y="342" width="272" height="34" rx="17"
      fill="hsl(45 100% 50% / 0.15)" stroke="hsl(45 100% 60%)" strokeWidth="1.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </rect>
    <text x="400" y="365" textAnchor="middle"
      fill="hsl(45 100% 80%)" fontSize="14" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
      BUT HOW?
    </text>
  </svg>
);


// ════════════════════════════════════════════════════════════
// NETWORK ACCESS LAYER — Topic 2: ARP
// ════════════════════════════════════════════════════════════

// visual: "ip-to-mac-problem"
export const IpToMacProblemIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Know IP but need MAC">
    <GridDefs id="grid-ip2macprob" />
    <rect width="800" height="400" fill="url(#grid-ip2macprob)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">THE PROBLEM</text>

    {/* Device knows */}
    <rect x="60" y="100" width="260" height="200" rx="12"
      fill="hsl(140 100% 50% / 0.10)" stroke="hsl(140 100% 55%)" strokeWidth="2" />
    <text x="190" y="138" textAnchor="middle" fill="hsl(140 100% 70%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">I KNOW:</text>
    <rect x="84" y="150" width="212" height="36" rx="6"
      fill="hsl(30 100% 55% / 0.15)" stroke="hsl(30 100% 55%)" strokeWidth="1.5" />
    <text x="190" y="174" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">IP: 10.0.0.1</text>
    <text x="190" y="220" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11"
      fontFamily="monospace">destination known ✓</text>

    {/* Missing piece */}
    <rect x="60" y="240" width="260" height="50" rx="6"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 60%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
    </rect>
    <text x="190" y="261" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">MAC: ???</text>
    <text x="190" y="278" textAnchor="middle" fill="hsl(0 80% 50%)" fontSize="10"
      fontFamily="monospace">needed to build the frame!</text>

    {/* Arrow */}
    <line x1="324" y1="200" x2="400" y2="200"
      stroke="hsl(0 0% 35%)" strokeWidth="2" strokeDasharray="4 4" />
    <text x="362" y="188" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="18">?</text>

    {/* Frame incomplete */}
    <rect x="420" y="100" width="320" height="200" rx="12"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 50%)" strokeWidth="2" strokeDasharray="6 4" />
    <text x="580" y="145" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">FRAME (INCOMPLETE)</text>
    <rect x="440" y="158" width="280" height="34" rx="5"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 55%)" strokeWidth="1.5" />
    <text x="580" y="181" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="11"
      fontFamily="monospace">DST MAC: ??? ← MISSING</text>
    <rect x="440" y="202" width="280" height="34" rx="5"
      fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 50%)" strokeWidth="1" />
    <text x="580" y="225" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="11"
      fontFamily="monospace">IP PACKET (present)</text>

    <text x="400" y="355" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      cannot send a frame without the destination MAC
    </text>
  </svg>
);

// visual: "arp-intro"
export const ArpIntroIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="ARP introduction">
    <GridDefs id="grid-arpintro" />
    <rect width="800" height="400" fill="url(#grid-arpintro)" opacity="0.3" />

    {/* Glow */}
    {[150,110,70].map((r,i)=>(
      <circle key={i} cx="400" cy="185" r={r}
        fill="none" stroke="hsl(0 80% 55%)" strokeWidth="1" opacity={0.12-i*0.03}>
        <animate attributeName="r" values={`${r};${r+16};${r}`} dur={`${2.5+i*0.5}s`} repeatCount="indefinite"/>
      </circle>
    ))}

    <rect x="180" y="110" width="440" height="150" rx="16"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 60%)" strokeWidth="3">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </rect>
    <text x="400" y="175" textAnchor="middle" fill="hsl(0 80% 88%)" fontSize="30"
      fontFamily="monospace" fontWeight="bold" letterSpacing="6">ARP</text>

    {/* Expanded */}
    {["Address", "Resolution", "Protocol"].map((w,i)=>(
      <text key={i} x={250+i*150} y="228" textAnchor="middle"
        fill="hsl(0 80% 65%)" fontSize="13" fontFamily="monospace">{w}</text>
    ))}

    <text x="400" y="320" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="12" fontFamily="monospace">
      translates IP addresses → MAC addresses
    </text>
    <text x="400" y="346" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="11" fontFamily="monospace">
      so frames can be delivered locally
    </text>
  </svg>
);

// visual: "arp-broadcast"
export const ArpBroadcastIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="ARP asks the network via broadcast">
    <GridDefs id="grid-arpbc" />
    <rect width="800" height="400" fill="url(#grid-arpbc)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ARP QUESTION</text>

    {/* Asking device */}
    <circle cx="140" cy="200" r="55" fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="140" y="196" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">YOUR</text>
    <text x="140" y="213" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="11"
      fontFamily="monospace">DEVICE</text>

    {/* Speech bubble */}
    <rect x="200" y="120" width="380" height="80" rx="12"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 60%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
    </rect>
    <polygon points="210,200 235,200 222,218" fill="hsl(0 80% 55% / 0.15)" />
    <text x="390" y="153" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">"Who has IP 10.0.0.1?"</text>
    <text x="390" y="177" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="11"
      fontFamily="monospace">"Tell me your MAC address!"</text>

    {/* Broadcast wave */}
    {[60, 100, 140].map((r,i)=>(
      <circle key={i} cx="390" cy="300" r={r}
        fill="none" stroke="hsl(0 80% 55%)" strokeWidth="1.5" opacity={0.4-i*0.12}>
        <animate attributeName="r" values={`${r};${r+40};${r}`} dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite"/>
        <animate attributeName="opacity" values={`${0.4-i*0.12};0.05;${0.4-i*0.12}`} dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    <text x="390" y="306" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="10"
      fontFamily="monospace">BROADCAST</text>
  </svg>
);

// visual: "arp-broadcast-wave"
export const ArpBroadcastWaveIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="ARP broadcast sent to everyone">
    <GridDefs id="grid-arpbcwave" />
    <rect width="800" height="400" fill="url(#grid-arpbcwave)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">BROADCAST → EVERYONE</text>

    {/* Center sender */}
    <circle cx="400" cy="200" r="44" fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="400" y="196" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">YOUR</text>
    <text x="400" y="212" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="10"
      fontFamily="monospace">DEVICE</text>

    {/* Expanding rings */}
    {[70, 110, 150].map((r,i)=>(
      <circle key={i} cx="400" cy="200" r={r}
        fill="none" stroke="hsl(0 80% 55%)" strokeWidth="2" opacity="0.5">
        <animate attributeName="r" from={r} to={r+60} dur="2s" begin={`${i*0.5}s`} repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0" dur="2s" begin={`${i*0.5}s`} repeatCount="indefinite"/>
      </circle>
    ))}

    {/* Recipients at corners */}
    {[
      { cx: 160, cy: 100 }, { cx: 640, cy: 100 },
      { cx: 160, cy: 300 }, { cx: 640, cy: 300 },
    ].map((pos, i) => (
      <g key={i}>
        <circle cx={pos.cx} cy={pos.cy} r="32" fill="hsl(220 30% 8%)"
          stroke="hsl(0 0% 40%)" strokeWidth="1.5" />
        <text x={pos.cx} y={pos.cy+5} textAnchor="middle"
          fill="hsl(0 0% 50%)" fontSize="9" fontFamily="monospace">device {i+2}</text>
      </g>
    ))}

    <text x="400" y="370" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      FF:FF:FF:FF:FF:FF — the broadcast MAC address
    </text>
  </svg>
);

// visual: "arp-reply"
export const ArpReplyIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Only the target device replies to ARP">
    <GridDefs id="grid-arpreply" />
    <rect width="800" height="400" fill="url(#grid-arpreply)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ONLY ONE REPLIES</text>

    {/* Devices that stay silent */}
    {[
      { cx: 130, cy: 140 }, { cx: 130, cy: 280 }, { cx: 670, cy: 280 },
    ].map((d, i) => (
      <g key={i} opacity="0.35">
        <circle cx={d.cx} cy={d.cy} r="38" fill="hsl(220 30% 8%)" stroke="hsl(0 0% 30%)" strokeWidth="1.5" />
        <text x={d.cx} y={d.cy+5} textAnchor="middle" fill="hsl(0 0% 35%)" fontSize="9" fontFamily="monospace">silent</text>
      </g>
    ))}

    {/* Target device — glowing */}
    <circle cx="670" cy="140" r="50" fill="hsl(140 100% 50% / 0.1)">
      <animate attributeName="r" values="46;58;46" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="670" cy="140" r="46" fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 55%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="670" y="136" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="10" fontFamily="monospace" fontWeight="bold">THAT'S</text>
    <text x="670" y="151" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="10" fontFamily="monospace" fontWeight="bold">ME!</text>

    {/* Reply arrow */}
    <line x1="620" y1="155" x2="290" y2="190"
      stroke="hsl(140 100% 55%)" strokeWidth="2.5" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="0" to="22" dur="1.2s" repeatCount="indefinite"/>
    </line>
    <polygon points="294,182 276,190 294,198" fill="hsl(140 100% 55%)"/>

    {/* Questioner */}
    <circle cx="220" cy="200" r="46" fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 60%)" strokeWidth="2"/>
    <text x="220" y="196" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="11" fontFamily="monospace" fontWeight="bold">YOUR</text>
    <text x="220" y="213" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="10" fontFamily="monospace">DEVICE</text>

    <text x="400" y="355" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11" fontFamily="monospace">
      all receive it · only the owner of that IP replies
    </text>
  </svg>
);

// visual: "arp-response"
export const ArpResponseIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="ARP response with MAC address">
    <GridDefs id="grid-arpresp" />
    <rect width="800" height="400" fill="url(#grid-arpresp)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ARP REPLY</text>

    {/* Target device */}
    <circle cx="660" cy="190" r="55" fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="660" y="186" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">TARGET</text>
    <text x="660" y="203" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="9"
      fontFamily="monospace">IP: 10.0.0.1</text>

    {/* Speech bubble */}
    <rect x="220" y="100" width="380" height="100" rx="12"
      fill="hsl(140 100% 50% / 0.14)" stroke="hsl(140 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
    </rect>
    <polygon points="590,200 608,190 600,215" fill="hsl(140 100% 50% / 0.14)"/>
    <text x="410" y="138" textAnchor="middle" fill="hsl(140 100% 80%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">"That IP is mine!"</text>
    <text x="410" y="163" textAnchor="middle" fill="hsl(140 100% 65%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">"My MAC address is:"</text>
    <text x="410" y="188" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="16"
      fontFamily="monospace" fontWeight="bold" letterSpacing="2">00:1A:2B:3C:4D:5E</text>

    {/* Questioner */}
    <circle cx="100" cy="250" r="46" fill="hsl(220 30% 8%)"
      stroke="hsl(200 100% 60%)" strokeWidth="2"/>
    <text x="100" y="246" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">YOUR</text>
    <text x="100" y="263" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="10"
      fontFamily="monospace">DEVICE</text>

    <text x="400" y="345" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11" fontFamily="monospace">
      the target unicasts its MAC directly back
    </text>
  </svg>
);

// visual: "arp-cache"
export const ArpCacheIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="ARP cache stores the resolved MAC">
    <GridDefs id="grid-arpcache" />
    <rect width="800" height="400" fill="url(#grid-arpcache)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">ARP CACHE</text>

    {/* Cache table */}
    <rect x="160" y="80" width="480" height="220" rx="10"
      fill="hsl(220 30% 6%)" stroke="hsl(0 80% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
    </rect>

    {/* Header */}
    <rect x="160" y="80" width="480" height="42" rx="10"
      fill="hsl(0 80% 55% / 0.22)"/>
    <text x="326" y="108" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">IP ADDRESS</text>
    <text x="560" y="108" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">MAC ADDRESS</text>

    {/* Rows */}
    {[
      { ip: "192.168.1.1",  mac: "AA:BB:CC:DD:EE:FF", color: "200 100% 60%", fresh: true  },
      { ip: "10.0.0.1",     mac: "00:1A:2B:3C:4D:5E", color: "140 100% 55%", fresh: true  },
      { ip: "192.168.1.15", mac: "11:22:33:44:55:66", color: "0 0% 40%",     fresh: false },
    ].map((row, i) => (
      <g key={i}>
        <rect x="162" y={126+i*54} width="476" height="50" rx="4"
          fill={row.fresh ? `hsl(${row.color} / 0.08)` : "transparent"}
          stroke={row.fresh ? `hsl(${row.color} / 0.3)` : "none"} strokeWidth="1"/>
        <text x="326" y={157+i*54} textAnchor="middle"
          fill={`hsl(${row.color})`} fontSize="13" fontFamily="monospace">{row.ip}</text>
        <text x="560" y={157+i*54} textAnchor="middle"
          fill={`hsl(${row.color})`} fontSize="13" fontFamily="monospace">{row.mac}</text>
        {row.fresh && (
          <circle cx="624" cy={152+i*54} r="5" fill={`hsl(${row.color})`}>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s"
              begin={`${i*0.4}s`} repeatCount="indefinite"/>
          </circle>
        )}
      </g>
    ))}

    <text x="400" y="348" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      saved in memory · avoids asking again · expires over time
    </text>
  </svg>
);

// visual: "frame-ready"
export const FrameReadyIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame complete and ready to send">
    <GridDefs id="grid-frmready" />
    <rect width="800" height="400" fill="url(#grid-frmready)" opacity="0.3" />

    {/* Glow */}
    <circle cx="400" cy="190" r="140" fill="hsl(140 100% 50% / 0.06)">
      <animate attributeName="r" values="130;155;130" dur="3s" repeatCount="indefinite"/>
    </circle>

    <rect x="130" y="80" width="540" height="220" rx="14"
      fill="hsl(220 30% 8%)" stroke="hsl(140 100% 60%)" strokeWidth="3">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </rect>

    {/* FRAME HEADER */}
    <rect x="148" y="96" width="504" height="48" rx="8"
      fill="hsl(0 80% 55% / 0.20)" stroke="hsl(0 80% 55%)" strokeWidth="1.5"/>
    <text x="400" y="126" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">
      HEADER · DST: 00:1A:2B:3C:4D:5E · SRC: AA:BB:CC:DD:EE:FF
    </text>

    {/* IP PACKET */}
    <rect x="166" y="158" width="468" height="80" rx="8"
      fill="hsl(30 100% 55% / 0.12)" stroke="hsl(30 100% 55%)" strokeWidth="1.5"/>
    <text x="400" y="196" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">IP PACKET</text>
    <text x="400" y="218" textAnchor="middle" fill="hsl(30 100% 50%)" fontSize="11"
      fontFamily="monospace">SRC: 192.168.1.10 · DST: 10.0.0.1</text>

    {/* TRAILER */}
    <rect x="148" y="252" width="504" height="38" rx="8"
      fill="hsl(0 80% 50% / 0.15)" stroke="hsl(0 80% 50%)" strokeWidth="1.5"/>
    <text x="400" y="276" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">TRAILER · FCS: 0xA4B2C3D1</text>

    {/* Checkmark */}
    <g transform="translate(620, 96)">
      <circle r="26" fill="hsl(140 100% 50%)" stroke="hsl(140 100% 80%)" strokeWidth="2"/>
      <path d="M -12 0 L -4 10 L 14 -10" stroke="hsl(220 30% 5%)" strokeWidth="4"
        fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </g>

    <text x="400" y="348" textAnchor="middle" fill="hsl(140 100% 70%)" fontSize="14"
      fontFamily="monospace" letterSpacing="2">FRAME COMPLETE · READY TO SEND</text>
  </svg>
);


// ════════════════════════════════════════════════════════════
// NETWORK ACCESS LAYER — Topic 3: Switching (9 scenes)
// ════════════════════════════════════════════════════════════

// visual: "switch-intro"
export const SwitchIntroIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="The switch — responsible for local frame delivery">
    <GridDefs id="grid-swintro" />
    <rect width="800" height="400" fill="url(#grid-swintro)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">THE SWITCH</text>

    {/* Switch box */}
    <rect x="240" y="120" width="320" height="140" rx="12"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    {/* Ports row */}
    {[0,1,2,3,4,5,6,7].map(i => (
      <rect key={i} x={258+i*32} y="236" width="22" height="16" rx="3"
        fill="hsl(0 80% 55% / 0.3)" stroke="hsl(0 80% 55%)" strokeWidth="1.5">
        <animate attributeName="fill-opacity" values="0.3;0.7;0.3"
          dur="1.5s" begin={`${i*0.18}s`} repeatCount="indefinite" />
      </rect>
    ))}
    {/* LEDs */}
    {[0,1,2,3].map(i => (
      <circle key={i} cx={266+i*60} cy="160" r="5" fill="hsl(140 100% 55%)">
        <animate attributeName="opacity" values="0.3;1;0.3"
          dur="1.2s" begin={`${i*0.3}s`} repeatCount="indefinite" />
      </circle>
    ))}
    <text x="400" y="196" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="18"
      fontFamily="monospace" fontWeight="bold">SWITCH</text>
    <text x="400" y="218" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11"
      fontFamily="monospace">local frame delivery</text>

    {/* Devices connected */}
    {[
      { cx: 100, cy: 200, label: "PC 1" },
      { cx: 700, cy: 200, label: "PC 2" },
      { cx: 400, cy: 340, label: "PRINTER" },
    ].map((d, i) => (
      <g key={i}>
        <line x1={d.cx < 300 ? d.cx+38 : d.cx > 500 ? d.cx-38 : d.cx}
              y1={d.cy < 300 ? d.cy : d.cy-38}
              x2={d.cx < 300 ? 240 : d.cx > 500 ? 560 : d.cx}
              y2={d.cy < 300 ? 200 : 260}
          stroke="hsl(0 0% 30%)" strokeWidth="2" />
        <circle cx={d.cx} cy={d.cy} r="34" fill="hsl(220 30% 8%)"
          stroke="hsl(0 0% 35%)" strokeWidth="1.5" />
        <text x={d.cx} y={d.cy+5} textAnchor="middle"
          fill="hsl(0 0% 50%)" fontSize="9" fontFamily="monospace">{d.label}</text>
      </g>
    ))}

    <text x="400" y="390" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      responsible for delivering frames to the right machine
    </text>
  </svg>
);

// visual: "switch-devices"
export const SwitchDevicesIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Switch connects multiple devices">
    <GridDefs id="grid-swdevices" />
    <rect width="800" height="400" fill="url(#grid-swdevices)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">CONNECTING DEVICES</text>

    {/* Central switch */}
    <rect x="320" y="165" width="160" height="70" rx="8"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    {[0,1,2,3].map(i => (
      <rect key={i} x={333+i*28} y="222" width="18" height="10" rx="2"
        fill="hsl(0 80% 55% / 0.4)" stroke="hsl(0 80% 55%)" strokeWidth="1" />
    ))}
    <text x="400" y="200" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">SWITCH</text>

    {/* 6 devices around the switch */}
    {[
      { angle: -90,  label: "LAPTOP",  color: "200 100% 60%", mac: "AA:BB:CC:…" },
      { angle: -30,  label: "PHONE",   color: "140 100% 55%", mac: "11:22:33:…" },
      { angle:  30,  label: "SERVER",  color: "30  100% 60%", mac: "FF:EE:DD:…" },
      { angle:  90,  label: "PRINTER", color: "0   70% 60%",  mac: "44:55:66:…" },
      { angle:  150, label: "TV",      color: "60 100% 55%",  mac: "77:88:99:…" },
      { angle:  210, label: "DESKTOP", color: "180 100% 55%", mac: "AA:11:22:…" },
    ].map((d, i) => {
      const rad = (d.angle * Math.PI) / 180;
      const cx = 400 + Math.cos(rad) * 155;
      const cy = 200 + Math.sin(rad) * 140;
      return (
        <g key={i}>
          <line x1="400" y1="200" x2={cx} y2={cy}
            stroke="hsl(0 0% 28%)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3"
              dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite" />
          </line>
          <circle cx={cx} cy={cy} r="34" fill="hsl(220 30% 8%)"
            stroke={`hsl(${d.color})`} strokeWidth="1.8">
            <animate attributeName="stroke-opacity" values="0.4;1;0.4"
              dur="2s" begin={`${i*0.3}s`} repeatCount="indefinite" />
          </circle>
          <text x={cx} y={cy-4} textAnchor="middle" fill={`hsl(${d.color})`}
            fontSize="8" fontFamily="monospace" fontWeight="bold">{d.label}</text>
          <text x={cx} y={cy+10} textAnchor="middle" fill={`hsl(${d.color} / 0.6)`}
            fontSize="7" fontFamily="monospace">{d.mac}</text>
        </g>
      );
    })}
  </svg>
);

// visual: "switch-vs-hub"
export const SwitchVsHubIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Switch vs Hub comparison">
    <GridDefs id="grid-swvshub" />
    <rect width="800" height="400" fill="url(#grid-swvshub)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(180 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">SWITCH vs HUB</text>

    {/* HUB side */}
    <rect x="40" y="80" width="320" height="280" rx="12"
      fill="hsl(0 70% 55% / 0.06)" stroke="hsl(0 70% 50%)" strokeWidth="1.5" strokeDasharray="6 4" />
    <text x="200" y="108" textAnchor="middle" fill="hsl(0 70% 65%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">HUB</text>
    <text x="200" y="128" textAnchor="middle" fill="hsl(0 70% 45%)" fontSize="10"
      fontFamily="monospace">dumb · sends to everyone</text>

    {/* Hub device */}
    <circle cx="200" cy="190" r="30" fill="hsl(220 30% 8%)" stroke="hsl(0 70% 50%)" strokeWidth="2" />
    <text x="200" y="194" textAnchor="middle" fill="hsl(0 70% 65%)" fontSize="11" fontFamily="monospace">HUB</text>

    {/* Broadcast lines to all */}
    {[130, 200, 270].map((cy, i) => (
      <g key={i}>
        <line x1="230" y1="190" x2="320" y2={cy}
          stroke="hsl(0 70% 55%)" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="stroke-dashoffset" from="0" to="-15" dur="1s" repeatCount="indefinite" />
        </line>
        <circle cx="330" cy={cy} r="20" fill="hsl(220 30% 8%)"
          stroke={i === 1 ? "hsl(140 100% 55%)" : "hsl(0 0% 35%)"} strokeWidth="1.5" />
        <text x="330" y={cy+4} textAnchor="middle"
          fill={i === 1 ? "hsl(140 100% 65%)" : "hsl(0 0% 40%)"}
          fontSize="8" fontFamily="monospace">PC{i+1}</text>
      </g>
    ))}
    <text x="200" y="300" textAnchor="middle" fill="hsl(0 70% 55%)" fontSize="10"
      fontFamily="monospace">ALL receive it</text>
    <text x="200" y="318" textAnchor="middle" fill="hsl(0 70% 40%)" fontSize="9"
      fontFamily="monospace">even wrong ones</text>

    {/* Divider */}
    <line x1="400" y1="70" x2="400" y2="370" stroke="hsl(0 0% 20%)" strokeWidth="1.5" />

    {/* SWITCH side */}
    <rect x="440" y="80" width="320" height="280" rx="12"
      fill="hsl(140 100% 50% / 0.06)" stroke="hsl(140 100% 50%)" strokeWidth="1.5" strokeDasharray="6 4" />
    <text x="600" y="108" textAnchor="middle" fill="hsl(140 100% 65%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">SWITCH</text>
    <text x="600" y="128" textAnchor="middle" fill="hsl(140 100% 45%)" fontSize="10"
      fontFamily="monospace">smart · sends to right one</text>

    <circle cx="530" cy="190" r="30" fill="hsl(220 30% 8%)" stroke="hsl(140 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="530" y="194" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="10" fontFamily="monospace">SWITCH</text>

    {[130, 200, 270].map((cy, i) => (
      <g key={i}>
        <line x1="560" y1="190" x2="650" y2={cy}
          stroke={i === 1 ? "hsl(140 100% 55%)" : "hsl(0 0% 25%)"}
          strokeWidth={i === 1 ? "2.5" : "1"} opacity={i === 1 ? 1 : 0.3}>
          {i === 1 && <animate attributeName="stroke-dashoffset" from="0" to="-15" dur="1s" repeatCount="indefinite" />}
        </line>
        <circle cx="660" cy={cy} r="20" fill="hsl(220 30% 8%)"
          stroke={i === 1 ? "hsl(140 100% 55%)" : "hsl(0 0% 25%)"} strokeWidth="1.5"
          opacity={i === 1 ? 1 : 0.3} />
        <text x="660" y={cy+4} textAnchor="middle"
          fill={i === 1 ? "hsl(140 100% 65%)" : "hsl(0 0% 30%)"}
          fontSize="8" fontFamily="monospace">PC{i+1}</text>
      </g>
    ))}
    <text x="600" y="300" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="10"
      fontFamily="monospace">ONLY right one</text>
    <text x="600" y="318" textAnchor="middle" fill="hsl(140 100% 40%)" fontSize="9"
      fontFamily="monospace">efficient · private</text>
  </svg>
);

// visual: "switch-reads-mac"
export const SwitchReadsMacIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Switch reads the destination MAC address">
    <GridDefs id="grid-swreadsmac" />
    <rect width="800" height="400" fill="url(#grid-swreadsmac)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">READS DST MAC</text>

    {/* Incoming frame */}
    <rect x="40" y="148" width="220" height="104" rx="8"
      fill="hsl(220 30% 8%)" stroke="hsl(30 100% 55%)" strokeWidth="2" />
    <rect x="56" y="158" width="188" height="30" rx="4"
      fill="hsl(0 80% 55% / 0.25)" stroke="hsl(0 80% 55%)" strokeWidth="1.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
    </rect>
    <text x="150" y="178" textAnchor="middle" fill="hsl(0 80% 85%)" fontSize="10"
      fontFamily="monospace" fontWeight="bold">DST: 00:1A:2B:3C:4D:5E</text>
    <text x="150" y="206" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="9"
      fontFamily="monospace">SRC: AA:BB:CC:…</text>
    <text x="150" y="222" textAnchor="middle" fill="hsl(140 100% 45%)" fontSize="9"
      fontFamily="monospace">payload…</text>
    <text x="150" y="240" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="9"
      fontFamily="monospace">FCS</text>

    {/* Arrow to switch */}
    <line x1="262" y1="200" x2="328" y2="200"
      stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="324,192 342,200 324,208" fill="hsl(30 100% 55%)" />

    {/* Switch with magnifying glass focus on header */}
    <rect x="340" y="140" width="180" height="120" rx="10"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="430" y="180" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">SWITCH</text>

    {/* Magnifier */}
    <circle cx="430" cy="222" r="20" fill="none" stroke="hsl(45 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <line x1="445" y1="237" x2="458" y2="250" stroke="hsl(45 100% 60%)" strokeWidth="2.5" />
    <text x="430" y="226" textAnchor="middle" fill="hsl(45 100% 75%)" fontSize="9"
      fontFamily="monospace">MAC?</text>

    {/* Result badge */}
    <rect x="536" y="165" width="224" height="70" rx="8"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 60%)" strokeWidth="2">
      <animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.6s" fill="freeze" />
    </rect>
    <text x="648" y="196" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">
      <animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.6s" fill="freeze" />
      DST MAC found:
    </text>
    <text x="648" y="220" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="11"
      fontFamily="monospace">
      <animate attributeName="opacity" values="0;1" dur="0.8s" begin="0.6s" fill="freeze" />
      00:1A:2B:3C:4D:5E
    </text>

    <text x="400" y="330" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      the switch reads only the frame header — not the payload
    </text>
  </svg>
);

// visual: "cam-table"
export const CamTableIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="CAM table — MAC address to port mapping">
    <GridDefs id="grid-cam" />
    <rect width="800" height="400" fill="url(#grid-cam)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">CAM TABLE</text>

    {/* Table */}
    <rect x="100" y="70" width="600" height="250" rx="10"
      fill="hsl(220 30% 6%)" stroke="hsl(0 80% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
    </rect>

    {/* Header */}
    <rect x="100" y="70" width="600" height="42" rx="10"
      fill="hsl(0 80% 55% / 0.22)" />
    <text x="280" y="98" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">MAC ADDRESS</text>
    <text x="560" y="98" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">PORT</text>

    {/* Rows */}
    {[
      { mac: "00:1A:2B:3C:4D:5E", port: "Port 1", color: "200 100% 60%", active: true  },
      { mac: "AA:BB:CC:DD:EE:FF", port: "Port 2", color: "140 100% 55%", active: false },
      { mac: "11:22:33:44:55:66", port: "Port 3", color: "30  100% 60%", active: false },
      { mac: "FF:EE:DD:CC:BB:AA", port: "Port 4", color: "0   70% 60%",  active: false },
    ].map((row, i) => (
      <g key={i}>
        <rect x="102" y={116+i*50} width="596" height="46" rx="4"
          fill={row.active ? `hsl(${row.color} / 0.10)` : "transparent"}
          stroke={row.active ? `hsl(${row.color} / 0.4)` : "none"} strokeWidth="1" />
        <text x="280" y={145+i*50} textAnchor="middle"
          fill={`hsl(${row.color})`} fontSize="14" fontFamily="monospace">{row.mac}</text>
        <text x="560" y={145+i*50} textAnchor="middle"
          fill={`hsl(${row.color})`} fontSize="14" fontFamily="monospace" fontWeight="bold">{row.port}</text>
        {row.active && (
          <circle cx="680" cy={142+i*50} r="6" fill={`hsl(${row.color})`}>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
          </circle>
        )}
      </g>
    ))}

    <text x="400" y="358" textAnchor="middle" fill="hsl(0 80% 50%)" fontSize="11" fontFamily="monospace">
      MAC address table · also called CAM table · learned automatically
    </text>
  </svg>
);

// visual: "switch-forward"
export const SwitchForwardIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Switch forwards frame to correct port only">
    <GridDefs id="grid-swfwd" />
    <rect width="800" height="400" fill="url(#grid-swfwd)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">TARGETED FORWARDING</text>

    {/* Switch */}
    <rect x="300" y="155" width="200" height="90" rx="10"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="200" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">SWITCH</text>
    <text x="400" y="220" textAnchor="middle" fill="hsl(0 80% 50%)" fontSize="10"
      fontFamily="monospace">CAM lookup ✓</text>

    {/* Frame in */}
    <line x1="80" y1="200" x2="298" y2="200"
      stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="294,192 312,200 294,208" fill="hsl(30 100% 55%)" />
    <text x="170" y="184" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="10" fontFamily="monospace">FRAME IN</text>

    {/* Correct port — highlighted */}
    <line x1="502" y1="175" x2="640" y2="120"
      stroke="hsl(140 100% 55%)" strokeWidth="3" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <circle cx="670" cy="106" r="38" fill="hsl(220 30% 8%)"
      stroke="hsl(140 100% 55%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <text x="670" y="100" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="11"
      fontFamily="monospace" fontWeight="bold">PORT 1</text>
    <text x="670" y="118" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="10"
      fontFamily="monospace">✓ TARGET</text>

    {/* Wrong ports — dim */}
    {[200, 280].map((y, i) => (
      <g key={i} opacity="0.2">
        <line x1="502" y1={y} x2="640" y2={y}
          stroke="hsl(0 0% 30%)" strokeWidth="1.5" />
        <circle cx="668" cy={y} r="34" fill="hsl(220 30% 8%)"
          stroke="hsl(0 0% 30%)" strokeWidth="1.5" />
        <text x="668" y={y+5} textAnchor="middle" fill="hsl(0 0% 35%)"
          fontSize="9" fontFamily="monospace">PORT {i+2}</text>
      </g>
    ))}

    <text x="400" y="348" textAnchor="middle" fill="hsl(140 100% 55%)" fontSize="11" fontFamily="monospace">
      only the correct port receives the frame
    </text>
  </svg>
);

// visual: "switch-flood"
export const SwitchFloodIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Switch floods when MAC is unknown">
    <GridDefs id="grid-swflood" />
    <rect width="800" height="400" fill="url(#grid-swflood)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">UNKNOWN MAC → FLOOD</text>

    {/* Switch */}
    <rect x="310" y="165" width="180" height="70" rx="10"
      fill="hsl(220 30% 8%)" stroke="hsl(30 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="198" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">SWITCH</text>
    <text x="400" y="218" textAnchor="middle" fill="hsl(30 100% 50%)" fontSize="10"
      fontFamily="monospace">MAC unknown!</text>

    {/* Frame in from left */}
    <circle cx="120" cy="200" r="36" fill="hsl(220 30% 8%)" stroke="hsl(200 100% 60%)" strokeWidth="2" />
    <text x="120" y="204" textAnchor="middle" fill="hsl(200 100% 65%)" fontSize="9"
      fontFamily="monospace">SOURCE</text>
    <line x1="157" y1="200" x2="308" y2="200"
      stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="304,192 322,200 304,208" fill="hsl(30 100% 55%)" />

    {/* Flood to all other ports */}
    {[
      { cx: 660, cy: 100, label: "PORT 1" },
      { cx: 700, cy: 200, label: "PORT 2" },
      { cx: 660, cy: 300, label: "PORT 3" },
    ].map((port, i) => (
      <g key={i}>
        <line x1="492" y1="200" x2={port.cx - 32} y2={port.cy}
          stroke="hsl(30 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-18"
            dur="1s" begin={`${i*0.15}s`} repeatCount="indefinite" />
        </line>
        <circle cx={port.cx} cy={port.cy} r="32" fill="hsl(220 30% 8%)"
          stroke="hsl(30 100% 55%)" strokeWidth="1.8" />
        <text x={port.cx} y={port.cy+4} textAnchor="middle"
          fill="hsl(30 100% 65%)" fontSize="9" fontFamily="monospace">{port.label}</text>
      </g>
    ))}

    <text x="400" y="355" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="11" fontFamily="monospace">
      all ports receive it (except source) · destination will reveal itself
    </text>
  </svg>
);

// visual: "switch-learns"
export const SwitchLearnsIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Switch learns MAC addresses from incoming frames">
    <GridDefs id="grid-swlearns" />
    <rect width="800" height="400" fill="url(#grid-swlearns)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">LEARNING</text>

    {/* Frame arriving */}
    <rect x="40" y="148" width="180" height="64" rx="8"
      fill="hsl(220 30% 8%)" stroke="hsl(200 100% 55%)" strokeWidth="2" />
    <text x="130" y="176" textAnchor="middle" fill="hsl(0 80% 70%)" fontSize="10"
      fontFamily="monospace" fontWeight="bold">SRC: AA:BB:CC:…</text>
    <text x="130" y="196" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="9"
      fontFamily="monospace">from Port 3</text>

    <line x1="222" y1="180" x2="300" y2="180"
      stroke="hsl(200 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="296,172 314,180 296,188" fill="hsl(200 100% 55%)" />

    {/* Switch */}
    <rect x="312" y="145" width="176" height="70" rx="10"
      fill="hsl(220 30% 8%)" stroke="hsl(0 80% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="178" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">SWITCH</text>
    <text x="400" y="198" textAnchor="middle" fill="hsl(200 100% 55%)" fontSize="10"
      fontFamily="monospace">records SRC MAC</text>

    {/* Arrow to CAM table */}
    <line x1="400" y1="217" x2="400" y2="258"
      stroke="hsl(200 100% 55%)" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="392,254 400,272 408,254" fill="hsl(200 100% 55%)" />

    {/* CAM table update */}
    <rect x="240" y="272" width="320" height="80" rx="8"
      fill="hsl(220 30% 6%)" stroke="hsl(200 100% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="300" textAnchor="middle" fill="hsl(200 100% 65%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">CAM TABLE UPDATED</text>
    <text x="400" y="322" textAnchor="middle" fill="hsl(200 100% 50%)" fontSize="11"
      fontFamily="monospace">AA:BB:CC:… → Port 3 ✓</text>
    <text x="400" y="340" textAnchor="middle" fill="hsl(200 100% 35%)" fontSize="10"
      fontFamily="monospace">learned from SRC MAC</text>
  </svg>
);

// visual: "switch-efficient"
export const SwitchEfficientIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Switching is fast, efficient and private">
    <GridDefs id="grid-sweff" />
    <rect width="800" height="400" fill="url(#grid-sweff)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FAST · EFFICIENT · PRIVATE</text>

    {[
      { icon: "⚡", label: "FAST",      desc: "direct path · no delay",    color: "45  100% 60%", x: 100, y: 90  },
      { icon: "🎯", label: "EFFICIENT", desc: "only right port used",       color: "140 100% 55%", x: 330, y: 90  },
      { icon: "🔒", label: "PRIVATE",   desc: "others never see the frame", color: "200 100% 60%", x: 560, y: 90  },
    ].map((item, i) => (
      <g key={i}>
        <rect x={item.x} y={item.y} width="210" height="160" rx="12"
          fill={`hsl(${item.color} / 0.10)`} stroke={`hsl(${item.color})`} strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4"
            dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite" />
        </rect>
        <text x={item.x+105} y={item.y+52} textAnchor="middle" fontSize="32">{item.icon}</text>
        <text x={item.x+105} y={item.y+90} textAnchor="middle"
          fill={`hsl(${item.color})`} fontSize="16" fontFamily="monospace" fontWeight="bold">{item.label}</text>
        <line x1={item.x+30} y1={item.y+104} x2={item.x+180} y2={item.y+104}
          stroke={`hsl(${item.color} / 0.3)`} strokeWidth="1" />
        <text x={item.x+105} y={item.y+128} textAnchor="middle"
          fill={`hsl(${item.color} / 0.7)`} fontSize="10" fontFamily="monospace">{item.desc}</text>
      </g>
    ))}

    <rect x="200" y="300" width="400" height="50" rx="10"
      fill="hsl(140 100% 50% / 0.10)" stroke="hsl(140 100% 55%)" strokeWidth="1.8">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="331" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">only the intended device receives the frame</text>
  </svg>
);


// ════════════════════════════════════════════════════════════
// NETWORK ACCESS LAYER — Topic 4: Frames (11 scenes)
// ════════════════════════════════════════════════════════════

// visual: "frame-intro"
export const FrameIntroIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Introduction to the frame">
    <GridDefs id="grid-frmintro" />
    <rect width="800" height="400" fill="url(#grid-frmintro)" opacity="0.3" />

    {/* Glow */}
    {[160, 120, 80].map((r, i) => (
      <ellipse key={i} cx="400" cy="190" rx={r+60} ry={r*0.55}
        fill="none" stroke="hsl(0 80% 55%)" strokeWidth="1" opacity={0.12-i*0.03}>
        <animate attributeName="rx" values={`${r+60};${r+80};${r+60}`}
          dur={`${2.5+i*0.5}s`} repeatCount="indefinite" />
      </ellipse>
    ))}

    <rect x="160" y="120" width="480" height="140" rx="16"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 60%)" strokeWidth="3">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="183" textAnchor="middle" fill="hsl(0 80% 88%)" fontSize="30"
      fontFamily="monospace" fontWeight="bold" letterSpacing="6">FRAME</text>
    <text x="400" y="215" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="13"
      fontFamily="monospace">Network Access Layer · local delivery unit</text>
    <text x="400" y="238" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="11"
      fontFamily="monospace">wraps the IP packet · adds MAC addresses · error check</text>

    <text x="400" y="330" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      the last wrapper before your data hits the wire
    </text>
  </svg>
);

// visual: "frame-unit"
export const FrameUnitIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame is the unit of data at the Network Access Layer">
    <GridDefs id="grid-frmunit" />
    <rect width="800" height="400" fill="url(#grid-frmunit)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">UNIT OF DATA</text>

    {/* Layer comparison */}
    {[
      { layer: "APPLICATION",   unit: "Message",  color: "200 100% 55%", y: 80  },
      { layer: "TRANSPORT",     unit: "Segment",  color: "140 100% 50%", y: 155 },
      { layer: "INTERNET",      unit: "Packet",   color: "30  100% 55%", y: 230 },
      { layer: "NETWORK ACCESS",unit: "Frame",    color: "0   80% 55%",  y: 305 },
    ].map((row, i) => (
      <g key={i}>
        <rect x="100" y={row.y} width="260" height="56" rx="6"
          fill={`hsl(${row.color} / 0.10)`} stroke={`hsl(${row.color})`}
          strokeWidth={i === 3 ? "2.5" : "1.5"} opacity={i === 3 ? 1 : 0.5} />
        <text x="230" y={row.y+35} textAnchor="middle"
          fill={`hsl(${row.color})`} fontSize="13" fontFamily="monospace"
          fontWeight={i === 3 ? "bold" : "normal"}>{row.layer}</text>

        <rect x="460" y={row.y} width="240" height="56" rx="6"
          fill={`hsl(${row.color} / 0.15)`} stroke={`hsl(${row.color})`}
          strokeWidth={i === 3 ? "2.5" : "1.5"} opacity={i === 3 ? 1 : 0.5} />
        <text x="580" y={row.y+35} textAnchor="middle"
          fill={`hsl(${row.color})`} fontSize={i === 3 ? 18 : 14} fontFamily="monospace"
          fontWeight={i === 3 ? "bold" : "normal"}>{row.unit}</text>

        <line x1="362" y1={row.y+28} x2="458" y2={row.y+28}
          stroke={`hsl(${row.color} / 0.4)`} strokeWidth="1.5" />
        <polygon points={`454,${row.y+22} 470,${row.y+28} 454,${row.y+34}`}
          fill={`hsl(${row.color} / 0.4)`} />
      </g>
    ))}
  </svg>
);

// visual: "frame-envelope"
export const FrameEnvelopeIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame is like an envelope for the packet">
    <GridDefs id="grid-frmenv" />
    <rect width="800" height="400" fill="url(#grid-frmenv)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FRAME = ENVELOPE</text>

    {/* Envelope shape */}
    <rect x="140" y="100" width="520" height="220" rx="10"
      fill="hsl(0 80% 55% / 0.10)" stroke="hsl(0 80% 55%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    {/* Envelope flap */}
    <polyline points="140,100 400,220 660,100"
      fill="none" stroke="hsl(0 80% 55%)" strokeWidth="2" />

    {/* Address label */}
    <rect x="420" y="150" width="200" height="80" rx="6"
      fill="hsl(0 80% 55% / 0.20)" stroke="hsl(0 80% 55%)" strokeWidth="1.5" />
    <text x="520" y="178" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="10"
      fontFamily="monospace" fontWeight="bold">TO: 00:1A:2B:3C:4D:5E</text>
    <text x="520" y="198" textAnchor="middle" fill="hsl(0 80% 60%)" fontSize="10"
      fontFamily="monospace">FROM: AA:BB:CC:DD:EE:FF</text>
    <text x="520" y="218" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="9"
      fontFamily="monospace">TYPE: IPv4</text>

    {/* Packet inside */}
    <rect x="160" y="240" width="200" height="60" rx="8"
      fill="hsl(30 100% 55% / 0.15)" stroke="hsl(30 100% 55%)" strokeWidth="2" />
    <text x="260" y="268" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">IP PACKET</text>
    <text x="260" y="286" textAnchor="middle" fill="hsl(30 100% 50%)" fontSize="9"
      fontFamily="monospace">your data</text>

    <text x="400" y="365" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="11" fontFamily="monospace">
      just like a postal envelope · adds addressing for local delivery
    </text>
  </svg>
);

// visual: "frame-structure"
export const FrameStructureIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame structure — header, payload, trailer">
    <GridDefs id="grid-frmstruct" />
    <rect width="800" height="400" fill="url(#grid-frmstruct)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FRAME STRUCTURE</text>

    {/* Three parts */}
    {[
      { label: "HEADER",  width: 220, x: 60,  color: "0   80% 60%", desc: "addressing + type" },
      { label: "PAYLOAD", width: 280, x: 280, color: "30  100% 60%", desc: "IP packet (your data)" },
      { label: "TRAILER", width: 180, x: 560, color: "0   70% 55%", desc: "FCS error check" },
    ].map((part, i) => (
      <g key={i}>
        <rect x={part.x} y="120" width={part.width} height="120" rx="8"
          fill={`hsl(${part.color} / 0.14)`} stroke={`hsl(${part.color})`} strokeWidth="2.5">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4"
            dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite" />
        </rect>
        <text x={part.x + part.width/2} y="172" textAnchor="middle"
          fill={`hsl(${part.color})`} fontSize="16" fontFamily="monospace" fontWeight="bold">{part.label}</text>
        <text x={part.x + part.width/2} y="196" textAnchor="middle"
          fill={`hsl(${part.color} / 0.7)`} fontSize="10" fontFamily="monospace">{part.desc}</text>

        {/* Bit count */}
        <text x={part.x + part.width/2} y="224" textAnchor="middle"
          fill="hsl(0 0% 35%)" fontSize="9" fontFamily="monospace">
          {["14 bytes", "up to 1500 bytes", "4 bytes"][i]}
        </text>
      </g>
    ))}

    {/* Border over all */}
    <rect x="58" y="118" width="684" height="124" rx="10"
      fill="none" stroke="hsl(0 0% 30%)" strokeWidth="1.5" strokeDasharray="6 4" />

    <text x="400" y="300" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="12"
      fontFamily="monospace">header · payload · trailer</text>
    <text x="400" y="325" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="11"
      fontFamily="monospace">Ethernet II frame format</text>
  </svg>
);

// visual: "frame-header"
export const FrameHeaderIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame header contents">
    <GridDefs id="grid-frmhdr" />
    <rect width="800" height="400" fill="url(#grid-frmhdr)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FRAME HEADER</text>

    {/* Header box highlighted */}
    <rect x="100" y="80" width="600" height="90" rx="10"
      fill="hsl(0 80% 55% / 0.20)" stroke="hsl(0 80% 60%)" strokeWidth="3">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="132" textAnchor="middle" fill="hsl(0 80% 85%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">HEADER (14 bytes)</text>

    {/* Three fields */}
    {[
      { label: "DST MAC",   value: "00:1A:2B:3C:4D:5E", color: "0   80% 60%", bytes: "6 bytes", x: 130 },
      { label: "SRC MAC",   value: "AA:BB:CC:DD:EE:FF", color: "30  100% 60%", bytes: "6 bytes", x: 370 },
      { label: "ETHERTYPE", value: "0x0800 (IPv4)",      color: "200 100% 60%", bytes: "2 bytes", x: 600 },
    ].map((field, i) => (
      <g key={i}>
        <rect x={field.x} y="215" width="200" height="110" rx="8"
          fill={`hsl(${field.color} / 0.12)`} stroke={`hsl(${field.color})`} strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4"
            dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite" />
        </rect>
        {/* Connector line */}
        <line x1={field.x+100} y1="215" x2={field.x+100} y2="172"
          stroke={`hsl(${field.color} / 0.5)`} strokeWidth="1.5" strokeDasharray="4 3" />
        <text x={field.x+100} y="248" textAnchor="middle"
          fill={`hsl(${field.color})`} fontSize="12" fontFamily="monospace" fontWeight="bold">{field.label}</text>
        <text x={field.x+100} y="268" textAnchor="middle"
          fill={`hsl(${field.color} / 0.7)`} fontSize="9" fontFamily="monospace">{field.value}</text>
        <text x={field.x+100} y="294" textAnchor="middle"
          fill="hsl(0 0% 35%)" fontSize="9" fontFamily="monospace">{field.bytes}</text>
        <text x={field.x+100} y="314" textAnchor="middle"
          fill="hsl(0 0% 30%)" fontSize="9" fontFamily="monospace">
          {["destination", "source", "protocol"][i]}
        </text>
      </g>
    ))}
  </svg>
);

// visual: "frame-payload"
export const FramePayloadIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame payload is the IP packet">
    <GridDefs id="grid-frmpay" />
    <rect width="800" height="400" fill="url(#grid-frmpay)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(30 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FRAME PAYLOAD</text>

    {/* Full frame with payload highlighted */}
    <rect x="80" y="90" width="640" height="220" rx="10"
      fill="hsl(220 30% 6%)" stroke="hsl(0 0% 25%)" strokeWidth="1.5" />

    {/* Header dim */}
    <rect x="96" y="100" width="140" height="60" rx="6"
      fill="hsl(0 80% 55% / 0.08)" stroke="hsl(0 80% 55% / 0.3)" strokeWidth="1" opacity="0.4" />
    <text x="166" y="134" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="11"
      fontFamily="monospace">HEADER</text>

    {/* Payload highlighted */}
    <rect x="236" y="100" width="368" height="180" rx="8"
      fill="hsl(30 100% 55% / 0.18)" stroke="hsl(30 100% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="420" y="150" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="16"
      fontFamily="monospace" fontWeight="bold">PAYLOAD</text>
    <text x="420" y="178" textAnchor="middle" fill="hsl(30 100% 60%)" fontSize="12"
      fontFamily="monospace">IP PACKET</text>
    <text x="420" y="200" textAnchor="middle" fill="hsl(30 100% 45%)" fontSize="11"
      fontFamily="monospace">SRC IP · DST IP · SEGMENT</text>
    <text x="420" y="222" textAnchor="middle" fill="hsl(140 100% 45%)" fontSize="10"
      fontFamily="monospace">[ your actual data ]</text>
    <text x="420" y="260" textAnchor="middle" fill="hsl(0 0% 35%)" fontSize="9"
      fontFamily="monospace">46 – 1500 bytes</text>

    {/* Trailer dim */}
    <rect x="604" y="100" width="100" height="60" rx="6"
      fill="hsl(0 70% 50% / 0.08)" stroke="hsl(0 70% 50% / 0.3)" strokeWidth="1" opacity="0.4" />
    <text x="654" y="134" textAnchor="middle" fill="hsl(0 70% 40%)" fontSize="11"
      fontFamily="monospace">TRAILER</text>

    <text x="400" y="355" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="11" fontFamily="monospace">
      the payload carries the complete IP packet from layer 3
    </text>
  </svg>
);

// visual: "frame-trailer"
export const FrameTrailerIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame trailer — FCS error detection">
    <GridDefs id="grid-frmtrailer" />
    <rect width="800" height="400" fill="url(#grid-frmtrailer)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 70% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FRAME TRAILER · FCS</text>

    {/* Full frame with trailer highlighted */}
    <rect x="80" y="90" width="640" height="130" rx="10"
      fill="hsl(220 30% 6%)" stroke="hsl(0 0% 25%)" strokeWidth="1.5" />

    {/* Header dim */}
    <rect x="96" y="104" width="140" height="102" rx="6"
      fill="hsl(0 80% 55% / 0.06)" stroke="hsl(0 80% 55% / 0.25)" strokeWidth="1" opacity="0.4" />
    <text x="166" y="159" textAnchor="middle" fill="hsl(0 80% 40%)" fontSize="11" fontFamily="monospace">HEADER</text>

    {/* Payload dim */}
    <rect x="236" y="104" width="340" height="102" rx="6"
      fill="hsl(30 100% 55% / 0.06)" stroke="hsl(30 100% 55% / 0.25)" strokeWidth="1" opacity="0.4" />
    <text x="406" y="159" textAnchor="middle" fill="hsl(30 100% 40%)" fontSize="11" fontFamily="monospace">PAYLOAD</text>

    {/* Trailer highlighted */}
    <rect x="576" y="104" width="128" height="102" rx="6"
      fill="hsl(0 70% 55% / 0.20)" stroke="hsl(0 70% 60%)" strokeWidth="2.5">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="640" y="148" textAnchor="middle" fill="hsl(0 70% 80%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">FCS</text>
    <text x="640" y="168" textAnchor="middle" fill="hsl(0 70% 55%)" fontSize="10"
      fontFamily="monospace">4 bytes</text>
    <text x="640" y="186" textAnchor="middle" fill="hsl(0 70% 40%)" fontSize="9"
      fontFamily="monospace">checksum</text>

    {/* FCS explanation */}
    <rect x="160" y="264" width="480" height="80" rx="10"
      fill="hsl(0 70% 55% / 0.10)" stroke="hsl(0 70% 55%)" strokeWidth="1.8" />
    <text x="400" y="292" textAnchor="middle" fill="hsl(0 70% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">FCS = Frame Check Sequence</text>
    <text x="400" y="314" textAnchor="middle" fill="hsl(0 70% 55%)" fontSize="11"
      fontFamily="monospace">CRC checksum computed on the full frame</text>
    <text x="400" y="332" textAnchor="middle" fill="hsl(0 70% 40%)" fontSize="10"
      fontFamily="monospace">receiver recomputes · if mismatch → frame discarded</text>
  </svg>
);

// visual: "frame-check"
export const FrameCheckIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Receiver checks FCS for errors">
    <GridDefs id="grid-frmcheck" />
    <rect width="800" height="400" fill="url(#grid-frmcheck)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 70% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FCS CHECK</text>

    {/* Good path */}
    <g transform="translate(0, 0)">
      <rect x="40" y="100" width="200" height="80" rx="8"
        fill="hsl(140 100% 50% / 0.12)" stroke="hsl(140 100% 55%)" strokeWidth="2" />
      <text x="140" y="136" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="12"
        fontFamily="monospace" fontWeight="bold">GOOD FRAME</text>
      <text x="140" y="155" textAnchor="middle" fill="hsl(140 100% 50%)" fontSize="10"
        fontFamily="monospace">FCS: 0xA4B2C3D1</text>

      <line x1="242" y1="140" x2="330" y2="140"
        stroke="hsl(140 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
      </line>
      <polygon points="326,132 344,140 326,148" fill="hsl(140 100% 55%)" />

      {/* Receiver computes */}
      <rect x="340" y="110" width="140" height="60" rx="8"
        fill="hsl(220 30% 8%)" stroke="hsl(0 80% 55%)" strokeWidth="2" />
      <text x="410" y="138" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="10"
        fontFamily="monospace">compute FCS</text>
      <text x="410" y="156" textAnchor="middle" fill="hsl(0 80% 50%)" fontSize="9"
        fontFamily="monospace">0xA4B2C3D1 ✓</text>

      <line x1="482" y1="140" x2="560" y2="140"
        stroke="hsl(140 100% 55%)" strokeWidth="2" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
      </line>
      <polygon points="556,132 574,140 556,148" fill="hsl(140 100% 55%)" />

      <rect x="570" y="110" width="120" height="60" rx="8"
        fill="hsl(140 100% 50% / 0.15)" stroke="hsl(140 100% 55%)" strokeWidth="2" />
      <text x="630" y="145" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="13"
        fontFamily="monospace" fontWeight="bold">ACCEPT ✓</text>
    </g>

    {/* Bad path */}
    <g transform="translate(0, 140)">
      <rect x="40" y="100" width="200" height="80" rx="8"
        fill="hsl(0 70% 50% / 0.12)" stroke="hsl(0 70% 55%)" strokeWidth="2" />
      <text x="140" y="136" textAnchor="middle" fill="hsl(0 70% 75%)" fontSize="12"
        fontFamily="monospace" fontWeight="bold">BAD FRAME</text>
      <text x="140" y="155" textAnchor="middle" fill="hsl(0 70% 50%)" fontSize="10"
        fontFamily="monospace">FCS: 0xA4B2C3D1</text>

      <line x1="242" y1="140" x2="330" y2="140"
        stroke="hsl(0 70% 55%)" strokeWidth="2" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
      </line>
      <polygon points="326,132 344,140 326,148" fill="hsl(0 70% 55%)" />

      <rect x="340" y="110" width="140" height="60" rx="8"
        fill="hsl(220 30% 8%)" stroke="hsl(0 80% 55%)" strokeWidth="2" />
      <text x="410" y="138" textAnchor="middle" fill="hsl(0 80% 65%)" fontSize="10"
        fontFamily="monospace">compute FCS</text>
      <text x="410" y="156" textAnchor="middle" fill="hsl(0 70% 55%)" fontSize="9"
        fontFamily="monospace">0xFFFF1234 ✗</text>

      <line x1="482" y1="140" x2="560" y2="140"
        stroke="hsl(0 70% 55%)" strokeWidth="2" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
      </line>
      <polygon points="556,132 574,140 556,148" fill="hsl(0 70% 55%)" />

      <rect x="570" y="110" width="120" height="60" rx="8"
        fill="hsl(0 70% 50% / 0.15)" stroke="hsl(0 70% 55%)" strokeWidth="2" />
      <text x="630" y="145" textAnchor="middle" fill="hsl(0 70% 75%)" fontSize="12"
        fontFamily="monospace" fontWeight="bold">DISCARD ✗</text>
    </g>
  </svg>
);

// visual: "frame-complete"
export const FrameCompleteIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame is complete with all parts">
    <GridDefs id="grid-frmcomplete" />
    <rect width="800" height="400" fill="url(#grid-frmcomplete)" opacity="0.3" />

    {/* Glow */}
    <circle cx="400" cy="185" r="150" fill="hsl(140 100% 50% / 0.06)">
      <animate attributeName="r" values="140;165;140" dur="3s" repeatCount="indefinite" />
    </circle>

    <text x="400" y="46" textAnchor="middle" fill="hsl(140 100% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FRAME COMPLETE</text>

    {/* Full frame */}
    <rect x="60" y="80" width="680" height="220" rx="12"
      fill="hsl(220 30% 8%)" stroke="hsl(140 100% 60%)" strokeWidth="3">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>

    {/* Header */}
    <rect x="76" y="96" width="170" height="188" rx="8"
      fill="hsl(0 80% 55% / 0.18)" stroke="hsl(0 80% 55%)" strokeWidth="2" />
    <text x="161" y="170" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">HEADER</text>
    <text x="161" y="192" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="9"
      fontFamily="monospace">DST MAC</text>
    <text x="161" y="208" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="9"
      fontFamily="monospace">SRC MAC</text>
    <text x="161" y="224" textAnchor="middle" fill="hsl(0 80% 45%)" fontSize="9"
      fontFamily="monospace">TYPE</text>

    {/* Payload */}
    <rect x="246" y="96" width="340" height="188" rx="8"
      fill="hsl(30 100% 55% / 0.15)" stroke="hsl(30 100% 55%)" strokeWidth="2" />
    <text x="416" y="170" textAnchor="middle" fill="hsl(30 100% 80%)" fontSize="14"
      fontFamily="monospace" fontWeight="bold">PAYLOAD</text>
    <text x="416" y="192" textAnchor="middle" fill="hsl(30 100% 55%)" fontSize="11"
      fontFamily="monospace">IP PACKET</text>
    <text x="416" y="212" textAnchor="middle" fill="hsl(140 100% 45%)" fontSize="9"
      fontFamily="monospace">[ segment · data ]</text>

    {/* Trailer */}
    <rect x="586" y="96" width="138" height="188" rx="8"
      fill="hsl(0 70% 55% / 0.15)" stroke="hsl(0 70% 55%)" strokeWidth="2" />
    <text x="655" y="170" textAnchor="middle" fill="hsl(0 70% 80%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">TRAILER</text>
    <text x="655" y="192" textAnchor="middle" fill="hsl(0 70% 55%)" fontSize="9"
      fontFamily="monospace">FCS</text>
    <text x="655" y="208" textAnchor="middle" fill="hsl(0 70% 40%)" fontSize="9"
      fontFamily="monospace">error check</text>

    {/* Big checkmark */}
    <g transform="translate(680, 68)">
      <circle r="22" fill="hsl(140 100% 50%)" stroke="hsl(140 100% 80%)" strokeWidth="2" />
      <path d="M -10 0 L -3 8 L 12 -8" stroke="hsl(220 30% 5%)" strokeWidth="3.5"
        fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <text x="400" y="348" textAnchor="middle" fill="hsl(140 100% 65%)" fontSize="13"
      fontFamily="monospace" fontWeight="bold">source · destination · payload · error detection ✓</text>
  </svg>
);

// visual: "frame-to-signal"
export const FrameToSignalIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Frame converted to electrical signals or radio waves">
    <GridDefs id="grid-frm2sig" />
    <rect width="800" height="400" fill="url(#grid-frm2sig)" opacity="0.3" />

    <text x="400" y="46" textAnchor="middle" fill="hsl(0 80% 75%)" fontSize="14"
      fontFamily="monospace" letterSpacing="3">FRAME → SIGNALS</text>

    {/* Frame box */}
    <rect x="80" y="130" width="200" height="100" rx="10"
      fill="hsl(0 80% 55% / 0.15)" stroke="hsl(0 80% 55%)" strokeWidth="2">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="180" y="183" textAnchor="middle" fill="hsl(0 80% 80%)" fontSize="16"
      fontFamily="monospace" fontWeight="bold">FRAME</text>
    <text x="180" y="203" textAnchor="middle" fill="hsl(0 80% 55%)" fontSize="10"
      fontFamily="monospace">bits: 010110…</text>

    {/* Arrow */}
    <line x1="282" y1="180" x2="338" y2="180"
      stroke="hsl(0 0% 40%)" strokeWidth="2.5" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
    </line>
    <polygon points="334,172 352,180 334,188" fill="hsl(0 0% 40%)" />
    <text x="312" y="165" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="10"
      fontFamily="monospace">NIC</text>

    {/* Three signal types */}
    {/* Electrical */}
    <g transform="translate(356, 80)">
      <rect width="140" height="80" rx="8"
        fill="hsl(45 100% 55% / 0.12)" stroke="hsl(45 100% 55%)" strokeWidth="2" />
      <text x="70" y="36" textAnchor="middle" fill="hsl(45 100% 75%)" fontSize="22">⚡</text>
      <text x="70" y="58" textAnchor="middle" fill="hsl(45 100% 65%)" fontSize="11"
        fontFamily="monospace" fontWeight="bold">ELECTRICAL</text>
      <text x="70" y="74" textAnchor="middle" fill="hsl(45 100% 45%)" fontSize="9"
        fontFamily="monospace">copper cable</text>
      {/* Signal wave */}
      <polyline points="10,96 30,96 30,108 50,108 50,96 70,96 70,108 90,108 90,96 110,96 110,108 130,108 130,96"
        fill="none" stroke="hsl(45 100% 55%)" strokeWidth="2" />
    </g>

    {/* Radio */}
    <g transform="translate(356, 200)">
      <rect width="140" height="80" rx="8"
        fill="hsl(200 100% 55% / 0.12)" stroke="hsl(200 100% 55%)" strokeWidth="2" />
      <text x="70" y="36" textAnchor="middle" fill="hsl(200 100% 75%)" fontSize="22">📡</text>
      <text x="70" y="58" textAnchor="middle" fill="hsl(200 100% 65%)" fontSize="11"
        fontFamily="monospace" fontWeight="bold">RADIO</text>
      <text x="70" y="74" textAnchor="middle" fill="hsl(200 100% 45%)" fontSize="9"
        fontFamily="monospace">wireless / WiFi</text>
    </g>

    {/* Optical */}
    <g transform="translate(530, 80)">
      <rect width="140" height="80" rx="8"
        fill="hsl(60 100% 55% / 0.12)" stroke="hsl(60 100% 55%)" strokeWidth="2" />
      <text x="70" y="36" textAnchor="middle" fill="hsl(60 100% 75%)" fontSize="22">💡</text>
      <text x="70" y="58" textAnchor="middle" fill="hsl(60 100% 65%)" fontSize="11"
        fontFamily="monospace" fontWeight="bold">OPTICAL</text>
      <text x="70" y="74" textAnchor="middle" fill="hsl(60 100% 45%)" fontSize="9"
        fontFamily="monospace">fiber optic</text>
    </g>

    {/* Fork lines */}
    <line x1="352" y1="180" x2="352" y2="120" stroke="hsl(0 0% 30%)" strokeWidth="1.5" />
    <line x1="352" y1="120" x2="356" y2="120" stroke="hsl(45 100% 55%)" strokeWidth="1.5" />
    <line x1="352" y1="240" x2="356" y2="240" stroke="hsl(200 100% 55%)" strokeWidth="1.5" />
    <line x1="352" y1="180" x2="530" y2="120" stroke="hsl(60 100% 55%)" strokeWidth="1.5" />

    <text x="400" y="360" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="11" fontFamily="monospace">
      bits become physical signals · traveling through the medium
    </text>
  </svg>
);

// visual: "journey-complete"
export const JourneyCompleteIllustration = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto" role="img" aria-label="Journey complete — all four layers traversed">
    <GridDefs id="grid-journeycomplete" />
    <rect width="800" height="400" fill="url(#grid-journeycomplete)" opacity="0.3" />

    {/* Radiating glow */}
    {[200, 160, 120, 80].map((r, i) => (
      <circle key={i} cx="400" cy="185" r={r}
        fill="none" stroke="hsl(140 100% 50%)" strokeWidth="1.5" opacity={0.10-i*0.02}>
        <animate attributeName="r" values={`${r};${r+20};${r}`}
          dur={`${2+i*0.5}s`} repeatCount="indefinite" />
      </circle>
    ))}

    {/* 4 layer badges with checkmarks */}
    {[
      { name: "APPLICATION",    color: "200 100% 55%", x: 80,  y: 80  },
      { name: "TRANSPORT",      color: "140 100% 50%", x: 460, y: 80  },
      { name: "INTERNET",       color: "30  100% 55%", x: 80,  y: 230 },
      { name: "NETWORK ACCESS", color: "0   80% 55%",  x: 460, y: 230 },
    ].map((layer, i) => (
      <g key={i}>
        <rect x={layer.x} y={layer.y} width="240" height="110" rx="10"
          fill={`hsl(${layer.color} / 0.12)`} stroke={`hsl(${layer.color})`} strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.4;1;0.4"
            dur="2s" begin={`${i*0.4}s`} repeatCount="indefinite" />
        </rect>
        <text x={layer.x+120} y={layer.y+50} textAnchor="middle"
          fill={`hsl(${layer.color})`} fontSize="12" fontFamily="monospace" fontWeight="bold">{layer.name}</text>
        <text x={layer.x+120} y={layer.y+78} textAnchor="middle"
          fill={`hsl(${layer.color})`} fontSize="28" fontFamily="monospace">✓</text>
      </g>
    ))}

    {/* Central badge */}
    <rect x="288" y="158" width="224" height="54" rx="27"
      fill="hsl(140 100% 50% / 0.20)" stroke="hsl(140 100% 60%)" strokeWidth="3">
      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
    </rect>
    <text x="400" y="190" textAnchor="middle" fill="hsl(140 100% 85%)" fontSize="16"
      fontFamily="monospace" fontWeight="bold" letterSpacing="3">DELIVERED ✓</text>

    <text x="400" y="375" textAnchor="middle" fill="hsl(140 100% 60%)" fontSize="12"
      fontFamily="monospace" fontWeight="bold">congratulations · your message reached the server</text>
  </svg>
);

