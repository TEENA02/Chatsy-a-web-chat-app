import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [Inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: "",
  });
  const {loading,signup}=useSignup()
  const handleSubmit = async(e) => {
    e.preventDefault();
    //console.log(Inputs);
  await signup(Inputs)
  };
  const gendercheckBoxHandle=(gender)=>{
    setInputs({ ...Inputs, gender });
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full py-4  px-6 bg-gray-100 rounded-md 
       bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100"
      >
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign Up
          <span className="text-yellow-300"> Chatsy</span>{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
              value={Inputs.fullName}
              onChange={(e) =>
                setInputs({ ...Inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
              value={Inputs.username}
              onChange={(e) =>
                setInputs({ ...Inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
              value={Inputs.email}
              onChange={(e) => setInputs({ ...Inputs, email: e.target.value })}
            />
          </div>
          <div>
            <label className="label ">
              <span className="label-text text-base text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={Inputs.password}
              onChange={(e) =>
                setInputs({ ...Inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label ">
              <span className="label-text text-base text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={Inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...Inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox ongendercheckchange={gendercheckBoxHandle} selectedGender={Inputs.gender}/>
          <Link
            to="/login"
            className="text-center justify-center text-sm text-white hover:underline hover:text-yellow-300 mt-1 inline-block"
          >
            Already have an account? Login with Account
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span>: "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
