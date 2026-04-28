// 🎨 Code-based scene illustrations.
//
// All illustrations are pure inline SVG (no PNGs), animated with native SMIL.
// Each illustration is registered by the same `visual` key used in
// src/game/data.js and rendered by VisualRender.tsx.
//
// To add a new illustration:
//   1. Build a small component below that returns an <svg /> (viewBox 0 0 800 400).
//   2. Register it in the `registry` map at the bottom under the matching
//      `visual` key from data.js.

import type { JSX } from "react";
import {
  LayerStackIllustration,
  PcToServerIllustration,
  DataTransformIllustration,
  PauseFocusIllustration,
  QuestionDestinationIllustration,
  ClientServerIntroIllustration,
  ClientServerIllustration,
  ClientRequestIllustration,
  ServerResponseIllustration,
  ClientServerExampleIllustration,
  RequestFlowIllustration,
  CycleIllustration,
  ToTransportIllustration,
  ClientReadyIllustration,
  ServerConfusedIllustration,
  InvalidCommunicationIllustration,
  RulesIllustration,
  ProtocolPurposeIllustration,
  HttpWebIllustration,
  FtpTransferIllustration,
  SmtpEmailIllustration,
  RawDataIllustration,
  StructureBuildIllustration,
  HttpOverviewIllustration,
  MethodIllustration,
  HeadersIllustration,
  BodyIllustration,
  ValidRequestIllustration,
  MessageCompleteIllustration,
  RecapIllustration,
  SendButtonIllustration,
  DescendLayerIllustration,
  ComputerConfusedIllustration,
  InvalidRequestIllustration,
} from "./layersSI/ApplicationLayerIllustrations";

import {
  MultipleServicesIllustration,
  DoorsIllustration,
  PortMappingIllustration,
  Port80Illustration,
  Port21Illustration,
  BigMessageIllustration,
  SplitSegmentsIllustration,
  SequenceNumbersIllustration,
  OutOfOrderIllustration,
  ReassembleIllustration,
  WhySegmentIllustration,
  TcpUdpIllustration,
  TcpReliableIllustration,
  TcpRetransmitIllustration,
  TcpUsecasesIllustration,
  UdpFastIllustration,
  UdpLossyIllustration,
  UdpUsecasesIllustration,
  ChooseProtocolIllustration,
  HandshakeIntroIllustration,
  HandshakeStepsIllustration,
  SynIllustration,
  SynAckIllustration,
  AckIllustration,
  ConnectionOpenIllustration,
  NoHandshakeIllustration,
  CorrectDoorIllustration,
} from "./layersSI/TransportLayerIllustrations";

import {
  SegmentReadyIllustration,
  WelcomeInternetIllustration,
  PostalSystemIllustration,
  SegmentToPacketIllustration,
  RoutingOverviewIllustration,
  DevicesIpIllustration,
  IpLocationIllustration,
  Ipv4FormatIllustration,
  Ipv4StructureIllustration,
  BinaryOctetIllustration,
  BinaryExampleIllustration,
  BinaryPurposeIllustration,
  NetworkVsHostIllustration,
  SubnetIntroIllustration,
  SubnetFormatIllustration,
  SubnetNetworkPartIllustration,
  SubnetHostPartIllustration,
  SubnetExampleIllustration,
  LocalOrRemoteIllustration,
  RoutingDecisionIllustration,
  SameOrDifferentIllustration,
  LocalDeliveryIllustration,
  GatewayNeededIllustration,
  RouterGatewayIllustration,
  RoutingTablePreviewIllustration,
  HopByHopIllustration,
} from "./layersSI/InternetLayerIllustrations"; 
// ────────────────────────────────────────────────────────────
// Shared bits
// ────────────────────────────────────────────────────────────

export const GridDefs = ({ id }: { id: string }) => (
  <defs>
    <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
      <path
        d="M 40 0 L 0 0 0 40"
        fill="none"
        stroke="hsl(220 30% 25%)"
        strokeWidth="0.5"
      />
    </pattern>
  </defs>
);

