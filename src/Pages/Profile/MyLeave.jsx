import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';

const MyLeave = () => {

    const [activeRow, setActiveRow] = useState(null);

    const leaveData = [
        { description: "Annual Leave", type: "Annual leave", start: "01-01-2024", end: "03-01-2024", status: "Approved" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
        { description: "Family Vacation", type: "Annual leave", start: "05-05-2025", end: "10-05-2025", status: "Apply" },
    ];

    return (
        <section className="bg-white overflow-hidden">

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
                            className={`cursor-pointer  hover:bg-gray-100 ${activeRow === i ? "bg-[#D3D7E3]" : "bg-gray-50"
                                }`}
                        >
                            <td className="px-5 py-3 inter">{item.description}</td>
                            <td className="px-5 py-3 inter">{item.type}</td>
                            <td className="px-5 py-3 inter">{item.start}</td>
                            <td className="px-5 py-3 inter">{item.end}</td>
                            <td className="px-5 py-3 text-[#505579] font-medium inter">{item.status}</td>
                            <td className='flex gap-3 px-5 py-3'>
                                <RiEdit2Fill className='text-[#4FADFF] text-lg' />
                                <MdDelete className='text-lg text-red-500' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    );
};

export default MyLeave;
