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

// import { useState } from 'react'
// import { ChevronDown } from 'lucide-react'

// const Colleges = [
//   "Indian Institute of Technology Bombay",
//   "Birla Institute of Technology and Science, Pilani",
//   "Jadavpur University",
//   "Vellore Institute of Technology",
//   "National Institute of Technology Trichy",
//   "Indian Institute of Technology Bombay",
//   "Birla Institute of Technology and Science, Pilani",
//   "Jadavpur University",
//   "Vellore Institute of Technology",
//   "National Institute of Technology Trichy",
//   "Indian Institute of Technology Bombay",
//   "Birla Institute of Technology and Science, Pilani",
//   "Jadavpur University",
//   "Vellore Institute of Technology",
//   "National Institute of Technology Trichy"
// ];

// function ZZZ() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [selectedCollege, setSelectedCollege] = useState("Select College")

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl">
//         <div className="relative">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className=" bg-white text-left px-2 py-1 rounded border-2 border-[#F15C22]
//             flex items-center justify-between hover:border-orange-600 transition-colors gap-0.5 overflow-hidden"
//           >
//             <span className="text-[14px] text-[#0B1E29] font-Gilroy-Regular">
//               {selectedCollege}
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 text-orange-500 transition-transform ${
//                 isOpen ? 'transform rotate-180' : ''
//               }`}
//             />
//           </button>

//           {isOpen && (
//             <div className="absolute mt-2 w-[190px] bg-white rounded-sm shadow-lg border border-gray-200 py-1 z-10
//             overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100">
//               {Colleges.map((college, index) => (
//                 <button
//                   key={index}
//                   className="w-full px-4 py-3 text-left text-[14px] hover:bg-orange-50 transition-colors text-[#0B1E29] hover:text-orange-600 font-Gilroy-Regular"
//                   onClick={() => {
//                     setSelectedCollege(college)
//                     setIsOpen(false)
//                   }}
//                 >
//                   {college}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ZZZ

// import { useState } from "react";
// import upload from "./src/assets/img/upload.png"; // Replace with actual path

// const ZZZ = () => {
//   const tableHeaders = [
//     "Date",
//     "Event Name",
//     "Event Type",
//     "Status",
//     "Remarks",
//     "Upload",
//   ];

//   const [eventType, setEventType] = useState("");
//   const [remark, setRemark] = useState("");
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleSubmit = () => {
//     if (!eventType || !remark) return alert("Please select event type and enter a remark.");
//     setSubmittedData({ eventType, remark });
//     setEventType("");  // Reset dropdown
//     setRemark("");     // Reset input
//   };

//   return (
//     <div className="rounded-lg overflow-hidden mt-10 pr-8 pb-10">
//       <table className="w-full border border-[#204E68]">
//         <thead>
//           <tr className="border-b border-[#204E68]">
//             {tableHeaders.map((header, index) => (
//               <th
//                 key={index}
//                 className="px-4 py-3 text-left text-sm font-medium text-gray-400 border-t border-r border-l border-[#204E68] whitespace-nowrap"
//               >
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border-b border-[#204E68] text-gray-300">
//             <td className="px-4 py-3">21/02/2025</td>
//             <td className="px-4 py-3">Chai Pe Charcha</td>
//             <td className="px-4 py-3">
//               <select
//                 className="bg-transparent text-white border border-gray-500 px-2 py-1 rounded"
//                 value={eventType}
//                 onChange={(e) => setEventType(e.target.value)}
//               >
//                 <option value="" disabled>Select Event Type</option>
//                 <option value="Community & Networking Event">Community & Networking Event</option>
//                 <option value="Tech Talk">Tech Talk</option>
//                 <option value="Workshop">Workshop</option>
//               </select>
//             </td>
//             <td className="px-4 py-3">
//               <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 pl-2 pr-2 whitespace-nowrap">
//                 On going
//               </span>
//             </td>
//             <td className="px-4 py-3">
//               <div className="flex flex-col justify-center gap-1">
//                 <input
//                   type="text"
//                   className="bg-transparent border border-gray-500 px-2 py-1 rounded text-white"
//                   value={remark}
//                   onChange={(e) => setRemark(e.target.value)}
//                   placeholder="Add remark"
//                 />
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </td>
//             <td className="px-4 py-3">
//               <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer transition-colors whitespace-nowrap">
//                 <input type="file" className="hidden" id="document-upload" />
//                 <label
//                   htmlFor="document-upload"
//                   className="cursor-pointer flex align-center justify-center gap-2 text-center"
//                 >
//                   <img src={upload} alt="" className="w-5 h-5 pt-1" />
//                   <span className="text-gray-400">Upload Document</span>
//                 </label>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ZZZ;

// import { useState } from "react";
// import upload from "./src/assets/img/upload.png"; // Replace with actual path
// import { FileText, Eye } from "lucide-react"; // Make sure lucide-react is installed

// const ZZZ = () => {
//   const tableHeaders = [
//     "Date",
//     "Event Name",
//     "Event Type",
//     "Status",
//     "Remarks",
//     "Upload",
//   ];

//   const [eventType, setEventType] = useState("");
//   const [eventSubmitted, setEventSubmitted] = useState(false);

//   const [remark, setRemark] = useState("");
//   const [remarkSubmitted, setRemarkSubmitted] = useState(false);

//   const [file, setFile] = useState(null); // { name, raw, uploaded }

//   const handleEventSubmit = () => {
//     if (!eventType) return alert("Please select an event type.");
//     setEventSubmitted(true);
//   };

//   const handleRemarkSubmit = () => {
//     if (!remark) return alert("Please enter a remark.");
//     setRemarkSubmitted(true);
//   };

//   const handleFileChange = (e) => {
//     const uploaded = e.target.files[0];
//     if (uploaded) {
//       setFile({ name: uploaded.name, raw: uploaded, uploaded: false });
//     }
//   };

//   return (
//     <div className="rounded-lg overflow-hidden mt-10 pr-8 pb-10">
//       <table className="w-full border border-[#204E68]">
//         <thead>
//           <tr className="border-b border-[#204E68]">
//             {tableHeaders.map((header, index) => (
//               <th
//                 key={index}
//                 className="px-4 py-3 text-left text-sm font-medium text-gray-400 border-t border-r border-l border-[#204E68] whitespace-nowrap"
//               >
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border-b border-[#204E68] text-gray-300">
//             <td className="px-4 py-3">21/02/2025</td>
//             <td className="px-4 py-3">Chai Pe Charcha</td>

//             {/* Event Type */}
//             <td className="px-4 py-3">
//               {eventSubmitted ? (
//                 <span>{eventType}</span>
//               ) : (
//                 <div className="flex flex-col gap-2">
//                   <select
//                     className="bg-transparent text-white border border-gray-500 px-2 py-1 rounded"
//                     value={eventType}
//                     onChange={(e) => setEventType(e.target.value)}
//                   >
//                     <option value="" disabled>
//                       Select Event Type
//                     </option>
//                     <option value="Community & Networking Event">
//                       Community & Networking Event
//                     </option>
//                     <option value="Tech Talk">Tech Talk</option>
//                     <option value="Workshop">Workshop</option>
//                   </select>
//                   <button
//                     onClick={handleEventSubmit}
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               )}
//             </td>

//             {/* Status */}
//             <td className="px-4 py-3">
//               <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 pl-2 pr-2 whitespace-nowrap">
//                 On going
//               </span>
//             </td>

//             {/* Remarks */}
//             <td className="px-4 py-3">
//               {remarkSubmitted ? (
//                 <span>{remark}</span>
//               ) : (
//                 <div className="flex flex-col justify-center gap-2">
//                   <input
//                     type="text"
//                     className="bg-transparent border border-gray-500 px-2 py-1 rounded text-white"
//                     value={remark}
//                     onChange={(e) => setRemark(e.target.value)}
//                     placeholder="Add remark"
//                   />
//                   <button
//                     onClick={handleRemarkSubmit}
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               )}
//             </td>

