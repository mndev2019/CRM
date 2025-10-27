import React from "react";
import Topnav from "../../../Component/Topnav";
import PageNav from "../../../Component/PageNav";

const ViewLanding = () => {
  const leads =[
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahulsharma@gmail.com",
      phone: "9876543210",
      city: "Kanpur",
      state: "Uttar Pradesh",
      service: "Residential Solar",
      budget: "₹50,000 - ₹1,00,000",
      source: "Website",
      message: "Interested in rooftop solar panels.",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya.verma@gmail.com",
      phone: "8765432109",
      city: "Lucknow",
      state: "Uttar Pradesh",
      service: "Commercial Solar",
      budget: "₹1,00,000 - ₹5,00,000",
      source: "Google Ads",
      message: "Looking for commercial solar setup.",
    },
    {
      id: 3,
      name: "Amit Singh",
      email: "amit.singh@gmail.com",
      phone: "9988776655",
      city: "Delhi",
      state: "Delhi",
      service: "Maintenance",
      budget: "Below ₹50,000",
      source: "Referral",
      message: "Need solar panel cleaning and service.",
    },
  ]

  return (
    <>
      <Topnav />
      <PageNav
        title="View Landing Page"
        btn="Create Landing Page"
        path="/create-landing"
      />

      <section className="p-4">
        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] mb-4">
          Captured Leads
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg ">
          <table className="min-w-full border-collapse">
            <thead className="bg-[#001B48] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">City</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">State</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Service</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Budget</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Source</th>
                {/* <th className="px-4 py-3 text-center">Action</th> */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.length > 0 ? (
                leads.map((lead , index) => (
                  <tr
                    key={lead.id}
                   className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {lead.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{lead.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{lead.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{lead.city}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{lead.state}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{lead.service}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{lead.budget}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{lead.source}</td>
                    {/* <td className="px-4 py-3 text-center">
                      <button
                        className="bg-[#001B48] text-white px-3 py-1 rounded-md text-xs hover:bg-[#002f7a] transition"
                        onClick={() => alert(`Lead Details:\n\n${lead.message}`)}
                      >
                        View Details
                      </button>
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center text-gray-500 py-6 italic"
                  >
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ViewLanding;
