// import { PieChart } from "@mui/x-charts/PieChart";
// import Box from "@mui/material/Box";
// import { useState } from "react";

// export default function EventProgressCard() {
//   const [radius, setRadius] = useState(50);
//   const [itemNb, setItemNb] = useState(3);
//   const mobileAndDesktopOS = [
//     { label: "Upcoming", value: 20, color: "#344BFD" },
//     { label: "In Progress", value: 20, color: "#FFBB38" },
//     { label: "Revised", value: 20, color: "#F68D2B" },
//   ];

//   return (
//     <div className="relative">
//       <Box flexGrow={1}>
//         {/* <Typography>Default</Typography> */}
//         <PieChart
//           series={[
//             {
//               data: mobileAndDesktopOS.slice(0, itemNb),
//               innerRadius: radius,
//             },
//           ]}
//           {...pieParams}
//         />
//       </Box>
//     </div>
//   );
// }

// const pieParams = {
//   height: 200,
//   margin: { right: 5 },
//   slotProps: { legend: { hidden: true } },
// };





import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function EventProgressCard() {
  const [radius, setRadius] = useState(50);
  const [itemNb, setItemNb] = useState(3);
  const totalEvents = 95; // Total number of events to display inside the pie chart
  const mobileAndDesktopOS = [
    { label: "Upcoming", value: 20, color: "#344BFD" },
    { label: "In Progress", value: 20, color: "#FFBB38" },
    { label: "Revised", value: 20, color: "#F68D2B" },
  ];

  return (
    <div className="relative">
      <Box flexGrow={1} position="relative">
        {/* Pie Chart */}
        <PieChart
          series={[
            {
              data: mobileAndDesktopOS.slice(0, itemNb),
              innerRadius: radius,
            },
          ]}
          {...pieParams}
        />
        {/* Text inside the pie chart */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold"
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "50%",
          //   transform: "translate(-50%, -50%)",
          //   textAlign: "center",
          //   fontWeight: "bold",
          // }}
        >
          <div className="text-[#0B1E29] font-Gilroy-Regular text-[28px]">{totalEvents}</div>
          <div className="text-[#0B1E29] text-[12px]">Total</div>
          <div className="text-[#0B1E29] text-[12px]">no. of Events</div>
        </div> */}
      </Box>
    </div>
  );
}

const pieParams = {
  height: 200,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};
