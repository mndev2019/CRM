import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'

const ViewTicket = () => {
    const tickets = [
        {
            id: 1,
            clientName: "Rahul Sharma",
            email: "rahul.sharma@example.com",
            phone: "9876543210",
            priority: "High",
            status: "In Progress",
            assignedTo: "Anita Verma",
            createdDate: "2025-10-01",
            updatedDate: "2025-10-05",
            attachment: "invoice_issue.pdf",
        },
        {
            id: 2,
            clientName: "Priya Singh",
            email: "priya.singh@example.com",
            phone: "9876501234",
            priority: "Medium",
            status: "Resolved",
            assignedTo: "Rohit Mehta",
            createdDate: "2025-09-28",
            updatedDate: "2025-10-02",
            attachment: "warranty_doc.jpg",
        },
    ];

    return (
        <>
            <Topnav />
            <PageNav title="All Tickets" btn="Create Ticket" path="/create-ticket" />

            <section className="p-4">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#001B48] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Client Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Priority</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Assigned To</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Created Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Updated Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Attachment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((ticket, index) => (
                                <tr
                                    key={ticket.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                >
                                    <td className="px-4 py-3 text-sm text-gray-700">{ticket.clientName}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{ticket.email}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{ticket.phone}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{ticket.priority}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{ticket.status}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{ticket.assignedTo}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{ticket.createdDate}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{ticket.updatedDate}</td>
                                    <td className="px-4 py-3 text-sm text-blue-600 underline cursor-pointer hover:text-blue-800">
                                        {ticket.attachment}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ViewTicket
