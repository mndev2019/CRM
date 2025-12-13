import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginIllustration from "../../assets/Images/loginside.png";
import login from '../../assets/Images/logonew.png'

const Signup = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created successfully!");
        navigate("/login");
    };

    return (
        <section className="h-screen grid grid-cols-2 overflow-hidden">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center px-20 bg-white">

                <img src={login} alt="logo" className="h-[50px] w-[150px] object-contain" />

                <h2 className="pt-10 pb-3 text-2xl font-extrabold mb-2 nunito text-black text-[28px]">
                    Create Your Account
                </h2>

                <p className="text-black text-sm mb-8 inter">
                    Sign up to access your personalized CRM dashboard.
                </p>

                {/* FORM */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-[18px] font-medium mb-1 inter">
                            Full Name
                        </label>
                        <div className="flex items-center border-b pb-1">
                            <input
                                type="text"
                                required
                                name="name"
                                className="outline-none w-full text-sm"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter full name"
                            />
                            <span className="text-gray-500 text-lg">
                                <i className="fa-regular fa-user"></i>
                            </span>
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-[18px] font-medium mb-1 inter">
                            Email Address
                        </label>
                        <div className="flex items-center border-b pb-1">
                            <input
                                type="text"
                                name="email"
                                required
                                className="outline-none w-full text-sm"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                            />
                            <span className="text-gray-500 text-lg">
                                <i className="fa-regular fa-envelope"></i>
                            </span>
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-[18px] font-medium mb-1 inter">
                            Password
                        </label>
                        <div className="border-b pb-1">
                            <input
                                type="password"
                                required
                                name="password"
                                className="outline-none w-full text-sm"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-black nunito font-bold text-[16px] mt-6">
                    Already have an account?{" "}
                    <span className="cursor-pointer text-[#5465F2]" onClick={() => navigate("/login")}>
                        Login
                    </span>
                </p>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div
                className="relative h-full flex flex-col items-center justify-center text-white text-center px-10"
                style={{ background: "linear-gradient(to bottom, #444A60 15%, #5C6290 91%)" }}
            >
                <img src={loginIllustration} alt="illustration" className="max-w-[400px]" />

                <h3 className="font-bold text-[23px] mb-2 nunito">
                    Create Your Account Easily
                </h3>

                <p className="text-[18px] text-gray-200 inter">
                    Sign up to start using the CRM and manage your business efficiently.
                </p>
            </div>
        </section>
    );
};

export default Signup;
