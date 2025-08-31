// import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
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
          src="/SpaceWebsite.png"
          title="Invisible Cloak"
          description="inspired by the Invisibility Cloak from Harry Potter, it uses computer vision techniques to make a specific color in a video feed 
          (in this case, blue) invisible by replacing it with a previously captured background. "
          githubUrl="https://github.com/chasemira/Invisibility-Cloak"
        />
      </div>
    </div>
  );
};

export default Projects;