// import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 pb-40"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 font-sans">
        <ProjectCard
          src="/learnverse.png"
          title="LearnVerse"
          description="LearnVerse is a universe of learning opportunities aligned with the UN’s Quality Education; breaking financial 
          barriers by letting people trade skills as currency and making education truly accessible."
          githubUrl="https://github.com/chasemira/LearnVerse"
          websiteUrl="https://learn-verse-one.vercel.app/"
        />
        <ProjectCard
          src="/sfuhub.png"
          title="SFU HUB"
          description="A centralized platform for SFU students to access essential resources, event information, 
          and campus services. Enhance student experience by offering a one-stop solution for navigating campus life. "
          githubUrl="https://github.com/chasemira/SFU-HUB"
          websiteUrl="https://sfuhub.ca/"
        />
        <ProjectCard
          src="/invisible.png"
          title="Invisible Cloak"
          description="Inspired by the Invisibility Cloak from Harry Potter, it uses computer vision techniques to make a specific color in a video feed 
          (in this case blue) invisible by replacing it with a previously captured background. "
          githubUrl="https://github.com/chasemira/Invisibility-Cloak"
        /> 
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10 justify-center max-w-5xl mx-auto font-sans">
        <ProjectCard
          src="/miniphotoshop.png"
          title="Mini Photoshop"
          description="A Python-Tkinter image editor offering photo effects like grayscale, dithering, auto-level. 
          It supports BMP files and displays original and edited images side by side for easy comparison."
          githubUrl="https://github.com/chasemira/MiniPhotoshop"
        />
        <ProjectCard
          src="/suber.png"
          title="SUBER"
          description="A student-focused carpooling app built with NextJS to reduce carbon emissions and foster community at SFU. 
          It lets users post and join rides from campus, with live listing sync and future plans for ratings. "
          githubUrl="https://github.com/chasemira/FallHacks2023"
          websiteUrl="https://fallhacks2023.vercel.app/"
        />
      </div> */}


      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        <ProjectCard
          src="/learnverse.png"
          title="LearnVerse"
          description=" LearnVerse is a universe of learning opportunities aligned with the UN’s Quality Education—breaking down financial barriers 
          by letting people trade skills as currency and making education truly accessible. "
          githubUrl="https://github.com/chasemira/LearnVerse"
          websiteUrl="https://learn-verse-one.vercel.app/"
        />
        <ProjectCard
          src="/sfuhub.png"
          title="SFU HUB"
          description="A centralized platform for SFU students to access essential resources, event information, 
          and campus-related services. Enhance student experience by offering a one-stop solution for navigating campus life. "
          githubUrl="https://github.com/chasemira/SFU-HUB"
          websiteUrl="https://sfuhub.ca/"
        />
        <ProjectCard
          src="/invisible.png"
          title="Invisible Cloak"
          description="inspired by the Invisibility Cloak from Harry Potter, it uses computer vision techniques to make a specific color in a video feed 
          (e.g. blue) invisible by replacing it with a previously captured background. "
          githubUrl="https://github.com/chasemira/Invisibility-Cloak"
        /> 
        <ProjectCard
          src="/miniphotoshop.png"
          title="Mini Photoshop"
          description=" A Python-Tkinter based image editor offering essential photo effects like grayscale, dithering, auto-level, and more. 
          It supports BMP files and displays original and edited images side by side for easy comparison. "
          githubUrl="https://github.com/chasemira/MiniPhotoshop"
        />
        <ProjectCard
          src="/suber.png"
          title="SUBER"
          description="A student-focused carpooling app built with NextJS to reduce carbon emissions and foster community at SFU. 
          It lets users post and join rides from campus, with live listing sync and future plans for driver/passenger ratings. "
          githubUrl="https://github.com/chasemira/FallHacks2023"
          websiteUrl="https://fallhacks2023.vercel.app/"
        />
      </div>


    </div>
  );
};

export default Projects;