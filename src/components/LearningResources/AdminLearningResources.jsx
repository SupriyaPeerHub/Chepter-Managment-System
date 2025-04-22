import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import DropDown from "../../pages/DropDown";
import Collage from "../../pages/Collage";

// Sample data
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

const AdminLearningResources = () => {
  const [selectedZones, setSelectedZones] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  return (
    <div className="flex-1 bg-[#0c1824] p-6 h-full">
      {/* 1st Part */}
      <div>
        <h1 className="text-[#FFFFFF] text-lg pb-4 font-Gilroy font-normal">
          Upcoming Events
        </h1>
        <div className="flex justify-between pb-6">
          {/* dropdown */}
          <div className="flex gap-7">
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
          {/* Sort */}
          <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
            <ArrowUpDown size={16} />
            <span>Sort</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* Event Proposals */}
          {Array.from({ length: 14 }).map((_, index) => (
            <Collage key={index} fromPage="admin" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminLearningResources;
