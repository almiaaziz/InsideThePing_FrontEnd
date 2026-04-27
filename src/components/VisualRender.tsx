import SceneIllustration, { hasSceneIllustration } from "./SceneIllustration";

// 🖼️ Static PNG fallback map. New illustrations should ideally be added as
// code in SceneIllustration.tsx. This map remains so the existing AI-generated
// PNGs keep working without changes.
const visualsMap: Record<string, string> = {
  "welcome-packet": "/assets/images/welcome-packet.png",
  "pc-to-server": "/assets/images/pc-to-server.png",
  "layer-stack": "/assets/images/layer-stack.png",
  "data-transform": "/assets/images/data-transform.png",
  "highlight-application": "/assets/images/highlight-application.png",
  "focus-protocol": "/assets/images/focus-protocol.png",
  "rules": "/assets/images/rules.png",
  "protocol-purpose": "/assets/images/protocol-purpose.png",
  "http-web": "/assets/images/http-web.png",
  "ftp-transfer": "/assets/images/ftp-transfer.png",
  "smtp-email": "/assets/images/smtp-email.png",
  "think-purpose": "/assets/images/think-purpose.png",
  "decision": "/assets/images/decision.png",

  // Transport Layer — Segmentation
  "split-segments": "/assets/images/split-segments.png",

  // Transport Layer — Three-Way Handshake
  "handshake-steps": "/assets/images/handshake-steps.png",
};

const VisualRenderer = ({ visual }: { visual: string }) => {
  // 1. Prefer a code-based animated illustration when available.
  if (hasSceneIllustration(visual)) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <SceneIllustration visual={visual} />
      </div>
    );
  }

  // 2. Fall back to a static PNG if one is registered.
  const src = visualsMap[visual];
  if (src) {
    return (
      <img
        src={src}
        alt={visual}
        className="w-full max-w-3xl max-h-[400px] object-contain"
      />
    );
  }

  // 3. Otherwise show a tiny placeholder so the layout doesn't collapse.
  return <div className="text-muted-foreground">[visual]</div>;
};

export default VisualRenderer;
