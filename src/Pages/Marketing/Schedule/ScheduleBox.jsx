import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ScheduleBox = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="border border-[#EDEEF4] rounded-[6px] ">
            <h2 className="inter font-semibold text-[14px]  p-4">
                Schedule your date and time
            </h2>
            <div className="flex gap-5">
                {/* LEFT SIDE */}

                <div className="w-[400px] border-r border-[#EDEEF4] p-4 bg-[#F7F7F8]">
                    <h3 className="text-sm font-medium mb-3 inter">
                        Select Send-On Date
                    </h3>
                    <p className="text-[14px] inter text-[#4C4646] mb-3">
                        Choose the date when this email should be sent.
                    </p>

                    {/* Calendar */}
                    <Calendar
                        onChange={setDate}
                        value={date}
                        className="border rounded-md p-2"
                    />

                    {/* Time Section */}
                    <div className="mt-6">
                        <h4 className="text-sm font-medium mb-3 inter">
                            Select Send-On Time
                        </h4>
                        <p className="text-[14px] inter text-[#4C4646] mb-3">
                            How long do you wish email to wait before it's sent?
                        </p>

                        {/* <div className="flex gap-2 mb-4">
                            {["Hours", "Minutes", "Seconds"].map((label) => (
                                <input
                                    key={label}
                                    placeholder="00"
                                    className="w-16 h-9 border rounded text-center text-sm"
                                />
                            ))}
                            <select className="h-9 border rounded px-2 text-sm">
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                            <button className="bg-blue-600 text-white px-4 rounded text-sm">
                                Set
                            </button>
                        </div> */}
                        <div>
                            {/* Heading */}
                            <h3 className="text-[18px] font-medium mb-1">
                                Select Send-On Time
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                How long do you need this email to wait before it’s sent?
                            </p>

                            {/* Labels */}
                            <div className="flex gap-4 items-end">
                                {/* Hours */}
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-gray-700 mb-1">Hours</span>
                                    <input
                                        placeholder="00"
                                        className="w-14 h-10 bg-[#9ED0FF] text-white text-center text-lg rounded-md border border-[#5AA9FF]"
                                    />
                                </div>

                                {/* Minutes */}
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-gray-700 mb-1">Minutes</span>
                                    <input
                                        placeholder="00"
                                        className="w-14 h-10 bg-[#9ED0FF] text-white text-center text-lg rounded-md border border-[#5AA9FF]"
                                    />
                                </div>

                                {/* Seconds */}
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-gray-700 mb-1">Seconds</span>
                                    <input
                                        placeholder="00"
                                        className="w-14 h-10 bg-[#9ED0FF] text-white text-center text-lg rounded-md border border-[#5AA9FF]"
                                    />
                                </div>

                                {/* Mode */}
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-gray-700 mb-1">Mode</span>
                                    <select className="w-14 h-10 bg-[#9ED0FF] text-white text-center text-sm rounded-md border border-[#5AA9FF]">
                                        <option>AM</option>
                                        <option>PM</option>
                                    </select>
                                </div>

                                {/* Set Button */}
                                <div className="flex flex-col justify-end">
                                    <span className="invisible mb-1">Set</span>
                                    <button className="px-4 h-10 bg-[#005F9E] text-white rounded-[2px] text-[14px] inter font-medium border border-[#000000]">
                                        Set
                                    </button>
                                </div>
                            </div>

                        </div>


                        {/* Suggested Times */}
                        <p className="text-[14px] inter font-medium my-2">
                            What time works best?
                        </p>

                        <div className="space-y-2">
                            {["05:00 PM", "05:00 PM", "07:00 PM"].map((time, index) => (
                                <button
                                    key={index}
                                    className={`w-full py-2 rounded-[2px] text-sm ${index !== 1
                                        ? "bg-[#8FD4FF] text-blue-700"
                                        : "border border-[#A6A4A4]"
                                        }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1 border border-[#CBCBCB]">
                    <div className="bg-[#006BAE] text-white text-[16px] inter font-medium px-4 py-2 text-center">
                        View
                    </div>

                    <div className=" space-y-3 text-sm">
                        <div className="bg-[#E8F6FF] px-3 py-2 inter font-medium text-[14px]">
                            December 1, 2025
                        </div>

                        {[
                            "12:00 AM",
                            "01:00 AM",
                            "10:00 AM",
                            "01:00 AM",
                            "01:00 AM",
                        ].map((time, index) => (
                            <div
                                key={index}
                                className="border-b border-[#EDEEF4] pb-2 px-3 text-[#4C4646] text-[14px] font-medium inter"
                            >
                                {time}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ScheduleBox;
