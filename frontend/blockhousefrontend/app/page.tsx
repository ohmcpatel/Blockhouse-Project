import React from "react";
import CandlestickChart from "./components/CandlestickChart";
import LineChartComponent from "./components/LineChart";
import BarChartComponent from "./components/BarChart";
import PieChartComponent from "./components/PieChart";

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-700 mt-2">
          An overview of key metrics and trends.
        </p>
      </header>
      <main className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="justify-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl text-black font-semibold mb-4">
            Candlestick Chart
          </h2>
          <CandlestickChart />
        </div>
        <div className="bg-white align-center shadow-lg rounded-lg p-6">
          <h2 className="text-xl text-black font-semibold mb-4">Line Chart</h2>
          <LineChartComponent />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl text-black font-semibold mb-4">Bar Chart</h2>
          <BarChartComponent />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl text-black font-semibold mb-4">Pie Chart</h2>
          <PieChartComponent />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
