import React from "react";
import Spinner from "./Spinner";

export default function LoadingUI() {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-50 w-full h-full lg:bg-white/60 bg-[#f3f2ef90] rounded-3xl  ">
      <Spinner></Spinner>
    </div>
  );
}
