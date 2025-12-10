import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import newlead from "../../../assets/Images/newlead.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegPlusSquare } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { CiEraser } from "react-icons/ci";
import { LuFileInput } from "react-icons/lu";
import { TbFileExport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Coustomer = () => {
    const navigate = useNavigate();
    const [showCreateMenu, setShowCreateMenu] = useState(false);
    const [showDotsMenu, setShowDotsMenu] = useState(false);
    const [activityDate, setActivityDate] = useState("");

    const statusClasses = {
        Active: "bg-[#EFFFF0] text-[#049B1D]",
        Inactive: "bg-[#FDD7D7] text-[#FF1212]",
        Pending: "bg-[#FFF7CC] text-[#C49A00]",
    };

    return (
        <>
            <Topnav
                title="Accounts"
                subtitle="View and manage all customer accounts."
                icon={newlead}
            />

            <section className="p-6 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="rounded-[12px] border border-[#EDEEF4] p-3">

                    {/* ---------- Filter Row ---------- */}
                    <div className="flex justify-between py-2 border-b-2 border-[#EDEEF4]">
                        <div className="flex gap-2 items-center">
                            <FaRegPlusSquare />
                            <h2 className="inter font-mediun text-[18px]">Filter</h2>
                        </div>

                        <div className="flex gap-1 items-center relative">
                            {/* Create Account Button */}
                            <button
                                onClick={() => {
                                    setShowCreateMenu(!showCreateMenu);
                                    setShowDotsMenu(false);
                                }}
                                className="bg-[#8693FF] hover:bg-[#7785f5] transition text-white nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4 shadow-sm"
                            >
                                <GoPlus className="text-[18px]" />
                                Create Account
                            </button>

                            {/* 3 Dots */}
                            <HiOutlineDotsVertical
                                onClick={() => {
                                    setShowDotsMenu(!showDotsMenu);
                                    setShowCreateMenu(false);
                                }}
                                className="cursor-pointer text-[#8693FF] border border-[#8693FF] rounded-[4px] p-1 text-3xl"
                            />

                            {/* Create Account Menu */}
                            {showCreateMenu && (
                                <div className="bg-white absolute top-12 left-0 rounded-[4px] shadow z-20 w-40">
                                    <p
                                        onClick={() => navigate('/create-account')}
                                        className="nunito font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-5 cursor-pointer"
                                    >
                                        Add New Account
                                    </p>
                                </div>
                            )}

                            {/* Import/Export Menu */}
                            {showDotsMenu && (
                                <div className="bg-white absolute top-12 right-0 rounded-[4px] shadow z-20 w-44">
                                    <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                                        <LuFileInput size={18} /> Import Accounts
                                    </p>
                                    <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                                        <TbFileExport size={18} /> Export Accounts
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ---------- Filter Section ---------- */}
                    <div className="flex items-center justify-between py-3">

                        {/* Left Section */}
                        <div className="flex items-center gap-3">
                            <select
                                className="bg-white border border-[#EDEEF4] px-4 py-2 rounded-[6px] text-sm text-gray-700 cursor-pointer outline-none"
                                value={activityDate}
                                onChange={(e) => setActivityDate(e.target.value)}
                            >
                                <option value="Account Activity">Account Activity</option>
                                <option>Today</option>
                                <option>Yesterday</option>
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                            </select>

                            <button
                                onClick={() => setActivityDate("Account Activity")}
                                className="text-gray-700 text-[16px] font-light"
                            >
                                ✕
                            </button>

                            <button className="flex items-center gap-1 bg-[#FDD7D8] border-2 border-[#FFA4AD] text-[#FF1216] text-[16px] px-3 py-1 rounded-md">
                                <CiEraser className="text-[16px]" /> Clear
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <FiSearch className="absolute left-2 top-1.5 text-[#898484]" size={15} />
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="border-b border-[#4C4646] pl-7 pb-1 text-sm w-44 outline-none placeholder-[#898484] inter"
                                />
                            </div>

                            <p className="text-[#706D6D] text-[16px] flex items-center gap-1 inter font-medium">
                                Total:
                                <span className="border border-[#858585] px-2 rounded-[4px] text-[15px]">3</span>
                            </p>
                        </div>
                    </div>

                    {/* ---------- Accounts Table ---------- */}
                    <div className="overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-[#FFE4EC] border-b border-[#EDEEF4] inter font-semibold">
                                    <th className="p-3 w-10">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="p-3 text-left border-r border-[#363636]">Account Name</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Email</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Phone</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Owner</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Industry</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Status</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    {
                                        name: "Lacco Legal",
                                        email: "contact@lacco.com",
                                        phone: "9876543210",
                                        owner: "Muskan",
                                        industry: "Legal Services",
                                        status: "Active",
                                    },
                                    {
                                        name: "GeekOox Solutions",
                                        email: "info@geekoox.com",
                                        phone: "9123456789",
                                        owner: "Admin",
                                        industry: "IT Company",
                                        status: "Pending",
                                    },
                                    {
                                        name: "Human Animal Land",
                                        email: "help@hal.org",
                                        phone: "8899776655",
                                        owner: "Muskan",
                                        industry: "Non-Profit",
                                        status: "Inactive",
                                    },
                                ].map((item, i) => (
                                    <tr key={i} className="border-b border-[#EDEEF4] hover:bg-[#EDEEF4]">
                                        <td className="p-3 w-10"><input type="checkbox" /></td>
                                        <td className="p-3">{item.name}</td>
                                        <td className="p-3 break-all">{item.email}</td>
                                        <td className="p-3">{item.phone}</td>
                                        <td className="p-3">{item.owner}</td>
                                        <td className="p-3">{item.industry}</td>
                                        <td className="py-4 px-3">
                                            <span className={`px-3 py-1 rounded-[6px] text-[16px] font-semibold nunito ${statusClasses[item.status]}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="p-3 flex items-center gap-3">
                                            {/* Edit Icon */}
                                            <AiFillEdit
                                                className="text-blue-600 cursor-pointer hover:scale-110 transition"
                                                size={20}
                                            />

                                            {/* Delete Icon */}
                                            <AiFillDelete
                                                className="text-red-600 cursor-pointer hover:scale-110 transition"
                                                size={20}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section >
        </>
    );
};

export default Coustomer;
