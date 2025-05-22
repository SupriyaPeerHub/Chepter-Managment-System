import EventCard from "../../../UI/EventCard";
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import DropDown from "../../../UI/DropDown";
import SortFilter from "../../../UI/SortFilter";


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

const colleges = [
  { id: "harvard", label: "Harvard University" },
  { id: "mit", label: "MIT" },
  { id: "stanford", label: "Stanford University" },
  { id: "yale", label: "Yale University" },
];

const eventTypes = [
  { id: "conference", label: "Conference" },
  { id: "workshop", label: "Workshop" },
  { id: "seminar", label: "Seminar" },
  { id: "webinar", label: "Webinar" },
];

const sortOptions = [
  { id: "recently-added", label: "Recently Added" },
  { id: "nearest-first", label: "Nearest First" },
  { id: "farthest-first", label: "Farthest First" },
  { id: "upcoming-week", label: "Upcoming Week" },
  { id: "upcoming-month", label: "Upcoming Month" },
];
const UpcomingEvents = () => {
  const [selectedZones, setSelectedZones] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);
  // Sort
  const [showSortFilter, setShowSortFilter] = useState(false);
  const [selectedSortOptions, setSelectedSortOptions] = useState([]);

  const handleApplySort = (selectedOptions) => {
    setSelectedSortOptions(selectedOptions);
    setShowSortFilter(false); // Close after apply
    console.log("Selected Sort Options:", selectedOptions); // Log the applied options
  };


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
            <DropDown
              title="College"
              options={colleges}
              selectedOptions={selectedColleges}
              onChange={setSelectedColleges}
            />
            <DropDown
              title="Event Type"
              options={eventTypes}
              selectedOptions={selectedEventTypes}
              onChange={setSelectedEventTypes}
            />
          </div>
          {/* Sort */}
          <button
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={() => setShowSortFilter(!showSortFilter)}
          >
            <ArrowUpDown size={16} />
            <span>Sort</span>
          </button>
        </div>
        {/* Sort Filter  */}
        {showSortFilter && (
          <SortFilter
            isOpen={showSortFilter}
            onClose={() => setShowSortFilter(false)}
            sortOptions={sortOptions}
            onApply={handleApplySort} // Pass the apply handler
          />
        )}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4 gap-3">
          {/* Event Card */}
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
