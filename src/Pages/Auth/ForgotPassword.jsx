import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginIllustration from "../../assets/Images/loginside.png";
import login from "../../assets/Images/logonew.png";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [method, setMethod] = useState("email");

    return (
        <section className="h-screen grid grid-cols-2">
            {/* LEFT */}
            <div className="flex flex-col justify-center px-20 bg-white">
                <img src={login} className="h-[50px] w-[150px]" />

                <h2 className="pt-10 text-[28px] font-extrabold nunito">
                    Forgot Password
                </h2>
                <p className="mb-8 text-sm inter">
                    Select how you want to receive OTP
                </p>

                {/* Method Selection */}
                <div className="flex gap-6 mb-6">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked={method === "email"}
                            onChange={() => setMethod("email")}
                        />
                        Email
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            checked={method === "mobile"}
                            onChange={() => setMethod("mobile")}
                        />
                        Mobile
                    </label>
                </div>

                {/* Email / Mobile */}
                <div className="border-b pb-1 mb-6">
                    <input
                        type="text"
                        placeholder={method === "email" ? "Enter email" : "Enter mobile number"}
                        className="outline-none w-full text-sm"
                    />
                </div>

                {/* Captcha */}
                <div className="border-b pb-1 mb-6">
                    <input
                        type="text"
                        placeholder="Enter captcha"
                        className="outline-none w-full text-sm"
                    />
                </div>

                <button
                    onClick={() => navigate("/verify-otp")}
                    className="w-full bg-gray-800 text-white py-2 rounded-md"
                >
                    Send OTP
                </button>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center text-white"
                style={{
                    background: "linear-gradient(180deg, #01518C 55.29%, #05426F 100%)",
                }}
            >
                <img src={loginIllustration} className="max-w-[350px]" />
            </div>
        </section>
    );
};

export default ForgotPassword;