const PacketIllustration = ({ image }: { image: string }) => (
  <svg
    viewBox="0 0 800 400"
    className="w-full h-auto"
    role="img"
    aria-label="PACKET — your guide through the network"
  >
    <defs>
      {/* grid */}
      <pattern
        id="grid-welcome"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="hsl(220 30% 25%)"
          strokeWidth="0.5"
        />
      </pattern>

      {/* golden radial glow behind PACKET */}
      <radialGradient id="packetGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(45 100% 60%)" stopOpacity="0.55" />
        <stop offset="60%" stopColor="hsl(45 100% 50%)" stopOpacity="0.18" />
        <stop offset="100%" stopColor="hsl(45 100% 40%)" stopOpacity="0" />
      </radialGradient>

      {/* soft vignette mask so edges fade into dark */}
      <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
        <stop offset="55%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <mask id="vignetteMask">
        <rect width="800" height="400" fill="url(#vignette)" />
      </mask>
    </defs>

    {/* ── animated golden aura ── */}
    {[130, 105, 80].map((r, i) => (
      <ellipse
        key={i}
        cx="400"
        cy="205"
        rx={r}
        ry={r * 0.85}
        fill="url(#packetGlow)"
        opacity={0.7 - i * 0.15}
      >
        <animate
          attributeName="rx"
          values={`${r};${r + 14};${r}`}
          dur={`${2.5 + i * 0.6}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="ry"
          values={`${r * 0.85};${(r + 14) * 0.85};${r * 0.85}`}
          dur={`${2.5 + i * 0.6}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values={`${0.7 - i * 0.15};${0.35 - i * 0.08};${0.7 - i * 0.15}`}
          dur={`${2.5 + i * 0.6}s`}
          repeatCount="indefinite"
        />
      </ellipse>
    ))}

    {/* ── floating sparkles ── */}
    {[
      { cx: 280, cy: 130, r: 3, dur: "2.1s", begin: "0s" },
      { cx: 520, cy: 115, r: 2, dur: "1.8s", begin: "0.4s" },
      { cx: 310, cy: 290, r: 2, dur: "2.4s", begin: "0.8s" },
      { cx: 500, cy: 285, r: 3, dur: "1.9s", begin: "1.2s" },
      { cx: 240, cy: 210, r: 2, dur: "2.2s", begin: "0.6s" },
      { cx: 555, cy: 200, r: 2, dur: "2.0s", begin: "1.0s" },
    ].map((s, i) => (
      <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="hsl(45 100% 75%)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur={s.dur}
          begin={s.begin}
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values={`${s.r};${s.r + 2};${s.r}`}
          dur={s.dur}
          begin={s.begin}
          repeatCount="indefinite"
        />
      </circle>
    ))}

    {/* ── PACKET PNG — gentle bob animation ── */}
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0 0; 0 -8; 0 0"
        dur="3s"
        repeatCount="indefinite"
      />
      <image
        href={image}
        x="288"
        y="60"
        width="224"
        height="280"
        preserveAspectRatio="xMidYMid meet"
        mask="url(#vignetteMask)"
      />
    </g>
  </svg>
);
const HighlightLayerIllustration = ({ highlightedId }) => {
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
            y={i > highlightedId ? layer.y + 20 : layer.y}
            width="400"
            height={highlightedId === i ? 80 : 60}
            rx="6"
            fill={
              highlightedId === i
                ? `hsl(${layer.color} / 0.12)`
                : `hsl(0 0% 60% / 0.12)`
            }
            stroke={
              highlightedId === i ? `hsl(${layer.color})` : `hsl(0 0% 50%)`
            }
            strokeWidth="1.5"
          />

          <text
            x="400"
            y={i > highlightedId ? layer.y + 58 : layer.y + 38}
            textAnchor="middle"
            fill={highlightedId === i ? `hsl(${layer.color})` : `hsl(0 0% 40%)`}
            fontSize="16"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="2"
          >
            {layer.name}
          </text>
        </g>
      ))}
    </svg>
  );
};
// ════════════════════════════════════════════════════════════
// Registry — `visual` key → React illustration component
// ════════════════════════════════════════════════════════════

