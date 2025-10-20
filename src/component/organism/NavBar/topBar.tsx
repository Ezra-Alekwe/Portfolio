import React, { useState } from "react";
import { NavContent } from "../../../interface/interface";
import MenuSVG from "../../../assets/svg/MenuSVG";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const topBarcontents: NavContent[] = [
    { label: "Home", link: "#home" },
    { label: "Projects", link: "#projects" },
    { label: "Skills", link: "#skills" },
    { label: "Contact", link: "#contact" },
  ];
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b-2">
      <div className="font-bold text-xl">
        <h1>Portfolio</h1>
      </div>
      <div className="sm:flex hidden ">
        {topBarcontents.map((content) => {
          return (
            <div className="px-5">
              <a href={content.link}>{content.label}</a>
            </div>
          );
        })}
      </div>
      <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MenuSVG width={30} height={30} fill="#000" strokeColor="#000" />
      </div>

      {/* Overlay (for mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-black w-64 p-5 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
        <ul className="space-y-4">
          {topBarcontents.map((content) => {
            return (
              <li className="hover:text-gray-300 cursor-pointer">
                <a href={content.link} onClick={() => setIsOpen(false)}>{content.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
