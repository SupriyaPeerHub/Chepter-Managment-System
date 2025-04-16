import upload from "../../../assets/img/upload.png";
import EventDetails from "../../../pages/EventDetails";
import TeamMembers from "../../../pages/TeamMembers";
const UpcomingManagerDetails = () => {
  const tableHeaders = [
    "Date",
    "Title",
    "Event Type",
    "Status",
    "Remarks",
    "Upload",
  ];
  return (
    // <div>
      // {/* 1. Upcomming Events */}
      <div className=" text-[#FFFFFF] bg-[#0c1824] h-auto">
        {/* 2. In Progress Events */}
        <h1 className="text-[#FFFFFF] text-lg pb-2 font-Gilroy font-normal pl-6">
          Upcoming Events
        </h1>
        <EventDetails />
        <div className="p-6">
          <TeamMembers />
        </div>
      </div>
    // </div>
  );
};

export default UpcomingManagerDetails;
