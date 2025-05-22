import upload from "../../../assets/img/upload.png";
// function UpcomingAdminDetails() {
//   const tableHeaders = [
//     "Date",
//     "Title",
//     "Event Type",
//     "Status",
//     "Remarks",
//     "Upload",
//   ];
//   return (
//     <div>

//               {/* Event Progress Steps */}
//               <div className="flex items-center justify-between pr-4 mt-2">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
//                     1
//                   </div>
//                   <div className="ml-2">
//                     <p className="text-white font-Gilroy">Idea Submission</p>
//                   </div>
//                 </div>
//                 <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
//                     2
//                   </div>
//                   <div className="ml-2">
//                     <p className="text-gray-400 font-Gilroy">In Progress</p>
//                   </div>
//                 </div>
//                 <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-Gilroy">
//                     3
//                   </div>
//                   <div className="ml-2">
//                     <p className="text-gray-400 font-Gilroy">In Review</p>
//                   </div>
//                 </div>
//                 <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
//                     4
//                   </div>
//                   <div className="ml-2">
//                     <p className="text-gray-400 font-Gilroy">Final Evaluation</p>
//                   </div>
//                 </div>
//               </div>
//               {/* Table */}
//               <div className="rounded-lg overflow-hidden pt-3 pb-10">
//                 <table className="w-full border border-[#204E68]">
//                   <thead>
//                     <tr className="border-b border-[#204E68]">
//                       {tableHeaders.map((header, index) => (
//                         <th
//                           key={index}
//                           className="px-4 py-3 text-left text-sm font-medium text-gray-400 border-t border-r border-l border-[#204E68]"
//                         >
//                           {header}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b border-[#204E68] text-gray-300">
//                       <td className="px-4 py-3">21/02/2025</td>
//                       <td className="px-4 py-3">Chai Pe Charcha</td>
//                       <td className="px-4 py-3">Community & Networking Event</td>
//                       <td className="px-4 py-3">
//                         <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 pl-2 pr-2">
//                           On going
//                         </span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex flex-col justify-center">
//                           <span>Good Idea but needs to be revised.</span>
//                           <div className="flex flex-col pl-32">
//                             <span>-Anurag</span>
//                             <span>22/02/2025</span>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex flex-col justify-center align-center">
//                           {/* <label className="block text-white mb-1">Document</label> */}
//                           <div className="border-2 border-gray-600 rounded-md p-1.5 text-center cursor-pointer  transition-colors">
//                             <input
//                               type="file"
//                               className="hidden"
//                               id="document-upload"
//                             />
//                             <label
//                               htmlFor="document-upload"
//                               className="cursor-pointer flex align-center justify-center gap-2 text-center "
//                             >
//                               <img src={upload} alt="" className="w-5 h-5 pt-1" />
//                               <span className="text-gray-400">Upload Document</span>
//                             </label>
//                           </div>
//                           <button
//                             type="submit"
//                             className="bg-[#F3642A] w-24 hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-1 py-1 rounded font-Gilroy-SemiBold"
//                           >
//                             Upload
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               {/* Feedback Form */}
//               <div className="flex flex-col gap-2">
//                 <h1 className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">
//                   Add Comment
//                 </h1>
//                 <textarea
//                   // value={comment}
//                   // onChange={(e) => setComment(e.target.value)}
//                   placeholder="@Mention Manager"
//                   className="w-[1000px] min-h-[120px] p-4 border border-[#204E68] rounded-sm
//                   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
//                   resize-none text-[#D1D5BA] placeholder-[#BEBAB9] transition duration-200 font-Gilroy-SemiBold-Italic"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-[#F3642A] w-32 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-1 py-1 font-Gilroy-SemiBold"
//                 >
//                   Submit
//                 </button>
//               </div>

