// EventCard.js
import { Calendar, MapPin } from "lucide-react";
import eventOverview from "../assets/img/eventOverview.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EventCard = ({variant}) => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const [roleType, setRoleType] = useState("admin"); //initially null //admin

  // useEffect(() => {
  //   // Fetch the roleType from localStorage or state management
  //   const role = localStorage.getItem("roleType"); // Replace with your method
  //   setRoleType(role);
  // }, []);

  const events = {
    title: "Chai Pe Charcha",
    date: "08 th Dec, 2023",
    imgSrc: eventOverview,
    eventType: "Collaborative & Special Events",
  };
  const { title, date, imgSrc, eventType } = events;

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
    } else {
      return;
    }
    if(variant ==="college-overview"){
      navigate("/total-events-hosted-details")
    }
    // console.log("eventPage", eventPage);
    // navigate(eventPage);
  };

  return (
    <div
      className="flex flex-col border border-[#204E68] rounded-md p-4 font-Gilroy cursor-pointer shadow h-56 w-64 transition-all "
      onClick={handleClick}
    >
      <img
        src={imgSrc}
        alt={eventType}
        className="h-[120px] w-full object-cover rounded-md"
      />
      <div className="pt-2">
        <h3 className="text-[#A0A0A0] font-Gilroy-Regular text-[14px]">
          {eventType}
        </h3>
        <div className="flex flex-row justify-between items-center mt-1">
          <div className="flex flex-col">
            <span className="text-[16px] text-[#BEBAB9]">{title}</span>
            <div className="flex items-center gap-1 text-[#BEBAB9]">
              {/* <Calendar className="h-3 w-3" /> */}
              <span className="text-[13px]">Date: {date}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1 text-sm text-[#BEBAB9]">
            <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
              Virtual
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

// const handleClick = () => {
//     if (!event?.id) return;

//     let targetPath = "";

//     switch (roleType) {
//       case "admin":
//         if (section === "upcoming-events") {
//           targetPath = `/event-management/${event.id}/admin-details`;
//         } else if (section === "roi") {
//           targetPath = `/event-management/${event.id}/admin-roi`;
//         } else if (section === "participants") {
//           targetPath = `/event-management/${event.id}/admin-participants`;
//         }
//         break;

//       case "manager":
//         if (section === "upcoming-events") {
//           targetPath = `/event-management/${event.id}/manager-details`;
//         } else if (section === "roi") {
//           targetPath = `/event-management/${event.id}/manager-roi`;
//         } else if (section === "participants") {
//           targetPath = `/event-management/${event.id}/manager-participants`;
//         }
//         break;

//       case "coremember":
//         if (section === "upcoming-events") {
//           targetPath = `/event-management/${event.id}/core-details`;
//         } else if (section === "roi") {
//           targetPath = `/event-management/${event.id}/core-roi`;
//         } else if (section === "participants") {
//           targetPath = `/event-management/${event.id}/core-participants`;
//         }
//         break;

//       default:
//         // guest or unknown role
//         targetPath = `/event-planning/details`;
//         break;
//     }

//     navigate(targetPath);
//   };

// New EventCard
//  <div
//       className="flex flex-col border border-[#204E68] rounded-md p-4 font-Gilroy cursor-pointer shadow h-64 w-64 transition-all hover:scale-105 hover:shadow-lg bg-[#1A1A1A]"
//       onClick={handleClick}
//     >
//       <img
//         src={imgSrc}
//         alt={eventType}
//         className="h-[120px] w-full object-cover rounded-md"
//       />
//       <div className="pt-2">
//         <h3 className="text-white font-semibold text-base truncate">{title}</h3>
//         <div className="flex items-center justify-between mt-1">
//           <span className="text-sm text-[#BEBAB9]">{eventType}</span>
//           <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
//             Virtual
//           </span>
//         </div>
//         <div className="flex items-center gap-1 mt-2 text-sm text-[#BEBAB9]">
//           <Calendar className="h-4 w-4" />
//           <span>{date}</span>
//         </div>
//         <div className="flex items-center gap-1 mt-1 text-sm text-[#BEBAB9]">
//           <MapPin className="h-4 w-4" />
//           <span>{location}</span>
//         </div>
//       </div>
//     </div>
