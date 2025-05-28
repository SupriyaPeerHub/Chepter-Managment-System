import EventDetails from "../../UI/EventDetails";
import TeamMembers from "../../UI/TeamMembers";
import SponsorshipDetails from "../../UI/SponsorshipDetails";
import ROITrackerFlow from "../../UI/ROITrackerFlow";

function TotalEventHostDetails() {
  return (
    <div className=" text-[#FFFFFF] bg-[#0B1E29] h-auto p-6">
      <h1 className="text-[#FFFFFF] text-lg pb-2 font-Gilroy font-normal ">
        Event Details
      </h1>
      <EventDetails />
      {/* Team Members */}
      <div className="pt-10">
        <h1 className="text-[#FFFFFF] text-lg pb-2 font-Gilroy font-normal ">
          Team Members
        </h1>
        <TeamMembers />
      </div>

      {/* Student Participation Record */}
      <div className="flex gap-8 pt-6">
        <span className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">
          Student Participation Record
        </span>
        <span className="bg-[#F3642A] w-20 pl-5 pt-1 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] h-8 font-Gilroy-SemiBold cursor-pointer">
          View
        </span>
      </div>
      <div className="mt-10">
        <SponsorshipDetails />
      </div>
      <div className="mt-10">
        <ROITrackerFlow />
      </div>
    </div>
  );
}

export default TotalEventHostDetails;
