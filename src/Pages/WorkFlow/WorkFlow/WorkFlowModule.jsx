import React from "react";
import Topnav from "../../../Component/Topnav";
import PageNav from "../../../Component/PageNav";

const workflowSteps = [
    "Marketing Campaign → Generates Lead → Captured in Sales → Leads",
    "Sales Team → Updates stages → Creates Tasks → Converts to Deal",
    "Automation → Triggers emails, notifications, and reminders",
    "Support → Manages post-sale tickets and feedback",
    "Analytics → Consolidates performance and conversion reports",
];

const WorkFlowModule = () => {
    return (
        <>
         <Topnav/>
        <PageNav title="Work Flow"/>
        <div className="p-6 max-w-5xl mx-auto bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Workflow Overview</h1>
            <div className="space-y-6">
                {workflowSteps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded shadow hover:shadow-lg transition flex items-center gap-4"
                    >
                        <div className="w-8 h-8 flex items-center justify-center bg-[#001B48] text-white font-bold rounded-full">
                            {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
       
    );
};

export default WorkFlowModule;
