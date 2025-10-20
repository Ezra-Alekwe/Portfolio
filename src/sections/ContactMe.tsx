import React from "react";
import GMailSVG from "../assets/svg/GMailSVG";
import LinkedInSVG from "../assets/svg/LinkedInSVG";
import GitHubSVG from "../assets/svg/GitHubSVG";

function ContactMe() {
  return (
    <div id="contact" className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center">
        <div className=" text-center w-72 sm:w-[580px]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-smokingGray">
            I'm always interested in new opportunities and collaborations. Let's
            discuss your project!
          </p>
        </div>
      </div>

      <div className="flex justify-center space-x-4 my-10">
        <div className="">
          <button className="bg-blueLocus border-1 w-32 h-10 text-white rounded-[5px] px-2 py-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ezraalekwe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-around items-center w-full h-full  "
            >
              <span className=" h-full my-1.5">
                <GMailSVG strokeColor="#FFF" width={20} height={20} />
              </span>
              Send Mail
            </a>
          </button>
        </div>
        <div className="w-12 h-10">
          <a
            href="https://github.com/Ezra-Alekwe"
            target="_blank"
            className="w-12 h-10 border-2 flex items-center justify-center rounded-lg"
          >
            <GitHubSVG width={20} height={20} />
          </a>
        </div>
        <div className="w-12 h-10 ">
          <a
            href="https://github.com/Ezra-Alekwe"
            target="_blank"
            className="w-12 h-10 border-2 flex items-center justify-center rounded-lg"
          >
            <LinkedInSVG width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
