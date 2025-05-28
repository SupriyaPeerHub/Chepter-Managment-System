import { Filter } from "lucide-react";
import EventCard from "../../UI/EventCard";
import AddEventCard from "../../UI/AddEventCard";
import { useState } from "react";
import PlanAnEvent from "../../UI/PlanAnEvent";
import upload from "../../assets/img/upload.png";
import { FiPlus } from "react-icons/fi";

const EventPlanning = () => {
  const [isPlanEvent, setIsPlanEvent] = useState(false);
  // console.log(isPlanEvent);
  const tableHeaders = [
    "Date",
    "Title",
    "Event Type",
    "Status",
    "Remarks",
    "Upload",
  ];
  return (
    <div className="flex-1 pt-6 pr-6 bg-[#0B1E29]">
      {/* 1st Part */}
      <div className="flex justify-end mb-6 mt-3 space-x-3">
        <div
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-Gilroy cursor-pointer flex items-center"
          onClick={() => setIsPlanEvent(true)}
        >
          <FiPlus className="text-[16px] font-Gilroy font-normal pt-0.5" /> Plan an Event
        </div>
        <button className="flex items-center space-x-2 font-Gilroy bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>

      {/* plan an event  */}
      <PlanAnEvent isOpen={isPlanEvent} onClose={() => setIsPlanEvent(false)} />

      {/* 2nd Part */}
      <div className="pl-6">
        <h1 className="text-[#FFFFFF] text-lg pb-3 font-Gilroy">
          Upcoming Events
        </h1>
        <div className="flex flex-row gap-10 flex-wrap">
          {/* Event Card */}
          <EventCard />
          {/* Card Details*/}
          <AddEventCard setIsPlanEvent={setIsPlanEvent} isPlanEvent={isPlanEvent}/>
          <div></div>
        </div>
      </div>

      {/* 3rd Part */}
      {/* Event Progress Steps */}
      <div className="flex items-center justify-between p-7  mt-11">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
            1
          </div>
          <div className="ml-2">
            <p className="text-white font-Gilroy">Idea Submission</p>
          </div>
        </div>
        <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
            2
          </div>
          <div className="ml-2">
            <p className="text-gray-400 font-Gilroy">In Progress</p>
          </div>
        </div>
        <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-Gilroy">
            3
          </div>
          <div className="ml-2">
            <p className="text-gray-400 font-Gilroy">In Review</p>
          </div>
        </div>
        <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
            4
          </div>
          <div className="ml-2">
            <p className="text-gray-400 font-Gilroy">Final Evaluation</p>
          </div>
        </div>
      </div>

      {/* 4 th Part */}
      {/* Table */}
      <div className="rounded-lg overflow-hidden pl-7 pr-8 pb-10">
        <table className="w-full border border-[#204E68]">
          <thead>
            <tr className="border-b border-[#204E68]">
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-medium text-gray-400 border-t border-r border-l border-[#204E68] whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#204E68] text-gray-300">
              <td className="px-4 py-3">21/02/2025</td>
              <td className="px-4 py-3">Chai Pe Charcha</td>
              <td className="px-4 py-3">Community & Networking Event</td>
              <td className="px-4 py-3">
                <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 pl-2 pr-2 whitespace-nowrap">
                  On going
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-col justify-center">
                  <span>Good Idea but needs to be revised.</span>
                  <div className="flex flex-col pl-32">
                    <span>-Anurag</span>
                    <span>22/02/2025</span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div>
                  {/* <label className="block text-white mb-1">Document</label> */}
                  <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer  transition-colors whitespace-nowrap">
                    <input
                      type="file"
                      className="hidden"
                      id="document-upload"
                    />
                    <label
                      htmlFor="document-upload"
                      className="cursor-pointer flex align-center justify-center gap-2 text-center "
                    >
                      <img src={upload} alt="" className="w-5 h-5 pt-1" />
                      <span className="text-gray-400">Upload Document</span>
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventPlanning;
