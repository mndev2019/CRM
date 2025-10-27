import React from "react";
import Topnav from "../../Component/Topnav";
import PageNav from "../../Component/PageNav";
import { FaFilePdf, FaCheckCircle, FaSolarPanel, FaMapMarkerAlt } from "react-icons/fa";

const DealDetail = () => {
  const dealData = {
    dealName: "Industrial Solar Plant - Kanpur Unit",
    dealOwner: "Neeta Sharma",
    company: "Holsol India Pvt. Ltd.",
    contactPerson: "Ravi Verma",
    systemCapacity: "250 kW",
    installationType: "Rooftop",
    location: "Kanpur, Uttar Pradesh",
    amount: "₹35,00,000",
    expectedSavings: "₹5,00,000 / year",
    stage: "Proposal Sent",
    probability: "70%",
    forecast: "Best Case",
    closingDate: "2025-12-01",
    projectStart: "2026-01-10",
    description:
      "Proposal for installation of a 250 kW rooftop solar power system for an industrial client in Kanpur. Includes system design, panels, inverters, and installation.",
    quotation: [
      { name: "Holsol_Proposal_250kW.pdf", url: "#" },
      { name: "Site_Assessment_Report.pdf", url: "#" },
    ],
    stages: ["Lead Captured", "Site Survey", "Proposal Sent", "Negotiation"],
  };

  const activeStageIndex = dealData.stages.indexOf(dealData.stage);

  return (
    <>
      <Topnav />
      <PageNav title="View Deal" btn="Create Deal" path="/create-deal" />

      <section className="p-6">
        {/* Deal Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-yellow-200">
          <div className="flex items-center gap-2 mb-4">
            <FaSolarPanel className="text-yellow-500 text-xl" />
            <h2 className="text-lg font-semibold text-[#001B48]">Project Overview</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div><strong>Deal Name:</strong> {dealData.dealName}</div>
            <div><strong>Deal Owner:</strong> {dealData.dealOwner}</div>
            <div><strong>Client / Company:</strong> {dealData.company}</div>
            <div><strong>Contact Person:</strong> {dealData.contactPerson}</div>
            <div><strong>System Capacity:</strong> {dealData.systemCapacity}</div>
            <div><strong>Installation Type:</strong> {dealData.installationType}</div>
            <div><strong>Location:</strong> <FaMapMarkerAlt className="inline text-yellow-500" /> {dealData.location}</div>
            <div><strong>Estimated Cost:</strong> {dealData.amount}</div>
            <div><strong>Expected Savings:</strong> {dealData.expectedSavings}</div>
            <div><strong>Probability:</strong> {dealData.probability}</div>
            <div><strong>Forecast:</strong> {dealData.forecast}</div>
            <div><strong>Expected Close Date:</strong> {dealData.closingDate}</div>
            <div><strong>Project Start:</strong> {dealData.projectStart}</div>
          </div>
        </div>

        {/* Deal Progress */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-yellow-200">
          <h2 className="text-lg font-semibold text-[#001B48] mb-4">Project Progress</h2>

          <div className="flex items-center justify-between relative">
            {dealData.stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center text-xs md:text-sm">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    index <= activeStageIndex
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  <FaCheckCircle size={12} />
                </div>
                <span
                  className={`mt-2 ${
                    index === activeStageIndex
                      ? "text-yellow-600 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {stage}
                </span>
              </div>
            ))}

            {/* Progress Line */}
            <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-300 z-0">
              <div
                className="h-[2px] bg-yellow-500"
                style={{
                  width: `${(activeStageIndex / (dealData.stages.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Quotations */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-yellow-200">
          <h2 className="text-lg font-semibold text-[#001B48] mb-4">Attached Documents</h2>
          {dealData.quotation.length > 0 ? (
            <ul className="space-y-3">
              {dealData.quotation.map((file, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border p-3 rounded-md hover:bg-yellow-50"
                >
                  <div className="flex items-center gap-2">
                    <FaFilePdf className="text-red-500" />
                    <span>{file.name}</span>
                  </div>
                  <a
                    href={file.url}
                    className="text-yellow-600 text-sm font-medium hover:underline"
                  >
                    View / Download
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">No documents attached.</p>
          )}
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-yellow-200">
          <h2 className="text-lg font-semibold text-[#001B48] mb-4">Description / Notes</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{dealData.description}</p>
        </div>
      </section>
    </>
  );
};

export default DealDetail;
