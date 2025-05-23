// EventCard.js
import { Calendar, MapPin } from "lucide-react";
import eventOverview from "../assets/img/eventOverview.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EventCard = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const [roleType, setRoleType] = useState("manager"); //initially null //admin

  // useEffect(() => {
  //   // Fetch the roleType from localStorage or state management
  //   const role = localStorage.getItem("roleType"); // Replace with your method
  //   setRoleType(role);
  // }, []);

  const events = {
    title: "Workshops & Learning Trikes",
    location: "Seaver Way Queens, New York",
    date: "08 Dec, 2023 - 10 AM",
    imgSrc: eventOverview,
    eventType: "Workshops",
  };
  const { title, location, date, imgSrc, eventType } = events;

  const handleClick = () => {
    // e.preventDefault();
    console.log(locationPath, roleType);
    const submenuPath = locationPath.pathname.split("/").pop();
    console.log(submenuPath);
    let eventPage = "";

    if (roleType === "manager") {
      eventPage = `/event-management/${submenuPath}/manager-details`;
    } else if (roleType === "admin") {
      eventPage = `/event-management/${submenuPath}/admin-details`;
    } else if (roleType === "coremember") {
      eventPage = "/event-planning/details";
    } else if (roleType === "guest" || roleType === null) {
      eventPage = "/event-planning/details";
    }
    console.log("eventPage", eventPage);
    navigate(eventPage);
  };

  return (
    <div
      className="flex flex-col border border-[#204E68] rounded-sm p-4 font-Gilroy cursor-pointer shadow h-56 w-60"
      onClick={handleClick}
    >
      <h3 className="font-Gilroy-Regular text-sm pb-2 text-[#BEBAB9] pl-2">
        {title}
      </h3>
      <img
        src={imgSrc}
        alt={eventType}
        className="h-[120px] w-[280px] rounded-sm"
      />
      <span className="font-Gilroy text-md pt-0.5 text-[#FFFFFF]">
        {eventType}
      </span>
      <div className="flex gap-1 flex-row pt-0.5">
        <MapPin className="text-[#BEBAB9]" size={16} />
        <span className="font-Gilroy-Regular text-[12px] text-[#BEBAB9]">
          {location}
        </span>
      </div>
      <div className="relative -top-[4.8rem] left-1 flex flex-row border border-white w-[10rem] backdrop-blur-sm text-[#FFFFFF] gap-1 p-0.5 rounded-sm">
        <Calendar className="text-[#FFFFFF]" size={16} />
        <span className="font-Gilroy-Regular text-[12px] text-[#FFFFFF]">
          {date}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
