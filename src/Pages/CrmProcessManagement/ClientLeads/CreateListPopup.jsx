import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const CreateListPopup = ({ onClose }) => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="fixed inset-0 bg-[#2235584D] bg-opacity-40 flex justify-center items-center z-50">

            <div className="bg-white w-[780px] rounded-lg shadow-xl relative">

                {/* Header */}
                <div className="flex justify-between items-center border-b border-[#EDEEF4] px-6 py-4 bg-white backdrop-blur-sm">
                    <h2 className="text-xl font-semibold">Create List</h2>
                    <button
                        onClick={onClose}
                        className="text-2xl font-light hover:text-gray-600"
                    >
                        ✕
                    </button>
                </div>

                {/* Add Conditions Title + Three-dot Menu */}
                <div className="flex justify-between items-center px-6 pt-5 pb-3 relative">
                    <h3 className="text-[18px] inter font-medium text-[#363636]">Add Conditions</h3>

                    {/* Three-dot button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 hover:bg-gray-100 rounded-md"
                    >
                        <BsThreeDotsVertical size={20} />
                    </button>

                    {/* 3-dot dropdown */}
                    {menuOpen && (
                        <div className="absolute right-6 top-12 bg-white shadow-md rounded-md border w-[150px] z-10">
                            <ul className="text-sm">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Add Condition</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Leads</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Save</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Select Boxes */}
                <div className="grid grid-cols-2 gap-6 px-6">

                    {/* First Select */}
                    <div>
                        <select
                            className="border-2 border-[#EDEEF4] rounded-[4px] p-3 w-full outline-none cursor-pointer"
                        >
                            <option value="">Select</option>
                            <option>Lead Activity</option>
                            <option>Task</option>
                            <option>Sales Group</option>
                            <option>Lead</option>
                            <option>Address 1</option>
                            <option>Address 2</option>
                        </select>
                    </div>

                    {/* Second Select */}
                    <div>
                        <select
                            className="border-2 border-[#EDEEF4] rounded-[4px] p-3 w-full outline-none cursor-pointer"
                        >
                            <option value="">Select</option>
                            <option>Is</option>
                            <option>Is Not</option>
                            <option>Contains</option>
                            <option>Does Not Contain</option>
                            <option>Starts With</option>
                            <option>Ends With</option>
                        </select>
                    </div>

                </div>


                {/* Textbox */}
                <div className="px-6 mt-6">
                    <input
                        type="text"
                        placeholder="Text here"
                        className="w-full border-2 border-[#EDEEF4] p-3 rounded-[4px]"
                    />
                </div>

                {/* Footer */}
                <div className="flex justify-end items-center gap-6 px-6 py-5 border-t border-[#EDEEF4] mt-6">
                    <button
                        onClick={onClose}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Cancel
                    </button>

                    <button className="bg-[#2F6BFF] text-white px-6 py-2 rounded-md hover:bg-[#2558d4]">
                       Create List
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CreateListPopup;
