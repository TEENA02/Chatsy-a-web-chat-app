import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../../store/useConversation";
import { extractTime } from "../../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubbleBg = fromMe ? "bg-[#e3d5e9]" : "bg-[#e641d0]";
  const formattedTime=extractTime(message.createdAt)
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBg} text-black pb-2`}>{message.message}</div>
      <div className="chat-footer  text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;
