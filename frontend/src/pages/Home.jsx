import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import MessageContainer from "../components/messages/MessageContainer";

const Home = () => {
  return (
    <div
      className="flex  sm:h-[450px] md:h-[550px]  bg-gray-100 rounded-md overflow-hidden 
       bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100"
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