//             {/* Upload */}
//             <td className="px-4 py-3">
//               {file ? (
//                 <div className="flex flex-col gap-2">
//                   {!file.uploaded ? (
//                     <>
//                       <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer transition-colors whitespace-nowrap">
//                         <label
//                           htmlFor="document-upload"
//                           className="cursor-pointer flex items-center justify-center gap-2 text-center"
//                         >
//                           <img
//                             src={upload}
//                             alt="Upload Icon"
//                             className="w-5 h-5 pt-1"
//                           />
//                           <span className="text-gray-400">{file.name}</span>
//                         </label>
//                       </div>
//                       <button
//                         onClick={() =>
//                           setFile((prev) => ({ ...prev, uploaded: true }))
//                         }
//                         className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                       >
//                         Upload
//                       </button>
//                     </>
//                   ) : (
//                     // <div className="flex items-center gap-4">
//                     //   <div className="flex items-center gap-2 text-sm text-white">
//                     //     <FileText className="w-4 h-4" />
//                     //     {file.name}
//                     //   </div>
//                     //   <a
//                     //     href={URL.createObjectURL(file.raw)}
//                     //     download={file.name}
//                     //     className="p-2 rounded hover:bg-gray-700 transition-colors"
//                     //     target="_blank"
//                     //     rel="noopener noreferrer"
//                     //   >
//                     //     <Eye className="w-4 h-4 text-white" />
//                     //   </a>
//                     // </div>
//                     <div className="flex items-center gap-4">
//                       <div
//                         className="flex items-center gap-2 text-sm text-white max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap"
//                         title={file.name} // Shows full name on hover
//                       >
//                         <FileText className="w-4 h-4" />
//                         {file.name}
//                       </div>
//                       <a
//                         href={URL.createObjectURL(file.raw)}
//                         download={file.name}
//                         className="p-2 rounded hover:bg-gray-700 transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Eye className="w-4 h-4 text-white" />
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer transition-colors whitespace-nowrap">
//                   <input
//                     type="file"
//                     className="hidden"
//                     id="document-upload"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="document-upload"
//                     className="cursor-pointer flex items-center justify-center gap-2 text-center"
//                   >
//                     <img
//                       src={upload}
//                       alt="Upload Icon"
//                       className="w-5 h-5 pt-1"
//                     />
//                     <span className="text-gray-400">Upload Document</span>
//                   </label>
//                 </div>
//               )}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ZZZ;













