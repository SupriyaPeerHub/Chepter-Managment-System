import {  ArrowUpDown } from "lucide-react";
import Mute from "../../assets/img/Mute.png";
import Clock from "../../assets/img/Clock.png";
import Filter from "../../assets/img/Filter.png"

const OverallUpdates = () => {
  const updates = [
    {
      id: 1,
      title: "Chai Pe Charcha",
      description:
        "is happening on 25th February 2025. Mark your calendars and spread the word!",
      date: "17 Feb 2025",
    },
    {
      id: 2,
      title: "Let's keep the momentum going!",
      description:
        "Share your activities with us, and we'll feature them in our next update.",
      date: "17 Feb 2025",
    },
    {
      id: 3,
      title: "New Feature: Chatroom Enhancements!",
      description:
        'Introduced "Visionaries Hub" (Core Team + Faculty + PeerHub Manager) and "Apex Council" (Includes Department Chiefs). Improved real-time notifications and message search functionality.',
      date: "17 Feb 2025",
    },
    {
      id: 4,
      title: "Sponsorship Reporting Upgrade",
      description:
        'Renamed "Sponsorship Follow-up Report" to "Post-Event Sponsorship Outcome Report." Added structured fields for reason for rejection, feedback from sponsors, and future approach feasibility.',
      date: "17 Feb 2025",
    },
    {
      id: 5,
      title: "Chai Pe Charcha",
      description:
        "is happening on 25th February 2025. Mark your calendars and spread the word!",
      date: "17 Feb 2025",
    },
    {
      id: 6,
      title: "Let's keep the momentum going!",
      description:
        "Share your activities with us, and we'll feature them in our next update.",
      date: "17 Feb 2025",
    },
    {
      id: 7,
      title: "New Feature: Chatroom Enhancements!",
      description:
        'Introduced "Visionaries Hub" (Core Team + Faculty + PeerHub Manager) and "Apex Council" (Includes Department Chiefs). Improved real-time notifications and message search functionality.',
      date: "17 Feb 2025",
    },
    {
      id: 8,
      title: "Sponsorship Reporting Upgrade",
      description:
        'Renamed "Sponsorship Follow-up Report" to "Post-Event Sponsorship Outcome Report." Added structured fields for reason for rejection, feedback from sponsors, and future approach feasibility.',
      date: "17 Feb 2025",
    },
  ];
  return (
    <div className="flex-1 pt-6 pr-6 bg-[#0B1E29]">
      <div className="flex justify-end mb-6 mt-3 space-x-3">
        <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
          {/* <Filter size={16} /> */}
          <img src={Filter} alt="" />
          <span>Filter</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
          <ArrowUpDown size={16} />
          <span>Sort</span>
        </button>
      </div>
      {/* Notification */}
      <div className="flex flex-col pl-14 pt-6">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-1">
            <img src={Mute} alt="notification-icon" className="" />
            <span className="font-Gilroy-Regular text-[#FFFFFF]">
              Chai Pe Charcha is happening on 25th February 2025. Mark your
              calendars and spread the word!
            </span>
          </div>
          <div className="flex flex-row items-center gap-1 pl-3">
            <img src={Clock} alt="clock" className="w-[10px] h-[10px]" />
            <span className="font-Gilroy-Regular text-[#BEBAB9]">
              17 Feb 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// const OverallUpdates = () => {
//   const updates = [
//     {
//       id: 1,
//       title: "Chai Pe Charcha",
//       description:
//         "is happening on 25th February 2025. Mark your calendars and spread the word!",
//       date: "17 Feb 2025",
//     },
//     {
//       id: 2,
//       title: "Let's keep the momentum going!",
//       description:
//         "Share your activities with us, and we'll feature them in our next update.",
//       date: "17 Feb 2025",
//     },
//     {
//       id: 3,
//       title: "New Feature: Chatroom Enhancements!",
//       description:
//         'Introduced "Visionaries Hub" (Core Team + Faculty + PeerHub Manager) and "Apex Council" (Includes Department Chiefs). Improved real-time notifications and message search functionality.',
//       date: "17 Feb 2025",
//     },
//     {
//       id: 4,
//       title: "Sponsorship Reporting Upgrade",
//       description:
//         'Renamed "Sponsorship Follow-up Report" to "Post-Event Sponsorship Outcome Report." Added structured fields for reason for rejection, feedback from sponsors, and future approach feasibility.',
//       date: "17 Feb 2025",
//     },
//     {
//       id: 5,
//       title: "Chai Pe Charcha",
//       description:
//         "is happening on 25th February 2025. Mark your calendars and spread the word!",
//       date: "17 Feb 2025",
//     },
//     {
//       id: 6,
//       title: "Let's keep the momentum going!",
//       description:
//         "Share your activities with us, and we'll feature them in our next update.",
//       date: "17 Feb 2025",
//     },
//     {
//       id: 7,
//       title: "New Feature: Chatroom Enhancements!",
//       description:
//         'Introduced "Visionaries Hub" (Core Team + Faculty + PeerHub Manager) and "Apex Council" (Includes Department Chiefs). Improved real-time notifications and message search functionality.',
//       date: "17 Feb 2025",
//     },
//     {
//       id: 8,
//       title: "Sponsorship Reporting Upgrade",
//       description:
//         'Renamed "Sponsorship Follow-up Report" to "Post-Event Sponsorship Outcome Report." Added structured fields for reason for rejection, feedback from sponsors, and future approach feasibility.',
//       date: "17 Feb 2025",
//     },

//   ];
//   return (
//     <>
//       {/* Content */}
//       <div className="flex-1 bg-[#0c1824] p-6">

//         <div className="flex justify-end mb-6 mt-3 space-x-3">
//           <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
//             <Filter size={16} />
//             <span>Filter</span>
//           </button>
//           <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
//             <ArrowUpDown size={16} />
//             <span>Sort</span>
//           </button>
//         </div>

//         <div className="">
//           {updates.map((update) => (
//             <div
//               key={update.id}
//               className="border-gray-700 pb-6"
//             >
//               <div className="flex items-start">
//                 <div className="bg-gray-800 p-4 rounded-lg w-full">
//                   <h3 className="text-white font-medium mb-1">
//                     <span className="text-gray-400 mr-2">📌</span>
//                     {update.title}
//                   </h3>
//                   <p className="text-gray-300 ml-6">{update.description}</p>
//                   <p className="text-gray-500 text-sm mt-2 ml-6">
//                     <span className="mr-1">📅</span> {update.date}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
export default OverallUpdates;
