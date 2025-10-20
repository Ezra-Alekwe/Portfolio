import React from "react";
import ProjectUI from "../component/organism/ProjectUI/projectUI";
import { projects } from "../utils/projectData";

function FeaturedProjects() {
  return (
    <div id="projects" className="py-5 px-4 sm:px-6 lg:px-8 w-full">
      <div className="w-full flex justify-center">
        <div className=" text-center w-72 sm:w-[580px]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-smokingGray">
            Here are some of my recent projects that showcase my skills in web
            development and design.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 w-full ">
        {projects.map((project) => (
          <div className="w-full h-full" >
    
            <ProjectUI
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              skills={project.skills}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
