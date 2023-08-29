"use client";
import React from "react";
import { MdOutlineTranslate } from "react-icons/md";
import { useState } from "react";

function About() {
  const [translate, setTranslate] = useState(false);
  return (
    <div className="w-full  md:px-10 py-[180px]" id="about">
      {/* <h2 className="font-poppins text-[24px] md:text-[48px]">About</h2> */}

      <div className="">
        {/* left */}
        <div className="w-full">
          <div className="  px-5 py-10 flex flex-col gap-y-5 rounded-xl text-[18px] text-center items-center">
            {/* */}
            {!translate && (
              <p className="  font-poppins md:text-[30px] text-[20px] font-medium tracking-wide md:w-[70%] w-[85%] leading-loose">
                Hey! My name is Victoria and I am a Frontend developer. <br />
                Why frontend? To make it easier to explain to people what my
                lines of code make.
                <br />
                Okay-okay, I am kidding. I love creating digital beauty that
                will be seen by others.
              </p>
            )}
            {translate && (
              <p className="font-poppins md:text-[30px] text-[20px]  font-medium tracking-wide md:w-[70%] w-[85%]  leading-loose">
                Привет! Меня зовут Виктория, и я Frontend developer. <br />
                Почему мой выбор пал на фронтэнд? Чтобы легче было объяснять
                людям, что мои строчки кода делают.
                <br />
                Ладно, шучу. Люблю создавать диджитал красоту, которую увиядт и
                другие.
              </p>
            )}
            <div onClick={() => setTranslate(!translate)}>
              {" "}
              <MdOutlineTranslate />
            </div>
          </div>
        </div>

        {/* right */}
      </div>
    </div>
  );
}

export default About;
