"use client";
import Link from "next/link";
import Image from "next/image";
import ButtonBack from "./components/ui/ButtonBack";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center md:text-[35px] text-[20px] font-poppins my-5 px-5 gap-y-10">
      <ButtonBack />
      <h2 className="pt-10">There's nothing interesting for you </h2>
      <Image src="/ghost.svg" width={50} height={60} alt="404" />
    </div>
  );
}
