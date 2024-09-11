"use client";
import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { fetchData } from "../../lib/fetchData"; // Adjust the path as needed

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface DataPoint {
  x: Date;
  y: [number, number, number, number];
}

const CandlestickChart: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCandlestickData = async () => {
      try {
        const result = await fetchData("candlestick-data");
        const formattedData: DataPoint[] = result.data.map(
          (item: CandlestickData) => ({
            x: new Date(item.x),
            y: [item.open, item.high, item.low, item.close],
          })
        );
        setDataPoints(formattedData);
      } catch (error) {
        console.error("Error fetching candlestick data:", error);
        setError(true);
      }
    };

    fetchCandlestickData();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 text-2xl">
        API Call Failed - Please Reload
      </div>
    );
  }

  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Stock Price - 2023",
    },
    axisX: {
      valueFormatString: "MMM DD",
    },
    axisY: {
      prefix: "$",
      title: "Price (in USD)",
    },
    data: [
      {
        type: "candlestick",
        showInLegend: true,
        name: "Stock Price",
        yValueFormatString: "$###0.00",
        xValueFormatString: "MMMM DD, YYYY",
        dataPoints: dataPoints,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default CandlestickChart;
