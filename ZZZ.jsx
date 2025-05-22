// import { BarChart } from "@mui/x-charts/BarChart";

// const uData = [4000, 3000, 2000, 2780, 1890, 2390];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800];

// const xLabels = [
//   "Investment Amount",
//   "Sponsorship Amount",
//   "Revenue Earned",
//   "Total Earnings",
//   "Profit",
//   "Loss",
// ];

// export default function ZZZ() {
//   return (
//     <div className="w-[600px] h-full bg-white border border-[#F15C22] rounded-lg overflow-hidden mt-5">
//       <BarChart
//         height={300}
//         series={[
//           {
//             data: pData,
//             label: "Monthly",
//             id: "pvId",
//             yAxisId: "leftAxisId",
//           },
//           {
//             data: uData,
//             label: "Yearly",
//             id: "uvId",
//             yAxisId: "rightAxisId",
//           },
//         ]}
//         xAxis={[{ data: xLabels, scaleType: "band" }]}
//         yAxis={[
//           { id: "leftAxisId", width: 50 },
//           { id: "rightAxisId", position: "right" },
//         ]}
//       />
//     </div>
//   );
// }






// import { BarChart } from "@mui/x-charts/BarChart";

// const uData = [4000, 3000, 2000, 2780, 1890, 2390];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800];

// const xLabels = [
//   "Investment Amount",
//   "Sponsorship Amount",
//   "Revenue Earned",
//   "Total Earnings",
//   "Profit",
//   "Loss",
// ];

// export default function ZZZ() {
//   return (
//     <div className="w-[90%] h-full bg-white border border-[#F15C22] rounded-lg overflow-hidden flex justify-center items-center">
//       <BarChart
//         height={300}
//         series={[
//           {
//             data: pData,
//             label: "Monthly",
//             id: "pvId",
//             yAxisId: "leftAxisId",
//             color: "#ABE884",
//           },
//           {
//             data: uData,
//             label: "Yearly",
//             id: "uvId",
//             yAxisId: "rightAxisId",
//             color: "#84DBE8",
//           },
//         ]}
//         xAxis={[{ data: xLabels, scaleType: "band" }]}
//         yAxis={[
//           { id: "leftAxisId", width: 50 },
//           { id: "rightAxisId", position: "right" },
//         ]}
//       />
//     </div>
//   );
// }











// import { BarChart } from "@mui/x-charts/BarChart";

// const uData = [4000, 3000, 2000, 2780, 1890, 2390];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800];

// const xLabels = [
//   "Investment Amount",
//   "Sponsorship Amount",
//   "Revenue Earned",
//   "Total Earnings",
//   "Profit",
//   "Loss",
// ];

// export default function ZZZ() {
//   return (
//     <div className="w-[90%] h-full bg-white border border-[#F15C22] rounded-lg overflow-hidden flex justify-center items-center">
//       <BarChart
//         height={300}
//         series={[
//           {
//             data: pData,
//             label: "Monthly",
//             id: "pvId",
//             yAxisId: "leftAxisId",
//             color: "#ABE884",
//           },
//           {
//             data: uData,
//             label: "Yearly",
//             id: "uvId",
//             yAxisId: "rightAxisId",
//             color: "#84DBE8",
//           },
//         ]}
//         xAxis={[{ data: xLabels, scaleType: "band" }]}
//         yAxis={[
//           {
//             id: "leftAxisId",
//             width: 60,
//             tickValues: [0, 5000, 10000, 15000, 20000, 25000],
//             valueFormatter: (value) => `${value / 1000}k`,
//           },
//           {
//             id: "rightAxisId",
//             position: "right",
//           },
//         ]}
//       />
//     </div>
//   );
// }






















// import { BarChart } from "@mui/x-charts/BarChart";

// const uData = [4000, 3000, 2000, 2780, 1890, 2390];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800];

// const xLabels = [
//   "Investment Amount",
//   "Sponsorship Amount",
//   "Revenue Earned",
//   "Total Earnings",
//   "Profit",
//   "Loss",
// ];

// export default function ZZZ() {
//   return (
//     <div className=" h-full bg-white overflow-hidden">
//       <BarChart
//         height={300}
//         series={[
//           {
//             data: pData,
//             label: "Monthly",
//             id: "pvId",
//             yAxisId: "leftAxisId",
//             color: "#ABE884",
//           },
//           {
//             data: uData,
//             label: "Yearly",
//             id: "uvId",
//             yAxisId: "rightAxisId",
//             color: "#84DBE8",
//           },
//         ]}
//         xAxis={[{ data: xLabels, scaleType: "band" }]}
//         yAxis={[
//           {
//             id: "leftAxisId",
//             width: 60,
//             tickValues: [0, 5000, 10000, 15000, 20000, 25000],
//             valueFormatter: (value) => `${value / 1000}k`,
//           },
//           {
//             id: "rightAxisId",
//             position: "right",
//           },
//         ]}
//         grid={{ horizontal: true }} // 👉 This adds horizontal lines
//       />
//     </div>
//   );
// }











import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Colleges = [
  "Indian Institute of Technology Bombay",
  "Birla Institute of Technology and Science, Pilani",
  "Jadavpur University",
  "Vellore Institute of Technology",
  "National Institute of Technology Trichy",
  "Indian Institute of Technology Bombay",
  "Birla Institute of Technology and Science, Pilani",
  "Jadavpur University",
  "Vellore Institute of Technology",
  "National Institute of Technology Trichy",
  "Indian Institute of Technology Bombay",
  "Birla Institute of Technology and Science, Pilani",
  "Jadavpur University",
  "Vellore Institute of Technology",
  "National Institute of Technology Trichy"
];

function ZZZ() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCollege, setSelectedCollege] = useState("Select College")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" bg-white text-left px-2 py-1 rounded border-2 border-[#F15C22] 
            flex items-center justify-between hover:border-orange-600 transition-colors gap-0.5 overflow-hidden"
          >
            <span className="text-[14px] text-[#0B1E29] font-Gilroy-Regular">
              {selectedCollege}
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-orange-500 transition-transform ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute mt-2 w-[190px] bg-white rounded-sm shadow-lg border border-gray-200 py-1 z-10
            overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100">
              {Colleges.map((college, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-3 text-left text-[14px] hover:bg-orange-50 transition-colors text-[#0B1E29] hover:text-orange-600 font-Gilroy-Regular"
                  onClick={() => {
                    setSelectedCollege(college)
                    setIsOpen(false)
                  }}
                >
                  {college} 
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ZZZ