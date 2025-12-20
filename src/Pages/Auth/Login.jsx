import React from "react";
import loginIllustration from "../../assets/Images/loginside.png"; 
import login from '../../assets/Images/logonew.png'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen grid grid-cols-2 overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center px-20 bg-white">

        {/* Logo */}
        <img src={login} alt="image" className="h-[50px] w-[150px] object-contain" />

        {/* Title */}
        <h2 className="pt-10 pb-3 text-2xl font-extrabold mb-2 nunito text-black text-[30px]">WELCOME TO RAMOT <span className="block"> CRM </span> </h2>
        <p className="text-black text-sm mb-8 inter">
          Hey , Your CRM tools are ready for you
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Username Input */}
          <div>
            <label className="block text-[18px] font-medium mb-1 inter">
              Username or Email
            </label>
            <div className="flex items-center border-b pb-1">
              <input
                type="text"
                className="outline-none w-full text-sm"
              />
              <span className="text-gray-500 text-lg">
                <i className="fa-regular fa-user"></i>
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[18px] font-medium mb-1 inter">Password</label>
            <div className="border-b pb-1">
              <input
                type="password"
                
                className="outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#5465F2]" />
              <span>Remember me</span>
            </label>
            <button type="button" onClick={()=> navigate('/forgot-password')} className="text-[#5465F2] nunito hover:underline font-bold text-[16px]">
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button   type="button" onClick={()=> navigate('/profile')} className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black duration-200">
            Continue
          </button>
        </form>

        {/* Sign up */}
        <p className="text-black nunito font-bold text-[16px] mt-6">
          No account?{" "}
          <span onClick={()=> navigate('/sign-up')} className="cursor-pointer text-[#5465F2]">
            Sign up
          </span>
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative h-full flex flex-col items-center justify-center  text-white text-center px-10"  style={{
    background: "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
  }}>
        <img
          src={loginIllustration}
          alt="illustration"
          className="max-w-[350px] select-none"
        />

        <h3 className="font-bold text-[23px] mb-2 nunito ">
          Centralized Customer Management
        </h3>

        <p className="text-[18px] text-gray-200 w-100 inter ">
          Make customer interactions more productive with real-time updates and centralized tracking.
        </p>
      </div>
    </section>
  );
};

export default Login;
