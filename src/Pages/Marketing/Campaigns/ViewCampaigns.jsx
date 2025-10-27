import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'

const ViewCampaigns = () => {
    const campaigns = [
        {
            id: 1,
            campaignOwner: "Joel",
            type: "Email",
            campaignName: "Rohit Verma",
           
            startDate: "2025-10-01",
            endDate: "2025-10-15",
            expectedRevenue: "₹50,000",
            budgetedCost: "₹10,000",
            actualCost: "₹8,500",
            expectedResponse: "100 Leads",
            numbersSent: "500",
           
        },
        // Add more campaigns as needed
    ];

    return (
        <>
            <Topnav />
            <PageNav title="All Campaigns" btn="Create Campaigns" path="/create-campaigns" />
            <section className="p-4">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#001B48] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Campaign Owner</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Campaign Name</th>
                               
                                <th className="px-4 py-3 text-left text-sm font-semibold">Start Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">End Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Expected Revenue</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Budgeted Cost</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Actual Cost</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Expected Response</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Numbers Sent</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign, index) => (
                                <tr
                                    key={campaign.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                >
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.campaignOwner}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.type}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.campaignName}</td>
                                  
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.startDate}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.endDate}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.expectedRevenue}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.budgetedCost}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.actualCost}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.expectedResponse}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{campaign.numbersSent}</td>
                                  
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ViewCampaigns
