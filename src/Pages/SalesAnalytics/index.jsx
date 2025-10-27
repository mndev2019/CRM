import React from "react";
import { FaDollarSign, FaChartLine, FaUsers, FaRegFileAlt, FaCheckCircle } from "react-icons/fa";
import Topnav from "../../Component/Topnav";
import PageNav from "../../Component/PageNav";

const SalesAnalytics = () => {
  // Sample data (replace with real API/backend data)
  const analyticsData = {
    totalDeals: 45,
    wonDeals: 28,
    lostDeals: 10,
    pendingDeals: 7,
    conversionRate: "62%",
    totalRevenue: "₹1,20,00,000",
    forecastRevenue: "₹1,50,00,000",
  };

  const metrics = [
    { title: "Total Deals", value: analyticsData.totalDeals, icon: <FaUsers className="text-yellow-500 text-2xl" /> },
    { title: "Won Deals", value: analyticsData.wonDeals, icon: <FaCheckCircle className="text-green-500 text-2xl" /> },
    { title: "Lost Deals", value: analyticsData.lostDeals, icon: <FaRegFileAlt className="text-red-500 text-2xl" /> },
    { title: "Pending Deals", value: analyticsData.pendingDeals, icon: <FaChartLine className="text-blue-500 text-2xl" /> },
    { title: "Conversion Rate", value: analyticsData.conversionRate, icon: <FaChartLine className="text-purple-500 text-2xl" /> },
    { title: "Total Revenue", value: analyticsData.totalRevenue, icon: <FaDollarSign className="text-green-500 text-2xl" /> },
    { title: "Forecast Revenue", value: analyticsData.forecastRevenue, icon: <FaDollarSign className="text-yellow-500 text-2xl" /> },
  ];

  return (
    <>
    <Topnav/>
    <PageNav title="Sales Analytics Dashboard" btn={false}/>
    <div className=" space-y-6">
      
      <p className="text-gray-600">Track performance metrics, conversion ratios, and revenue forecast.</p>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-yellow-200 hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4"
          >
            <div className="flex-shrink-0">{metric.icon}</div>
            <div>
              <h2 className="text-gray-500 text-sm">{metric.title}</h2>
              <p className="text-2xl font-bold text-[#001B48] mt-1">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Overview Section */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-yellow-200 mt-6">
        <h2 className="text-xl font-semibold text-[#001B48] mb-4">Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
          <p><strong>Total Deals:</strong> {analyticsData.totalDeals}</p>
          <p><strong>Won Deals:</strong> {analyticsData.wonDeals}</p>
          <p><strong>Lost Deals:</strong> {analyticsData.lostDeals}</p>
          <p><strong>Pending Deals:</strong> {analyticsData.pendingDeals}</p>
          <p><strong>Conversion Rate:</strong> {analyticsData.conversionRate}</p>
          <p><strong>Total Revenue:</strong> {analyticsData.totalRevenue}</p>
          <p><strong>Forecast Revenue:</strong> {analyticsData.forecastRevenue}</p>
        </div>
      </div>

      {/* Optional Notes / CTA Section */}
      <div className="bg-yellow-50 rounded-xl shadow-md p-6 border border-yellow-200 mt-6">
        <h2 className="text-lg font-semibold text-[#001B48] mb-2">Next Steps</h2>
        <p className="text-gray-700 text-sm">
          Focus on high-potential leads to improve conversion rate and achieve forecast revenue. Regularly track deal stages to ensure timely closure.
        </p>
      </div>
    </div>
    </>
    
  );
};

export default SalesAnalytics;
