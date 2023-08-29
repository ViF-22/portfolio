import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHabr } from "react-icons/si";

function SmLinks() {
  return (
    <div className="flex gap-x-8">
      <a
        href="https://www.linkedin.com/in/victoria-feofanova-5b1a60245/"
        target="_blank"
        className="text-[20px] hover:text-gray-400 "
      >
        <FaLinkedin />
      </a>
      <a
        href="https://career.habr.com/hereweareagain"
        target="_blank"
        className="text-[20px] hover:text-gray-400"
      >
        <SiHabr />
      </a>
      <a
        href="https://github.com/ViF-22"
        target="_blank"
        className="text-[20px] hover:text-gray-400"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default SmLinks;
