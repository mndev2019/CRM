import React from "react";
import Topnav from "../Component/Topnav";
import {
    FaChartLine,
    FaUserPlus,
    FaBullseye,
    FaPercent,
    FaDownload,
} from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";

const Dashboard = () => {
    return (
        <>
            <Topnav />
            <div className=" min-h-screen pb-10">
                {/* ===== HEADER SECTION ===== */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 p-6 rounded-b-3xl shadow-sm border-b">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold">Welcome back 👋</h1>
                            <p className="text-gray-500">Here’s your sales performance dashboard</p>
                        </div>
                        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition">
                            <FaDownload /> Download Report
                        </button>
                    </div>
                </div>

                {/* ===== STAT CARDS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6">
                    <StatCard
                        icon={<FaChartLine size={26} className="text-blue-600" />}
                        title="Total Sales"
                        value="₹4,52,000"
                        bg="bg-blue-50"
                    />
                    <StatCard
                        icon={<FaUserPlus size={26} className="text-green-600" />}
                        title="New Leads"
                        value="152"
                        bg="bg-green-50"
                    />
                    <StatCard
                        icon={<FaBullseye size={26} className="text-yellow-600" />}
                        title="Opportunities"
                        value="87"
                        bg="bg-yellow-50"
                    />
                    <StatCard
                        icon={<FaPercent size={26} className="text-purple-600" />}
                        title="Conversion Rate"
                        value="38%"
                        bg="bg-purple-50"
                    />
                </div>

                {/* ===== CHART & ACTIVITY ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-6">
                    {/* Chart Section */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                            <AiOutlineRise className="text-blue-600" /> Monthly Sales Overview
                        </h2>
                        <div className="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-lg border border-dashed">
                            📊 Chart will go here
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Recent Activities
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b text-gray-500">
                                        <th className="py-3">Lead</th>
                                        <th className="py-3">Status</th>
                                        <th className="py-3">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: "Amit Sharma", status: "Follow-up", date: "17 Oct 2025" },
                                        { name: "Priya Verma", status: "Converted", date: "16 Oct 2025" },
                                        { name: "Rahul Mehta", status: "New", date: "15 Oct 2025" },
                                        { name: "Neha Kapoor", status: "Follow-up", date: "14 Oct 2025" },
                                    ].map((item, idx) => (
                                        <tr
                                            key={idx}
                                            className="border-b last:border-none hover:bg-gray-50 transition"
                                        >
                                            <td className="py-3 font-medium text-gray-700">{item.name}</td>
                                            <td className="py-3">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${item.status === "Converted"
                                                        ? "bg-green-100 text-green-700"
                                                        : item.status === "Follow-up"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-blue-100 text-blue-700"
                                                        }`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="py-3 text-gray-500">{item.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const StatCard = ({ icon, title, value, bg }) => (
    <div
        className={`p-5 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer ${bg} flex items-center gap-4`}
    >
        <div className="p-3 bg-white rounded-full shadow">{icon}</div>
        <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
    </div>
);

export default Dashboard;
