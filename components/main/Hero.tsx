import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole-blue2.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>

    // {/* <div className="relative h-screen w-screen" id="about-me">
    //   <video
    //     autoPlay
    //     muted
    //     loop
    //     className="rotate-180 absolute top-0 right-0 w-[60vw] h-[60vw] max-w-full max-h-full object-cover md:w-[50vw] md:h-[50vw] sm:w-[80vw] sm:h-[80vw] z-[1]"
    //   >
    //     <source src="/earth.mp4" type="video/mp4" />
    //   </video>
    //     <HeroContent />
    //   </div> */}

  );
};

export default Hero;
