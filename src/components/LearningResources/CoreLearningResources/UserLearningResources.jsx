import { Link } from "react-router-dom";
import { Filter, ArrowUpDown } from "lucide-react";
import GroupPhoto from "../../../assets/img/GroupPhoto.png";
import PeerHubLogo from "../../../assets/img/PeerHubLogo.png";

const UserLearningResources = () => (
  // <div className="mt-24 p-6 z-0">
  <div className="mt-24 p-4 sm:p-6 z-0">
    {/* <div className="flex flex-row gap-6 justify-center items-center "> */}
    <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
      {/* 1 */}
      {/* <div className="flex flex-row border border-[#204E68] pt-4 pb-4 pl-0.5 pr-0.5 rounded-sm"> */}
      <div className="flex flex-col sm:flex-row border border-[#204E68] p-2 rounded-sm w-full sm:w-auto">
        <img
          src={GroupPhoto}
          alt=""
          className="w-[10rem] h-[6.0625rem] bg-cover bg-center mr-4 "
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-berlin text-xl flex items-center space-x-1">
            <span> What is </span>
            <img
              src={PeerHubLogo}
              alt=""
              className="w-[4.375rem] h-[0.9375rem] inline-block align-middle"
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
            to={"/abc"}
          >
            Explore
          </Link>
        </div>
      </div>
      {/* 2 */}
      {/* <div className="flex flex-row border border-[#204E68] pt-4 pb-4 pl-0.5 pr-0.5 rounded-sm"> */}
      <div className="flex flex-col sm:flex-row border border-[#204E68] p-2 rounded-sm w-full sm:w-auto">
        <img
          src={GroupPhoto}
          alt=""
          className="w-[10rem] h-[6.0625rem] bg-cover bg-center mr-4 "
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
            to={"/cscsc"}
          >
            Explore
          </Link>
        </div>
      </div>

      {/* 3 */}
      {/* <div className="flex flex-row border border-[#204E68] pt-4 pb-4 pl-0.5 pr-0.5 rounded-sm"> */}
      <div className="flex flex-col sm:flex-row border border-[#204E68] p-2 rounded-sm w-full sm:w-auto">
        <img
          src={GroupPhoto}
          alt=""
          className="w-[10rem] h-[6.0625rem] bg-cover bg-center mr-4"
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
            to={"/abc"}
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
              className="w-[10rem] h-[6.0625rem] bg-cover bg-center"
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
              to={"/vvdcwdc"}
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
   
  </div>
);

export default UserLearningResources;

// import { Link } from "react-router-dom";
// import { Filter, ArrowUpDown } from "lucide-react";
// // import { Button } from "@/components/ui/button"
// import GroupPhoto from "../../../assets/img/GroupPhoto.png";
// import PeerHubLogo from "../../../assets/img/PeerHubLogo.png";

