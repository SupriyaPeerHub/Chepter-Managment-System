import { Resources } from "./Resources";
import { Link } from "react-router-dom";
import { Filter, ArrowUpDown } from "lucide-react";
import GroupPhoto from "./../../assets/img/GroupPhoto.png";
import PeerHubLogo from "../../assets/img/PeerHubLogo.png";
import Supriya from "../../assets/img/Supriya.png";

const LearningResources = () => (
  <div className="mt-24 p-6">
    <div className="flex flex-row gap-6 justify-center items-center ">
      {/* 1 */}
      <div className="flex flex-row border border-[#204E68] pt-4 pb-4 pl-0.5 pr-0.5 rounded-sm">
        <img
          src={GroupPhoto}
          alt=""
          className="w-[160px] h-[97px] bg-cover bg-center mr-4 "
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-berlin text-xl flex items-center space-x-1">
            <span> What is </span>
            <img
              src={PeerHubLogo}
              alt=""
              className="w-[70px] h-[15px] inline-block align-middle"
            />
            <span> ? </span>
          </h3>
          <p className="text-[#FFEEE6] font-Gilroy font-medium text-[12px] leading-[11.19px] tracking-[0%] text-justify">
            PeerHub is more than just a platform—it’s a next-gen ecosystem
            designed for students who want to do more than just attend lectures
            and collect degrees.
          </p>

          <Link
            className="text-white bg-[#F15C22] w-[68px] mt-1 border border-[#F15C22] rounded-sm font-Gilroy-SemiBold text-[13px] text-center items-center "
            to={"/"}
          >
            Explore
          </Link>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-row border border-[#204E68] pt-4 pb-4 pl-0.5 pr-0.5 rounded-sm">
        <img
          src={GroupPhoto}
          alt=""
          className="w-[160px] h-[97px] bg-cover bg-center mr-4 "
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-berlin text-xl">
            Our
            <span className="text-[#F15C22] pl-2">Vision</span>
          </h3>
          <p className="text-[#FFEEE6] font-Gilroy font-medium text-[12px] leading-[11.19px] tracking-[0%] text-justify">
            PeerHub is more than just a platform—it’s a next-gen ecosystem
            designed for students who want to do more than just attend lectures
            and collect degrees.
          </p>

          <Link
            className="text-white bg-[#F15C22] w-[68px] mt-1 border border-[#F15C22] rounded-sm font-Gilroy-SemiBold text-[13px] text-center items-center "
            to={"/"}
          >
            Explore
          </Link>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-row border border-[#204E68] pt-4 pb-4 pl-0.5 pr-0.5 rounded-sm">
        <img
          src={GroupPhoto}
          alt=""
          className="w-[160px] h-[97px] bg-cover bg-center mr-4"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-berlin text-xl">
            Our
            <span className="text-[#F15C22]  pl-2">Vision</span>
          </h3>
          <p className="text-[#FFEEE6] font-Gilroy font-medium text-[12px] leading-[11.19px] tracking-[0%] text-justify">
            PeerHub is more than just a platform—it’s a next-gen ecosystem
            designed for students who want to do more than just attend lectures
            and collect degrees.
          </p>
          <Link
            className="text-white bg-[#F15C22] w-[68px] mt-1 p-0.5 border border-[#F15C22] rounded-sm font-Gilroy-SemiBold text-[13px] text-center items-center "
            to={"/"}
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center mb-6 mt-16">
      {/* Left: Heading */}
      <h2 className="text-[#BEBAB9] text-[18px] font-Gilroy-SemiBold">
        Training Modules
      </h2>

      {/* Right: Buttons */}
      <div className="flex space-x-3">
        <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
          <Filter size={16} />
          <span>Filter</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
          <ArrowUpDown size={16} />
          <span>Sort</span>
        </button>
      </div>
    </div>

    <div className="flex flex-row gap-7 justify-center items-center mt-2">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col border border-[#204E68] rounded-sm w-[220px] p-2.5"
        >
          {/* Image Center */}
          <div className="flex justify-center">
            <img
              src={GroupPhoto}
              alt=""
              className="w-[160px] h-[97px] bg-cover bg-center"
            />
          </div>

          <div className="flex flex-col gap-1 items-center text-center">
            {/* Centered Heading */}
            <h3 className="text-white font-berlin text-xl">
              Our <span className="text-[#F15C22] pl-2">Vision</span>
            </h3>

            <p className="text-[#846464] font-Gilroy font-medium text-[12px] leading-[11.19px] tracking-[0%] text-justify px-1">
              PeerHub is more than just a platform—it’s a next-gen ecosystem
              designed for students who want to do more than just attend
              lectures and collect degrees.
            </p>

            <Link
              className=" self-start text-white bg-[#F15C22] w-[68px] mt-2 ml-1 p-0.5 border border-[#F15C22] rounded-sm font-Gilroy-SemiBold text-[13px] text-center"
              to={"/"}
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LearningResources;
