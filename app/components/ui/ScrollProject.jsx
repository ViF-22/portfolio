"use client";
import React, { Suspense } from "react";
// import { Post } from "../lib/interface";
// import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

export default function ScrollProject({ data }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          start: "top top",
          end: "2600 top",
          scrub: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  });

  return (
    <div className="w-full md:px-5 py-20 overflow-hidden" id="projects">
      <h2 className="font-poppins font-medium md:text-[35px] 3xl:text-[40px] text-[20px] text-center pb-14">
        Projects
      </h2>
      <div ref={triggerRef}>
        {/* inner */}
        <div
          className="flex flex-row md:h-[85vh] h-[60vh] w-[500vw] gap-x-[1rem] "
          ref={sectionRef}
        >
          {data.map((post) => (
            // scroll section
            <div
              className="w-full  h-full relative flex items-center justify-center md:py-10 pt-[60px]"
              key={post._id}
            >
              <div className="w-full  h-full  relative ">
                <Link href={`/project/${post.slug.current}`} prefetch>
                  <Suspense fallback={<div>Loading</div>}>
                    <Image
                      src={urlForImage(post.mainImage).url()}
                      alt="image"
                      className="h-full w-full object-cover "
                      fill
                    />
                  </Suspense>

                  <p className="md:text-[30px] text-[20px] font-medium z-20 absolute -bottom-20 w-auto left-10 font-robotoMono ">
                    #{post.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
