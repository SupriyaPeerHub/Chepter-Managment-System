import Back from "../../assets/img/Back.png"
import { Search, BellDot } from "lucide-react";
export const Header = ({ getTitle }) => {
  return (
    <div className="bg-[#0B1E29] text-white p-6 flex items-center justify-between fixed w-[calc(100%-15rem)] overflow-hidden z-10 border-b-[0.25px]">
      <div className="flex gap-8 items-center cursor-pointer justify-center text-2xl">
        <img src={Back} alt="back-img" className="" />
        <h1 className=" font-Gilroy ">{getTitle}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="rounded-sm text-[#FFFFFF] border font-Gilroy text-[14px] placeholder-white border-[#204E68] bg-opacity-10 pl-10 pr-4 w-[15.5rem] py-2 text-sm focus:outline-none"
          />
        </div>
        <div className="relative">
          <BellDot className="text-gray-400 cursor-pointer" size={33} />
          <span className="absolute -top-1 -right-1 bg-[#EA580C] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            15
          </span>
        </div>
      </div>
    </div>
  );
};
