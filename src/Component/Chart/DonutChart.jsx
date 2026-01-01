import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Other", value: 275 },
    { name: "Rent", value: 1420 },
    { name: "Investment", value: 8200 },
    { name: "Services", value: 300 },
    { name: "Utilities", value: 150 },
];

const COLORS = [
    "#6366F1",
    "#22C55E",
    "#F97316",
    "#EC4899",
    "#FACC15",
];

const DonutChart = () => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div >
            {/* Header */}
            <div className="flex justify-between items-center mb-3 text-[#4C4646]">
                <h3 className="nunito font-bold text-[16px] mb-3">
                    All expenses
                </h3>
                <span className="text-xs text-gray-400">
                    Last month
                </span>
            </div>

            {/* Chart */}
            <div className="h-[220px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={85}
                            dataKey="value"
                            paddingAngle={3}
                        >
                            {data.map((_, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xs text-gray-400">Total</p>
                    <h2 className="text-lg font-bold">
                        ${total.toLocaleString()}
                    </h2>
                </div>
            </div>

            {/* Legend */}
            <div className="mt-3 space-y-1">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between text-xs text-gray-600"
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: COLORS[index] }}
                            />
                            {item.name}
                        </div>
                        <span>${item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonutChart;
