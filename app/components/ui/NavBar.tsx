"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeButton from "../ThemeButton";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type link = {
  name: string;
  link: string;
};

const links: link[] = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contacts",
    link: "#contacts",
  },
];
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full  flex justify-end gap-x-14 items-center ">
      {/* mobile */}
      {!open && (
        <div
          className="md:hidden text-[20px] cursor-pointer pr-10 pt-5"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineMenu />
        </div>
      )}

      {open && (
        <div className="md:hidden h-[100vh] w-full fixed top-0 px-10 z-30 bg-white dark:bg-black overflow-hidden flex flex-col">
          <div
            className="w-full text-[20px] cursor-pointer  pt-5  flex justify-end "
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose />
          </div>
          <div className="flex flex-col gap-y-10 items-center dark:text-white h-full justify-center text-[20px]">
            {links.map((li) => (
              <a href={li.link} onClick={() => setOpen(false)} key={li.name}>
                {li.name}
              </a>
            ))}
            <ThemeButton />
          </div>
        </div>
      )}
      {/* desktop */}
      <div className="hidden md:flex gap-x-14 items-center pt-5 pr-10 uppercase">
        <ThemeButton />
        {links.map((li) => (
          <a href={li.link} key={li.name}>
            {li.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
