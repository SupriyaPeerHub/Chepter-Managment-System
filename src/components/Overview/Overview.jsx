import { Bell } from "lucide-react";
import { Filter, ArrowUpDown } from "lucide-react";
import Zoom1 from "../../assets/img/Zoom1.png";

import { useState } from "react";

import PostEvent1 from "../../assets/img/PostEvent1.png";
import PostEvent2 from "../../assets/img/PostEvent2.png";
import PostEvent3 from "../../assets/img/PostEvent3.png";
import PostEvent4 from "../../assets/img/PostEvent4.png";
import gallery1 from "../../assets/img/gallery1.png";
import gallery2 from "../../assets/img/gallery2.png";
import gallery3 from "../../assets/img/gallery3.png";
import gallery4 from "../../assets/img/gallery4.png";
import gallery5 from "../../assets/img/gallery5.png";
import EventCard from "../../pages/EventCard";
import pen from "../../assets/img/Pen.png";
import AddEventCard from "../../pages/AddEventCard";
import PlanAnEvent from "../../pages/PlanAnEvent";
import EventProgressCard from "../../pages/EventProgressCard";
import { Link } from "react-router-dom";
import Test from "../../Test";
import Test2 from "../../test2";
import CollegeDistribution from "../../pages/College Distribution/CollegeDistribution";

