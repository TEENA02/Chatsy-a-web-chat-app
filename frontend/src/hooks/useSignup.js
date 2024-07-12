import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}=useAuthContext();
  const signup = async ({
    fullName,
    username,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullName,
      username,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if(data.error){
        throw new Error(data.error);
      }
      //local storage 
      localStorage.setItem("chat-user",JSON.stringify(data))
      //context
      setAuthUser(data)
      // console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

const handleInputError = ({
  fullName,
  username,
  email,
  password,
  confirmPassword,
  gender,
}) => {
  if (
    !fullName ||
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Confirm Password dont match");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password must be at least 8 character");
    return false;
  }
  return true;
};
