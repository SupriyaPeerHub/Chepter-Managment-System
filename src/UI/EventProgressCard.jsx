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
      </Box>
    </div>
  );
}

const pieParams = {
  height: 200,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};
