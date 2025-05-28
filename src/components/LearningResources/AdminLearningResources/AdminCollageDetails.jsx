import { Link } from "react-router-dom";
import GroupPhoto from "./../../../assets/img/GroupPhoto.png";
import PeerHubLogo from "./../../../assets/img/PeerHubLogo.png";
import { CoreMember } from "../ResourcesData";
const AdminCollageDetails = () => (
  <div className="mt-24 p-6 z-0">
    <h1 className="text-[#BEBAB9] text-lg pb-4 font-Gilroy font-normal">
      Amity University
    </h1>
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

    <div className="flex flex-row gap-4 justify-center items-center mt-10">
      {CoreMember.map((member, index) => (
        <div
          key={index}
          className="flex flex-col border border-[#204E68] rounded-sm w-[190px] p-2.5 items-center cursor-pointer"
        >
          {/* Image Center */}
          <div className="flex justify-center">
            <img
              src={member.image}
              alt=""
              className="w-[130px] h-[170px] bg-cover bg-center"
            />
          </div>
          {/* Heading */}
          <span className="text-[#FFEEE6] font-berlin text-[14px]">
            {member.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default AdminCollageDetails;
