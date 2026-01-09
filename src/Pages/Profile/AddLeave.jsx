import React, { useState } from 'react'
import Topnav from '../../Component/Topnav'
import MyLeave from './MyLeave'
import leave from '../../assets/Images/leave.png'

const AddLeave = () => {
    const [active, setActive] = useState("My Leave")

    return (
        <>
            <Topnav
                title="My Report Subscriptions"
                subtitle="Manage your report subscriptions"
                icon={leave}
            />

            <section className="px-4 md:px-10 py-6 md:py-8 bg-white rounded-bl-2xl rounded-br-2xl space-y-6">
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <div className="w-full border border-[#EDEEF4] rounded-[6px] py-5 px-4 md:px-10">

                            {/* Tabs */}
                            <div className="flex gap-4 flex-wrap mb-4">
                                {["My Leave", "Add New Leave"].map((itm) => (
                                    <button
                                        key={itm}
                                        onClick={() => setActive(itm)}
                                        className={`nunito font-bold text-[18px] text-black ${active === itm ? "border-b-3 border-[#4FADFF]" : ""}`}
                                    >
                                        {itm}
                                    </button>
                                ))}
                            </div>

                            {/* ADD NEW LEAVE */}
                            {active === "Add New Leave" && (
                                <div className="mt-6 space-y-5">

                                    {/* Leave Type */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:items-center">
                                        <label className="text-sm font-medium text-gray-700">
                                            Leave Type <span className="text-red-500">*</span>
                                        </label>
                                        <select className="md:col-span-3 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring focus:ring-blue-300">
                                            <option>Select Leave Type</option>
                                            <option>Annual Leave</option>
                                            <option>Medical Leave</option>
                                            <option>Family Leave</option>
                                        </select>
                                    </div>

                                    {/* Start Date */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:items-center">
                                        <label className="text-sm font-medium text-gray-700">
                                            Start Date <span className="text-red-500">*</span>
                                        </label>
                                        <div className="md:col-span-3 flex flex-col md:flex-row gap-3">
                                            <input
                                                type="date"
                                                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:ring focus:ring-blue-300"
                                            />
                                            <div className="flex items-center gap-1">
                                                <input type="checkbox" className="w-4 h-4" />
                                                <span className="text-sm whitespace-nowrap">Half Day ?</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* End Date */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:items-center">
                                        <label className="text-sm font-medium text-gray-700">
                                            End Date <span className="text-red-500">*</span>
                                        </label>
                                        <div className="md:col-span-3 flex flex-col md:flex-row gap-3">
                                            <input
                                                type="date"
                                                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:ring focus:ring-blue-300"
                                            />
                                            <div className="flex items-center gap-1">
                                                <input type="checkbox" className="w-4 h-4" />
                                                <span className="text-sm whitespace-nowrap">Half Day ?</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Duties Taken Over By */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:items-center">
                                        <label className="text-sm font-medium text-gray-700">
                                            Duties taken over by
                                        </label>
                                        <select className="md:col-span-3 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring focus:ring-blue-300">
                                            <option>Select Employee</option>
                                            <option>John Doe</option>
                                            <option>Raja Gupta</option>
                                            <option>Sneha Tiwari</option>
                                            <option>Farhan Ali</option>
                                            <option>Reema Jain</option>
                                            <option>Rajat Patel</option>
                                            <option>Alice Johnson</option>
                                            <option>Meera Singh</option>
                                        </select>
                                    </div>

                                    {/* Reason for Leave */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:items-start">
                                        <label className="text-sm font-medium text-gray-700">
                                            Reason for leave <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            rows="3"
                                            className="md:col-span-3 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                                            placeholder="Enter your reason"
                                        />
                                    </div>

                                    {/* Attachment */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:items-center">
                                        <label className="text-sm font-medium text-gray-700">
                                            Attachment (if any)
                                        </label>
                                        <div className="md:col-span-3">
                                            <input type="file" className="hidden" id="attachment-upload" />
                                            <label
                                                htmlFor="attachment-upload"
                                                className="cursor-pointer bg-[#4F5DFF] text-white text-sm px-5 py-2 rounded-md inline-flex items-center gap-2"
                                            >
                                                📁 UPLOAD
                                            </label>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button className="border border-[#4F5DFF] text-[#4F5DFF] rounded-md px-5 py-2 text-sm font-semibold">
                                            APPLY LEAVE
                                        </button>
                                        <button className="bg-[#4F5DFF] text-white rounded-md px-5 py-2 text-sm font-semibold">
                                            SAVE AS DRAFT
                                        </button>
                                    </div>

                                </div>
                            )}

                            {/* MY LEAVE */}
                            {active === "My Leave" && <MyLeave />}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddLeave
