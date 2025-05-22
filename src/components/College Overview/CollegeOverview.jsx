import { useState } from "react";
import Zoom1 from "../../assets/img/Zoom1.png";
import ZZZ from "../../../zzz";
import { ChevronDown } from "lucide-react";
import FinancialGraph from "../../pages/FinancialGraph";

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
  const [view, setView] = useState("monthly");
  const eventCount = 50; // This would typically come from your data source
  return (
    <div className=" bg-[#0c1824] p-6">
      <div className="flex flex-row gap-5">
        <div className="bg-white rounded-2xl pt-5 pb-5 pl-5 pr-5 shadow-lg border-2 border-[#F15C22] h-[11rem] w-[18rem] flex flex-col gap-3">
          <h2 className="text-[#0B1E29] font-medium text-lg  whitespace-nowrap items-center">
            Total Upcoming Events
          </h2>

          <div className="text-4xl font-semibold text-gray-900 text-center items-center">
            {eventCount}
          </div>

          <span className="text-[#0B1E29] font-Gilroy-SemiBold">
            engaged with PeerHub
          </span>

          {/* <div className="flex rounded-full border border-[#F15C22] bg-white overflow-hidden">
            <button
              onClick={() => setView("weekly")}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors text-[#0B1E29] ${
                view === "weekly"
                  ? "bg-[#F15C22] text-[#0B1E29] rounded-r-full"
                  : "text-gray-600 hover:text-[#0B1E29] bg-white"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setView("monthly")}
              className={`flex-1 px-4 py-2 text-sm font-medium  transition-colors text-[#0B1E29] ${
                view === "monthly"
                  ? " bg-[#F15C22] text-[#0B1E29] rounded-l-full"
                  : "text-gray-600 hover:text-[#0B1E29] bg-white"
              }`}
            >
              Monthly
            </button>
          </div> */}
        </div>
        <div className="bg-white rounded-2xl pt-5 pb-5 pl-5 pr-5 shadow-lg border-2 border-[#F15C22] h-[11rem] w-[18rem] flex flex-col gap-3">
          <h2 className="text-[#0B1E29] font-medium text-lg  whitespace-nowrap">
            Total Upcoming Events
          </h2>

          <div className="text-4xl font-semibold text-gray-900 text-center">
            {eventCount}
          </div>

          <div className="flex rounded-full border border-[#F15C22] bg-white overflow-hidden">
            <button
              onClick={() => setView("weekly")}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors text-[#0B1E29] ${
                view === "weekly"
                  ? "bg-[#F15C22] text-[#0B1E29] rounded-r-full"
                  : "text-gray-600 hover:text-[#0B1E29] bg-white"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setView("monthly")}
              className={`flex-1 px-4 py-2 text-sm font-medium  transition-colors text-[#0B1E29] ${
                view === "monthly"
                  ? " bg-[#F15C22] text-[#0B1E29] rounded-l-full"
                  : "text-gray-600 hover:text-[#0B1E29] bg-white"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl pt-5 pb-5 pl-5 pr-5 shadow-lg border-2 border-[#F15C22] h-[11rem] w-[18rem] flex flex-col gap-3">
          <h2 className="text-[#0B1E29] font-medium text-lg  whitespace-nowrap">
            Total Upcoming Events
          </h2>

          <div className="text-4xl font-semibold text-gray-900 text-center">
            {eventCount}
          </div>

          <div className="flex rounded-full border border-[#F15C22] bg-white overflow-hidden">
            <button
              onClick={() => setView("weekly")}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors text-[#0B1E29] ${
                view === "weekly"
                  ? "bg-[#F15C22] text-[#0B1E29] rounded-r-full"
                  : "text-gray-600 hover:text-[#0B1E29] bg-white"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setView("monthly")}
              className={`flex-1 px-4 py-2 text-sm font-medium  transition-colors text-[#0B1E29] ${
                view === "monthly"
                  ? " bg-[#F15C22] text-[#0B1E29] rounded-l-full"
                  : "text-gray-600 hover:text-[#0B1E29] bg-white"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl pt-5 pb-5 pl-5 pr-5 shadow-lg border-2 border-[#F15C22] h-[11rem] w-[18rem] flex flex-col gap-3">
          <h2 className="text-[#0B1E29] font-medium text-lg  whitespace-nowrap">
            Total Upcoming Events
          </h2>

          <div className="text-4xl font-semibold text-gray-900 text-center">
            {eventCount}
          </div>

          <div className="flex rounded-full border border-[#F15C22] bg-white overflow-hidden">
            <button
              onClick={() => setView("weekly")}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors text-[#0B1E29] ${
                view === "weekly"
                  ? "bg-[#F15C22] text-[#0B1E29] rounded-r-full"
                  : "text-gray-600 hover:text-[#0B1E29] bg-white"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setView("monthly")}
              className={`flex-1 px-4 py-2 text-sm font-medium  transition-colors text-[#0B1E29] ${
                view === "monthly"
                  ? " bg-[#F15C22] text-[#0B1E29] rounded-l-full"
                  : "text-gray-600 hover:text-[#0B1E29] bg-white"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-2xl border-2 border-[#F15C22] shadow-lg mt-14 flex flex-col pt-3 overflow-hidden">
          <button className="pl-[74rem] cursor-pointer">
            <img src={Zoom1} alt="zoom-out" className="h-[12px] w-[12px]" />
          </button>
          {/* college and dropdown */}
          <div className="flex flex-row justify-between">
            <h2 className="text-[#0B1E29] font-Gilroy-SemiBold text-[22px] pl-12 font-normal">
            Financial Overview
            </h2>
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" h-[15px] w-[190px] bg-white text-left px-6 py-4 rounded-sm border-2 border-orange-500 flex
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
            </div>
          </div>

          <FinancialGraph/>
        </div>
      </div>
    </div>
  );
};

export default CollegeOverview;
