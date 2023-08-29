import React from "react";
import NavBar from "./ui/NavBar";
import Image from "next/image";
import SmLinks from "./ui/SmLinks";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense } from "react";

function Hero() {
  return (
    <div className="   md:mx-[120px]  rounded-xl md:mt-5 md:pb-10  relative  ">
      <NavBar />
      <div className="px-10 md:px-0 grid md:grid-cols-2 grid-cols-1 relative pt-10 bg h-full gap-y-10 ms:gap-y-0">
        {/* left */}
        <div className="flex items-end flex-col justify-center justify-self-end relative  w-full">
          <div className="md:w-[70%] w-full z-10  flex flex-col relative ">
            <h2 className=" text-[60px] md:text-[80px] leading-tight w-[70%] font-robotoMono pb-5 ">
              Victoria Feofanova
            </h2>

            <p className="text-[19px] w-full text-slate-600 dark:text-white font-poppins ">
              Front-end Developer that loves creating beauty with a few dozen
              lines of
              <code className=" dark:text-slate-600 pl-3 highlight">
                JSX code
              </code>
            </p>

            {/* divider */}
            <div className="w-[120px] h-[1px] bg-slate-600 dark:bg-slate-200 my-10" />
            {/* sm links*/}
            <SmLinks />
          </div>
        </div>
        {/* right */}
        <div
          className="
        relative  h-[80vh] max-h-[700px] w-[400px]  "
        >
          <Suspense fallback={<Skeleton />}>
            <Image
              src="/ava.jpeg"
              fill
              preloader="blur"
              alt="avatar"
              priority
              className="object-cover"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Hero;
