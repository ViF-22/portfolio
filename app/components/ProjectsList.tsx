import React, { Suspense } from "react";
import { Post } from "../lib/interface";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProjectsList() {
  const data = (await getData()) as Post[];

  return (
    <div className="w-full md:px-5 py-20" id="projects">
      <h2 className="font-poppins font-medium md:text-[35px] 3xl:text-[40px] text-[20px] text-center pb-14">
        Projects
      </h2>
      <div className="flex flex-col w-full gap-y-[80px]">
        {data.map((post) => (
          <div
            className="w-full  h-[80vh] relative flex items-center justify-center"
            key={post._id}
          >
            <div className=" md:w-[500px] w-full mx-4 h-full md:mx-0 relative  flex flex-col">
              <Link href={`/project/${post.slug.current}`} prefetch>
                <Suspense fallback={<div>Loading</div>}>
                  <Image
                    src={urlForImage(post.mainImage).url()}
                    alt="image"
                    className="h-full w-full object-cover "
                    fill
                  />
                </Suspense>

                <p className="md:text-[30px] text-[20px] font-medium z-20 absolute md:-right-[280px] -bottom-10 md:top-[250px]  w-auto font-robotoMono ">
                  #{post.title}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
