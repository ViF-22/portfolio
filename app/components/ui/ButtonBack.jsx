import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

function ButtonBack() {
  const router = useRouter();

  return (
    <div
      className="px-5 py-2 border-[1px] border-slate-700 dark:border-white rounded-full flex self-start items-center gap-x-2 md:text-[14px] text-[10px] hover:opacity-40
    "
      onClick={() => router.push("/")}
    >
      <BiArrowBack /> Go Back
    </div>
  );
}

export default ButtonBack;
