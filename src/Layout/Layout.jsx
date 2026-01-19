
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import Sidebar from "./Sidebar";
import CRMChatbot from "../Component/CRMChatbot";
import logo from '../assets/Images/logo.png'

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("token") ?? null;


    React.useEffect(() => {
        if (token) {
            navigate('/dashboard')
        } else {
            navigate('/login');
        }
    }, [token, navigate]);
    return (
        <div className="flex h-screen overflow-hidden">

            {/* 🔹 MOBILE OVERLAY */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* 🔹 SIDEBAR */}
            <div
                className={`
          fixed lg:static z-50
          h-full
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
            >
                <Sidebar closeSidebar={() => setSidebarOpen(false)} />
            </div>

            {/* 🔹 MAIN CONTENT */}
            <div className="flex-1 flex flex-col overflow-y-auto">

                {/* 🔹 MOBILE HEADER */}
                <div className="
                  flex lg:hidden 
                   items-center gap-3 
                        p-4 
                       bg-[linear-gradient(90deg,rgba(235,247,255,0.35)_0%,#FDF4FF_100%)]
                    shadow
                     ">

                    <button onClick={() => setSidebarOpen(true)}>
                        <HiMenu size={26} />
                    </button>
                    <img src={logo} className="h-[50px]" />

                    {/* <h2 className="font-bold text-lg text-[#083560]">
                        RAMOT CRM
                    </h2> */}
                </div>

                {/* 🔹 PAGE CONTENT */}
                <main className="md:p-3 p-1 lg:p-5">
                    <Outlet />
                </main>

                <CRMChatbot />
            </div>
        </div>
    );
};

export default Layout;

