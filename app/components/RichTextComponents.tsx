import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export const RichTextComponents = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="mt-xl ml-5">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <li className="list-disc ">{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }: any) => <li>✅ {children}</li>,
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => <h1 className="text-2xl">{children}</h1>,
    h3: ({ children }: any) => (
      <h3 className="text-3xl font-bold py-5">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-yellow-400 border-l-4 pl-5 py-3 my-5">
        {children}
      </blockquote>
    ),
  },
};
