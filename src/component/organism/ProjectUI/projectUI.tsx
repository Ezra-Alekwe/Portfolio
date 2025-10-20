import React from "react";
import ArrowDownSVG from "../../../assets/svg/ArrowDownSVG";
import { ProjectInfo } from "../../../interface/interface";
import NewWindowSVG from "../../../assets/svg/NewWindowSVG";
import { HOME_URL } from '../../../environment';

function ProjectUI(props: ProjectInfo) {
  const { image, title, subtitle, skills, liveUrl, githubUrl } = props;

  return (
    <div className="w-full h-full">
      <div className="w-full h-full border-2 overflow-hidden rounded-2xl flex flex-col">
        {/* Image Section */}
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={HOME_URL+image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          {/* Title and Subtitle */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
              {title}
            </h3>
            <p className="text-smokingGray mt-1 text-sm sm:text-base md:text-lg leading-snug w-11/12">
              {subtitle}
            </p>
          </div>

          {/* Skills */}
          <div className="mt-3 flex flex-wrap gap-2">
            {skills?.map((skill, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm text-white bg-smokingGray py-1 px-2 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blueLocus text-white text-center rounded-md py-2 px-4 hover:bg-blue-700 transition w-full sm:w-36"
            >
              <div className="flex justify-center items-center gap-2">
                <NewWindowSVG
                  width={14}
                  height={14}
                  strokeWidth={50}
                  strokeColor="#fff"
                />
                Live Demo
              </div>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blueLocus text-center rounded-md py-2 px-4 hover:bg-blueLocus hover:text-white transition w-full sm:w-32"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectUI;
