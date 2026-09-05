import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashboardLineChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 300,
      pv: 4567,
      amt: 2400,
    },
    {
      name: "Page C",
      uv: 320,
      pv: 1398,
      amt: 2400,
    },
    {
      name: "Page D",
      uv: 200,
      pv: 9800,
      amt: 2400,
    },
    {
      name: "Page E",
      uv: 278,
      pv: 3908,
      amt: 2400,
    },
    {
      name: "Page F",
      uv: 189,
      pv: 4800,
      amt: 2400,
    },
  ];
  return (
    <div className="bg-white px-8 py-4 mt-8 border-2 border-border rounded-lg flex-2 min-w-100">
      <LineChart
        style={{
          width: "100%",
          maxWidth: "600px",
          maxHeight: "70vh",
          aspectRatio: "1.618",
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          bottom: 0,
          left: 0,
          right: 20,
        }}
      >
        <CartesianGrid />
        <Line
          dataKey={"uv"}
          stroke="#6c2ff2"
          type="monotone"
          strokeWidth={2}
          yAxisId={"left"}
        />
        <XAxis dataKey={"name"} />
        <YAxis width={"auto"} yAxisId={"left"} />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default DashboardLineChart;
