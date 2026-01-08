import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginIllustration from "../../assets/Images/loginside.png";
import login from "../../assets/Images/logonew.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password changed successfully");
    navigate("/login");
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
        {/* Logo */}
        <img
          src={login}
          alt="logo"
          className="h-[50px] w-[150px] object-contain mb-6"
        />

        {/* Title */}
        <h2 className="pt-6 pb-3 font-extrabold nunito text-black text-[24px] sm:text-[28px]">
          Reset Password
        </h2>

        <p className="text-black text-sm mb-8 inter">
          Create a new password for your account
        </p>

        {/* FORM */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* New Password */}
          <div>
            <label className="block text-[16px] sm:text-[18px] font-medium mb-1 inter">
              New Password
            </label>
            <div className="border-b pb-1">
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="outline-none w-full text-sm"
                placeholder="Enter new password"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-[16px] sm:text-[18px] font-medium mb-1 inter">
              Confirm Password
            </label>
            <div className="border-b pb-1">
              <input
                type="password"
                name="confirmPassword"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="outline-none w-full text-sm"
                placeholder="Re-enter password"
              />
            </div>
          </div>

          {/* Captcha */}
          <div>
            <label className="block text-[16px] sm:text-[18px] font-medium mb-1 inter">
              Captcha
            </label>
            <div className="border-b pb-1">
              <input
                type="text"
                name="captcha"
                required
                value={form.captcha}
                onChange={handleChange}
                className="outline-none w-full text-sm"
                placeholder="Enter captcha"
              />
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black duration-200"
          >
            Change Password
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-black nunito font-bold text-[15px] sm:text-[16px] mt-6">
          Remember your password?{" "}
          <span
            className="cursor-pointer text-[#5465F2]"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>

      {/* RIGHT ILLUSTRATION (Desktop only) */}
      <div
        className="hidden lg:flex relative h-full flex-col items-center justify-center text-white text-center px-10"
        style={{
          background: "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
        }}
      >
        <img
          src={loginIllustration}
          alt="illustration"
          className="max-w-[400px] select-none"
        />

        <h3 className="font-bold text-[23px] mb-2 nunito">
          Set a Strong Password
        </h3>

        <p className="text-[18px] text-gray-200 inter">
          Use a secure password to protect your CRM account.
        </p>
      </div>
    </section>
  );
};

export default ResetPassword;
