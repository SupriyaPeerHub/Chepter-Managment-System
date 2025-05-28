import EventCard from "../../../UI/EventCard";
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

const EventParticipantsRecordDetails = () => {
  // Sort
  const [showSortFilter, setShowSortFilter] = useState(false);

  return (
    <div className="flex-1 bg-[#0c1824] p-6 h-full">
      {/* 1st Part */}
      <div>
        <div className="flex justify-between items-center pb-6">
          <h1 className="text-[#FFFFFF] text-lg font-Gilroy font-normal">
            Amity University :
          </h1>

          <button
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={() => setShowSortFilter(!showSortFilter)}
          >
            <ArrowUpDown size={16} />
            <span>Sort</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4 gap-3">
          {/* Event Card */}
          <EventCard roleType="manager" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
          <EventCard roleType="admin" variant="EventParticipantsRecord" />
        </div>
      </div>
    </div>
  );
};

export default EventParticipantsRecordDetails;
