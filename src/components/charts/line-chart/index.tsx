import { useRef, useEffect, useState } from "react";
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
import { Bar } from "react-chartjs-2";
// import faker from "faker";
import { ChartWrapper } from "../chart-wrapper";
import "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Disable x-axis grid lines
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 100, 200, 320, 600, 500, 100],
      backgroundColor: ["#00A45F"],
    },
  ],
};

export function LineChartDemo() {
  const chartRef = useRef<any>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Clean up previous chart instance before rendering a new one
    if (chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      if (chartInstance) {
        chartInstance.destroy();
      }
    }
  }, [data]); // Clean up when data changes
  return (
    <ChartWrapper className="h-full  px-3 bg-white w-full flex flex-col justify-end items-center rounded-xl">
      <div className="flex w-full flex-row bg-white justify-between items-center py-2">
        <div>
          <h2 className="bg-white text-[14px] text-[#343434] font-bold">
            Sales Analytic
          </h2>
          <p className="bg-white text-[14px] text-[#8F94A8] font-normal">
            All users
          </p>
        </div>
        <div className="bg-inherit">
          <label
            htmlFor="options"
            className="bg-inherit mr-2 text-[14px] text-[#8F94A8] font-DMSans"
          >
            Sort by
          </label>
          <select
            id="options"
            className="bg-inherit border-[1px] border-[#8F94A8] rounded-[4px] text-[14px] text-[#8F94A8] font-DMSans focus:outline-none"
            value={selectedOption}
            onChange={handleChange}
          >
            <option
              value=""
              className="bg-inherit text-[12px] text-[#8F94A8] font-DMSans"
            >
              Select
            </option>
            <option
              value="option1"
              className="bg-inherit text-[12px] text-[#8F94A8] font-DMSans"
            >
              Option 1
            </option>
            <option
              value="option2"
              className="bg-inherit text-[12px] text-[#8F94A8] font-DMSans"
            >
              Option 2
            </option>
            <option
              value="option3"
              className="bg-inherit text-[12px] text-[#8F94A8] font-DMSans"
            >
              Option 3
            </option>
          </select>
        </div>
      </div>
      <Bar
        className="w-full bg-white p-10 rounded-xl"
        ref={(ref) => {
          chartRef.current = ref; // Store the ref to chartRef.current
        }}
        options={{ ...options, responsive: true, maintainAspectRatio: true }}
        data={data}
        key={JSON.stringify(data)}
      />
    </ChartWrapper>
  );
}