//               {/* 3. Past Events */}
//               <h1 className="text-[#BEBAB9] text-[18px] pt-8 pb-3 font-Gilroy">
//                 Past Events
//               </h1>
//               {/* <EventDetails /> */}
//               <h2 className="text-[#BEBAB9] text-[18px] pb-3 font-Gilroy">
//                 View Feedback
//               </h2>
//               <div className="flex flex-col border border-[#204E68] rounded-sm justify-center p-2 pb-10 gap-4">
//                 {/* 1 */}
//                 <div className="flex border border-[#243139] pl-5 pr-2 bg-[#243139] rounded-sm">
//                   <span className="text-[#BEBAB9] font-Gilroy-Regular">
//                     The event was a great success, bringing our community together and
//                     running smoothly. I appreciate the hard work of the team,
//                     volunteers, and attendees. Looking forward to improving even more
//                     next time!
//                   </span>
//                   <div className="flex flex-row pt-4 pl-0.5">
//                     <span className="whitespace-nowrap pr-2 font-Gilroy-RegularItalic text-[#BEBAB9]">
//                       -Sarthak Negi{" "}
//                     </span>
//                     <span className="whitespace-nowrap border text-[#0B1E29] text-[12px] px-4 pt-1 h-6 font-Gilroy border-[#F15C22] rounded-sm bg-[#F15C22]">
//                       PRESIDENT
//                     </span>
//                   </div>
//                 </div>
//                 {/* 2 */}
//                 <div className="flex border border-[#243139] pl-5 pr-2 bg-[#243139] rounded-sm">
//                   <span className="text-[#BEBAB9] font-Gilroy-Regular">
//                     The event was a great success, bringing our community together and
//                     running smoothly. I appreciate the hard work of the team,
//                     volunteers, and attendees. Looking forward to improving even more
//                     next time!
//                   </span>
//                   <div className="flex flex-row pt-4 pl-0.5">
//                     <span className="whitespace-nowrap pr-2 font-Gilroy-RegularItalic text-[#BEBAB9]">
//                       -Sarthak Negi{" "}
//                     </span>
//                     <span className="whitespace-nowrap border text-[#0B1E29] text-[12px] px-4 pt-1 h-6 font-Gilroy border-[#F15C22] rounded-sm font-normal bg-[#F15C22]">
//                       EVENT COORDINATOR
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               {/* Add Comment & Student Participation Record */}
//               <div className="flex flex-row gap-20">
//                 <div className="flex flex-col">
//                   <h1 className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">
//                     Add Comment
//                   </h1>
//                   <textarea
//                     // value={comment}
//                     // onChange={(e) => setComment(e.target.value)}
//                     placeholder="@Mention Manager"
//                     className="w-[800px] min-h-[120px] p-4 border border-[#204E68] rounded-sm
//                                  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
//                                  resize-none text-[#D1D5BA] placeholder-[#BEBAB9] transition duration-200 font-Gilroy-SemiBold-Italic"
//                   />
//                   <button
//                     type="submit"
//                     className="bg-[#F3642A] w-32 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-3 py-1 font-Gilroy-SemiBold"
//                   >
//                     Submit
//                   </button>
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">Student Participation Record</span>
//                   <span className="bg-[#F3642A] w-20 pl-5 pt-1 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] h-8 font-Gilroy-SemiBold">View</span>
//                 </div>
//               </div>
//     </div>
//   )
// }

// export default UpcomingAdminDetails

