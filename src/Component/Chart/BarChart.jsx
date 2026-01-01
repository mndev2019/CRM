import React from "react";
import {
    BarChart as ReBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Qualified", value: 80 },
    { name: "Proposal", value: 85 },
    { name: "Negotiation", value: 50 },
    { name: "Converted", value: 40 },
    { name: "In Progress", value: 35 },
    { name: "Won", value: 100 },
    { name: "Closed", value: 50 },
];

const BarChart = () => {
    return (
        <>
            {/* Title */}
            <h3 className="nunito font-bold text-[16px] mb-3 text-[#4C4646]">
                Deals this month
            </h3>

            {/* Chart */}
            <div className="h-[220px] mt-20">
                <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="name"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip />
                        <Bar
                            dataKey="value"
                            fill="#FBBF24"
                            radius={[6, 6, 0, 0]}
                            barSize={28}
                        />
                    </ReBarChart>
                </ResponsiveContainer>
            </div>

            {/* X-axis label */}
            <p className="text-center text-xs text-gray-400 mt-2">
                Stage
            </p>
        </>


    );
};

export default BarChart;
