"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { fetchData } from "../../lib/fetchData";

interface LineChartData {
  labels: string[];
  data: number[];
}

const LineChartComponent = () => {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLineChartData = async () => {
      try {
        const result = await fetchData("line-chart-data");
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

    fetchLineChartData();
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
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