// import { useState } from "react";
// import upload from "./src/assets/img/upload.png"; // Update path if needed
// import { FileText, Eye } from "lucide-react";

// const ZZZ = () => {
//   const tableHeaders = [
//     "Date",
//     "Event Name",
//     "Event Type",
//     "Status",
//     "Remarks",
//     "Upload",
//   ];

//   const [eventType, setEventType] = useState("");
//   const [eventSubmitted, setEventSubmitted] = useState(false);

//   const [remark, setRemark] = useState("");
//   const [remarkSubmitted, setRemarkSubmitted] = useState(false);

//   const [file, setFile] = useState(null);

//   const handleEventSubmit = () => {
//     if (!eventType) return alert("Please select an event type.");
//     setEventSubmitted(true);
//   };

//   const handleRemarkSubmit = () => {
//     if (!remark) return alert("Please enter a remark.");
//     setRemarkSubmitted(true);
//   };

//   const handleFileChange = (e) => {
//     const uploaded = e.target.files[0];
//     if (uploaded) {
//       setFile({ name: uploaded.name, raw: uploaded, uploaded: false });
//     }
//   };

//   return (
//     <div className="mt-10 overflow-x-auto">
//       <table className="w-full min-w-[900px] table-fixed border border-[#204E68] rounded-lg overflow-hidden">
//         <thead>
//           <tr className="border-b border-[#204E68] bg-[#1c2e40]">
//             {tableHeaders.map((header, index) => (
//               <th
//                 key={index}
//                 className="px-4 py-3 text-left text-sm font-medium text-gray-400 border border-[#204E68] whitespace-nowrap"
//               >
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border-b border-[#204E68] text-gray-300">
//             {/* Date */}
//             <td className="px-4 py-3 min-h-[80px]">21/02/2025</td>

//             {/* Event Name */}
//             <td className="px-4 py-3 min-h-[80px]">Chai Pe Charcha</td>

//             {/* Event Type */}
//             <td className="px-4 py-3 min-h-[80px]">
//               {eventSubmitted ? (
//                 <span>{eventType}</span>
//               ) : (
//                 <div className="flex flex-col gap-2">
//                   <select
//                     className="bg-transparent text-white border border-gray-500 px-2 py-1 rounded"
//                     value={eventType}
//                     onChange={(e) => setEventType(e.target.value)}
//                   >
//                     <option value="" disabled>
//                       Select Event Type
//                     </option>
//                     <option value="Community & Networking Event">
//                       Community & Networking Event
//                     </option>
//                     <option value="Tech Talk">Tech Talk</option>
//                     <option value="Workshop">Workshop</option>
//                   </select>
//                   <button
//                     onClick={handleEventSubmit}
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               )}
//             </td>

