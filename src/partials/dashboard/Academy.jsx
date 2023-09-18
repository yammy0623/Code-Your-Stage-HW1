import DoughnutChart from "../../charts/DoughnutChart";
// import { academyStats } from "../../data/mockData";
import useAcademystats from "../../hooks/dashboard/useAcademystats";

function Academy() {
  const { labels, values } = useAcademystats();
  // const { labels, values } = academyStats;
  // 生成隨機色碼的函式
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const departmentMappings = [
    { oldLabel: ["心理所一般組", "數學系", "物理學系", "心理學系"], newLabel: "理學院"},
    { oldLabel: ["創新領域學士學位學程"], newLabel: "創新設計學院"},
    { oldLabel: ["電機工程學系", "資訊工程學系", "生醫電資所", "資訊工程研究所"], newLabel: "電機資訊學院"},
    { oldLabel: ["生物機電工程學系"], newLabel: "生物資源暨農學院"},
    { oldLabel: ["經濟學系", "經濟系"], newLabel: "社會科學院"},
    { oldLabel: ["科際整合法律學研究所"], newLabel: "法律學院"},
    { oldLabel: ["材料科學與工程學系", "工程科學及海洋工程學系", "醫學工程學系"], newLabel: "工學院"},
    { oldLabel: ["工商管理學系 科技管理組", "工商管理學系", "會計學系", "國際企業學系", "資訊管理學系"], newLabel: "管理學院"},
    { oldLabel: ["物理治療學系"], newLabel: "醫學院"},
    { oldLabel: ["戲劇學系", "外國語文學系 / 圖書資訊學系", "歷史學系", "外國語文學系/社會學系"], newLabel: "文學院"}
]
  
  // console.log(labels)
  const newLabelsArray = departmentMappings.map(item => item.newLabel);
  const amount = new Array(newLabelsArray.length).fill(0);
  if (typeof labels !== 'undefined' && labels !== null) { // 會有Undefined 的時候
    const labelsLength = labels.length;
    // console.log(`Array length: ${labelsLength}`);
    for (let i = 0; i< labelsLength; i+=1){
      for (let j = 0; j< newLabelsArray.length; j+=1){
        if(departmentMappings[j].oldLabel.includes(labels[i])){
          // category = departmentMappings[j].newLabel;
          amount[j] += values[i];
          break;
        }
      }
    }
  }
  
  // console.log(amount)
  const chartData = {
    labels: newLabelsArray,
    datasets: [
      {
        label: "Distribution of colleges",
        data: amount,
        backgroundColor: amount?.map(() => getRandomColor()),
        borderWidth: 0
      }
    ]
  };
  // const chartData = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Distribution of colleges",
  //       data: values,
  //       backgroundColor: values?.map(() => getRandomColor()),
  //       borderWidth: 0
  //     }
  //   ]
  // };


  return (
    <div className="flex bg-white flex-col col-span-full dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {labels && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;
