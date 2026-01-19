import React, { useState } from "react";
import loginIllustration from "../../assets/Images/loginside.png";
import login from "../../assets/Images/logonew.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Api/Base_Url";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handlesubmit = async (e) => {
    e.preventDefault();

    const requestdata = {
      email,
      password,
    };

    try {
      const resp = await axios.post(`${BASE_URL}api/auth/login`, requestdata);
      const res = resp.data;

      console.log("LOGIN RESPONSE:", res);

      if (res?.success && res?.data?.token) {
        // localStorage.setItem("token", res.data.token);
        localStorage.setItem("check", "working");

        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error(res?.message || "Login failed");
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err);

      toast.error(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };



  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
        {/* Logo */}
        <img
          src={login}
          alt="image"
          className="h-[50px] w-[150px] object-contain mb-6"
        />

        {/* Title */}
        <h2 className="pt-6 pb-3 nunito font-extrabold text-black text-[26px] sm:text-[30px]">
          WELCOME TO RAMOT
          <span className="block">CRM</span>
        </h2>

        <p className="text-black text-sm mb-8 inter">
          Hey , Your CRM tools are ready for you
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handlesubmit}>
          {/* Username Input */}
          <div>
            <label className="block text-[16px] sm:text-[18px] font-medium mb-1 inter">
              Username or Email
            </label>
            <div className="flex items-center border-b pb-1">
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
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
            <label className="block text-[16px] sm:text-[18px] font-medium mb-1 inter">
              Password
            </label>
            <div className="border-b pb-1">
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#5465F2]" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-[#5465F2] nunito hover:underline font-bold text-[15px] sm:text-[16px]"
            >
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"

            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black duration-200"
          >
            Continue
          </button>
        </form>

        {/* Sign up */}
        <p className="text-black nunito font-bold text-[15px] sm:text-[16px] mt-6">
          No account?{" "}
          <span
            onClick={() => navigate("/sign-up")}
            className="cursor-pointer text-[#5465F2]"
          >
            Sign up
          </span>
        </p>
      </div>

      {/* RIGHT CONTENT (hidden on mobile) */}
      <div
        className="hidden lg:flex relative h-full flex-col items-center justify-center text-white text-center px-10"
        style={{
          background:
            "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
        }}
      >
        <img
          src={loginIllustration}
          alt="illustration"
          className="max-w-[350px] select-none mb-6"
        />

        <h3 className="font-bold text-[23px] mb-2 nunito">
          Centralized Customer Management
        </h3>

        <p className="text-[18px] text-gray-200 inter max-w-md">
          Make customer interactions more productive with real-time updates and centralized tracking.
        </p>
      </div>
    </section>
  );
};

export default Login;
