import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import useGradeStats from "../../hooks/dashboard/useGradeStats";
// import { gradeStats } from "../../data/mockData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart"
    }
  }
};

function Grade() {
  const { labels, values } = useGradeStats();
  // const { labels, values } = gradeStats;
  const data = {
    labels,
    datasets: [
      {
        label: "學生人數",
        data: values,
        backgroundColor: tailwindConfig().theme.colors.orange[500]
      }
    ]
  };
  return (
    <div className="flex flex-col col-span-12 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Grade
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      <div className="flex justify-center px-8 pb-4 min-h-[400px]">
        <Bar options={options} data={data} width={200} height={300} />
      </div>
    </div>
  );
}

export default Grade;
