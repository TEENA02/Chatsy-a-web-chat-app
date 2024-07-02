import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div
        className="w-full p-6  bg-gray-100 rounded-md 
       bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100"
      >
        <h1 className="text-3xl font-semibold text-center text-white">
          Login
          <span className="text-yellow-300"> Chatsy</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
            <label className="label">
              <span className="label-text text-base text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-center text-sm text-white hover:underline hover:text-yellow-300 mt-2 inline-block"
          >
            {"Dont't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-3">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


