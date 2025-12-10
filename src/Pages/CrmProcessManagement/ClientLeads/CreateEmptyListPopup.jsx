import React from "react";

const CreateEmptyListPopup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-[#2235584D] bg-opacity-40 flex justify-center items-center z-50">
            
            <div className="bg-white w-[700px] rounded-[8px] shadow-lg relative">
                
                {/* HEADER */}
                <div className="flex justify-between items-center border-b border-[#EDEEF4] px-6 py-4 bg-white backdrop-blur-sm">
                    <h2 className="text-xl font-semibold">Create Empty List</h2>
                    <button
                        onClick={onClose}
                        className="text-2xl font-light hover:text-gray-600"
                    >
                        ✕
                    </button>
                </div>

                {/* BODY */}
                <div className="px-6 py-6">
                    <label className="text-[18px] font-medium text-[#5C5B5B] inter">List Name</label>
                    <input
                        type="text"
                        className="border-2 border-[#EDEEF4] w-full mt-2 p-2 rounded-[4px] outline-none focus:border-blue-500"
                    />

                    <label className="text-[18px] font-medium text-[#5C5B5B] inter mt-5 block">
                        Description
                    </label>
                    <textarea
                        className="border-2 border-[#EDEEF4] w-full mt-2 p-2 rounded-[4px] h-32 outline-none focus:border-blue-500 resize-none"
                    ></textarea>
                </div>

                {/* FOOTER */}
                <div className="flex justify-end gap-4 border-t border-[#EDEEF4] px-6 py-4">
                    <button
                        onClick={onClose}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Cancel
                    </button>

                    <button className="bg-[#2F6BFF] text-white px-5 py-2 rounded-md hover:bg-[#2558d4]">
                        Create list
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CreateEmptyListPopup;
