import React from "react";
import Topnav from "../../../Component/Topnav";
import PageNav from "../../../Component/PageNav";

const ViewTask = () => {
    // Sample data for each status
    const notStarted = [
        {
            title: "Register for upcoming CRM Webinar",
            date: "17/10/2025",
            priority: "Low",
            assignedBy: "Joel",
            assignedTo: "Kris Marrier (Sample)",
            company: "King (Sample)",
        },
    ];

    const deferred = [];

    const inProgress = [
        {
            title: "Refer CRM Videos",
            date: "19/10/2025",
            priority: "Normal",
            assignedBy: "Joel",
            assignedTo: "Mitsue Tollner (Sample)",
            company: "Morlong Associates",
        },
        {
            title: "Refer CRM Videos",
            date: "19/10/2025",
            priority: "Normal",
            assignedBy: "Joel",
            assignedTo: "Mitsue Tollner (Sample)",
            company: "Morlong Associates",
        },
    ];

    const completed = [
        {
            title: "Submit Project Report",
            date: "18/10/2025",
            priority: "High",
            assignedBy: "Joel",
            assignedTo: "Kris Marrier (Sample)",
            company: "King (Sample)",
        },
    ];

    const waitingInput = [];

    // Reusable component for task column
    const TaskColumn = ({ title, tasks }) => (
        <div className={`bg-[#E0F7F4] rounded-lg shadow p-4 min-h-[250px]`}>
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-[#001B48]">{title}</h2>
                <span className="bg-[#001B48] text-white text-xs font-medium px-2 py-1 rounded-full">
                    {tasks.length}
                </span>
            </div>

            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div
                        key={index}
                        className="bg-white p-3 rounded-md mb-3 shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="text-sm font-semibold mb-1">{task.title}</h3>
                        <p className="text-xs text-gray-600">{task.date}</p>
                        <p className="text-xs text-gray-600">{task.priority}</p>
                        <p className="text-xs text-gray-600">{task.assignedBy}</p>
                        <p className="text-xs text-gray-600">{task.assignedTo}</p>
                        <p className="text-xs text-gray-600">{task.company}</p>
                    </div>
                ))
            ) : (
                <div className="text-center text-gray-500 text-sm py-10 bg-white rounded-md">
                    No Tasks
                </div>
            )}
        </div>
    );

    return (
        <>
            <Topnav />
            <PageNav title="View Task" btn="Create Task" path="/create-task" />

            <div className="p-6 bg-gray-100 min-h-screen">
                {/* Task Status Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <TaskColumn title="Not Started" tasks={notStarted} />
                    <TaskColumn title="Deferred" tasks={deferred} />
                    <TaskColumn title="In Progress" tasks={inProgress} />
                    <TaskColumn title="Completed" tasks={completed} />
                    <TaskColumn title="Waiting for Input" tasks={waitingInput} />
                </div>
            </div>
        </>
    );
};

export default ViewTask;
