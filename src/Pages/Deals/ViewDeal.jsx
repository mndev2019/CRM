import React from "react";
import Topnav from "../../Component/Topnav";
import PageNav from "../../Component/PageNav";
import { FaFilePdf, FaCheckCircle, FaSolarPanel, FaMapMarkerAlt } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const ViewDeal = () => {
    const navigate = useNavigate();
    const deals = [
        {
            id: 1,
            dealName: "Industrial Solar Plant - Kanpur Unit",
            company: "Holsol India Pvt. Ltd.",
            location: "Kanpur, Uttar Pradesh",
            stage: "Proposal Sent",
            amount: "₹35,00,000",
            systemCapacity: "250 kW",
        },
        {
            id: 2,
            dealName: "Commercial Solar Plant - Lucknow",
            company: "SunPower Pvt. Ltd.",
            location: "Lucknow, Uttar Pradesh",
            stage: "Site Survey",
            amount: "₹22,00,000",
            systemCapacity: "150 kW",
        },
        {
            id: 3,
            dealName: "Rooftop Solar Project - Kanpur",
            company: "Holsol India Pvt. Ltd.",
            location: "Kanpur, Uttar Pradesh",
            stage: "Lead Captured",
            amount: "₹10,00,000",
            systemCapacity: "50 kW",
        },
    ];



    return (
        <>
            <Topnav />
            <PageNav title="All Deal" btn="Create Deal" path="/create-deal" />
            <section className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deals.map((deal) => (
                        <div
                            key={deal.id}
                            className="bg-white rounded-xl shadow-md p-6 border border-yellow-200 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <FaSolarPanel className="text-yellow-500 text-xl" />
                                <h2 className="text-lg font-semibold text-[#001B48]">{deal.dealName}</h2>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Company:</strong> {deal.company}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Location:</strong> <FaMapMarkerAlt className="inline text-yellow-500" /> {deal.location}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Stage:</strong> {deal.stage}
                            </p>
                            <p className="text-sm text-gray-600 mb-3">
                                <strong>System Capacity:</strong> {deal.systemCapacity}
                            </p>
                            <button
                                onClick={()=> navigate('/deal-detail')}
                                className="bg-yellow-500 text-white px-3 text-sm py-1 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ViewDeal;
