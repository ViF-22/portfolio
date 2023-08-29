import React from "react";
import SmLinks from "./ui/SmLinks";
const contacts = [];
function Contacts() {
  return (
    <section
      className=" rounded-lg font-spaceMono w-full px-5 md:px-[120px] py-10 flex justify-between items-center "
      id="contacts"
    >
      <div className="bg-gray-200/50 dark:bg-gray-700/20 rounded-lg font-spaceMono w-full flex justify-between items-center px-5 py-5">
        <div className="flex flex-col">
          <div className="md:w-[220px] w-[120px] h-[1px] bg-slate-700 dark:bg-white mb-3" />
          <a
            href="#about"
            className="md:text-[35px] 3xl:text-[40px] text-[20px]"
          >
            About
          </a>
          <a
            href="#projects"
            className="md:text-[35px] 3xl:text-[40px] text-[20px]"
          >
            Projects
          </a>
        </div>
        <div className="flex flex-col gap-y-5  ">
          <h3 className="md:text-[35px] 3xl:text-[40px] text-[20px] font-montserrat">
            Let`s <span className="highlight dark:text-slate-700">Connect</span>
          </h3>
          <div className="md:text-[20px] text-[16px] font-poppins flex flex-col gap-y-5">
            <SmLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
