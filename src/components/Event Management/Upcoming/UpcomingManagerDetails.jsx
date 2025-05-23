import upload from "../../../assets/img/upload.png";
import EventDetails from "../../../UI/EventDetails";
import TeamMembers from "../../../UI/TeamMembers";
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
    // Upcomming Events
    <div className=" text-[#FFFFFF] bg-[#0B1E29] pl-6 pt-6">
      {/* 2. In Progress Events */}
      <h1 className="text-[#FFFFFF] text-lg pb-2 font-Gilroy font-normal">
        Upcoming Events
      </h1>
      <EventDetails />
      <div className="mt-6">
        <TeamMembers />
      </div>
    </div>
  );
};

export default UpcomingManagerDetails;
