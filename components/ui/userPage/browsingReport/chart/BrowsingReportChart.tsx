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
import { GenreValue } from "@/types";
import { genresValues } from "@/const";

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

  const getColor = (genre: GenreValue) => {
    const color = [
      "rgba(245, 101, 101, 1)",
      "rgba(66, 153, 225, 1)",
      "rgba(246, 173, 85, 1)",
      "rgba(72, 187, 120, 1)",
      "rgba(159, 122, 234, 1)",
      "rgba(160, 174, 192, 1)",
    ];
    const i = genresValues.indexOf(genre) % color.length;
    return color[i];
  };

  const data = {
    labels,
    datasets: userInformation.report.genres.map((genre) => {
      return {
        label: genre.name,
        data: genre.dailyViews,
        backgroundColor: getColor(genre.name),
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
