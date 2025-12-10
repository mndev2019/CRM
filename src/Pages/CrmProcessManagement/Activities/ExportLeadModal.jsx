import React from "react";
import { useState } from "react";
import "../../../App.css";
import { RiMenu3Line } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

const ExportLeadModal = ({ open, onClose }) => {
    if (!open) return null;

    const [exportScope, setExportScope] = useState("included");
    const allFields = [
        "City",
        "Company",
        "Country",
        "Created By",
        "Lead Name",
        "Lead Source",
    ];

    const selectedFields = [
        { label: "Email", color: "bg-[#FFF7CC]" },
        { label: "Phone Number", color: "bg-[#FFE1CC]" },
        { label: "City", color: "bg-[#E8FFD2]" },
        { label: "Lead Source", color: "bg-[#DDE9FF]" },
        { label: "Address 1", color: "bg-[#FFDDF2]" },
    ];

    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
            <div className="w-full max-w-3xl rounded-xl bg-white shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#E4E4E7] px-6 py-3">
                    <h2 className="text-lg font-semibold text-[#1F1F1F]">Export Lead</h2>
                    <button
                        onClick={onClose}
                        className="text-2xl leading-none text-[#777] hover:text-black"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 py-4">
                    {/* Select data to export */}
                    <div className="mb-3 rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] px-4 py-3">
                        <p className="mb-2 text-sm font-semibold text-[#363636]">
                            Select data to export
                        </p>
                        <div className="flex flex-col gap-2 text-sm text-[#363636]">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="exportScope" value="all"
                                    checked={exportScope === "all"}
                                    onChange={(e) => setExportScope(e.target.value)} className="h-4 w-4" />
                                <span>All Fields</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="exportScope"
                                    className="h-4 w-4"
                                    value="included"
                                    checked={exportScope === "included"}
                                    onChange={(e) => setExportScope(e.target.value)}
                                    defaultChecked
                                />
                                <span>Included Fields Only (10)</span>
                            </label>
                        </div>
                    </div>

                    {/* Fields section */}
                    {exportScope === "included" && (<div className="grid gap-6 md:grid-cols-2">
                        {/* Left: Select Fields */}
                        <div className=" rounded-lg border border-[#E4E4E7] bg-white p-4">
                            <p className="mb-3 text-sm font-semibold text-[#363636]">
                                Select Fields
                            </p>

                            {/* Search */}
                            <div className="mb-3 px-3 flex items-center rounded border border-[#E4E4E7]">
                                <BiSearchAlt className="text-[#9CA3AF]" />
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="w-full px-2 py-1 text-sm outline-none placeholder:text-[#9CA3AF]"
                                />
                            </div>

                            {/* Checkbox list */}
                            <div className="overflow-y-auto thin-scrollbar h-[150px] flex flex-col gap-2 text-sm text-[#363636]">
                                {allFields.map((field) => (
                                    <label
                                        key={field}
                                        className="flex items-center gap-2 rounded px-1 py-1 hover:bg-[#F3F4F6]"
                                    >
                                        <input
                                            type="checkbox"
                                            defaultChecked={["City", "Lead Source"].includes(field)}
                                            className="h-4 w-4"
                                        />
                                        <span>{field}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Right: Selected Fields */}
                        <div className="rounded-lg border border-[#E4E4E7] bg-white p-3">
                            <div className="mb-3 flex flex-col">
                                <p className="text-sm font-semibold text-[#363636]">
                                    Selected Fields
                                </p>
                                <span className="text-[11px] text-[#6B7280] pt-2">
                                    Rearrange items to sort
                                </span>
                            </div>

                            <div className="flex-1 overflow-y-auto thin-scrollbar h-[150px] flex flex-col gap-2">
                                {selectedFields.map((item) => (
                                    <div
                                        key={item.label}
                                        className={`${item.color} w-[90%] flex items-center justify-between rounded-md px-3 py-1 text-sm text-[#363636]`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {/* drag handle */}

                                            <RiMenu3Line className="font-inter cursor-grab text-[16px] text-[#363636]" />

                                            <span>{item.label}</span>
                                        </div>
                                        {/* remove */}
                                        <button className="text-xl leading-none text-[#363636] hover:text-[#363636]">
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>)}
                </div>

                {/* Footer */}
                <div className="flex justify-end border-t border-[#E4E4E7] px-6 py-2">
                    <button className="rounded-md bg-[#2563EB] px-4 py-2 text-md font-semibold text-white hover:bg-[#1D4ED8]">
                        Export
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExportLeadModal;

