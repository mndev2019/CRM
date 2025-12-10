import React, { useState } from 'react';
import Topnav from '../../Component/Topnav';
import requesthiostry from '../../assets/Images/requesthiostry.png';

const RequestHiostry = () => {

    const [timeline, setTimeline] = useState("");

    const data = [
        { action: "Delete", date: "Sep 19, 2025", status: "Processing", by: "Team members" },
        { action: "Export", date: "Sep 19, 2025", status: "Processing", by: "Team members" },
        { action: "Bulk Delete", date: "Sep 19, 2025", status: "Completed", by: "Team members" },
        { action: "Delete", date: "Sep 19, 2025", status: "Processing", by: "Team members" },
        { action: "Delete", date: "Sep 19, 2025", status: "Failed", by: "Team members" },
        { action: "Delete", date: "Sep 19, 2025", status: "Processing", by: "Team members" },
        { action: "Delete", date: "Sep 19, 2025", status: "Processing", by: "Team members" },
        { action: "Bulk Delete", date: "Sep 19, 2025", status: "Completed", by: "Me" },
    ];

    const statusClasses = {
        Processing: "bg-[#FFC4A4] text-[#FF5112]",
        Completed: "bg-[#EFFFF0] text-[#049B1D]",
        Failed: "bg-[#FDD7D7] text-[#FF1212]",
    };

    return (
        <>
            <Topnav
                title="System Request History"
                subtitle="Monitor all system-generated and user-initiated requests in one place."
                icon={requesthiostry}
            />

            <section className="p-6 bg-white rounded-bl-2xl rounded-br-2xl">

                {/* Header */}
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='inter font-semibold text-[20px]'>Request History</h2>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="notifyMe" className="w-4 h-4 accent-blue-600 cursor-pointer" />
                        <label htmlFor="notifyMe" className="text-[16px] inter cursor-pointer">Notify me</label>
                    </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-3 gap-4 mb-6">

                    {/* Action Type */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[20px] inter font-semibold">Action Type</label>
                        <div className="relative">
                            <select className="w-full border-[3px] border-[#EDEEF4] rounded-[6px] px-3 py-2 appearance-none
                                text-[15px] cursor-pointer inter font-medium">
                                <option>All</option>
                                <option>Lead Import</option>
                                <option>Lead Export</option>
                                <option>Lead Bulk Update</option>
                                <option>Lead Assignment</option>
                                <option>Lead Report</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[18px]">▼</span>
                        </div>
                    </div>

                    {/* Initiated By */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[20px] inter font-semibold">Initiated By</label>
                        <div className="relative">
                            <select className="w-full border-[3px] border-[#EDEEF4] rounded-[6px] px-3 py-2 appearance-none
                                text-[15px] cursor-pointer inter font-medium">
                                <option>Team Members</option>
                                <option>Admins</option>
                                <option>Users</option>
                                <option>System</option>
                                <option>Specific User Names</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[18px]">▼</span>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-1 relative">
                        <label className="text-[20px] inter font-semibold">Timeline</label>
                        <div className="relative">
                            <select
                                value={timeline}
                                onChange={(e) => setTimeline(e.target.value)}
                                className="w-full border-[3px] border-[#EDEEF4] rounded-[6px] px-3 py-2 appearance-none
                                    text-[15px] cursor-pointer inter font-medium"
                            >
                                <option value="">All Time</option>
                                <option value="Custom">Custom</option>
                                <option value="Today">Today</option>
                                <option value="Yesterday">Yesterday</option>
                                <option value="Last 7 Days">Last 7 Days</option>
                                <option value="Last 14 Days">Last 14 Days</option>
                                <option value="Last 30 Days">Last 30 Days</option>
                                <option value="This Week">This Week</option>
                                <option value="This Month">This Month</option>
                                <option value="Custom Range">Custom Range</option>
                            </select>

                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[18px]">
                                ▼
                            </span>
                        </div>
                    </div>
                </div>

                {/* Show Date Range if needed */}
                {(timeline === "Custom" || timeline === "Custom Range") && (
                    <>
                        <div className='mb-6 bg-white p-4 rounded-xl shadow-md w-fit absolute right-[41px]'>
                            <div className=" flex items-end gap-4 ">

                                {/* To */}
                                <div className='flex gap-2 items-center'>
                                    <label className="text-[14px] inter">To:</label>
                                    <div className="border border-[#D9D9D9] px-3 py-2 rounded-md ">
                                        <input type="date" className="outline-none" />

                                    </div>
                                </div>

                                {/* From */}
                                <div className='flex gap-2 items-center'>
                                    <label className="text-[14px] inter">From:</label>
                                    <div className="border border-[#D9D9D9] px-3 py-2 rounded-md ">
                                        <input type="date" className="outline-none" />

                                    </div>
                                </div>


                            </div>
                            <div className='text-end mt-2'>
                                <button className="bg-[#1A73E8] text-white px-3 py-1 rounded-md">
                                    GO
                                </button>
                            </div>

                        </div>


                    </>

                )}

                {/* Table */}
                <table className="w-full border-separate border-spacing-y-3 border-2 border-[#EDEEF4]">
                    <thead>
                        <tr className="text-left text-[14px] inter font-semibold *:px-3">
                            <th>Action Type</th>
                            <th>Action Type</th>
                            <th>Status</th>
                            <th>Action Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="bg-white rounded-xl border-b border-[#EDEEF4] inter font-medium text-[#4C4646]">
                                <td className="py-4 px-3 border-b-2 border-[#EDEEF4]">{item.action}</td>
                                <td className="py-4 px-3 border-b-2 border-[#EDEEF4]">{item.date}</td>
                                <td className="py-4 px-3 border-b-2 border-[#EDEEF4]">
                                    <span
                                        className={`px-3 py-1 rounded-[6px] text-[16px] font-semibold nunito ${statusClasses[item.status]}`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-4 px-3 border-b-2 border-[#EDEEF4]">{item.by}</td>
                                <td className="py-4 px-3 text-gray-500 border-b-2 border-[#EDEEF4]">⋮</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </section>
        </>
    );
};

export default RequestHiostry;
