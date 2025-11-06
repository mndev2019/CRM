import React, { useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "info@ramot.cloud" && password === "Ramot@2025") {
      navigate('/dashboard');
    } else {
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-5">
      <div className="w-full max-w-sm backdrop-blur-xl bg-white/20 shadow-2xl rounded-2xl p-8 border border-white/30">
        
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {errorMsg && (
            <p className="text-red-300 text-sm text-center bg-red-500/20 py-2 rounded-lg">
              {errorMsg}
            </p>
          )}

          {/* Email */}
          <div className="space-y-1">
            <label className="text-white font-medium">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 border border-white/40 rounded-lg px-3 py-2 bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-white font-medium">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80" size={18} />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 border border-white/40 rounded-lg px-3 py-2 bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter your password"
                required
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/80"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg text-lg shadow-md hover:bg-blue-50 transition transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white/80 mt-4 text-sm">
          © 2025 Ramot CRM
        </p>
      </div>
    </div>
  );
};

export default Login;
