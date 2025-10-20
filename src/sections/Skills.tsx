import React from "react";
import SkillCard from "../component/organism/Cards/SkillsCard/SkillCard";
import { skillCategories } from '../utils/projectData';


function Skills() {
  return (
    <div id="skills" className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center">
        <div className=" text-center w-72 sm:w-[580px]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-smokingGray">
            I'm passionate about learning new technologies and constantly
            improving my skills.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map(({title,skills}, index) => (
          <SkillCard
            title={title}
            skills={skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
