import React from "react";

function loading() {
  return (
    <div className="flex flex-col w-full  max-w-[1500px] mx-auto">
      <div className="my-12 flex flex-col gap-y-10">
        <span className="w-[40%] h-[40px] bg-gray-200 rounded-sm animate-pulse" />

        <div className="w-full grid md:grid-cols-2 gap-x-10">
          <span className="h-[300px] w-full bg-gray-200 rounded-sm animate-pulse" />
          <span className="h-[300px] w-full bg-gray-200  rounded-sm animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default loading;
