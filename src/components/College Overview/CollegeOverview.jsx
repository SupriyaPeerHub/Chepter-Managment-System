import { useState } from "react";
const CollegeOverview = () => {
  const [view, setView] = useState("monthly");
  const eventCount = 50; // This would typically come from your data source
  return (
    <div className=" bg-[#0c1824] p-6">
      <div className="flex flex-row gap-5">
        <div className="bg-white rounded-2xl pt-5 pb-5 pl-5 pr-5 shadow-lg border-2 border-[#F15C22] h-[11rem] w-[18rem] flex flex-col gap-3">
          <h2 className="text-[#0B1E29] font-medium text-lg  whitespace-nowrap">
            Total Upcoming Events
          </h2>

          <div className="text-4xl font-semibold text-gray-900 text-center">
            {eventCount}
          </div>

          <span className="text-[#0B1E29] font-Gilroy-SemiBold">engaged with PeerHub</span>

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
      <div></div>
    </div>
  );
};

export default CollegeOverview;
