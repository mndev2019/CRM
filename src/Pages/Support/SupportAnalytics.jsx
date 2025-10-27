import React from 'react'
import Topnav from '../../Component/Topnav'
import PageNav from '../../Component/PageNav'


const SupportAnalytics = () => {
    // Mock data
    const summary = {
        totalTickets: 120,
        resolvedTickets: 95,
        openTickets: 15,
        overdueTickets: 10,
        averageResolutionTime: "14 hrs",
        slaComplianceRate: "88%",
    }

    const agentPerformance = [
        { id: 1, name: "Anita Verma", ticketsHandled: 40, resolved: 35, avgTime: "12 hrs", compliance: "92%" },
        { id: 2, name: "Rohit Mehta", ticketsHandled: 30, resolved: 28, avgTime: "15 hrs", compliance: "86%" },
        { id: 3, name: "Deepak Yadav", ticketsHandled: 25, resolved: 22, avgTime: "18 hrs", compliance: "80%" },
        { id: 4, name: "Kavita Sharma", ticketsHandled: 15, resolved: 10, avgTime: "20 hrs", compliance: "70%" },
    ]

    return (
        <>
            <Topnav/>
            <PageNav title="Support Analytics" btn="View Tickets" path="/view-tickets" />

            <section className="p-4">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
                    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-[#001B48]">
                        <h3 className="text-sm text-gray-500">Total Tickets</h3>
                        <p className="text-2xl font-semibold text-[#001B48]">{summary.totalTickets}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-green-500">
                        <h3 className="text-sm text-gray-500">Resolved</h3>
                        <p className="text-2xl font-semibold text-green-600">{summary.resolvedTickets}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-yellow-500">
                        <h3 className="text-sm text-gray-500">Open</h3>
                        <p className="text-2xl font-semibold text-yellow-600">{summary.openTickets}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-red-500">
                        <h3 className="text-sm text-gray-500">Overdue</h3>
                        <p className="text-2xl font-semibold text-red-600">{summary.overdueTickets}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500">
                        <h3 className="text-sm text-gray-500">Avg Resolution</h3>
                        <p className="text-2xl font-semibold text-blue-600">{summary.averageResolutionTime}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-indigo-500">
                        <h3 className="text-sm text-gray-500">SLA Compliance</h3>
                        <p className="text-2xl font-semibold text-indigo-600">{summary.slaComplianceRate}</p>
                    </div>
                </div>

                {/* Agent Performance Table */}
                <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-x-auto">
                    <h3 className="text-lg font-semibold text-[#001B48] px-4 py-3 border-b">Agent Performance</h3>
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#001B48] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Agent Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Tickets Handled</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Resolved</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Avg Resolution Time</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">SLA Compliance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agentPerformance.map((agent, index) => (
                                <tr
                                    key={agent.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                >
                                    <td className="px-4 py-3 text-sm text-gray-700">{agent.name}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{agent.ticketsHandled}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{agent.resolved}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{agent.avgTime}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{agent.compliance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* SLA Compliance Summary */}
                <div className="mt-6 bg-white shadow-md rounded-lg p-4 border-l-4 border-indigo-600">
                    <h3 className="text-lg font-semibold text-[#001B48] mb-2">SLA Compliance Summary</h3>
                    <p className="text-sm text-gray-700">
                        Out of <span className="font-semibold">{summary.totalTickets}</span> total tickets, 
                        <span className="font-semibold text-blue-600"> {summary.slaComplianceRate}</span> met SLA targets. 
                        Currently, <span className="font-semibold text-red-500">{summary.overdueTickets}</span> tickets are overdue.
                    </p>
                </div>
            </section>
        </>
    )
}

export default SupportAnalytics
