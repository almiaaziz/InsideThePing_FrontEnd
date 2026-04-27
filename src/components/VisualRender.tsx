const visualsMap = {
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
};

const VisualRenderer = ({ visual }) => {
  const src = visualsMap[visual];

  if (!src) {
    return <div className="text-muted-foreground">[visual]</div>;
  }

  return (
    <img
      src={src}
      alt={visual}
      className="w-full max-w-3xl max-h-[400px] object-contain"
    />
  );
};

export default VisualRenderer;
