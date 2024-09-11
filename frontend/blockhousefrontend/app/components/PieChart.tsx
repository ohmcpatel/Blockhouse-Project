"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { fetchData } from "../../lib/fetchData";

interface PieChartData {
  labels: string[];
  data: number[];
}

const PieChartComponent = () => {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPieChartData = async () => {
      try {
        const result = await fetchData("pie-chart-data");
        setData(
          result.labels.map((label: string, index: number) => ({
            name: label,
            value: result.data[index],
          }))
        );
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchPieChartData();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 text-2xl">
        API Call Failed - Please Reload
      </div>
    );
  }

  return (
    <div className="w-full h-96">
      {" "}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius="80%"
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={["#CA282C", "#293646", "#E89C1E", "#yellow"][index % 4]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