const registry: Record<string, () => JSX.Element> = {
  // Packet
  "packet_v1": () =>
    PacketIllustration({ image: "/public/assets/images/packet_v1.png" }),
  "packet_v2": () =>
    PacketIllustration({ image: "/public/assets/images/packet_v2.png" }),
  "packet_v3": () =>
    PacketIllustration({ image: "/public/assets/images/packet_v3.png" }),
  "packet_v4": () =>
    PacketIllustration({ image: "/public/assets/images/packet_v4.png" }),
  // Application Layer — Intro

  "layer-stack": LayerStackIllustration,
  "pc-to-server": PcToServerIllustration,
  "data-transform": DataTransformIllustration,
  "highlight-application": () =>
    HighlightLayerIllustration({ highlightedId: 0 }),
  "pause-focus": PauseFocusIllustration,
  "question-destination": QuestionDestinationIllustration,
  "client-server-intro": ClientServerIntroIllustration,

  // Application Layer — Topic 1: Client-Server
  "client-server": ClientServerIllustration,
  "client-request": ClientRequestIllustration,
  "server-response": ServerResponseIllustration,
  "client-server-example": ClientServerExampleIllustration,
  "request-flow": RequestFlowIllustration,
  "cycle": CycleIllustration,
  "to-transport": ToTransportIllustration,
  "client-ready": ClientReadyIllustration,
  "server-confused": ServerConfusedIllustration,
  "invalid-communication": InvalidCommunicationIllustration,
  "decision": () =>
    PacketIllustration({ image: "/public/assets/images/decision.png" }),

  // Application Layer — Topic 2: Protocols
  "rules": RulesIllustration,
  "protocol-purpose": ProtocolPurposeIllustration,
  "http-web": HttpWebIllustration,
  "ftp-transfer": FtpTransferIllustration,
  "smtp-email": SmtpEmailIllustration,

  // Application Layer — Topic 3: Message Structure
  "raw-data": RawDataIllustration,
  "computer-confused": ComputerConfusedIllustration,
  "structure-build": StructureBuildIllustration,
  "http-overview": HttpOverviewIllustration,
  "method": MethodIllustration,
  "headers": HeadersIllustration,
  "body": BodyIllustration,
  "invalid-request": InvalidRequestIllustration,
  "valid-request": ValidRequestIllustration,
  "message-complete": MessageCompleteIllustration,
  "recap": RecapIllustration,
  "send-button": SendButtonIllustration,
  "descend-layer": DescendLayerIllustration,

  //Transport Layer — Intro
  "highlight-transport": () => HighlightLayerIllustration({ highlightedId: 1 }),

  // Transport › Ports
  "multiple-services": MultipleServicesIllustration,
  "doors": DoorsIllustration,
  "port-mapping": PortMappingIllustration,
  "port-80": Port80Illustration,
  "port-21": Port21Illustration,
  "correct-door": CorrectDoorIllustration,

  // Transport › Segmentation
  "big-message": BigMessageIllustration,
  "split-segments": SplitSegmentsIllustration,
  "sequence-numbers": SequenceNumbersIllustration,
  "out-of-order": OutOfOrderIllustration,
  "reassemble": ReassembleIllustration,
  "why-segment": WhySegmentIllustration,

  // Transport › TCP vs UDP
  "tcp-udp": TcpUdpIllustration,
  "tcp-reliable": TcpReliableIllustration,
  "tcp-retransmit": TcpRetransmitIllustration,
  "tcp-usecases": TcpUsecasesIllustration,
  "udp-fast": UdpFastIllustration,
  "udp-lossy": UdpLossyIllustration,
  "udp-usecases": UdpUsecasesIllustration,
  "choose-protocol": ChooseProtocolIllustration,

  // Transport › Three-Way Handshake
  "handshake-intro": HandshakeIntroIllustration,
  "handshake-steps": HandshakeStepsIllustration,
  syn: SynIllustration,
  "syn-ack": SynAckIllustration,
  ack: AckIllustration,
  "connection-open": ConnectionOpenIllustration,
  "no-handshake": NoHandshakeIllustration,

    // Internet Layer — Intro
  "segment-ready":    SegmentReadyIllustration,
    "highlight-internet": () => HighlightLayerIllustration({ highlightedId: 2 }),

  "welcome-internet": WelcomeInternetIllustration,
  "postal-system":    PostalSystemIllustration,
  "segment-to-packet":SegmentToPacketIllustration,
  "routing-overview": RoutingOverviewIllustration,

  // Internet Layer — Topic 1: IP Addressing
  "devices-ip":      DevicesIpIllustration,
  "ip-location":     IpLocationIllustration,
  "ipv4-format":     Ipv4FormatIllustration,
  "ipv4-structure":  Ipv4StructureIllustration,
  "binary-octet":    BinaryOctetIllustration,
  "binary-example":  BinaryExampleIllustration,
  "binary-purpose":  BinaryPurposeIllustration,

  // Internet Layer — Topic 2: Subnet Mask
  "network-vs-host":      NetworkVsHostIllustration,
  "subnet-intro":         SubnetIntroIllustration,
  "subnet-format":        SubnetFormatIllustration,
  "subnet-network-part":  SubnetNetworkPartIllustration,
  "subnet-host-part":     SubnetHostPartIllustration,
  "subnet-example":       SubnetExampleIllustration,
  "local-or-remote":      LocalOrRemoteIllustration,

  // Internet Layer — Topic 3: Routing Decision
  "routing-decision":         RoutingDecisionIllustration,
  "same-or-different":        SameOrDifferentIllustration,
  "local-delivery":           LocalDeliveryIllustration,
  "gateway-needed":           GatewayNeededIllustration,
  "router-gateway":           RouterGatewayIllustration,
  "routing-table-preview":    RoutingTablePreviewIllustration,
  "hop-by-hop":               HopByHopIllustration
};

export const hasSceneIllustration = (visual: string): boolean =>
  visual in registry;

const SceneIllustration = ({ visual }: { visual: string }) => {
  const Component = registry[visual];
  if (!Component) return null;
  return <Component />;
};

export default SceneIllustration;
