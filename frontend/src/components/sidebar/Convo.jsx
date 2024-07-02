import React from "react";

const Convo = () => {
  return (
    // <>[#8e04d1]
    <>
      <div className="flex gap-2 items-center hover:bg-[#e3d5e9] hover:text-[#437bf7] rounded px-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bolt text-white"> John Walker</p>
            <span className="text-xl">😎</span>
          </div>
        </div>
      </div>
      <div className="divider mx-0 my-0 h-1"></div>
    </>
  );
};

export default Convo;
