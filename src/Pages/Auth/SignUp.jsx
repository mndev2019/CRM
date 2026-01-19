import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import loginIllustration from "../../assets/Images/loginside.png";
import login from "../../assets/Images/logonew.png";
import { BASE_URL } from "../../Api/Base_Url";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      toast.error("Mobile number must be 10 digits");
      return;
    }

    const requestData = {
      name,
      email,
      mobile,
      password,
    };

    try {
      const res = await axios.post(
        `${BASE_URL}api/auth/signup`,
        requestData
      );

      if (res.data.success) {
        toast.success(res.data.message || "Signup successful");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message || "Signup failed");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        "Signup failed, please try again"
      );
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* LEFT */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
        <img
          src={login}
          alt="logo"
          className="h-[50px] w-[150px] mb-6"
        />

        <h2 className="text-[28px] font-extrabold nunito mb-2">
          Create Your Account
        </h2>
        <p className="text-sm mb-8 inter">
          Sign up to access your CRM dashboard
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full border-b outline-none pb-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border-b outline-none pb-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              required
              maxLength={10}
              className="w-full border-b outline-none pb-1"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter mobile number"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1">Password</label>
            <div className="flex items-center border-b pb-1">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 font-semibold text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>

      {/* RIGHT */}
      <div
        className="hidden lg:flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
        }}
      >
        <img
          src={loginIllustration}
          alt="illustration"
          className="max-w-[400px]"
        />
      </div>
    </section>
  );
};

export default Signup;
