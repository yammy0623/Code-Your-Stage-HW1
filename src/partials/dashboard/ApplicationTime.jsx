import LineChart from "../../charts/LineChart01";
// import { applicationStats } from "../../data/mockData"; // mock data
import useApplicationStats from "../../hooks/dashboard/useApplicationStats"; // API

// Import utilities
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function ApplicationTime() {
  const { labels, values } = useApplicationStats(); // API
  // const { labels, values } = applicationStats; // mock data
  const chartData = {
    labels,
    datasets: [
      // Indigo line
      {
        data: values,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.orange[400]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.orange[500],
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.orange[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.orange[500]
      }
    ]
  };

  return (
    <div className="col-span-12 xl:col-span-8 bg-white dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
          Application Time
        </h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">
          form submit
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">
            Accumulate: 82
          </div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">
            +49%
          </div> */}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        {labels && <LineChart data={chartData} width={389} height={500} />}
      </div>
    </div>
  );
}

export default ApplicationTime;
