"use client";
import React from "react";
import { MdOutlineTranslate } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  const [translate, setTranslate] = useState(false);

  let refs = useRef([]); // for each letter
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, [translate]);

  const createAnimations = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top",
        end: "50%",
        scrub: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, index) => {
      const letters = splitLetters(word);
      body.push(
        <p key={`word_${index}`} className="mr-[1.2vw] md:mr-[10px]">
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          ref={(el) => refs.current.push(el)}
          key={`letter_${index}`}
          className="opacity-20"
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div
      ref={container}
      className="w-full  md:px-10 h-[100vh] flex items-center justify-center"
      id="about"
    >
      <div className="w-full  px-5 py-[150px] flex flex-col gap-y-5 text-[18px] text-center items-center">
        {!translate && (
          <div className="flex flex-wrap items-center justify-center  font-poppins md:text-[30px] text-[20px] font-medium tracking-wide md:w-[60%] w-[85%] leading-loose text-center">
            {" "}
            {splitWords(
              `Hey! My name is Victoria and I am a Frontend developer. Why frontend? To make it easier to explain to people what my lines of code make. Okay-okay, I am kidding. I love creating digital beauty that will be seen by others.`
            )}
          </div>
        )}
        {translate && (
          <div className="flex flex-wrap items-center justify-center font-poppins md:text-[30px] text-[20px] font-medium tracking-wide md:w-[60%] w-[85%] leading-loose text-center">
            {" "}
            {splitWords(
              `Привет! Меня зовут Виктория, и я Frontend developer. Почему мой выбор пал на фронтэнд? Чтобы легче было объяснять людям, что мои строчки кода делают. Ладно, шучу. Люблю создавать диджитал красоту, которую увиядт и другие.`
            )}
          </div>
        )}

        <div onClick={() => setTranslate(!translate)}>
          {" "}
          <MdOutlineTranslate />
        </div>
      </div>
    </div>
  );
}

export default About;
