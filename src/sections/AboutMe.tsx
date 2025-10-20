import React from "react";
import ProfilePicture from "../component/atoms/ProfilePicture/ProfilePicture";
import ArrowDownSVG from "../assets/svg/ArrowDownSVG";
import GitHubSVG from "../assets/svg/GitHubSVG";
import LinkedInSVG from "../assets/svg/LinkedInSVG";
import GMailSVG from '../assets/svg/GMailSVG';

function AboutMe() {
  return (
    <div className="w-full" id="home">
      <div className="w-full flex justify-center">
        <div>
          <div className="my-4 flex justify-center">
            <ProfilePicture />
          </div>
          <div className=" text-center w-72 sm:w-[580px] ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-workSans font-bold">
              Hi, I'm <span className="text-blueLocus">Ezra Alekwe</span>
            </h1>
            <p className="text-xl sm:text-4xl my-4 text-smokingGray">
              Full Stack Developer
            </p>
            <p className="text-center text-lg">
              I create beautiful, functional web applications that solve
              real-world problems. With expertise in modern technologies and a
              passion for clean design, I bring ideas to life through code.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-9">
        <div className="sm:flex justify-center space-y-3 sm:space-y-0">
          <a href="#projects" className="bg-blueLocus border-1 mr-5 w-full  sm:w-40 h-11  flex justify-center text-white rounded-[5px] px-2 py-2">
            View My Work
            <span className="ml-2 h-full my-1.5">
              <ArrowDownSVG width={14} height={14} strokeWidth={50} />
            </span>
          </a>
          <button className="border-2 rounded-[5px] w-full sm:w-40 h-11 px-1  hover:bg-blueLocus hover:text-white">
            Download Resume
          </button>
        </div>
      </div>

      <div className="w-full mt-9 flex justify-center space-x-6">
        <a  href="#" className="">
          <GitHubSVG width={24} height={24} />
        </a>
        <a  href="#" className="">
          <LinkedInSVG width={24} height={24} />
        </a>

        <a href="#" className="">
          <GMailSVG width={24} height={24} />
        </a>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default AboutMe;
