import { Bar } from "react-chartjs-2";
import { useRecoilValue } from "recoil";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { userInformationState } from "@/store/state";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BrowsingReportChart() {
  const userInformation = useRecoilValue(userInformationState);

  const labels = userInformation.report.dates.map((date) => {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    return `${month}/${day}`;
  });

  const data = {
    labels,
    datasets: userInformation.report.genres.map((genre) => {
      return {
        label: genre.name,
        data: genre.dailyViews,
        backgroundColor: `rgba(${genre.color})`,
      };
    }),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const, // "top" として型を明示的に指定
      },
      title: {
        display: false,
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

  return <Bar data={data} options={options} />;
}
