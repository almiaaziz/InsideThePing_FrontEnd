import React from "react";

type BackgroundVideoProps = {
  src: string;
  overlay?: boolean;
};

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, overlay = true }) => {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {overlay && <div className="video-overlay"></div>}
    </div>
  );
};

export default BackgroundVideo;