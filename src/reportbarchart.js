/* Rom Basson 313416489 */
/* Shiraz Messer 318971637 */
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ReportBarChart = ({ data }) => {
    console.log("Data in ReportBarChart:", data);


    return (
        <BarChart width={500} height={400} data={data} className="barChart" style={{ fontSize: '10px' }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Category" angle={-25} textAnchor="end" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sum" nameKey="Category" stroke="#000000" legend={null}>
            </Bar>
        </BarChart>
    );
};

export default ReportBarChart;
