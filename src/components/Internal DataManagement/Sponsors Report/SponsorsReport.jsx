// const sponsorshipData = [
//   {
//     id: 1,
//     eventType: "Skill-based Events",
//     sponsorName: "Aditya Singh",
//     companyName: "Aditya Bakery House",
//     emailId: "adityabakes@gmail.com",
//     contactNumber: "9898526471",
//     proposal: "Yes",
//     amount: "50,000",
//     rejectionReason: "Budget Constraints",
//     feedback: "Wanted to sponsor small amount",
//   },
//   {
//     id: 2,
//     eventType: "Entr. & Startup Events",
//     sponsorName: "",
//     companyName: "",
//     emailId: "",
//     contactNumber: "",
//     proposal: "",
//     amount: "",
//     rejectionReason: "",
//     feedback: "",
//   },
// ];

import ROITrackerFlow from "../../../UI/ROITrackerFlow";

// function SponsorsReport() {
//   return (
//     <div className="min-h-screen bg-[#0B1623] p-6">
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead className="border border-[#204E68]">
//             <tr className="border-b border-gray-700">
//               <th className="p-4 text-left text-sm text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Sr. No.
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Event Type
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Sponsor's Contact Name
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Company/Brand Name
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Email ID
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Contact Number
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Proposal
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Amount (in ₹)
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 border-r-2 border-[#204E68] whitespace-nowrap">
//                 Reason for Rejection
//               </th>
//               <th className="p-4 text-left text-sm font-medium text-gray-300 whitespace-nowrap">
//                 Feedback
//               </th>
//             </tr>
//           </thead>
//           <tbody className="border border-[#204E68]">
//             {sponsorshipData.map((row, index) => (
//               <tr key={row.id} className="border-b border-gray-700">
//                 <td className="p-4 text-sm text-gray-300">{index + 1}.</td>
//                 <td className="p-4 text-sm text-gray-300">{row.eventType}</td>
//                 <td className="p-4 text-sm text-gray-300">{row.sponsorName}</td>
//                 <td className="p-4 text-sm text-gray-300">{row.companyName}</td>
//                 <td className="p-4 text-sm text-gray-300">{row.emailId}</td>
//                 <td className="p-4 text-sm text-gray-300">
//                   {row.contactNumber}
//                 </td>
//                 <td className="p-4 text-sm text-gray-300">{row.proposal}</td>
//                 <td className="p-4 text-sm text-gray-300">{row.amount}</td>
//                 <td className="p-4 text-sm text-gray-300">
//                   {row.rejectionReason}
//                 </td>
//                 <td className="p-4 text-sm text-gray-300">{row.feedback}</td>
//               </tr>
//             ))}
//             {[...Array(6)].map((_, index) => (
//               <tr key={`empty-${index}`} className="border-b border-gray-700">
//                 <td className="p-4 text-sm text-gray-300">{index + 3}.</td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//                 <td className="p-4 text-sm text-gray-300"></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-4 flex items-center justify-end gap-2">
//         <button className="p-2 text-gray-300 hover:text-white">&lt;</button>
//         <button className="p-2 text-gray-300 hover:text-white">1</button>
//         <button className="p-2 rounded bg-gray-700 text-white">2</button>
//         <button className="p-2 text-gray-300 hover:text-white">3</button>
//         <button className="p-2 text-gray-300 hover:text-white">4</button>
//         <button className="p-2 text-gray-300 hover:text-white">5</button>
//         <button className="p-2 text-gray-300 hover:text-white">&gt;</button>
//       </div>
//     </div>
//   );
// }

// export default SponsorsReport;

// import { ChevronLeft, ChevronRight } from "lucide-react"

// export default function SponsorsReport() {
//   const sponsorsData = [
//     {
//       srNo: 1,
//       eventType: "Skill-based Events",
//       contactName: "Aditya Singh",
//       companyName: "Aditya Bakery House",
//       email: "adityabakes@gmail.com",
//       contactNumber: "9898526471",
//       proposal: "Yes",
//       amount: "50,000",
//       rejectionReason: "Budget Constraints",
//       feedback: "Wanted to sponsor small amount",
//     },
//     {
//       srNo: 2,
//       eventType: "Entr. & Startup Events",
//       contactName: "",
//       companyName: "",
//       email: "",
//       contactNumber: "",
//       proposal: "",
//       amount: "",
//       rejectionReason: "",
//       feedback: "",
//     },
//   ]

//   const emptyRows = Array.from({ length: 6 }, (_, i) => ({
//     srNo: i + 3,
//     eventType: "",
//     contactName: "",
//     companyName: "",
//     email: "",
//     contactNumber: "",
//     proposal: "",
//     amount: "",
//     rejectionReason: "",
//     feedback: "",
//   }))

//   const allRows = [...sponsorsData, ...emptyRows]

//   return (
//     <div className="w-full bg-slate-800 text-white min-h-screen p-4">
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="border-slate-600 bg-slate-700">
//               {[
//                 "Sr. No.",
//                 "Event Type",
//                 "Sponsor's Contact Name",
//                 "Company/Brand Name",
//                 "Email ID",
//                 "Contact Number",
//                 "Proposal",
//                 "Amount (in ₹)",
//                 "Reason for Rejection",
//                 "Feedback",
//               ].map((head, idx) => (
//                 <th
//                   key={idx}
//                   className="border border-slate-600 text-white font-medium text-center px-4 py-3 text-sm min-w-[120px]"
//                 >
//                   {head}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {allRows.map((row) => (
//               <tr key={row.srNo} className="border-slate-600 hover:bg-slate-700/30">
//                 <td className="border border-slate-600 text-center px-4 py-3">{row.srNo}.</td>
//                 <td className="border border-slate-600 px-4 py-3">{row.eventType}</td>
//                 <td className="border border-slate-600 px-4 py-3">{row.contactName}</td>
//                 <td className="border border-slate-600 px-4 py-3">{row.companyName}</td>
//                 <td className="border border-slate-600 px-4 py-3">{row.email}</td>
//                 <td className="border border-slate-600 px-4 py-3">{row.contactNumber}</td>
//                 <td className="border border-slate-600 text-center px-4 py-3">{row.proposal}</td>
//                 <td className="border border-slate-600 text-center px-4 py-3">{row.amount}</td>
//                 <td className="border border-slate-600 px-4 py-3">{row.rejectionReason}</td>
//                 <td className="border border-slate-600 px-4 py-3">{row.feedback}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-end items-center mt-6 gap-2">
//         <button className="h-8 w-8 flex items-center justify-center text-white hover:bg-slate-700 rounded bg-slate-600">
//           <ChevronLeft className="h-4 w-4" />
//         </button>

//         {[1, 2, 3, 4, 5].map((num) => (
//           <button
//             key={num}
//             className={`h-8 w-8 flex items-center justify-center rounded text-white ${
//               num === 1 ? "bg-slate-600" : "hover:bg-slate-700"
//             }`}
//           >
//             {num}
//           </button>
//         ))}

//         <button className="h-8 w-8 flex items-center justify-center text-white hover:bg-slate-700 rounded bg-slate-600">
//           <ChevronRight className="h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   )
// }

const sponsorshipData = [
  {
    id: 1,
    eventType: "Skill-based Events",
    sponsorName: "Aditya Singh",
    companyName: "Aditya Bakery House",
    emailId: "adityabakes@gmail.com",
    contactNumber: "9898526471",
    proposal: "Yes",
    amount: "50,000",
    rejectionReason: "Budget Constraints",
    feedback: "Wanted to sponsor small amount",
  },
  {
    id: 2,
    eventType: "Entr. & Startup Events",
    sponsorName: "",
    companyName: "",
    emailId: "",
    contactNumber: "",
    proposal: "",
    amount: "",
    rejectionReason: "",
    feedback: "",
  },
];

function SponsorsReport() {
  return (
    <div className="min-h-screen bg-[#0B1623] p-2">
      <div className="overflow-x-auto max-w-full">
        <table className="w-full min-w-[1000px] table-auto border-collapse">
          <thead className="border border-[#204E68]">
            <tr className="border-b border-gray-700">
              {[
                "Sr. No.",
                "Event Type",
                "Sponsor's Contact Name",
                "Company/Brand Name",
                "Email ID",
                "Contact Number",
                "Proposal",
                "Amount (in ₹)",
                "Reason for Rejection",
                "Feedback",
              ].map((heading, i) => (
                <th
                  key={i}
                  className="p-4 text-left text-[14px] text-gray-300 border-r-2 border-[#204E68] whitespace-normal break-words last:border-r-0 font-Gilroy-SemiBold"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border border-[#204E68]">
            {sponsorshipData.map((row, index) => (
              <tr key={row.id} className="border-b border-gray-700">
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {index + 1}.
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.eventType}
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.sponsorName}
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.companyName}
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.emailId}
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.contactNumber}
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.proposal}
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.amount}
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.rejectionReason}
                </td>
                <td className="p-4 text-[14px] font-Gilroy-Regular  text-gray-300 whitespace-normal break-words">
                  {row.feedback}
                </td>
              </tr>
            ))}

            {[...Array(6)].map((_, index) => (
              <tr key={`empty-${index}`} className="border-b border-gray-700">
                {[...Array(10)].map((_, i) => (
                  <td
                    key={i}
                    className="p-4 text-sm text-gray-300 whitespace-normal break-words"
                  >
                    {i === 0 ? index + 3 + "." : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        <button className="p-2 text-gray-300 hover:text-white">&lt;</button>
        <button className="p-2 text-gray-300 hover:text-white">1</button>
        <button className="p-2 rounded bg-gray-700 text-white">2</button>
        <button className="p-2 text-gray-300 hover:text-white">3</button>
        <button className="p-2 text-gray-300 hover:text-white">4</button>
        <button className="p-2 text-gray-300 hover:text-white">5</button>
        <button className="p-2 text-gray-300 hover:text-white">&gt;</button>
      </div>



      <ROITrackerFlow/>
    </div>
  );
}

export default SponsorsReport;
