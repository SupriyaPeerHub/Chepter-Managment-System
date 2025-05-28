// import { useState } from "react";
// import { ArrowUpDown } from "lucide-react";
// import DropDown from "../../../UI/DropDown";
// import Collage from "../../../UI/Collage";

// // Sample data
// const zones = [
//   { id: "east", label: "East" },
//   { id: "west", label: "West" },
//   { id: "centre", label: "Centre" },
//   { id: "north", label: "North" },
//   { id: "south", label: "South" },
// ];

// const states = [
//   { id: "ny", label: "New York" },
//   { id: "ca", label: "California" },
//   { id: "tx", label: "Texas" },
//   { id: "fl", label: "Florida" },
// ];

// const EventProposals = () => {
//   const [selectedZones, setSelectedZones] = useState([]);
//   const [selectedStates, setSelectedStates] = useState([]);
//   return (
//     <div className="flex-1 bg-[#0c1824] p-6 h-full">
//       {/* 1st Part */}
//       <div>
//         <h1 className="text-[#FFFFFF] text-lg pb-4 font-Gilroy font-normal">
//           Event Proposals
//         </h1>
//         <div className="flex justify-between pb-6">
//           {/* dropdown */}
//           <div className="flex gap-7">
//             <DropDown
//               title="Zone"
//               options={zones}
//               selectedOptions={selectedZones}
//               onChange={setSelectedZones}
//             />
//             <DropDown
//               title="State"
//               options={states}
//               selectedOptions={selectedStates}
//               onChange={setSelectedStates}
//             />
//           </div>
//           {/* Sort */}
//           <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
//             <ArrowUpDown size={16} />
//             <span>Sort</span>
//           </button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {/* Event Proposals */}
//           {Array.from({ length: 14 }).map((_, index) => (
//             <Collage key={index} fromPage="admin" variant="proposals" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventProposals;




import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import DropDown from "../../../UI/DropDown";
import Collage from "../../../UI/Collage";

const zones = [
  { id: "east", label: "East" },
  { id: "west", label: "West" },
  { id: "centre", label: "Centre" },
  { id: "north", label: "North" },
  { id: "south", label: "South" },
];

const states = [
  { id: "ny", label: "New York" },
  { id: "ca", label: "California" },
  { id: "tx", label: "Texas" },
  { id: "fl", label: "Florida" },
];

const EventProposals = () => {
  const [selectedZones, setSelectedZones] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);

  return (
    <div className="flex-1 bg-[#0c1824] p-4 sm:p-6 h-full">
      {/* Header */}
      <div>
        <h1 className="text-[#FFFFFF] text-lg pb-4 font-Gilroy font-normal">
          Event Proposals
        </h1>

        {/* Filters & Sort */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between pb-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
            <DropDown
              title="Zone"
              options={zones}
              selectedOptions={selectedZones}
              onChange={setSelectedZones}
            />
            <DropDown
              title="State"
              options={states}
              selectedOptions={selectedStates}
              onChange={setSelectedStates}
            />
          </div>

          <button className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md w-full sm:w-auto">
            <ArrowUpDown size={16} />
            <span>Sort</span>
          </button>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 14 }).map((_, index) => (
            <Collage key={index} fromPage="admin" variant="proposals" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventProposals;
