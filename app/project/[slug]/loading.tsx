import React from "react";

function loading() {
  return (
    <div className="flex flex-col w-full  max-w-[1500px] mx-auto px-5 ">
      <div className="my-12 flex flex-col gap-y-10">
        <span className="w-[40%] h-[40px] bg-gray-200 dark:bg-gray-400/20 rounded-sm animate-pulse" />

        <div className="w-full grid md:grid-cols-2 md:gap-x-10 gap-y-6 md:gap-y-0">
          <span className="h-[300px] w-full bg-gray-200 dark:bg-gray-400/20  rounded-md animate-pulse" />
          <span className="h-[300px] w-full bg-gray-200 dark:bg-gray-400/20  rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default loading;
