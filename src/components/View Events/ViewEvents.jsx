import EventCard from "../../UI/EventCard";

const ViewEvents = () => {
  return (
    <div className="flex-1 bg-[#0c1824] p-6">
      {/* 1st Part */}
      <div>
        <h1 className="text-[#FFFFFF] text-lg pb-3 font-Gilroy">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      {/* 2nd Part */}
      <div className="mt-6">
        <div className="flex justify-between">
          <h1 className="text-[#FFFFFF] text-lg pb-3 font-Gilroy">
            In Progress Events
          </h1>
          <div className="flex gap-5 justify-center">
            <div className="flex gap-2 text-center justify-center align-center">
              <span className="bg-[#F0BF11] rounded-full w-3 h-3 mt-[2px]"></span>
              <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">
                IN PROGRESS
              </span>
              <span className="font-mono font-Gilroy text-black w-4 h-4 text-[11px] rounded-full bg-[#FFFFFF]">
                3
              </span>
            </div>
            <div className="flex gap-2 text-center justify-center align-center">
              <span className="bg-[#EE681D] rounded-full w-3 h-3 mt-[2px]"></span>
              <span className="text-[#FFFFFF] font-Gilroy text-[12px]">
                IN PROGRESS
              </span>
              <span className="w-4 h-4 font-mono font-Gilroy text-[11px] text-black rounded-full bg-[#FFFFFF]">
                3
              </span>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <EventCard />
            <div className="flex gap-2 text-center justify-center align-center pl-24">
              <span className="bg-[#F0BF11] rounded-full w-3 h-3 mt-[2px]"></span>
              <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">
                IN PROGRESS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <EventCard />
            <div className="flex gap-2 text-center justify-center align-center pl-24">
              <span className="bg-[#F0BF11] rounded-full w-3 h-3 mt-[2px]"></span>
              <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">
                IN PROGRESS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <EventCard />
            <div className="flex gap-2 text-center justify-center align-center pl-24">
              <span className="bg-[#F0BF11] rounded-full w-3 h-3 mt-[2px]"></span>
              <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">
                IN PROGRESS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <EventCard />
            <div className="flex gap-2 text-center justify-center align-center pl-24">
              <span className="bg-[#EE681D] rounded-full w-3 h-3 mt-[2px]"></span>
              <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">
                IN PROGRESS
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <EventCard />
            <div className="flex gap-2 text-center justify-center align-center pl-24">
              <span className="bg-[#F0BF11] rounded-full w-3 h-3 mt-[2px]"></span>
              <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">
                IN REVIEW
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd Part */}
      <div className="mt-5">
        <h1 className="text-[#FFFFFF] text-lg pb-3 font-Gilroy">
        Event History
        </h1>
        <div className="grid grid-cols-4 gap-4">
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

export default ViewEvents;
