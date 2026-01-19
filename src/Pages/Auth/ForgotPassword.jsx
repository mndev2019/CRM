// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import loginIllustration from "../../assets/Images/loginside.png";
// import login from "../../assets/Images/logonew.png";

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [method, setMethod] = useState("email");

//   return (
//     <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
//       {/* LEFT */}
//       <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
//         {/* Logo */}
//         <img
//           src={login}
//           alt="logo"
//           className="h-[50px] w-[150px] mb-6"
//         />

//         {/* Heading */}
//         <h2 className="pt-6 text-[24px] sm:text-[28px] font-extrabold nunito">
//           Forgot Password
//         </h2>
//         <p className="mb-8 text-sm inter">
//           Select how you want to receive OTP
//         </p>

//         {/* Method Selection */}
//         <div className="flex gap-6 mb-6">
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={method === "email"}
//               onChange={() => setMethod("email")}
//             />
//             Email
//           </label>

//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               checked={method === "mobile"}
//               onChange={() => setMethod("mobile")}
//             />
//             Mobile
//           </label>
//         </div>

//         {/* Email / Mobile Input */}
//         <div className="border-b pb-1 mb-6">
//           <input
//             type="text"
//             placeholder={
//               method === "email"
//                 ? "Enter email"
//                 : "Enter mobile number"
//             }
//             className="outline-none w-full text-sm"
//           />
//         </div>

//         {/* Captcha */}
//         <div className="border-b pb-1 mb-6">
//           <input
//             type="text"
//             placeholder="Enter captcha"
//             className="outline-none w-full text-sm"
//           />
//         </div>

//         {/* Button */}
//         <button
//           onClick={() => navigate("/verify-otp")}
//           className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black duration-200"
//         >
//           Send OTP
//         </button>
//       </div>

//       {/* RIGHT (Desktop only) */}
//       <div
//         className="hidden lg:flex items-center justify-center text-white"
//         style={{
//           background: "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
//         }}
//       >
//         <img
//           src={loginIllustration}
//           alt="illustration"
//           className="max-w-[350px] select-none"
//         />
//       </div>
//     </section>
//   );
// };

// export default ForgotPassword;





//mobile forgotcode
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import loginIllustration from "../../assets/Images/loginside.png";
// import login from "../../assets/Images/logonew.png";
// import { BASE_URL } from "../../Api/Base_Url";

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [mobile, setMobile] = useState("");

//   const sendOtp = async () => {
//     if (!mobile) {
//       toast.error("Please enter your mobile number");
//       return;
//     }

//     try {
//       const res = await axios.post(`${BASE_URL}api/auth/forgot-password`, {
//         type: "mobile",
//         mobile,
//       });

//       if (res.data.success) {
//         toast.success(res.data.message);
//         navigate("/verify-otp", { state: { mobile } });
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to send OTP");
//     }
//   };

//   return (
//     <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
//       <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
//         <img src={login} alt="logo" className="h-[50px] w-[150px] mb-6" />
//         <h2 className="pt-6 text-[24px] sm:text-[28px] font-extrabold nunito">
//           Forgot Password
//         </h2>
//         <p className="mb-8 text-sm inter">Reset password using your mobile number</p>

//         <div className="border-b pb-1 mb-6">
//           <input
//             type="text"
//             placeholder="Enter mobile number"
//             className="outline-none w-full text-sm"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={sendOtp}
//           className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black duration-200"
//         >
//           Send OTP
//         </button>
//       </div>

//       <div
//         className="hidden lg:flex items-center justify-center text-white"
//         style={{
//           background: "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
//         }}
//       >
//         <img src={loginIllustration} alt="illustration" className="max-w-[350px] select-none" />
//       </div>

//       <ToastContainer position="top-right" autoClose={3000} />
//     </section>
//   );
// };

// export default ForgotPassword;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import loginIllustration from "../../assets/Images/loginside.png";
import login from "../../assets/Images/logonew.png";
import { BASE_URL } from "../../Api/Base_Url";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // Function to send OTP via email
  const sendOtp = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}api/auth/forgot-password`, {
        type: "email", // now using email
        email,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/verify-otp", { state: { email } }); // pass email to OTP page
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left side */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-white">
        <img src={login} alt="logo" className="h-[50px] w-[150px] mb-6" />
        <h2 className="pt-6 text-[24px] sm:text-[28px] font-extrabold nunito">
          Forgot Password
        </h2>
        <p className="mb-8 text-sm inter">Reset password using your email</p>

        {/* Email input */}
        <div className="border-b pb-1 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none w-full text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Send OTP button */}
        <button
          onClick={sendOtp}
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black duration-200"
        >
          Send OTP
        </button>
      </div>

      {/* Right side illustration */}
      <div
        className="hidden lg:flex items-center justify-center text-white"
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

    
    </section>
  );
};

export default ForgotPassword;


