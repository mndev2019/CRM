import React, { useState } from 'react'
import Topnav from '../../../Component/Topnav'
import task from '../../../assets/Images/task.png'

const CreateTask = () => {
    const [tasktype, settasktype] = useState("");

    return (
        <>
            <Topnav
                title="Create Task"
                subtitle="Add a new task and organize your workflow efficiently."
                icon={task}
            />

            <section className="p-3 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">

                {/* ===================== TOP ROW ===================== */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">

                    {/* Owner */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Owner*</label>
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                            <select className="w-full sm:flex-1 border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
                                <option value="admin">Admin</option>
                                <option value="user1">User 1</option>
                                <option value="user2">User 2</option>
                            </select>

                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-gray-700">Calendar Invite</span>
                        </div>
                    </div>

                    {/* Associated Lead */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Associated Lead</label>
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                            <select className="w-full sm:flex-1 border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
                                <option value="">Type to Search</option>
                                <option value="lead1">Lead 1</option>
                                <option value="lead2">Lead 2</option>
                            </select>

                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-gray-700">Calendar Invite</span>
                        </div>
                    </div>

                    {/* Task Type */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Task Type*</label>
                        <select
                            value={tasktype}
                            onChange={(e) => settasktype(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        >
                            <option value="">Select Task Type</option>
                            <option value="meeting">Meeting</option>
                            <option value="followup">Follow-up</option>
                            <option value="phonecall">Phone Call</option>
                        </select>
                    </div>

                </div>

                {/* ===================== FORM FIELDS BELOW ===================== */}
                <div className="mt-6 space-y-6">

                    {/* Subject */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Subject*</label>
                        <input
                            type="text"
                            placeholder={tasktype === "meeting" ? "Meeting :" : ""}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Location</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* Schedule */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Schedule*</label>
                        <div className="flex flex-wrap gap-3">

                            <input
                                type="date"
                                className="w-full sm:w-auto border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                            <input
                                type="time"
                                className="w-full sm:w-auto border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                            <span className="text-gray-600">to</span>
                            <input
                                type="date"
                                className="w-full sm:w-auto border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                            <input
                                type="time"
                                className="w-full sm:w-auto border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />

                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Description</label>
                        <textarea
                            rows={3}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        ></textarea>
                    </div>

                </div>

                {/* ===================== SAVE BUTTON ===================== */}
                <div className=" mt-8">
                    <button className="bg-[#2A75FF] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
                        Save
                    </button>
                </div>

            </section>
        </>
    )
}

export default CreateTask
