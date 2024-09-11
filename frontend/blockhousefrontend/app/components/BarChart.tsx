"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { fetchData } from "../../lib/fetchData";

interface BarChartData {
  labels: string[];
  data: number[];
}

const BarChartComponent = () => {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const [error, setError] = useState(false); // State to track if API call fails

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const result = await fetchData("bar-chart-data");
        setData(
          result.labels.map((label: string, index: number) => ({
            name: label,
            value: result.data[index],
          }))
        );
      } catch (error) {
        console.error(error);
        setError(true); // Set error state to true if call fails
      }
    };

    fetchBarChartData();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 text-2xl">
        API Call Failed - Please Reload
      </div>
    ); // Display error message if the API call fails
  }

  return (
    <div className="w-full h-96">
      {" "}
      {/* Ensure the parent div has a defined height */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
