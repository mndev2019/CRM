import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'

const ViewCall = () => {
    const call = [
        {
            id: 1,
            subject: "Follow up with Lead",
            calltype: "Outbound",
            callstarttime: "18/10/2025 12:39 AM",
            callduration: "50:01",
            relatedto: "Joel",
            contactname: "Joel",
            callowner: "Daniel",
        },

    ];
    return (
        <>
            <Topnav />
            <PageNav title="View Call" btn="Create Call" path="/create-call" />
            <section className="p-4">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#001B48] text-white">
                            <tr>

                                <th className="px-4 py-3 text-left text-sm font-semibold">Subject</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Call Type</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Call Start Time</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Call Duration</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Related To</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Contact Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Call Owner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {call.map((call, index) => (
                                <tr
                                    key={call.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                >

                                    <td className="px-4 py-3 text-sm text-gray-700">{call.subject}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{call.calltype}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{call.callstarttime}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{call.callduration}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{call.relatedto}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{call.contactname}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{call.callowner}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ViewCall
