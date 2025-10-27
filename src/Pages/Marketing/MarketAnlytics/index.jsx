import React from "react";
import Topnav from "../../../Component/Topnav";
import PageNav from "../../../Component/PageNav";
import { FaBullseye, FaChartLine, FaUserCheck } from "react-icons/fa";

const MarketAnalytics = () => {
  const analyticsData = {
    roi: "178%",
    topSources: [
      { source: "Google Ads", leads: 320, conversion: "32%" },
      { source: "Facebook Ads", leads: 210, conversion: "27%" },
      { source: "Organic Website", leads: 180, conversion: "42%" },
      { source: "Referrals", leads: 95, conversion: "51%" },
    ],
    campaignPerformance: [
      {
        name: "Solar Awareness Campaign",
        leads: 250,
        conversions: 80,
        conversionRate: "32%",
      },
      {
        name: "Eco Energy Drive",
        leads: 180,
        conversions: 65,
        conversionRate: "36%",
      },
      {
        name: "Green Future Initiative",
        leads: 300,
        conversions: 120,
        conversionRate: "40%",
      },
    ],
  };

  return (
    <>
      <Topnav />
      <PageNav
        title="Market Analytics"
        btn="Create Campaign"
        path="/create-campaigns"
      />

      <section className="p-4">
        {/* ROI Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#001B48]">
            <div className="flex items-center gap-4">
              <div className="bg-[#001B48] text-white p-3 rounded-full">
                <FaChartLine className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm text-gray-600">Overall ROI</h4>
                <p className="text-2xl font-bold text-[#001B48]">
                  {analyticsData.roi}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-600">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white p-3 rounded-full">
                <FaUserCheck className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm text-gray-600">Total Lead Sources</h4>
                <p className="text-2xl font-bold text-green-700">
                  {analyticsData.topSources.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-yellow-500">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500 text-white p-3 rounded-full">
                <FaBullseye className="text-xl" />
              </div>
              <div>
                <h4 className="text-sm text-gray-600">Active Campaigns</h4>
                <p className="text-2xl font-bold text-yellow-700">
                  {analyticsData.campaignPerformance.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Source Effectiveness */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#001B48] mb-4">
            Lead Source Effectiveness
          </h3>
          <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-[#001B48] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Total Leads</th>
                <th className="px-4 py-3 text-left">Conversion Rate</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.topSources.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-3">{item.source}</td>
                  <td className="px-4 py-3">{item.leads}</td>
                  <td className="px-4 py-3">{item.conversion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Campaign Conversion Table */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#001B48] mb-4">
            Campaign Conversion Performance
          </h3>
          <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-[#001B48] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Campaign Name</th>
                <th className="px-4 py-3 text-left">Leads</th>
                <th className="px-4 py-3 text-left">Conversions</th>
                <th className="px-4 py-3 text-left">Conversion Rate</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.campaignPerformance.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.leads}</td>
                  <td className="px-4 py-3">{item.conversions}</td>
                  <td className="px-4 py-3">{item.conversionRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MarketAnalytics;
