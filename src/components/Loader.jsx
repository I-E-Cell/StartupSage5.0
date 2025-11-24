import React, { useRef, useEffect } from "react";
import loaderVideo from "/assets/videos/Super.mp4";

const Loader = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full object-contain"
        //   style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
        >
          <source src={loaderVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Loader;