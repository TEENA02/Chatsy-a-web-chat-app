import React from "react";
import useConversation from "../../../store/useConversation";

const Convo = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation,setSelectedConversation}=useConversation();

  const isSelected=selectedConversation?._id ===conversation._id
  return (
    // <>[#8e04d1]
    <>
      <div className={`flex gap-2 items-center hover:bg-[#e3d5e9] hover:text-[#437bf7] rounded px-2 py-1 cursor-pointer
     ${isSelected ? "bg-[#e3d5e9] text-black" : ""}
      `}
      onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={conversation.profilePic}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bolt text-white"> {conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
    {!lastIdx &&   <div className="divider mx-0 my-0 h-1"></div>}
    </>
  );
};

export default Convo;
