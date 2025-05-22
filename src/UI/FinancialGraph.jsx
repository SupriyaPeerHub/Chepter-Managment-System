



import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390];
const pData = [2400, 1398, 9800, 3908, 4800, 3800];

const xLabels = [
  "Investment Amount",
  "Sponsorship Amount",
  "Revenue Earned",
  "Total Earnings",
  "Profit",
  "Loss",
];

export default function FinancialGraph() {
  return (
    <div className=" h-full bg-white overflow-hidden">
      <BarChart
        height={300}
        series={[
          {
            data: pData,
            label: "Monthly",
            id: "pvId",
            yAxisId: "leftAxisId",
            color: "#ABE884",
          },
          {
            data: uData,
            label: "Yearly",
            id: "uvId",
            yAxisId: "rightAxisId",
            color: "#84DBE8",
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
        yAxis={[
          {
            id: "leftAxisId",
            width: 60,
            tickValues: [0, 5000, 10000, 15000, 20000, 25000],
            valueFormatter: (value) => `${value / 1000}k`,
          },
          {
            id: "rightAxisId",
            position: "right",
          },
        ]}
        grid={{ horizontal: true }} // 👉 This adds horizontal lines
      />
    </div>
  );
}
