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
  ChartData,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
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

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Disable the default legend
    },
    title: {
      display: false,
      text: "Chart.js Doughnut Chart",
    },
  },
};

const data: ChartData<"doughnut"> = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      weight: 1,
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 8,
    },
  ],
};

const CustomLegend = ({ chartData }: { chartData: ChartData<"doughnut"> }) => {
  const backgroundColors = chartData.datasets[0].backgroundColor as string[];
  const dataValues = chartData.datasets[0].data as number[];
  return (
    <div className="flex flex-col bg-white justify-center items-start">
      <h2 className="bg-inherit text-[10px] mt-2 text-[#435060] mb-4 font-bold font-DMSans">
        Categories
      </h2>
      {chartData.labels?.map((label, index) => (
        <div
          key={index}
          className="flex justify-start bg-inherit items-start gap-2 mr-4"
        >
          <div className="flex justify-start bg-inherit items-start gap-2 mr-4">
            <div
              className="w-10 rounded-md opacity-35 bg-inherit h-4 mt-2 mr-2"
              style={{
                backgroundColor: backgroundColors[index],
              }}
            ></div>
            <span className="bg-inherit text-[10px] mt-2 text-[#8F94A8] font-DMSans">
              {label as string}
            </span>
          </div>
          <span className="bg-inherit text-left text-[10px] mt-2 text-[#435060] font-semibold font-DMSans">
            ₦ {dataValues[index]}
          </span>
        </div>
      ))}
    </div>
  );
};

export function DoughnutChartDemo() {
  const chartRef = useRef<any>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Clean up previous chart instance before rendering a new one
    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }
  }, [data]); // Clean up when data changes

  return (
    <ChartWrapper className="h-full bg-white rounded-xl px-3 w-full">
      <div className="flex flex-row bg-white justify-between items-center py-2">
        <div>
          <h2 className="bg-white text-[14px] text-[#343434] font-bold">
            Produce Sales
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
      <div className="flex flex-col sm:flex-row bg-white justify-between items-center">
        <CustomLegend chartData={data} />
        <div className="w-1/2 h-1/2 bg-white rounded-xl">
          <Doughnut
            className="w-full bg-inherit p-4 rounded-xl"
            ref={chartRef}
            options={{
              ...options,
              responsive: true,
              maintainAspectRatio: true,
            }}
            data={data}
            key={JSON.stringify(data)}
          />
        </div>
      </div>
    </ChartWrapper>
  );
}
