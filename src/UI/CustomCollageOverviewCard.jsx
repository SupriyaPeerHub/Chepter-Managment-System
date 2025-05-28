// import { useState } from "react";

// function CustomCollageOverviewCard() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCollege, setSelectedCollege] = useState("Select College");
//   const [view, setView] = useState("monthly");
//   const eventCount = 500; // This would typically come from your data source
//   return (
//     <div
//       className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#F15C22] h-[11rem] w-[18rem] flex flex-col justify-center
//         items-center text-center mx-auto font-normal"
//     >
//       <h2 className="text-[#0B1E29] font-Gilroy-SemiBold text-[1.375rem] whitespace-nowrap font-normal">
//         Total Upcoming Events
//       </h2>

//       <div className="text-[2.5rem] font-Gilroy text-[#0B1E29] font-normal">
//         {eventCount}
//       </div>

//       <div className="flex rounded-full border border-[#F15C22] bg-white overflow-hidden">
//         <button
//           onClick={() => setView("weekly")}
//           className={`flex-1 px-4 py-1 text-sm font-medium transition-colors text-[#0B1E29] ${
//             view === "weekly"
//               ? "bg-[#F15C22] text-[#0B1E29] rounded-r-full"
//               : "text-gray-600 hover:text-[#0B1E29] bg-white"
//           }`}
//         >
//           Weekly
//         </button>
//         <button
//           onClick={() => setView("monthly")}
//           className={`flex-1 px-4 py-1 text-sm font-medium  transition-colors text-[#0B1E29] ${
//             view === "monthly"
//               ? " bg-[#F15C22] text-[#0B1E29] rounded-l-full"
//               : "text-gray-600 hover:text-[#0B1E29] bg-white"
//           }`}
//         >
//           Monthly
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CustomCollageOverviewCard;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomCollageOverviewCard({
  title = "Total Upcoming Events",
  count = 0,
  showToggle = true,
  highlightText,
  navigateTo, // ✅ Accept new prop
}) {
  const navigate = useNavigate();

  const [view, setView] = useState("monthly");
  const handleCardClick = () => {
    if (navigateTo) {
      navigate(navigateTo); // ✅ Navigate if path provided
    }
  };
  return (
    <div
      className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#F15C22] h-[11rem] w-[18rem] flex flex-col justify-center 
        items-center text-center mx-auto font-normal cursor-pointer"
      onClick={handleCardClick}
    >
      <h2 className="text-[#0B1E29] font-Gilroy-SemiBold text-[1.375rem] whitespace-nowrap font-normal">
        {title}
      </h2>

      <div className="text-[2.5rem] font-Gilroy text-[#F15C22] font-normal">
        {count}
      </div>

      {highlightText && (
        <span className="text-[#0B1E29] text-[1.375rem] font-Gilroy-SemiBold">
          {highlightText}
        </span>
      )}

      {showToggle && (
        <div className="flex rounded-full border border-[#F15C22] bg-white overflow-hidden mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering handleCardClick
              setView("weekly");
            }}
            className={`flex-1 px-4 py-1 text-sm font-medium transition-colors text-[#0B1E29] ${
              view === "weekly"
                ? "bg-[#F15C22] text-[#0B1E29] rounded-r-full"
                : "text-gray-600 hover:text-[#0B1E29] bg-white"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering handleCardClick
              setView("monthly");
            }}
            className={`flex-1 px-4 py-1 text-sm font-medium transition-colors text-[#0B1E29] ${
              view === "monthly"
                ? " bg-[#F15C22] text-[#0B1E29] rounded-l-full"
                : "text-gray-600 hover:text-[#0B1E29] bg-white"
            }`}
          >
            Monthly
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomCollageOverviewCard;
