import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Or use any other icon if needed

const clubsList = ["Music Club", "Art Club", "Drama Club", "Tech Club"];

const ZZZ = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectClubArray, setSelectClubArray] = useState([]);

  const handleSelect = (club) => {
    if (selectClubArray.includes(club)) {
      setSelectClubArray(selectClubArray.filter((c) => c !== club));
    } else {
      setSelectClubArray([...selectClubArray, club]);
    }
  };

  return (
    <div className="space-y-2 relative w-64">
      <label className="text-[#BEBAB9] text-sm absolute -top-2.5 left-3 bg-[#0D1B24] px-1">
        Select Club
      </label>

      {/* Dropdown Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full bg-transparent text-white border-[2.2px] border-[#605E5E] rounded px-4 py-3.5 flex items-center justify-between"
      >
        <span>
          {selectClubArray.length === 0
            ? "Select Club"
            : selectClubArray.join(", ")}
        </span>
      </button>
    </div>
  );
};

export default ZZZ;
