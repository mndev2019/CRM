import React from "react";
import Topnav from "../../../Component/Topnav";
import websitewidget from "../../../assets/Images/globe 1.png";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CreateWidget = () => {
    const navigate = useNavigate();

    return (
        <>
            <Topnav
                title="Website Widget"
                subtitle="Lead captured via website widget. Action required to move forward in the pipeline."
                icon={websitewidget}
            />

            <section className="p-3 sm:p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="border border-[#EDEEF4] rounded-[12px] bg-white p-4 sm:p-6">

                    {/* Header */}
                    <h2 className="inter text-[18px] sm:text-[20px] font-bold pb-2 border-b border-[#EDEEF4]">
                        Topbar Widget
                    </h2>

                    {/* Name */}
                    <div className="mt-6">
                        <label className="text-[15px] sm:text-[16px] font-bold text-gray-700 mb-1 block">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* Design */}
                    <div className="mt-6">
                        <label className="text-[15px] sm:text-[16px] font-bold text-gray-700 mb-2 block">
                            Design
                        </label>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                            <div className="flex-1 bg-[#F25C3C] rounded-md px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                                <span className="text-white font-semibold">
                                    Your headline goes here.
                                </span>
                                <button className="bg-black text-white px-4 py-1 rounded-md text-sm">
                                    Click Here
                                </button>
                            </div>

                            <button
                                onClick={() => navigate('/edit-websitewidget')}
                                className="flex items-center gap-2 text-white px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto justify-center"
                                style={{
                                    background: "linear-gradient(0deg, #2A75FF 0%, #4FADFF 71.15%)",
                                }}
                            >
                                <FiEdit2 className="text-[16px]" />
                                Edit
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            This is a suggestive preview of the Topbar. To view the actual
                            Topbar, click on edit.
                        </p>
                    </div>

                    {/* Placement */}
                    <div className="mt-6 border border-[#EDEEF4] rounded-md p-4">
                        <label className="text-[15px] sm:text-[16px] font-bold text-gray-700 mb-3 block">
                            Placement
                        </label>

                        {/* Visibility */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                            <span className="text-sm font-semibold text-gray-600">
                                Visibility
                            </span>
                            <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none w-full sm:w-auto">
                                <option>All Webpages</option>
                                <option>Specific Pages</option>
                            </select>
                        </div>

                        {/* URL input */}
                        <div className="flex flex-col md:flex-row gap-2 mb-4">
                            <select className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-auto">
                                <option>http://</option>
                                <option>https://</option>
                            </select>

                            <input
                                type="text"
                                className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />

                            <button
                                style={{
                                    background: "linear-gradient(0deg, #FFAC1B 0%, #FFCD2A 71.15%)",
                                }}
                                className="text-black px-4 py-2 rounded-md w-full md:w-auto"
                            >
                                Add URL
                            </button>
                        </div>

                        {/* URL list placeholder */}
                        <div className="h-[140px] border border-gray-200 rounded-md bg-gray-50"></div>
                    </div>

                    {/* Duration */}
                    <div className="mt-6 border border-[#EDEEF4] rounded-md p-4">
                        <label className="text-[15px] sm:text-[16px] font-bold text-gray-700 mb-3 block">
                            Duration
                        </label>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-semibold text-gray-600">
                                    Show from
                                </span>
                                <input
                                    type="date"
                                    className="border border-gray-300 px-3 py-2 rounded-md"
                                />
                                <input
                                    type="time"
                                    className="border border-gray-300 px-3 py-2 rounded-md"
                                />
                            </div>

                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                                <input type="checkbox" defaultChecked />
                                No End Date
                            </label>
                        </div>

                        {/* Days */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
                            <span className="font-semibold">Do not show on</span>
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                <label key={day} className="flex items-center gap-1">
                                    <input type="checkbox" />
                                    {day}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3 border-t border-[#EDEEF4] pt-4">
                        <button className="px-5 py-2 border border-gray-300 rounded-md w-full sm:w-auto">
                            Cancel
                        </button>
                        <button onClick={()=> navigate('/show-widget')} className="px-5 py-2 bg-[#2A75FF] text-white rounded-md w-full sm:w-auto">
                            Save and Publish
                        </button>
                    </div>

                </div>
            </section>
        </>
    );
};

export default CreateWidget;
