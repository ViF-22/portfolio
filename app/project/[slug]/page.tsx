"use client";
import React, { Suspense } from "react";
import { client } from "../../../sanity/lib/client";
import { Post } from "../../lib/interface";
import ButtonBack from "@/app/components/ui/ButtonBack";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { AiFillGithub } from "react-icons/ai";
import { GiOlive } from "react-icons/gi";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RichTextComponents } from "@/app/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

// export async function generateStaticParams() {
//   const query = `*[_type == "post"]{slug}`;
//   const slugs: Post[] = await client.fetch(query);
//   const slugRoutes = slugs.map((slug) => slug.slug.current);

//   return slugRoutes.map((slug) => ({
//     slug,
//   }));
// }

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  return (
    <div className="flex flex-col w-full  max-w-[1500px] mx-auto">
      <div className="flex flex-col mx-10">
        <div className=" mt-5 flex">
          <ButtonBack />
        </div>
        <div className=" my-10">
          <h3 className="font-poppins text-[30px]">Projects // {data.title}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-14 gap-y-10 my-10 w-full">
            {data.imagesGallery.map((img: any) => (
              <div
                className="w-full h-[350px] overflow-hidden shadow-sm"
                key={img}
              >
                <Image
                  src={urlForImage(img).url()}
                  className="w-full h-full object-cover  object-top"
                  priority
                  quality={95}
                  alt="image"
                  width={800}
                  height={600}
                />
              </div>
            ))}
          </div>
          <div className="bg-gray-200/30 dark:bg-gray-700/30 w-full md:w-[70%] rounded-xl px-4 py-3 shadow-sm ">
            <PortableText value={data.body} components={RichTextComponents} />

            <div className="flex gap-x-8 py-5">
              <a
                href={data.linkToGit}
                target="_blank"
                className="hover:underline outline-offset-[20px] flex gap-x-2 items-center justify-center"
              >
                <AiFillGithub /> Check on Git
              </a>
              <a
                href={data.linkToLive}
                className="hover:underline outline-offset-[20px] flex gap-x-2 items-center justify-center"
              >
                <GiOlive />
                Check Live Version
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// async function Project({ params: { slug } }: Props) {
//   const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
//   const data = await client.fetch(query, { slug });
//   return (
//     <div className="flex flex-col w-full  max-w-[1500px] mx-auto">
//       <div className="flex flex-col mx-10">
//         <div className=" mt-5 flex">
//           <ButtonBack />
//         </div>
//         <div className=" my-10">
//           <h3 className="font-poppins text-[30px]">Projects // {data.title}</h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-14 gap-y-10 my-10 w-full">
//             {data.imagesGallery.map((img: any) => (
//               <div
//                 className="w-full h-[350px] overflow-hidden shadow-sm"
//                 key={img}
//               >
//                 <Image
//                   src={urlForImage(img).url()}
//                   className="w-full h-full object-cover  object-top"
//                   priority
//                   quality={95}
//                   alt="image"
//                   width={800}
//                   height={600}
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="bg-gray-200/30 dark:bg-gray-700/30 w-full md:w-[70%] rounded-xl px-4 py-3 shadow-sm ">
//             <PortableText value={data.body} components={RichTextComponents} />

//             <div className="flex gap-x-8 py-5">
//               <a
//                 href={data.linkToGit}
//                 target="_blank"
//                 className="hover:underline outline-offset-[20px] flex gap-x-2 items-center justify-center"
//               >
//                 <AiFillGithub /> Check on Git
//               </a>
//               <a
//                 href={data.linkToLive}
//                 className="hover:underline outline-offset-[20px] flex gap-x-2 items-center justify-center"
//               >
//                 <GiOlive />
//                 Check Live Version
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Project;
