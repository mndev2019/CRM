import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'

const ViewMeeting = () => {
    const meeting = [
        {
            id: 1,
            title: "Demo",
            from: "18/10/2025 02:39 AM",
            to: "18/10/2025 03:39 AM",
            relatedto: "Printing Dimention",
            contactname: "Joel",
            host: "Daniel"
        },

    ];
    return (
        <>
            <Topnav />
            <PageNav title="View Meeting" btn="Create Meeting" path="/create-meeting" />
            <section className="p-4">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#001B48] text-white">
                            <tr>

                                <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">From</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">To</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Related To</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Contact Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Host</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meeting.map((meeting, index) => (
                                <tr
                                    key={meeting.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                >

                                    <td className="px-4 py-3 text-sm text-gray-700">{meeting.title}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{meeting.from}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{meeting.to}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{meeting.relatedto}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{meeting.contactname}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{meeting.host}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ViewMeeting
