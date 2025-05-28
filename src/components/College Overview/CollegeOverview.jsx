// import { useState } from "react";
// import Zoom1 from "../../assets/img/Zoom1.png";
// import ZZZ from "../../../zzz";
// import { ChevronDown } from "lucide-react";
// import FinancialGraph from "../../UI/FinancialGraph";
// import CustomCollageOverviewCard from "../../UI/CustomCollageOverviewCard";

// const Colleges = [
//   "Indian Institute of Technology Bombay",
//   "Birla Institute of Technology and Science, Pilani",
//   "Jadavpur University",
//   "Vellore Institute of Technology",
//   "National Institute of Technology Trichy",
// ];

// const CollegeOverview = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCollege, setSelectedCollege] = useState("Select College");
//   const [view, setView] = useState("monthly");
//   const eventCount = 500;
//   return (
//     <div className=" bg-[#D9D9D9] p-6">
//       <div className="flex flex-row gap-5">
//         {/* 1st Card */}
//         <div
//           className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#F15C22] h-[11rem] w-[18rem] flex flex-col justify-center
//         items-center text-center mx-auto font-normal"
//         >
//           <h2 className="text-[#0B1E29] font-Gilroy-SemiBold text-[1.375rem] whitespace-nowrap font-normal">
//             Total Upcoming Events
//           </h2>

//           <div className="text-[2.5rem] font-Gilroy text-[#F15C22] font-normal">
//             {eventCount}
//           </div>

//           <span className="text-[#0B1E29] text-[1.375rem] font-Gilroy-SemiBold font-normal">
//             engaged with PeerHub
//           </span>
//         </div>

//         {/* next 3 Cards */}
//         <CustomCollageOverviewCard />
//         <CustomCollageOverviewCard />
//         <CustomCollageOverviewCard />
//       </div>
//       <div>
//         <div className="bg-white rounded-2xl border-2 border-[#F15C22] shadow-lg mt-14 flex flex-col pt-3 overflow-hidden">
//           <button className="pl-[74rem] cursor-pointer">
//             <img src={Zoom1} alt="zoom-out" className="h-[12px] w-[12px]" />
//           </button>
//           {/* college and dropdown */}
//           <div className="flex flex-row justify-between">
//             <h2 className="text-[#0B1E29] font-Gilroy-SemiBold text-[22px] pl-12 font-normal">
//               Financial Overview
//             </h2>
//             {/* Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className=" h-[15px] w-[190px] bg-white text-left px-6 py-4 rounded-sm border-2 border-orange-500 flex
//                  items-center justify-between hover:border-orange-600 transition-colors"
//               >
//                 <span className=" font-medium text-gray-800">
//                   {selectedCollege}
//                 </span>
//                 <ChevronDown
//                   className={`w-6 h-6 text-orange-500 transition-transform ${
//                     isOpen ? "transform rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {isOpen && (
//                 <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
//                   {Colleges.map((college, index) => (
//                     <button
//                       key={index}
//                       className="w-full px-6 py-3 text-left hover:bg-orange-50 transition-colors text-gray-700 hover:text-orange-600"
//                       onClick={() => {
//                         setSelectedCollege(college);
//                         setIsOpen(false);
//                       }}
//                     >
//                       {college}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//           <FinancialGraph />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollegeOverview;

{
  /*Select Collage Dropdown */
}
{
  /* <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-[15px] w-[190px] bg-white text-left px-6 py-4 rounded-sm border-2 border-orange-500 flex
                 items-center justify-between hover:border-orange-600 transition-colors"
              >
                <span className=" font-medium text-gray-800">
                  {selectedCollege}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transition-transform ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
                  {Colleges.map((college, index) => (
                    <button
                      key={index}
                      className="w-full px-6 py-3 text-left hover:bg-orange-50 transition-colors text-gray-700 hover:text-orange-600"
                      onClick={() => {
                        setSelectedCollege(college);
                        setIsOpen(false);
                      }}
                    >
                      {college}
                    </button>
                  ))}
                </div>
              )}
            </div> */
}

import { useState } from "react";
import Zoom1 from "../../assets/img/Zoom1.png";
import { ChevronDown } from "lucide-react";
import FinancialGraph from "../../UI/FinancialGraph";
import CustomCollageOverviewCard from "../../UI/CustomCollageOverviewCard";

const Colleges = [
  "Indian Institute of Technology Bombay",
  "Birla Institute of Technology and Science, Pilani",
  "Jadavpur University",
  "Vellore Institute of Technology",
  "National Institute of Technology Trichy",
];

const CollegeOverview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState("Select College");

  // Card data
  const cardData = [
    {
      title: "Total No. of Students",
      count: 500,
      showToggle: false,
      highlightText: "engaged with PeerHub",
    },
    {
      title: "Total Events Hosted",
      count: 500,
      showToggle: true,
      navigateTo: "/total-events-hosted", // ✅ Add this line
    },
    {
      title: "Total Investment in Events",
      count: "50K",
      showToggle: true,
      navigateTo: "/college-ROI-details", // ✅ Add this line
    },
    {
      title: "Spon. Conversion Rate",
      count: "43%",
      showToggle: true,
    },
  ];

  return (
    <div className=" bg-[#D9D9D9] p-6 h-screen">
      <div className="flex flex-row gap-5">
        {cardData.map((card, index) => (
          <CustomCollageOverviewCard key={index} {...card} />
        ))}
      </div>

      {/* Financial Graph Card */}
      <div>
        <div className="bg-white rounded-2xl border-2 border-[#F15C22] shadow-lg mt-14 flex flex-col pt-3 overflow-hidden">
          <button className="pl-[74rem] cursor-pointer">
            <img src={Zoom1} alt="zoom-out" className="h-[12px] w-[12px]" />
          </button>

          {/* College and Dropdown */}
          <div className="flex flex-row justify-between">
            <h2 className="text-[#0B1E29] font-Gilroy-SemiBold text-[22px] pl-12 font-normal">
              Financial Overview
            </h2>

            {/* Select College Dropdown */}
            <div className="relative w-full max-w-[60px] sm:max-w-[100px] md:max-w-[200px] mr-12 mt-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white px-2 py-1 rounded-sm border-2 border-[#F15C22] flex items-center justify-between hover:border-orange-600 transition-colors"
              >
                <span className="text-gray-800 font-medium truncate">
                  {selectedCollege}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#0B1E29] transition-transform ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-10 max-h-60 overflow-y-auto">
                  {Colleges.map((college, index) => (
                    <button
                      key={index}
                      className="w-full px-4 py-2 text-left hover:bg-orange-50 transition-colors text-[#0B1E29] hover:text-[#F15C22] font-Gilroy-Regular"
                      onClick={() => {
                        setSelectedCollege(college);
                        setIsOpen(false);
                      }}
                    >
                      {college}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <FinancialGraph />
        </div>
      </div>
    </div>
  );
};

export default CollegeOverview;
