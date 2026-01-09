// import React from 'react'
// import Sidebar from './Sidebar'
// import { Outlet} from 'react-router-dom'
// import CRMChatbot from '../Component/CRMChatbot'

// const Layout = () => {
//     // const navigate = useNavigate();
//     // const token = localStorage.getItem("token") ?? null;
//     // useEffect(() => {
//     //     if (token) {
//     //         window.scrollTo(0, 0);
//     //         navigate(location.pathname)
//     //     } else {
//     //         navigate('/login');
//     //     }
//     // }, [token]);


//     return (
//         <>
//             <div className="flex h-screen">
//                 <div className="bg-transparent transition-all duration-300 flex-shrink-0 sticky top-0 overflow-y-auto overflow-x-hidden custom-scrollbar">
//                     <Sidebar />
//                 </div>
//                 <div className="w-[85%] flex-grow   h-full overflow-y-auto">
//                     <main className="p-5 pb-5 ">
//                         <Outlet />
//                     </main>

//                 </div>
//                   <CRMChatbot/>
//             </div>
//         </>
//     )
// }

// export default Layout
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import Sidebar from "./Sidebar";
import CRMChatbot from "../Component/CRMChatbot";
import logo from '../assets/Images/logo.png'

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
                    <img src={logo} className="h-[50px]"/>

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

