import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import newlead from "../../../assets/Images/newlead.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChevronDown, HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegPlusSquare } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { CiEraser } from "react-icons/ci";
import { LuFileInput } from "react-icons/lu";
import { TbFileExport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const PendingLead = () => {
    const navigate = useNavigate();
    const [showCreateMenu, setShowCreateMenu] = useState(false);
    const [showDotsMenu, setShowDotsMenu] = useState(false);

    const statusClasses = {
        Processing: "bg-[#FFC4A4] text-[#FF5112]",
        Completed: "bg-[#EFFFF0] text-[#049B1D]",
        Failed: "bg-[#FDD7D7] text-[#FF1212]",
        Pending: "bg-[#FFF7CC] text-[#C49A00]",
    };
    const [activityDate , setactivityDate] = useState("");
    return (
        <>
            <Topnav
                title="Leads With Pending Tasks"
                subtitle="View and organize every leads with pending tasks added to your pipeline."
                icon={newlead}
            />

            <section className="p-6 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="rounded-[12px] border border-[#EDEEF4] p-3">
                    {/* ---------- Filter Row ---------- */}
                    <div className="flex justify-between py-2 border-b-2 border-[#EDEEF4]">
                        <div className="flex gap-2 items-center ">
                            <FaRegPlusSquare />
                            <h2 className="inter font-mediun text-[18px]">
                                Filter
                            </h2>
                        </div>
                        <div className="flex gap-1 items-center relative">

                            {/* Create Lead Button */}
                            <button
                                onClick={() => {
                                    setShowCreateMenu(!showCreateMenu);
                                    setShowDotsMenu(false);
                                }}
                                className="bg-[#8693FF] hover:bg-[#7785f5] transition text-white nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4 shadow-sm"
                            >
                                <GoPlus className="text-[18px]" />
                                Create Lead
                            </button>

                            {/* 3 Dots Button */}
                            <HiOutlineDotsVertical
                                onClick={() => {
                                    setShowDotsMenu(!showDotsMenu);
                                    setShowCreateMenu(false);
                                }}
                                className="cursor-pointer text-[#8693FF] border border-[#8693FF] rounded-[4px] p-1 text-3xl"
                            />

                            {/* ---------------- CREATE LEAD MENU ---------------- */}
                            {showCreateMenu && (
                                <div className="bg-white absolute top-12 left-0 rounded-[4px] shadow z-20 w-40">
                                    <p onClick={() => navigate('/create-lead')} className="nunito font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-5 cursor-pointer">
                                        Quick add lead
                                    </p>
                                    <p onClick={() => navigate('/create-lead')} className="nunito font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-5 cursor-pointer">
                                        Add new lead
                                    </p>
                                </div>
                            )}

                            {/* ---------------- 3 DOTS IMPORT / EXPORT MENU ---------------- */}
                            {showDotsMenu && (
                                <div className="bg-white absolute top-12 right-0 rounded-[4px] shadow z-20 w-44">
                                    <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                                        <LuFileInput className="" size={18} /> Import Leads
                                    </p>
                                    <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                                        <TbFileExport size={18} /> Export Leads
                                    </p>
                                </div>
                            )}

                        </div>


                    </div>
                    <div className="flex items-center justify-between py-3">

                        {/* ---------------- LEFT SECTION ---------------- */}
                        <div className="flex items-center gap-3">

                            {/* Lead Activity Date Dropdown */}
                            <select
                                className="bg-white border border-[#EDEEF4] px-4 py-2 rounded-[6px] text-sm text-gray-700 cursor-pointer outline-none "
                                value={activityDate}
                                onChange={(e)=> setactivityDate(e.target.value)}
                            >
                              
                                <option value="Lead Activity Date">Lead Activity Date</option>
                                  <option value="">Custom Range</option>
                                <option>Today</option>
                                <option>Yesterday</option>
                                <option>Last 7 Days</option>
                                <option>Last 14 Days</option>
                                <option>Last 30 Days</option>
                                <option>This Month</option>
                                <option>Last Range</option>
                            </select>

                            {/* Today Badge */}
                            {/* <div className="bg-[#E8EAF5] text-gray-700 px-3 py-2 rounded-md text-sm border border-gray-300">
                                Today
                            </div> */}

                            {/* X icon */}
                            <button onClick={()=>setactivityDate("Lead Activity Date") } className="text-gray-700 text-[16px] font-light">
                                ✕
                            </button>

                            {/* Clear Red Button */}
                            <button className="flex items-center gap-1 bg-[#FDD7D8] border-2 border-[#FFA4AD] text-[#FF1216] text-[16px] px-3 py-1 rounded-md">
                                <span className="text-[16px]"><CiEraser />
                                </span> Clear
                            </button>
                        </div>

                        {/* ---------------- RIGHT SECTION ---------------- */}
                        <div className="flex items-center gap-6">

                            {/* Search Input */}
                            <div className="relative">
                                <FiSearch className="absolute left-2 top-1.5 text-[#898484]" size={15} />

                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="border-b border-[#4C4646] pl-7 pb-1 text-sm w-44 outline-none placeholder-[#898484] inter "
                                />
                            </div>

                            {/* Total */}
                            <p className="text-[#706D6D] text-[16px] flex items-center gap-1 inter font-medium">
                                Total:
                                <span className="border border-[#858585] px-2 rounded-[4px] text-[15px]">2</span>
                            </p>
                        </div>
                    </div>

                    {/* ---------- Table ---------- */}
                    <div className=" overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-[#FFF3E4] border-b border-[#EDEEF4] inter font-semibold">
                                    <th className="p-3 w-10 ">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="p-3 text-left border-r border-[#363636]">Lead Name</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Company</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Phone</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Email</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Country</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Status</th>
                                </tr>
                            </thead>


                            <tbody>
                                {[
                                    {
                                        name: "Carissa Kidman",
                                        company: "Oh my Goodknits",
                                        phone: "555-555-5555",
                                        email: "carisssa@noemail.com",
                                        country: "India",
                                        status: "Pending"
                                    },
                                    {
                                        name: "Crissa Kidman",
                                        company: "Oh my Goodknits",
                                        phone: "555-555-5555",
                                        email: "carisssa@noemail.com",
                                        country: "India",
                                        status: "Pending"
                                    },
                                ].map((item, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-[#EDEEF4] transition intertext-[16px] hover:bg-[#EDEEF4]"
                                    >
                                        <td className="p-3 w-10">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="p-3">{item.name}</td>
                                        <td className="p-3">{item.company}</td>
                                        <td className="p-3">{item.phone}</td>
                                        <td className="p-3 break-all">{item.email}</td>
                                        <td className="p-3">{item.country}</td>
                                        <td className="py-4 px-3 border-b-2 border-[#EDEEF4]">
                                            <span
                                                className={`px-3 py-1 rounded-[6px] text-[16px] font-semibold nunito ${statusClasses[item.status]}`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



            </section>
        </>
    );
};

export default PendingLead;
