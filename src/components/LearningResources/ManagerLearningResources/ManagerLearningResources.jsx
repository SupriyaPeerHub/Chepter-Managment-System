import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import DropDown from "../../../UI/DropDown";
import Collage from "../../../UI/Collage";
import upload from "../../../assets/img/upload.png";

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

const ManagerLearningResources = () => {
  const [selectedZones, setSelectedZones] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  return (
    <div className="flex-1 bg-[#0c1824] p-6 h-full">
      {/* 1st Part */}
      <div>
        <h1 className="text-[#FFFFFF] text-lg pb-4 font-Gilroy font-normal">
          Learning Resources
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
          <div className="flex gap-3">
            {/* it is only for Manager */}
            <button className="flex items-center space-x-2 bg-[#F3642A] text-white px-3 py-2 rounded-md">
              <img
                src={upload}
                alt="upload-doc"
                className="w-[22px] h-[22px]"
              />
              <span>Upload Resources</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
              <ArrowUpDown size={16} />
              <span>Sort</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* Event Proposals */}
          {Array.from({ length: 14 }).map((_, index) => (
            <Collage key={index} fromPage="manager" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerLearningResources;