//             {/* Status */}
//             <td className="px-4 py-3 min-h-[80px]">
//               <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 px-2 whitespace-nowrap rounded">
//                 On going
//               </span>
//             </td>

//             {/* Remarks */}
//             <td className="px-4 py-3 min-h-[80px]">
//               {remarkSubmitted ? (
//                 <span>{remark}</span>
//               ) : (
//                 <div className="flex flex-col justify-center gap-2">
//                   <input
//                     type="text"
//                     className="bg-transparent border border-gray-500 px-2 py-1 rounded text-white"
//                     value={remark}
//                     onChange={(e) => setRemark(e.target.value)}
//                     placeholder="Add remark"
//                   />
//                   <button
//                     onClick={handleRemarkSubmit}
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               )}
//             </td>

//             {/* Upload */}
//             <td className="px-4 py-3 min-h-[80px]">
//               {file ? (
//                 <div className="flex flex-col gap-2">
//                   {!file.uploaded ? (
//                     <>
//                       <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer transition-colors whitespace-nowrap">
//                         <label
//                           htmlFor="document-upload"
//                           className="cursor-pointer flex items-center justify-center gap-2"
//                         >
//                           <img
//                             src={upload}
//                             alt="Upload Icon"
//                             className="w-5 h-5 pt-1"
//                           />
//                           <span className="text-gray-400">{file.name}</span>
//                         </label>
//                       </div>
//                       <button
//                         onClick={() =>
//                           setFile((prev) => ({ ...prev, uploaded: true }))
//                         }
//                         className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                       >
//                         Upload
//                       </button>
//                     </>
//                   ) : (
//                     <div className="flex items-center gap-4">
//                       <div
//                         className="flex items-center gap-2 text-sm text-white max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap"
//                         title={file.name}
//                       >
//                         <FileText className="w-4 h-4" />
//                         {file.name}
//                       </div>
//                       <a
//                         href={URL.createObjectURL(file.raw)}
//                         download={file.name}
//                         className="p-2 rounded hover:bg-gray-700 transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Eye className="w-4 h-4 text-white" />
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer transition-colors whitespace-nowrap">
//                   <input
//                     type="file"
//                     className="hidden"
//                     id="document-upload"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="document-upload"
//                     className="cursor-pointer flex items-center justify-center gap-2"
//                   >
//                     <img
//                       src={upload}
//                       alt="Upload Icon"
//                       className="w-5 h-5 pt-1"
//                     />
//                     <span className="text-gray-400">Upload Document</span>
//                   </label>
//                 </div>
//               )}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ZZZ;






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

export default function Z() {
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