const Overview = () => {
  const [isPlanEvent, setIsPlanEvent] = useState(false);
  const [view, setView] = useState("monthly");
  const eventCount = 50; // This would typically come from your data source
  // Past Event photo Array
  const pastEvent = [
    { img: PostEvent1 },
    { img: PostEvent2 },
    { img: PostEvent3 },
    { img: PostEvent4 },
  ];
  // gallery Array
  const galleryArray = [
    { img: gallery1 },
    { img: gallery2 },
    { img: gallery3 },
    { img: gallery4 },
    { img: gallery5 },
  ];

  const tableHeaders = [
    "",
    "Task",
    "Assigned by",
    "Role",
    "Created on",
    "Due Date",
    "Status",
    <img src={pen} className="h-[14px] w-[14px]" />,
  ];

  return (
    // 1. For Core Team
    <div className="flex-1 bg-[#0c1824] p-6">
      {/* 1st Part */}
      <div className="flex justify-end mb-6 mt-3 space-x-3">
        <div
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-Gilroy cursor-pointer"
          onClick={() => setIsPlanEvent(true)}
        >
          + Plan an Event
        </div>
        <button className="flex items-center space-x-2 font-Gilroy bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>

      {/* plan an event  */}
      <PlanAnEvent isOpen={isPlanEvent} onClose={() => setIsPlanEvent(false)} />

      {/* 2nd Part */}
      <div>
        <h1 className="text-[#FFFFFF] text-lg pb-3 font-Gilroy">
          Upcoming Events
        </h1>
        {/* Container */}
        <div className="grid grid-cols-12 gap-10">
          {/* right */}
          <div className="col-span-8 gap-4">
            <div className="grid grid-cols-3 gap-28">
              {/* Event Contailer */}
              <EventCard />
              {/* add event */}
              <AddEventCard
                setIsPlanEvent={setIsPlanEvent}
                isPlanEvent={isPlanEvent}
              />
              {/* for space */}
              <div></div>
            </div>
            {/* Update Contailer */}
            <div className="mt-6">
              {/* Updates Section */}
              <div className="mt-2 border border-gray-700 rounded-lg p-3">
                <h2 className="text-2xl font-semibold mb-4 text-[#BEBAB9]">
                  Updates
                </h2>
                <div className="space-y-4 text-[#FFFFFF]">
                  <div className="flex">
                    <Bell className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Chai Pe Charcha</span> is
                      happening on{" "}
                      <span className="font-medium">25th February 2025</span>.
                      Mark your calendars and spread the word!
                    </div>
                  </div>
                  <div className="flex">
                    <Bell className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      Let's keep the momentum going! Share your activities with
                      us, and we'll feature them in our next update.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* left */}
          {/* Event Progress Card */}
          <div className="border border-gray-700 col-span-4 rounded-lg h-auto">
            <h2 className="text-xl font-medium text-center font-Gilroy pt-4 pb-4 text-white">
              Event Progress
            </h2>
            <EventProgressCard />
            <div className="pl-20 pt-3 pb-3 pr-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#02B2AF] mr-2"></div>
                  <span className=" font-Gilroy text-white ">Upcoming</span>
                </div>
                <span className="font-mono font-Gilroy text-white">01</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#2E96FF] mr-2"></div>
                  <span className="font-Gilroy text-white">In Progress</span>
                </div>
                <span className="font-mono font-Gilroy text-white">00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#B800D8] mr-2"></div>
                  <span className="font-Gilroy text-white">Revised</span>
                </div>
                <span className="font-mono font-Gilroy text-white">00</span>
              </div>
            </div>
          </div>
          {/* <EventProgressCard /> */}
        </div>
      </div>

      {/* 3rd Part */}
      <div className="flex flex-col gap-2 border border-[#204E68] overflow-hidden items-center mt-10">
        <span className="text-[#BEBAB9] p-6">
          Throwback to some epic moments from our past events – here’s a glimpse
          of all the action!
        </span>
        <div className="flex flex-row gap-4 flex-wrap mb-5">
          {/* Past Event images Array*/}
          {pastEvent.map((post, index) => (
            <img
              key={index}
              src={post.img}
              alt={`post-event-${index}`}
              className="w-[280px] h-[380px]"
            />
          ))}
        </div>
      </div>

      {/* 4th Part */}
      <div className="mt-6">
        {/* Right to Left Scrolling Gallery */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-right">
            {galleryArray.concat(galleryArray).map((gallery, index) => (
              <img
                key={index}
                src={gallery.img}
                alt={`Slide ${index}`}
                className="w-[250px] h-[200px] m-4 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Left to Right Scrolling Gallery */}
        <div className="overflow-hidden mt-6">
          <div className="flex animate-scroll-left">
            {galleryArray.concat(galleryArray).map((gallery, index) => (
              <img
                key={index}
                src={gallery.img}
                alt={`Slide_${index}`}
                className="w-[250px] h-[200px] m-4 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    //2. For Deperment Chief
    // <div className="flex-1 bg-[#0c1824] p-6">
    //   {/* 1st Part */}
    //   <div>
    //     <h1 className="text-[#FFFFFF] text-lg pb-3 font-Gilroy">
    //       Upcoming Events
    //     </h1>
    //     {/* Event Container */}
    //     <div className="grid grid-cols-12 gap-10">
    //       {/* right */}
    //       <div className="col-span-8 gap-4">
    //         <div className="grid grid-cols-3 gap-10">
    //           <EventCard />
    //           <EventCard />
    //           <EventCard />
    //         </div>
    //         <div className="mt-6">
    //           <div className="flex justify-between">
    //             <h1 className="text-[#FFFFFF] text-lg pb-3 font-Gilroy">
    //               In Progress Events
    //             </h1>

    //             <div className="flex gap-5 justify-center">
    //               <div className="flex gap-2 text-center justify-center align-center">
    //                 <span className="bg-[#F0BF11] rounded-full w-3 h-3 mt-[2px]"></span>
    //                 <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">
    //                   IN PROGRESS
    //                 </span>
    //                 <span className="font-mono font-Gilroy text-black w-4 h-4 text-[11px] rounded-full bg-[#FFFFFF]">
    //                   3
    //                 </span>
    //               </div>
    //               <div className="flex gap-2 text-center justify-center align-center">
    //                 <span className="bg-[#EE681D] rounded-full w-3 h-3 mt-[2px]"></span>
    //                 <span className="text-[#FFFFFF] font-Gilroy text-[12px]">
    //                   IN PROGRESS
    //                 </span>
    //                 <span className="w-4 h-4 font-mono font-Gilroy text-[11px] text-black rounded-full bg-[#FFFFFF]">
    //                   3
    //                 </span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className=" grid grid-cols-3 gap-10">
    //             <div className="flex flex-col gap-2">
    //               <EventCard />
    //               <div className="flex gap-2 text-center justify-center align-center pl-32">
    //                 <span className="bg-[#F0BF11] rounded-full w-3 h-3 mt-[2px]"></span>
    //                 <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">IN PROGRESS</span>
    //               </div>
    //             </div>
    //             <div className="flex flex-col gap-2">
    //               <EventCard />
    //               <div className="flex gap-2 text-center justify-center align-center pl-32">
    //                 <span className="bg-[#EE681D] rounded-full w-3 h-3 mt-[2px]"></span>
    //                 <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">IN PROGRESS</span>
    //               </div>
    //             </div>
    //             <div className="flex flex-col gap-2">
    //               <EventCard />
    //               <div className="flex gap-2 text-center justify-center align-center pl-32">
    //                 <span className="bg-[#F0BF11] rounded-full w-3 h-3 mt-[2px]"></span>
    //                 <span className="text-[#FFFFFF] text-[12px] font-Gilroy ">IN REVIEW</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* left */}
    //       {/* Event Progress Card */}
    //       <EventProgressCard />
    //     </div>
    //   </div>
    //   {/* 2 nd Part */}
    //   {/* Table */}
    //   <div>
    //     <div className="flex justify-end mb-6 mt-5 space-x-3">
    //       <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
    //         <Filter size={16} />
    //         <span>Filter</span>
    //       </button>
    //       <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
    //         <ArrowUpDown size={16} />
    //         <span>Sort</span>
    //       </button>
    //     </div>
    //     <div className=" overflow-hidden mt-2">
    //       <table className="w-full border border-[#204E68]">
    //         <thead>
    //           <tr className="border-b border-[#204E68]">
    //             {tableHeaders.map((header, index) => (
    //               <th
    //                 key={index}
    //                 className="px-4 py-3 text-left text-sm font-medium text-gray-400 border-t border-r border-l border-[#204E68]"
    //               >
    //                 {header}
    //               </th>
    //             ))}
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr className="border-b border-[#204E68] text-gray-300">
    //             <td className="px-4 py-3">
    //               <input type="checkbox" className="h-4 w-4" />
    //             </td>
    //             <td className="px-4 py-3">Brief - Students about PeerHub</td>
    //             <td className="px-4 py-3">Mr. Anurag Jain</td>
    //             <td className="px-4 py-3">Manager - PeerHub</td>
    //             <td className="px-4 py-3">17/02/2025</td>
    //             <td className="px-4 py-3">21/02/2025</td>
    //             <td className="px-4 py-3">
    //               <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 pl-2 pr-2">
    //                 On going
    //               </span>
    //             </td>
    //             <td className="px-4 py-3">f</td>
    //           </tr>
    //           <tr className="border-b border-[#204E68] text-gray-300">
    //             <td className="px-4 py-3">
    //               <input
    //                 type="checkbox"
    //                 className="h-4 w-4 text-[#204E68] border border-white"
    //               />
    //             </td>
    //             <td className="px-4 py-3">Brief - Students about PeerHub</td>
    //             <td className="px-4 py-3">Mr. Anurag Jain</td>
    //             <td className="px-4 py-3">Manager - PeerHub</td>
    //             <td className="px-4 py-3">17/02/2025</td>
    //             <td className="px-4 py-3">21/02/2025</td>
    //             <td className="px-4 py-3">
    //               <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 pl-2 pr-2">
    //                 On going
    //               </span>
    //             </td>
    //             <td className="px-4 py-3">f</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>

    // Admin
    // <div className="flex-1 bg-[#D9D9D9]">
    //   <div className="flex flex-row">
    //     <div className="flex flex-row gap-4 pt-8 pl-8 pr-5">
    //       {/* 1 st Part */}
    //       <div className="flex flex-col">
    //         {/* 1.1 */}
    //         <div className="bg-white rounded-2xl pt-10 pb-10 pl-20 pr-20 shadow-lg border-2 border-[#F15C22] flex flex-col">
    //           <h2 className="text-[#0B1E29] font-medium text-lg mb-4 whitespace-nowrap">
    //             Total Upcoming Events
    //           </h2>

    //           <div className="text-4xl font-semibold text-gray-900 mb-4 text-center">
    //             {eventCount}
    //           </div>

    //           <div className="flex rounded-full border border-[#F15C22] bg-white overflow-hidden">
    //             <button
    //               onClick={() => setView("weekly")}
    //               className={`flex-1 px-4 py-2 text-sm font-medium transition-colors text-[#0B1E29] ${
    //                 view === "weekly"
    //                   ? "bg-[#F15C22] text-[#0B1E29] rounded-r-full"
    //                   : "text-gray-600 hover:text-[#0B1E29] bg-white"
    //               }`}
    //             >
    //               Weekly
    //             </button>
    //             <button
    //               onClick={() => setView("monthly")}
    //               className={`flex-1 px-4 py-2 text-sm font-medium  transition-colors text-[#0B1E29] ${
    //                 view === "monthly"
    //                   ? " bg-[#F15C22] text-[#0B1E29] rounded-l-full"
    //                   : "text-gray-600 hover:text-[#0B1E29] bg-white"
    //               }`}
    //             >
    //               Monthly
    //             </button>
    //           </div>
    //         </div>
    //         {/* 1.2 */}
    //         <div className="col-span-4 h-auto bg-white rounded-2xl border-2 border-[#F15C22] mt-14">
    //           <h2 className="text-xl font-medium text-center font-Gilroy-SemiBold pt-5 pb-4 text-[#0B1E29]">
    //             Event Progress
    //           </h2>
    //           <EventProgressCard />
    //           <div className="pl-20 pt-5 pb-8 pr-20">
    //             <div className="flex items-center justify-between">
    //               <div className="flex items-center">
    //                 <div className="w-3 h-3 rounded-full bg-[#02B2AF] mr-2"></div>
    //                 <span className=" font-Gilroy text-[#0B1E29] ">
    //                   Upcoming
    //                 </span>
    //               </div>
    //               <span className="font-mono font-Gilroy text-[#0B1E29]">
    //                 01
    //               </span>
    //             </div>
    //             <div className="flex items-center justify-between">
    //               <div className="flex items-center">
    //                 <div className="w-3 h-3 rounded-full bg-[#2E96FF] mr-2"></div>
    //                 <span className="font-Gilroy text-[#0B1E29]">
    //                   In Progress
    //                 </span>
    //               </div>
    //               <span className="font-mono font-Gilroy text-[#0B1E29]">
    //                 00
    //               </span>
    //             </div>
    //             <div className="flex items-center justify-between">
    //               <div className="flex items-center">
    //                 <div className="w-3 h-3 rounded-full bg-[#B800D8] mr-2"></div>
    //                 <span className="font-Gilroy text-[#0B1E29]">Revised</span>
    //               </div>
    //               <span className="font-mono font-Gilroy text-[#0B1E29]">
    //                 00
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* 2 nd Part */}
    //       <div className="flex flex-col">
    //         <div className="bg-white rounded-2xl pt-10 pb-10 pl-20 pr-20 shadow-lg border-2 border-[#F15C22] flex flex-col">
    //           <h2 className="text-[#0B1E29] font-medium text-lg mb-4 whitespace-nowrap">
    //             Total No. of Sponsorship Requests
    //           </h2>

    //           <div className="text-4xl font-semibold text-gray-900 mb-4 text-center">
    //             {eventCount}
    //           </div>

    //           <div className="flex rounded-full border border-[#F15C22] bg-white overflow-hidden">
    //             <button
    //               onClick={() => setView("weekly")}
    //               className={`flex-1 px-4 py-2 text-sm font-medium transition-colors text-[#0B1E29] ${
    //                 view === "weekly"
    //                   ? "bg-[#F15C22] text-[#0B1E29] rounded-r-full"
    //                   : "text-gray-600 hover:text-[#0B1E29] bg-white"
    //               }`}
    //             >
    //               Weekly
    //             </button>
    //             <button
    //               onClick={() => setView("monthly")}
    //               className={`flex-1 px-4 py-2 text-sm font-medium  transition-colors text-[#0B1E29] ${
    //                 view === "monthly"
    //                   ? " bg-[#F15C22] text-[#0B1E29] rounded-l-full"
    //                   : "text-gray-600 hover:text-[#0B1E29] bg-white"
    //               }`}
    //             >
    //               Monthly
    //             </button>
    //           </div>
    //           <Link
    //             className="underline pl-[6.4rem] pt-4 text-[12px] text-[#0B1E29] font-Gilroy hover:text-[#0B1E49] cursor-pointer"
    //             to={"/"}
    //           >
    //             View in Detail's
    //           </Link>
    //         </div>
    //         <div className="bg-white rounded-2xl border-2 border-[#F15C22] shadow-lg mt-14 flex flex-col pt-3">
    //           <button className="pl-[26rem] cursor-pointer">
    //             <img src={Zoom1} alt="zoom-out" className="h-[12px] w-[12px]" />
    //           </button>
    //           <h2 className="text-[#0B1E29] font-Gilroy-SemiBold text-[22px] pl-12 font-normal">
    //             College Distribution - North Zone
    //           </h2>
    //           <CollegeDistribution />
    //         </div>
    //       </div>
    //     </div>
    //     {/* 3 rd Part */}
    //     <div className="w-full h-screen -z-0 bg-white">
    //       {/* India Map */}
    //       {/* <Test /> */}
    //     </div>
    //   </div>
    // </div>
  );
};
export default Overview;
