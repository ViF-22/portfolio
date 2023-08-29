import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Skills() {
  return (
    <div className="w-full text-center">
      <p className="font-poppins font-medium md:text-[35px] 3xl:text-[40px] text-[20px]">
        Some of My{" "}
        <span className="highlight dark:text-slate-700 ">Skills</span>
      </p>
      <div className="flex flex-col items-center font-poppins text-[20px] font-light py-14">
        {/* divider */}
        <div className="flex items-center flex-col">
          <div className="text-slate-700/50  dark:text-slate-200/40 text-[14px] pb-5">
            <AiOutlineClose />
          </div>
          <div className="h-[80px] w-[0.8px] bg-slate-700/40 dark:bg-slate-200/40 pb-2" />
        </div>
        <div className="flex flex-col items-center gap-y-6 md:text-[20px] text-[16px]">
          <div className="flex gap-x-10 ">
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div className="flex md:gap-x-14 gap-x-6 flex-wrap">
            <p>JavScript</p>
            <p>ReactJs</p>
            <p>TypeScript</p>
            <p>Next.Js</p>
          </div>
          <div className="relative">
            <p className="">& many more</p>
          </div>
        </div>

        {/* divider */}
        <div className="flex items-center flex-col gap-y-5">
          <div className="h-[80px] w-[0.8px] bg-slate-700/40 dark:bg-slate-200/40 mt-5" />
          <div className="text-slate-700/50  dark:text-slate-200/40 text-[14px] pb-5">
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
