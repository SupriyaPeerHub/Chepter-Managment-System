import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CollegeDistribution = () => {
  const [state] = useState({
    series: [
      {
        name: "College",
        data: [400, 430, 448, 470, 540],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 180,
      },
      xaxis: {
        categories: [["North"], ["South"], ["Centre"], ["East"], ["West"]],
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={280}
        />
      </div>
    </div>
  );
};
export default CollegeDistribution;