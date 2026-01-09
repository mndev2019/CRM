import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';

const MyLeave = () => {

    const [activeRow, setActiveRow] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const leaveData = [
        { description: "Annual Leave", type: "Annual leave", start: "01-01-2024", end: "03-01-2024", status: "Approved" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
    ];

    const visibleCards = showAll ? leaveData : leaveData.slice(0, 5);

    return (
        <section className="bg-white overflow-hidden">

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#5A6182] text-white text-sm inter font-semibold">
                            <th className="px-5 py-3">Leave Description</th>
                            <th className="px-5 py-3">Leave Type</th>
                            <th className="px-5 py-3">Start Date</th>
                            <th className="px-5 py-3">End Date</th>
                            <th className="px-5 py-3">Leave Status</th>
                            <th className="px-5 py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm text-gray-700">
                        {leaveData.map((item, i) => (
                            <tr
                                key={i}
                                onClick={() => setActiveRow(i)}
                                className={`cursor-pointer hover:bg-gray-100 ${
                                    activeRow === i ? "bg-[#D3D7E3]" : "bg-gray-50"
                                }`}
                            >
                                <td className="px-5 py-3 inter">{item.description}</td>
                                <td className="px-5 py-3 inter">{item.type}</td>
                                <td className="px-5 py-3 inter">{item.start}</td>
                                <td className="px-5 py-3 inter">{item.end}</td>
                                <td className="px-5 py-3 text-[#505579] font-medium inter">{item.status}</td>
                                <td className="px-5 py-3 flex gap-3">
                                    <RiEdit2Fill className="text-[#4FADFF] text-lg" />
                                    <MdDelete className="text-lg text-red-500" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= MOBILE CARDS ================= */}
            <div className="md:hidden space-y-4">
                {visibleCards.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => setActiveRow(i)}
                        className={`border border-[#EDEEF4] rounded-md p-4 space-y-2 cursor-pointer ${
                            activeRow === i ? "bg-[#D3D7E3]" : "bg-gray-50"
                        }`}
                    >
                        <div className="flex justify-between">
                            <span className="text-xs font-semibold text-gray-500">Leave Description</span>
                            <span className="text-sm inter">{item.description}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-xs font-semibold text-gray-500">Leave Type</span>
                            <span className="text-sm inter">{item.type}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-xs font-semibold text-gray-500">Start Date</span>
                            <span className="text-sm inter">{item.start}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-xs font-semibold text-gray-500">End Date</span>
                            <span className="text-sm inter">{item.end}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-xs font-semibold text-gray-500">Status</span>
                            <span className="text-sm font-medium text-[#505579]">{item.status}</span>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <RiEdit2Fill className="text-[#4FADFF] text-lg" />
                            <MdDelete className="text-lg text-red-500" />
                        </div>
                    </div>
                ))}

                {/* SEE ALL BUTTON */}
                {leaveData.length > 5 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="w-full text-center text-sm font-semibold text-[#4FADFF] py-2"
                    >
                        {showAll ? "See Less" : "See All"}
                    </button>
                )}
            </div>

        </section>
    );
};

export default MyLeave;