import EventDetails from "../../../UI/EventDetails";
import TeamMembers from "../../../UI/TeamMembers";
const UpcomingAdminDetails = () => {
  return (
    // {/* 1. Upcomming Events */}
    <div className=" text-[#FFFFFF] bg-[#0c1824] h-auto">
      {/* 2. In Progress Events */}
      <h1 className="text-[#BEBAB9] text-lg pb-1 font-Gilroy font-normal pt-3 pl-6">
        Upcoming Events
      </h1>
      <EventDetails />
      <div className="p-6">
        <TeamMembers />
      </div>
      <h1 className="text-[#FFFFFF]  text-lg pb-3 font-Gilroy pl-6">
        Sponsorship Details :
      </h1>
      <div className="flex flex-row gap-10 pl-6 pb-10">
        {/* Event Card */}
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-3 pt-3">
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Sponsor’s Contact Name
            </span>
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Email ID
            </span>
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Contact number
            </span>
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Company Name
            </span>
          </div>
          <div className="flex flex-col gap-3 pt-3">
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;Sanjay Dutta
            </span>
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;sanjaydutta2584@gmail.com
            </span>
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;98563251XX
            </span>
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;Sanjay Travels & Co.
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-3 pt-3">
          <div className="flex flex-col gap-3">
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Amount Sponsored
            </span>
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Upload Sponsor Invoice
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;10 March 2025, 10AM
            </span>
            <div className="flex flex-row gap-3">
              {/* Can i make it form */}
              <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer  transition-colors">
                <input type="file" className="hidden" id="document-upload" />
                <label
                  htmlFor="document-upload"
                  className="cursor-pointer flex align-center justify-center gap-2 text-center "
                >
                  <img src={upload} alt="" className="w-5 h-5 pt-1" />
                  <span className="text-gray-400">Upload Document</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-32 bg-[#F15A2B] hover:bg-[#d94d21] text-white py-2 px-4 rounded transition-colors font-Gilroy-SemiBold font-medium"
              >
                Submit
              </button>
            </div>
            <div>
              <a
                href="https://example.com/path/to/your/file.pdf" // External link to the PDF
                download="FinalDocument.pdf" // Optionally provide a filename for download
                className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-2"
              >
                <span className="font-Gilroy-SemiBold-Italic font-normal">
                  [View Final Document]
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default UpcomingAdminDetails;

// // import upload from "../src/assets/img/upload.png";
// import EventDetails from "../../../pages/EventDetails";
// const UpcomingAdminDetails = () => {
//   const tableHeaders = [
//     "Date",
//     "Title",
//     "Event Type",
//     "Status",
//     "Remarks",
//     "Upload",
//   ];
//   return (
//     <div>
//       {/* 1. Upcomming Events */}
//       <div className="pl-6 text-[#FFFFFF] ">
//         <h1 className="text-[#FFFFFF]  text-lg pb-3 font-Gilroy">
//           Sponsorship Details :
//         </h1>
//         <div className="flex flex-row gap-10">
//           {/* Event Card */}
//           <div className="flex flex-row gap-3">
//             <div className="flex flex-col gap-3 pt-3">
//               <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
//                 Sponsor’s Contact Name
//               </span>
//               <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
//                 Email ID
//               </span>
//               <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
//                 Contact number
//               </span>
//               <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
//                 Company Name
//               </span>
//             </div>
//             <div className="flex flex-col gap-3 pt-3">
//               <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
//                 :&emsp;Sanjay Dutta
//               </span>
//               <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
//                 :&emsp;sanjaydutta2584@gmail.com
//               </span>
//               <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
//                 :&emsp;98563251XX
//               </span>
//               <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
//                 :&emsp;Sanjay Travels & Co.
//               </span>
//             </div>
//           </div>
//           <div className="flex flex-row gap-3 pt-3">
//             <div className="flex flex-col gap-3">
//               <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
//                 Amount Sponsored
//               </span>
//               <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
//                 Upload Sponsor Invoice
//               </span>
//             </div>
//             <div className="flex flex-col gap-3">
//               <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
//                 :&emsp;10 March 2025, 10AM
//               </span>
//               <div className="flex flex-row gap-3">
//                 {/* Can i make it form */}
//                 <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer  transition-colors">
//                   <input type="file" className="hidden" id="document-upload" />
//                   <label
//                     htmlFor="document-upload"
//                     className="cursor-pointer flex align-center justify-center gap-2 text-center "
//                   >
//                     <img src={upload} alt="" className="w-5 h-5 pt-1" />
//                     <span className="text-gray-400">Upload Document</span>
//                   </label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-32 bg-[#F15A2B] hover:bg-[#d94d21] text-white py-2 px-4 rounded transition-colors font-Gilroy-SemiBold font-medium"
//                 >
//                   Submit
//                 </button>
//               </div>
//               <div>
//                 <a
//                   href="https://example.com/path/to/your/file.pdf" // External link to the PDF
//                   download="FinalDocument.pdf" // Optionally provide a filename for download
//                   className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-2"
//                 >
//                   <span className="font-Gilroy-SemiBold-Italic font-normal">
//                     [View Final Document]
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* 2. In Progress Events */}
//         <h1 className="text-[#FFFFFF] text-lg pb-4 font-Gilroy font-normal mt-4">
//           Upcoming Events
//         </h1>
//         <EventDetails />
//         {/* Event Progress Steps */}
//         <div className="flex items-center justify-between pr-4 mt-2">
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
//               1
//             </div>
//             <div className="ml-2">
//               <p className="text-white font-Gilroy">Idea Submission</p>
//             </div>
//           </div>
//           <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
//               2
//             </div>
//             <div className="ml-2">
//               <p className="text-gray-400 font-Gilroy">In Progress</p>
//             </div>
//           </div>
//           <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-Gilroy">
//               3
//             </div>
//             <div className="ml-2">
//               <p className="text-gray-400 font-Gilroy">In Review</p>
//             </div>
//           </div>
//           <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
//               4
//             </div>
//             <div className="ml-2">
//               <p className="text-gray-400 font-Gilroy">Final Evaluation</p>
//             </div>
//           </div>
//         </div>
//         {/* Table */}
//         <div className="rounded-lg overflow-hidden pt-3 pb-10">
//           <table className="w-full border border-[#204E68]">
//             <thead>
//               <tr className="border-b border-[#204E68]">
//                 {tableHeaders.map((header, index) => (
//                   <th
//                     key={index}
//                     className="px-4 py-3 text-left text-sm font-medium text-gray-400 border-t border-r border-l border-[#204E68]"
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b border-[#204E68] text-gray-300">
//                 <td className="px-4 py-3">21/02/2025</td>
//                 <td className="px-4 py-3">Chai Pe Charcha</td>
//                 <td className="px-4 py-3">Community & Networking Event</td>
//                 <td className="px-4 py-3">
//                   <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 pl-2 pr-2">
//                     On going
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">
//                   <div className="flex flex-col justify-center">
//                     <span>Good Idea but needs to be revised.</span>
//                     <div className="flex flex-col pl-32">
//                       <span>-Anurag</span>
//                       <span>22/02/2025</span>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-4 py-3">
//                   <div className="flex flex-col justify-center align-center">
//                     {/* <label className="block text-white mb-1">Document</label> */}
//                     <div className="border-2 border-gray-600 rounded-md p-1.5 text-center cursor-pointer  transition-colors">
//                       <input
//                         type="file"
//                         className="hidden"
//                         id="document-upload"
//                       />
//                       <label
//                         htmlFor="document-upload"
//                         className="cursor-pointer flex align-center justify-center gap-2 text-center "
//                       >
//                         <img src={upload} alt="" className="w-5 h-5 pt-1" />
//                         <span className="text-gray-400">Upload Document</span>
//                       </label>
//                     </div>
//                     <button
//                       type="submit"
//                       className="bg-[#F3642A] w-24 hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-1 py-1 rounded font-Gilroy-SemiBold"
//                     >
//                       Upload
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         {/* Feedback Form */}
//         <div className="flex flex-col gap-2">
//           <h1 className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">
//             Add Comment
//           </h1>
//           <textarea
//             // value={comment}
//             // onChange={(e) => setComment(e.target.value)}
//             placeholder="@Mention Manager"
//             className="w-[1000px] min-h-[120px] p-4 border border-[#204E68] rounded-sm
//             focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
//             resize-none text-[#D1D5BA] placeholder-[#BEBAB9] transition duration-200 font-Gilroy-SemiBold-Italic"
//           />
//           <button
//             type="submit"
//             className="bg-[#F3642A] w-32 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-1 py-1 font-Gilroy-SemiBold"
//           >
//             Submit
//           </button>
//         </div>
//         {/* 3. Past Events */}
//         <h1 className="text-[#BEBAB9] text-[18px] pt-8 pb-3 font-Gilroy">
//           Past Events
//         </h1>
//         {/* <EventDetails /> */}
//         <h2 className="text-[#BEBAB9] text-[18px] pb-3 font-Gilroy">
//           View Feedback
//         </h2>
//         <div className="flex flex-col border border-[#204E68] rounded-sm justify-center p-2 pb-10 gap-4">
//           {/* 1 */}
//           <div className="flex border border-[#243139] pl-5 pr-2 bg-[#243139] rounded-sm">
//             <span className="text-[#BEBAB9] font-Gilroy-Regular">
//               The event was a great success, bringing our community together and
//               running smoothly. I appreciate the hard work of the team,
//               volunteers, and attendees. Looking forward to improving even more
//               next time!
//             </span>
//             <div className="flex flex-row pt-4 pl-0.5">
//               <span className="whitespace-nowrap pr-2 font-Gilroy-RegularItalic text-[#BEBAB9]">
//                 -Sarthak Negi{" "}
//               </span>
//               <span className="whitespace-nowrap border text-[#0B1E29] text-[12px] px-4 pt-1 h-6 font-Gilroy border-[#F15C22] rounded-sm bg-[#F15C22]">
//                 PRESIDENT
//               </span>
//             </div>
//           </div>
//           {/* 2 */}
//           <div className="flex border border-[#243139] pl-5 pr-2 bg-[#243139] rounded-sm">
//             <span className="text-[#BEBAB9] font-Gilroy-Regular">
//               The event was a great success, bringing our community together and
//               running smoothly. I appreciate the hard work of the team,
//               volunteers, and attendees. Looking forward to improving even more
//               next time!
//             </span>
//             <div className="flex flex-row pt-4 pl-0.5">
//               <span className="whitespace-nowrap pr-2 font-Gilroy-RegularItalic text-[#BEBAB9]">
//                 -Sarthak Negi{" "}
//               </span>
//               <span className="whitespace-nowrap border text-[#0B1E29] text-[12px] px-4 pt-1 h-6 font-Gilroy border-[#F15C22] rounded-sm font-normal bg-[#F15C22]">
//                 EVENT COORDINATOR
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* Add Comment & Student Participation Record */}
//         <div className="flex flex-row gap-20">
//           <div className="flex flex-col">
//             <h1 className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">
//               Add Comment
//             </h1>
//             <textarea
//               // value={comment}
//               // onChange={(e) => setComment(e.target.value)}
//               placeholder="@Mention Manager"
//               className="w-[800px] min-h-[120px] p-4 border border-[#204E68] rounded-sm
//                            focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
//                            resize-none text-[#D1D5BA] placeholder-[#BEBAB9] transition duration-200 font-Gilroy-SemiBold-Italic"
//             />
//             <button
//               type="submit"
//               className="bg-[#F3642A] w-32 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-3 py-1 font-Gilroy-SemiBold"
//             >
//               Submit
//             </button>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">Student Participation Record</span>
//             <span className="bg-[#F3642A] w-20 pl-5 pt-1 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] h-8 font-Gilroy-SemiBold">View</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingAdminDetails;
