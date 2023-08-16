import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Title as MTitle } from "@mantine/core";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["8/8", "8/9", "8/10", "8/11", "8/12", "8/13", "8/14"];

const data = {
  labels,
  datasets: [
    {
      label: "React",
      data: [38, 75, 18, 46, 62, 42, 73],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Python",
      data: [38, 75, 18, 46, 62, 42, 73],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const, // "top" として型を明示的に指定
    },
    title: {
      display: true,
      text: "",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export default function BrowsingReportChart() {
  console.log(data);
  return <Bar data={data} options={options} />;
}
