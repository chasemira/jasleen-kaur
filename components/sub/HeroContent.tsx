"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Welcome to my space
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-gray-400 max-w-[600px] w-auto h-auto audiowide-regular"
        >
            <span>
              Hello!
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-950">
              I&apos;m Jasleen Kaur
            </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm text-gray-400 my-5 max-w-[600px] font-sans"
        >
          I&apos;am third-year Computing Science student at Simon Fraser University (SFU) with a passion for AI, 
          full-stack development, machine learning, and cybersecurity. I love taking initiative and efficiently bringing ideas to life, 
          whether it is leading frontend development for SFU Hub or building real-world solutions like LearnVerse to tackle UN challenges like quality education.
          
          As the Director of Marketing for DSSS, I help promote events and boost engagement. Outside of tech, I am into astronomy, reading, 
          gaming, and watching movies. 
          My all time favourite game is Tomb Raider!
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center -mr-[600px]"
      >
        <Image
          src="/lara.png"
          alt="work icons"
          height={999}
          width={999}
          style={{ transform: 'scale(1.3)' }}  // Makes it 30% bigger
        />
      </motion.div>
      
    </motion.div>
  );
};

export default HeroContent;
