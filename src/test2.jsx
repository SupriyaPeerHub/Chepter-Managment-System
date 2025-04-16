import UpcomingAdminDetails from "./components/Event Management/Upcoming/UpcomingAdminDetails";
import UpcomingManagerDetails from "./components/Event Management/Upcoming/UpcomingManagerDetails";

const Test2 = () => {
  return (
    <div>
      <UpcomingManagerDetails />
      <UpcomingAdminDetails />
    </div>
  );
};
export default Test2;

// const Test2 = () => {
//   const colors = [
//     "#344BFD", // John Doe
//     "#344BFD", // Joe Smith
//     "#344BFD", // Jake Williams
//     "#344BFD", // Amber
//     "#344BFD", // Peter Brown
//     "#344BFD", // Mary Evans
//     "#344BFD", // David Wilson
//     "#344BFD", // Lily Roberts
//   ];
//   const [state, setState] = useState({
//     series: [
//       {
//         data: [21, 30, 10, 28, 22],
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: "bar",
//         // events: {
//         //   click: function (chart, w, e) {
//         //     // console.log(chart, w, e)
//         //   },
//         // },
//       },
//       colors: colors,
//       plotOptions: {
//         bar: {
//           columnWidth: "45%",
//           distributed: true,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       legend: {
//         show: false,
//       },
//       xaxis: {
//         categories: [["North"], ["South"], ["Centre"], ["East"], ["West"]],
//         labels: {
//           style: {
//             colors: colors,
//             fontSize: "12px",
//           },
//         },
//       },
//     },
//   });

//   return (
//     <div>
//       <ReactApexChart
//         options={state.options}
//         series={state.series}
//         type="bar"
//         height={350}
//       />
//     </div>
//   );
// };
