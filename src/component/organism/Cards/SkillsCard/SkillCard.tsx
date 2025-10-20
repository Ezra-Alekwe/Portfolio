import React from "react";
import { SkillDetails } from "../../../../interface/interface";



function SkillCard(props:SkillDetails) {

    const {title,skills}=props;
  return (
    <div  className="bg-cardBg p-6  rounded-2xl my-10">
      <div>
        <div className="text-center font-workSans">{title}</div>
      </div>
      <div className="space-y-4 mt-3">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium font-workSans">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
        
            <progress
              value={skill.level}
              max={100}
              className="progress-bar h-2 w-full rounded-lg overflow-hidden"
            >
              {skill.level}%
            </progress>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
