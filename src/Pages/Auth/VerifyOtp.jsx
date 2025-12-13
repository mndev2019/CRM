import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import loginIllustration from "../../assets/Images/loginside.png";
import login from "../../assets/Images/logonew.png";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  return (
    <section className="h-screen grid grid-cols-2 overflow-hidden">

      {/* LEFT */}
      <div className="flex flex-col justify-center px-20 bg-white">
        <img src={login} className="h-[50px] w-[150px]" />

        <h2 className="pt-10 text-[28px] font-extrabold nunito">
          Verify OTP
        </h2>

        <p className="text-sm mb-10 inter">
          Enter the 6-digit OTP sent to you
        </p>

        {/* OTP INPUT */}
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          shouldAutoFocus
          inputType="tel"
          containerStyle="flex justify-between"
          renderInput={(props) => (
            <input
              {...props}
              className="w-[45px] h-[45px] border-b-2 border-black text-center text-lg outline-none focus:border-[#5465F2]"
            />
          )}
        />

        <button
          disabled={otp.length !== 6}
          onClick={() => navigate("/reset-password")}
          className="w-full mt-10 bg-gray-800 text-white py-2 rounded-md disabled:opacity-50"
        >
          Verify OTP
        </button>

        <p className="text-sm mt-6 inter">
          Didn’t receive OTP?{" "}
          <span className="text-[#5465F2] cursor-pointer font-semibold">
            Resend
          </span>
        </p>
      </div>

      {/* RIGHT */}
      <div
        className="flex items-center justify-center text-white px-10"
        style={{ background: "linear-gradient(to bottom, #444A60, #5C6290)" }}
      >
        <img src={loginIllustration} className="max-w-[350px]" />
      </div>
    </section>
  );
};

export default VerifyOtp;
