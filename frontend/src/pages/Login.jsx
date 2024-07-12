
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

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
        <form onSubmit={handleSubmit}>
          <div>  
            <label className="label p-2">
              <span className="label-text text-base text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <label className="label">
              <span className="label-text text-base text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <Link
         to='/signup'
            className="text-center text-sm text-white hover:underline hover:text-yellow-300 mt-2 inline-block"
          >
            {"Dont't"} have an account? Create a new Account
          </Link>
          <div>
          <button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


