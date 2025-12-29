import React from "react";

const AddRecepeints = () => {
    return (
        <div className="border border-[#CBCBCB] rounded-[3px]">
            {/* Header */}
            <h2 className="inter font-medium text-[16px] bg-[#E8F6FF] py-2 px-4">
                Add New Recipients
            </h2>

            {/* Form */}
            <div className="p-6 space-y-6">
                {/* Name */}
                <div className="flex items-center gap-6">
                    <label className="w-24 text-sm font-medium inter">Name</label>
                    <input
                        type="text"
                        className="flex-1 border border-[#CBCBCB] rounded-[3px] h-[38px] px-3 outline-none"
                    />
                </div>

                {/* Email */}
                <div className="flex items-center gap-6">
                    <label className="w-24 text-sm font-medium inter">Email</label>
                    <input
                        type="email"
                        className="flex-1 border border-[#D1D1D1] rounded-[3px] h-[38px] px-3 outline-none"
                    />
                </div>

                {/* Phone */}
                <div className="flex items-center gap-6">
                    <label className="w-24 text-sm font-medium inter">Phone</label>
                    <input
                        type="text"
                        className="flex-1 border border-[#D1D1D1] rounded-[3px] h-[38px] px-3 outline-none"
                    />
                </div>

                {/* Tag */}
                <div className="flex items-center gap-6">
                    <label className="w-24 text-sm font-medium inter">Tag</label>
                    <select className="flex-1 border border-[#D1D1D1] rounded-[3px] h-[38px] px-3 outline-none">
                        <option></option>
                    </select>
                </div>

                {/* Group */}
                <div className="flex items-center gap-6">
                    <label className="w-24 text-sm font-medium inter">Group</label>
                    <select className="flex-1 border border-[#D1D1D1] rounded-[3px] h-[38px] px-3 outline-none">
                        <option></option>
                    </select>
                </div>
               
            </div>
        </div>
    );
};

export default AddRecepeints;
