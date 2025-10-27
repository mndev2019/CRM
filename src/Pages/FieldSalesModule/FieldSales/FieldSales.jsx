import React from "react";
import Topnav from "../../../Component/Topnav";
import PageNav from "../../../Component/PageNav";

const FieldSales = () => {
  // Dummy lead data for display
  const leads = [
    { id: 1, name: "John Doe", location: "Kanpur", isNearby: true },
    { id: 2, name: "Jane Smith", location: "Lucknow", isNearby: false },
    { id: 3, name: "Ravi Kumar", location: "Kanpur", isNearby: true },
  ];

  return (
    <>
      <Topnav />
      <PageNav title="Field Sales Module" />

      <div className="min-h-screen bg-gray-50 p-4 max-w-7xl mx-auto">
        {/* Quick Action Buttons */}
        <div className="flex justify-around bg-gray-100 p-4 rounded-lg my-4 flex-wrap gap-2">
          {["Add Lead", "Check In", "Check Out", "Offline Sync"].map((btn) => (
            <button
              key={btn}
              className="px-4 py-2 bg-[#001B48] text-white rounded hover:bg-[#001B48]/80"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Nearby Lead Deduction */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Nearby Leads</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white shadow rounded p-4 hover:shadow-lg transition"
              >
                <h2 className="font-semibold">{lead.name}</h2>
                <p>Location: {lead.location}</p>
                <p
                  className={`font-bold ${
                    lead.isNearby ? "text-green-600" : "text-gray-600"
                  }`}
                >
                  {lead.isNearby ? "Nearby" : "Far"}
                </p>
                <div className="mt-2 flex gap-2">
                  <button className="px-2 py-1 bg-green-500 text-white rounded">
                    Edit
                  </button>
                  <button className="px-2 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Lead Entry Form */}
        <div id="quickLeadForm" className="bg-white shadow rounded p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Quick Lead Entry</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Lead Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Location"
              className="border p-2 rounded"
            />
            <select className="border p-2 rounded">
              <option>Status</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Closed</option>
            </select>
            <button
              type="button"
              className="col-span-full px-4 py-2 bg-[#001B48] text-white rounded hover:bg-[#001B48]/80"
            >
              Add Lead
            </button>
          </form>
        </div>

        {/* Offline Sync Status */}
        <div className="bg-yellow-50 p-4 rounded mb-6 flex justify-between items-center">
          <span>Offline mode: 0 unsynced entries</span>
          <button className="px-3 py-1 bg-[#001B48] text-white rounded hover:bg-[#001B48]/80">
            Sync Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FieldSales;
