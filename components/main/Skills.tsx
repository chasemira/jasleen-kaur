import {
  Developer_Tools,
  Frameworks_Databases,
  Languages_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      {/* line 1 */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Languages_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* line 2 */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frameworks_Databases.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* line 3 */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Developer_Tools.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* wormhole video in the background */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video-blue2.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
