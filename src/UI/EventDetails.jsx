import { Filter } from "lucide-react";
import EventCard from "./EventCard";
import { useState } from "react";

const EventDetails = () => {
  const [roleType, setRoleType] = useState(null); //initially null
  console.log(roleType);
  return (
    <div className={`flex-1 bg-[#0B1E29] ${roleType !== null ? "h-screen" : ""}`}>

      {/* 1st Part */}
      {roleType === null ||
        (roleType === "guest" && (
          <div className="flex justify-end mb-6 mt-3 space-x-3">
            <div className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-Gilroy cursor-pointer">
              + Plan an Event
            </div>
            <button className="flex items-center space-x-2 font-Gilroy bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>
        ))}

      {/* 2nd Part */}
      <div className=" text-[#FFFFFF] ">
        {/* <h1 className="text-[#FFFFFF]  text-lg pb-3 font-Gilroy">
          Upcoming Events
        </h1> */}
        <div className="flex flex-row gap-10">
          {/* Event Card */}
          <EventCard />
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-3 pt-3">
              <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
                Event Name
              </span>
              <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
                Event Type
              </span>
              <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
                Sponsorship arranged by
              </span>
              <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
                Faculty
              </span>
              <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
                PeerHub Manager
              </span>
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
            <div className="flex flex-col gap-3 pt-3">
              <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
                :&emsp;Chai Pe Charcha
              </span>
              <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
                :&emsp;Community & Networking Event
              </span>
              <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
                :&emsp;PeerHub/Self
              </span>
              <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
                :&emsp;Mr. Anurag Jain
              </span>
              <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
                :&emsp;Mr. Anurag Jain
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-3 pt-3">
            <div className="flex flex-col gap-3">
              <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
                Date & Time
              </span>
              <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
                Venue
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
                :&emsp;10 March 2025, 10AM
              </span>
              <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
                :&emsp;Sharda University, A block - Auditorium
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
