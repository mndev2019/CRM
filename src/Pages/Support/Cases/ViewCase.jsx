import React from "react";
import Topnav from "../../../Component/Topnav";
import PageNav from "../../../Component/PageNav";

const ViewCase = () => {
    const cases = [
        {
            id: 1,
            caseNumber: "CASE-001",
            caseOwner: "Joel",
            productName: "CRM Web App",
            status: "New",
            priority: "High",
            subject: "Login Issue",
            email: "john.doe@example.com",
            phone: "+91 9876543210",
        },
        {
            id: 2,
            caseNumber: "CASE-002",
            caseOwner: "Daniel",
            productName: "Email Module",
            status: "Closed",
            priority: "",
            subject: "Add email template feature",
            email: "alice@xyzcorp.com",
            phone: "+91 9123456780",
        },
        {
            id: 3,
            caseNumber: "CASE-003",
            caseOwner: "",
            productName: "",
            status: "Closed",
            priority: "-",
            subject: "Add email template feature",
            email: "alice@xyzcorp.com",
            phone: "+91 9123456780",
        },
    ];

    // Function to calculate data completeness percentage
    const calculateScore = (item) => {
        const fields = [
            item.caseNumber,
            item.caseOwner,
            item.productName,
            item.status,
            item.priority,
            item.subject,
            item.email,
            item.phone,
        ];

        const filled = fields.filter((f) => f && f.trim() !== "").length;
        return Math.round((filled / fields.length) * 100);
    };

    // Function to return color based on percentage
    const getColor = (percent) => {
        if (percent < 50) return "bg-red-500";
        if (percent < 80) return "bg-yellow-400";
        return "bg-green-500";
    };

    return (
        <>
            <Topnav />
            <PageNav title="Cases" btn="Create Case" path="/create-case" />

            <section className="p-4">
                <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] mb-4">
                    Case List
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-md text-sm">
                        <thead className="bg-[#001B48] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">#</th>
                                <th className="px-4 py-3 text-left">Case Number</th>
                                <th className="px-4 py-3 text-left">Case Owner</th>
                                <th className="px-4 py-3 text-left">Product Name</th>
                                <th className="px-4 py-3 text-left">Status</th>
                                <th className="px-4 py-3 text-left">Priority</th>
                                <th className="px-4 py-3 text-left">Subject</th>
                                <th className="px-4 py-3 text-left">Email</th>
                                <th className="px-4 py-3 text-left">Phone</th>
                                <th className="px-4 py-3 text-left">Score</th>
                                <th className="px-4 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {cases.map((item, index) => {
                                const score = calculateScore(item);
                                const color = getColor(score);

                                return (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                    >
                                        <td className="px-4 py-3">{index + 1}</td>
                                        <td className="px-4 py-3">{item.caseNumber}</td>
                                        <td className="px-4 py-3">{item.caseOwner || "-"}</td>
                                        <td className="px-4 py-3">{item.productName || "-"}</td>
                                        <td className="px-4 py-3">{item.status}</td>
                                        <td className="px-4 py-3">{item.priority || "-"}</td>
                                        <td className="px-4 py-3 whitespace-normal break-words">{item.subject}</td>
                                        <td className="px-4 py-3">{item.email}</td>
                                        <td className="px-4 py-3">{item.phone}</td>
                                        <td className="px-4 py-3 w-32">
                                            <div className="flex flex-col items-start">
                                                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                                                    <div
                                                        className={`${color} h-2.5 rounded-full transition-all`}
                                                        style={{ width: `${score}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-medium text-gray-700">{score}% Complete</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button className="text-blue-600 hover:underline mr-2">Edit</button>
                                            <button className="text-red-600 hover:underline">Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default ViewCase;