// const UserLearningResources = () => {
//   return (
//     <div className="mt-12 md:mt-24 p-4 md:p-6 z-0">
//       {/* Top 3 Cards Section */}
//       <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-center items-center">
//         {/* Card 1 */}
//         <div className="flex flex-col sm:flex-row border border-[#204E68] p-2 md:pt-4 md:pb-4 md:pl-0.5 md:pr-0.5 rounded-sm w-full lg:w-auto">
//           <img
//             src={GroupPhoto}
//             alt="Group Photo"
//             className="w-full sm:w-[120px] md:w-[160px] h-[80px] md:h-[97px] object-cover mr-0 sm:mr-4 mb-2 sm:mb-0"
//           />
//           <div className="flex flex-col gap-1 flex-1">
//             <h3 className="text-white font-bold text-lg md:text-xl flex flex-wrap items-center gap-1">
//               {/* <span>What is</span>
//               <div className="w-[70px] h-[15px] bg-[#F15C22] rounded flex items-center justify-center">
//                 <span className="text-white text-xs font-bold">PeerHub</span>
//               </div>
//               <span>?</span> */}
//               <span> What is </span>
//              <img
//                src={PeerHubLogo}
//                alt=""
//                className="w-[4.375rem] h-[0.9375rem] inline-block align-middle"
//              />
//             <span> ? </span>
//             </h3>
//             <p className="text-[#FFEEE6] font-medium text-[11px] md:text-[12px] leading-tight tracking-[0%] text-justify">
//               PeerHub is more than just a platform—it's a next-gen ecosystem
//               designed for students who want to do more than just attend
//               lectures and collect degrees.
//             </p>
//             <Link
//               href="/"
//               className="text-white bg-[#F15C22] w-[68px] mt-1 py-1 border border-[#F15C22] rounded-sm font-semibold text-[13px] text-center inline-block hover:bg-[#d14a1a] transition-colors"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="flex flex-col sm:flex-row border border-[#204E68] p-2 md:pt-4 md:pb-4 md:pl-0.5 md:pr-0.5 rounded-sm w-full lg:w-auto">
//           <img
//             src={GroupPhoto}
//             alt="Group Photo"
//             className="w-full sm:w-[120px] md:w-[160px] h-[80px] md:h-[97px] object-cover mr-0 sm:mr-4 mb-2 sm:mb-0"
//           />
//           <div className="flex flex-col gap-1 flex-1">
//             <h3 className="text-white font-bold text-lg md:text-xl">
//               Our
//               <span className="text-[#F15C22] pl-2">Vision</span>
//             </h3>
//             <p className="text-[#FFEEE6] font-medium text-[11px] md:text-[12px] leading-tight tracking-[0%] text-justify">
//               PeerHub is more than just a platform—it's a next-gen ecosystem
//               designed for students who want to do more than just attend
//               lectures and collect degrees.
//             </p>
//             <Link
//               href="/"
//               className="text-white bg-[#F15C22] w-[68px] mt-1 py-1 border border-[#F15C22] rounded-sm font-semibold text-[13px] text-center inline-block hover:bg-[#d14a1a] transition-colors"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="flex flex-col sm:flex-row border border-[#204E68] p-2 md:pt-4 md:pb-4 md:pl-0.5 md:pr-0.5 rounded-sm w-full lg:w-auto">
//           <img
//             src={GroupPhoto}
//             alt="Group Photo"
//             className="w-full sm:w-[120px] md:w-[160px] h-[80px] md:h-[97px] object-cover mr-0 sm:mr-4 mb-2 sm:mb-0"
//           />
//           <div className="flex flex-col gap-1 flex-1">
//             <h3 className="text-white font-bold text-lg md:text-xl">
//               Our
//               <span className="text-[#F15C22] pl-2">Mission</span>
//             </h3>
//             <p className="text-[#FFEEE6] font-medium text-[11px] md:text-[12px] leading-tight tracking-[0%] text-justify">
//               PeerHub is more than just a platform—it's a next-gen ecosystem
//               designed for students who want to do more than just attend
//               lectures and collect degrees.
//             </p>
//             <Link
//               href="/"
//               className="text-white bg-[#F15C22] w-[68px] mt-1 py-1 border border-[#F15C22] rounded-sm font-semibold text-[13px] text-center inline-block hover:bg-[#d14a1a] transition-colors"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Training Modules Header */}
//       <div className="flex justify-between items-center mb-6 mt-16">
//         {/* Left: Heading */}
//         <h2 className="text-[#BEBAB9] text-[18px] font-Gilroy-SemiBold">
//           Training Modules
//         </h2>

//         {/* Right: Buttons */}
//         <div className="flex space-x-3">
//           <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
//             <Filter size={16} />
//             <span>Filter</span>
//           </button>
//           <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
//             <ArrowUpDown size={16} />
//             <span>Sort</span>
//           </button>
//         </div>
//       </div>

//       {/* Training Modules Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-7 mt-2">
//         {[...Array(5)].map((_, index) => (
//           <div
//             key={index}
//             className="flex flex-col border border-[#204E68] rounded-sm w-full max-w-[220px] mx-auto p-2.5"
//           >
//             {/* Image Center */}
//             <div className="flex justify-center mb-2">
//               <img
//                 src={GroupPhoto}
//                 alt="Training Module"
//                 className="w-full max-w-[160px] h-[80px] md:h-[97px] object-cover"
//               />
//             </div>

//             <div className="flex flex-col gap-1 items-center text-center">
//               {/* Centered Heading */}
//               <h3 className="text-white font-bold text-lg md:text-xl">
//                 Module <span className="text-[#F15C22]">{index + 1}</span>
//               </h3>

//               <p className="text-[#846464] font-medium text-[11px] md:text-[12px] leading-tight tracking-[0%] text-justify px-1">
//                 PeerHub is more than just a platform—it's a next-gen ecosystem
//                 designed for students who want to do more than just attend
//                 lectures and collect degrees.
//               </p>

//               <Link
//                 href="/"
//                 className="self-start text-white bg-[#F15C22] w-[68px] mt-2 ml-1 py-1 border border-[#F15C22] rounded-sm font-semibold text-[13px] text-center hover:bg-[#d14a1a] transition-colors"
//               >
//                 Explore
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserLearningResources;
