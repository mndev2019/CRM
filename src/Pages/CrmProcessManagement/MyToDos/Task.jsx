import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";

import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegPlusSquare } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

import { TbFileExport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import task from '../../../assets/Images/task.png'


const Task = () => {
    const navigate = useNavigate();
    const [showDotsMenu, setShowDotsMenu] = useState(false);

    const statusClasses = {
        Processing: "bg-[#FFC4A4] text-[#FF5112]",
        Completed: "bg-[#EFFFF0] text-[#049B1D]",
        Failed: "bg-[#FDD7D7] text-[#FF1212]",
        Pending: "bg-[#FFF7CC] text-[#C49A00]",
    };

    return (
        <>
            <Topnav
                title="Tasks"
                subtitle="View and manage all tasks in your system."
                icon={task}
            />

            <section className="p-6 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="rounded-[12px] border border-[#EDEEF4] p-3">
                    {/* ---------- Filter Row ---------- */}
                    <div className="flex justify-between py-2 border-b-2 border-[#EDEEF4]">
                        <div className="flex gap-3 items-center relative">
                            <div className="flex gap-1 items-center">
                                <FaRegPlusSquare />
                                <h2 className="inter font-mediun text-[18px]">
                                    Filter
                                </h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label className="inter text-[16px]">Select All</label>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center relative">

                            {/* Create Lead Button */}
                            <button
                                onClick={() => navigate('/create-task')}
                                className="bg-[#8693FF] hover:bg-[#7785f5] transition text-white nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4 shadow-sm"
                            >
                                <GoPlus className="text-[18px]" />
                                Add Task
                            </button>

                            {/* 3 Dots Button */}
                            <HiOutlineDotsVertical
                                onClick={() => {
                                    setShowDotsMenu(!showDotsMenu);
                                    // setShowCreateMenu(false);
                                }}
                                className="cursor-pointer text-[#8693FF] border border-[#8693FF] rounded-[4px] p-1 text-3xl"
                            />



                            {/* ---------------- 3 DOTS IMPORT / EXPORT MENU ---------------- */}
                            {showDotsMenu && (
                                <div className="bg-white absolute top-12 right-0 rounded-[4px] shadow z-20 w-44">

                                    <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                                        <TbFileExport size={18} /> Export Task
                                    </p>
                                </div>
                            )}

                        </div>


                    </div>
                    <div className="flex items-center justify-end py-3">



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


                        </div>
                    </div>

                    {/* ---------- Table ---------- */}
                    <div className=" overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-[#F9EBFF] border-b border-[#EDEEF4] inter font-semibold">
                                    <th className="p-3 w-10 ">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="p-3 text-left border-r border-[#363636]">Subject</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Associated To</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Status</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Task Id</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Due Date</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Created By</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Task Owner</th>
                                    <th className="p-3 text-left border-r border-[#363636]">Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                {[
                                    {
                                        Subject: "kamal kishore",
                                        AssociatedTo: "Kamal Kishore",
                                        Status: "Completed",
                                        TaskId: "T10001",
                                        DueDate: "12/10/25 05:30 AM",
                                        CreatedBy: "Admin",
                                        TaskOwner: "Admin"
                                    },

                                ].map((item, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-[#EDEEF4] transition intertext-[16px] hover:bg-[#EDEEF4]"
                                    >
                                        <td className="p-3 w-10">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="p-3">{item.Subject}</td>
                                        <td className="p-3">{item.AssociatedTo}</td>
                                        <td className="py-4 px-3 border-b-2 border-[#EDEEF4]">
                                            <span
                                                className={`px-3 py-1 rounded-[6px] text-[16px] font-semibold nunito ${statusClasses[item.Status]}`}
                                            >
                                                {item.Status}
                                            </span>
                                        </td>
                                        <td className="p-3">{item.TaskId}</td>
                                        <td className="p-3 break-all">{item.DueDate}</td>
                                        <td className="p-3">{item.CreatedBy}</td>
                                        <td className="p-3">{item.TaskOwner}</td>
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



            </section>
        </>
    );
};

export default Task;
