import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  result: {
    targetFormatted: string;
    tabunganTahunan: number[];
    tabunganTahunanFormatted: string[];
    lamaMenabung: number | string;
  };
};

const Chart = (props: Props) => {
  const labels = Array.from(
    { length: props.result.tabunganTahunan.length },
    (_, index) => `year ${index}`
  );

  const data = {
    labels: labels,
    datasets: [
      {
        data: props.result.tabunganTahunan,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Pertumbuhan Tabungan Tiap Tahun",
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }

            const value = Number(context.parsed.y);

            if (value !== null) {
              if (value >= 1e12) {
                label = (value / 1e12).toFixed(2) + " triliun";
              } else if (value >= 1e9) {
                label = (value / 1e9).toFixed(2) + " miliar";
              } else if (value >= 1e6) {
                label = Math.floor(value / 1e6) + " juta";
              } else if (value >= 1e3) {
                label = Math.floor(value / 1e3) + " ribu";
              } else {
                label = value.toLocaleString("id");
              }
            }
            return label;
          },
          //   label: function (context: any) {
          //     let label = context.dataset.label || "";
          //     if (label >= 1e12) {
          //       label = (label / 1e12).toFixed(2) + " triliun";
          //     } else if (label >= 1e9) {
          //       label = (label / 1e9).toFixed(2) + " miliar";
          //     } else if (label >= 1e6) {
          //       label = Math.floor(label / 1e6) + " juta";
          //     } else if (label >= 1e3) {
          //       label = Math.floor(label / 1e3) + " ribu";
          //     } else {
          //       label = label.toLocaleString("id");
          //     }
          //     return label;
          //   },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Chart;
