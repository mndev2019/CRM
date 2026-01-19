// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import OtpInput from "react-otp-input";
// import loginIllustration from "../../assets/Images/loginside.png";
// import login from "../../assets/Images/logonew.png";

// const VerifyOtp = () => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const [timer, setTimer] = useState(30);

//   // ⏱️ Countdown logic
//   useEffect(() => {
//     if (timer === 0) return;

//     const interval = setInterval(() => {
//       setTimer((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timer]);

//   // 🔁 Resend handler
//   const handleResend = () => {
//     setTimer(30);
//     setOtp("");
//   };

//   return (
//     <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
//       {/* LEFT */}
//       <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
//         {/* Logo */}
//         <img
//           src={login}
//           className="h-[50px] w-[150px] mb-6"
//           alt="logo"
//         />

//         {/* Heading */}
//         <h2 className="pt-6 text-[24px] sm:text-[28px] font-extrabold nunito">
//           Verify OTP
//         </h2>

//         <p className="text-sm mb-10 inter">
//           Enter the 6-digit OTP sent to you
//         </p>

//         {/* OTP INPUT */}
//         <OtpInput
//           value={otp}
//           onChange={setOtp}
//           numInputs={6}
//           shouldAutoFocus
//           inputType="tel"
//           containerStyle="flex justify-between max-w-[320px]"
//           renderInput={(props) => (
//             <input
//               {...props}
//               className="w-[45px] h-[45px] border-b-2 border-black text-center text-lg outline-none focus:border-[#5465F2]"
//             />
//           )}
//         />

//         {/* Verify Button */}
//         <button
//           disabled={otp.length !== 6}
//           onClick={() => navigate("/reset-password")}
//           className="w-full mt-10 bg-gray-800 text-white py-2 rounded-md disabled:opacity-50 hover:bg-black duration-200"
//         >
//           Verify OTP
//         </button>

//         {/* TIMER + RESEND */}
//         <p className="text-sm mt-6 inter">
//           Didn’t receive OTP?
//           {timer > 0 ? (
//             <span className="text-gray-400 ml-1">
//               Resend in {timer}s
//             </span>
//           ) : (
//             <span
//               onClick={handleResend}
//               className="text-[#5465F2] cursor-pointer font-semibold ml-1"
//             >
//               Resend
//             </span>
//           )}
//         </p>
//       </div>

//       {/* RIGHT (Desktop only) */}
//       <div
//         className="hidden lg:flex items-center justify-center text-white px-10"
//         style={{
//           background: "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
//         }}
//       >
//         <img
//           src={loginIllustration}
//           className="max-w-[350px] select-none"
//           alt="illustration"
//         />
//       </div>
//     </section>
//   );
// };

// export default VerifyOtp;
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import OtpInput from "react-otp-input";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import loginIllustration from "../../assets/Images/loginside.png";
import login from "../../assets/Images/logonew.png";
import { BASE_URL } from "../../Api/Base_Url";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ FIX 1: mobile → email
  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error("Enter 6-digit OTP");
      return;
    }

    try {
      // ✅ FIX 2: send email instead of mobile
      const res = await axios.post(`${BASE_URL}api/auth/verify-otp`, {
        email,
        otp,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/reset-password", { state: { email } });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleResend = async () => {
    try {
      // ✅ FIX 3: resend with email only
      await axios.post(`${BASE_URL}api/auth/forgot-password`, {
        email,
        type: "email",
      });

      toast.success("OTP resent successfully");
      setTimer(30);
      setOtp("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
        <img src={login} alt="logo" className="h-[50px] w-[150px] mb-6" />
        <h2 className="pt-6 text-[24px] sm:text-[28px] font-extrabold nunito">
          Verify OTP
        </h2>
        <p className="text-sm mb-10 inter">
          Enter the 6-digit OTP sent to your email
        </p>

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          shouldAutoFocus
          inputType="tel"
          containerStyle="flex justify-between max-w-[320px]"
          renderInput={(props) => (
            <input
              {...props}
              className="w-[45px] h-[45px] border-b-2 border-black text-center text-lg outline-none focus:border-[#5465F2]"
            />
          )}
        />

        <button
          disabled={otp.length !== 6}
          onClick={handleVerify}
          className="w-full mt-10 bg-gray-800 text-white py-2 rounded-md disabled:opacity-50 hover:bg-black duration-200"
        >
          Verify OTP
        </button>

        <p className="text-sm mt-6 inter">
          Didn’t receive OTP?{" "}
          {timer > 0 ? (
            <span className="text-gray-400 ml-1">Resend in {timer}s</span>
          ) : (
            <span
              onClick={handleResend}
              className="text-[#5465F2] cursor-pointer font-semibold ml-1"
            >
              Resend
            </span>
          )}
        </p>
      </div>

      <div
        className="hidden lg:flex items-center justify-center text-white px-10"
        style={{
          background: "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
        }}
      >
        <img
          src={loginIllustration}
          alt="illustration"
          className="max-w-[350px] select-none"
        />
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default VerifyOtp;
