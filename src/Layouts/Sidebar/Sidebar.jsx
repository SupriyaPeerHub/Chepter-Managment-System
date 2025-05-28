import user from "../../assets/img/user.png";
import ArrowLeft from "../../assets/img/ArrowLeft.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PeerHub from "../../assets/img/PeerHub.png";
import Event from "../../assets/img/Event.png";
import { ChevronUp, ChevronDown, Import } from "lucide-react";
import { useState } from "react";
import Help from "../../assets/img/Help.png";
import Overview from "../../assets/img/Overview.png";
import Learning from "../../assets/img/Learning.png";
import Data from "../../assets/img/Data.png";
import Overall from "../../assets/img/Overall.png";
import Collage from "../../assets/img/Collage.png";
import AddMembers from "../../assets/img/AddMembers.png";
import { useEffect } from "react";

export const Sidebar = () => {
  // const location = useLocation();
  const [eventManagementOpen, setEventManagementOpen] = useState(false);
  const [dataManagementOpen, setdataManagementOpen] = useState(false);
  const [helpAndSupportOpen, setHelpAndSupportOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // To track the active menu
  const [activeSubMenu, setActiveSubMenu] = useState(""); // To track the active submenu

  const navigate = useNavigate();

  //WEB open, then First active manu is set to overview Page
  // useEffect(() => {
  //   setActiveMenu("/");
  //   navigate("/");
  // },[])

  const toggleEventManagement = () => {
    setEventManagementOpen(!eventManagementOpen);
    setActiveMenu("event-planning"); // Set the active menu when clicked
    handleSubMenuClick("upcoming", "/event-management/upcoming");
  };

  // Automatically close the submenu if activeMenu is not "event-planning"
  useEffect(() => {
    if (activeMenu !== "event-planning") {
      setEventManagementOpen(false);
    }
    if (activeMenu !== "help-and-support") {
      setHelpAndSupportOpen(false);
    }
  }, [activeMenu]);

  const toggleDataManagement = () => {
    setdataManagementOpen(!dataManagementOpen);
    setActiveMenu("internal-data-management");
    handleSubMenuClick(
      "sponsorship-request",
      "/internal-data-management/sponsorship-request"
    );
  };

  const toggleHelpAndSupport = () => {
    setHelpAndSupportOpen(!helpAndSupportOpen);
    setActiveMenu("help-and-support"); // Set the active menu when clicked
    handleSubMenuClick(
      "event-related-queries",
      "/help-and-support/event-related-queries"
    );
  };

  const handleSubMenuClick = (subMenu, Path) => {
    setActiveSubMenu(subMenu); // Set the active submenu when clicked
    navigate(Path);
  };
  // console.log("activeMenu",activeMenu, "eventManagementOpen",eventManagementOpen);
  return (
    <div className="w-64 min-h-screen text-white fixed p-2 shadow border-r-2 border-[#546169] bg-[#0B1E29]">
      {/* Top Sidebar */}
      <div className="mb-8">
        <div className="flex items-center gap-3 p-2">
          <img
            src={user}
            alt="user-img"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <div>
            <h1 className="font-semibold text-[#FFEEE6]">Sanket Mondal</h1>
            <p className="text-[14px] text-[#BEBAB9]">President</p>
          </div>
          <div>
            <img
              className="w-[10px] h-[10px] cursor-pointer"
              src={ArrowLeft}
              alt="account-details"
            />
          </div>
        </div>
      </div>

      {/* Sidebar Start*/}
      <nav>
        {/* 1. Overview */}
        <Link
          to={"/"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/" ? "bg-[#F15C22]" : ""
          }`}
          onClick={() => setActiveMenu("/")}
        >
          <img src={Overview} alt={`/`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Overview
          </span>
        </Link>

        {/* 2. Event Planning */}
        <Link
          to={"/event-planning"}
          className={`flex items-center gap-3 p-3 rounded-lg  mb-1 transition-colors cursor-pointer ${
            activeMenu === "/event-planning" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/event-planning")}
        >
          <img src={Event} alt={`/`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Event Planning
          </span>
        </Link>

        {/* 3. Event Managment */}
        <div
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "event-planning" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={toggleEventManagement}
        >
          <img src={Event} alt={`event-planing-icon`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Event Management
          </span>
          {eventManagementOpen && activeMenu === "event-planning" ? (
            <ChevronUp className="h-4 w-4 ml-auto" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-auto" />
          )}
        </div>
        {activeMenu === "event-planning" && eventManagementOpen && (
          <ul className="ml-4">
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "upcoming"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() =>
                handleSubMenuClick("upcoming", "/event-management/upcoming")
              }
              // hare problem
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Upcoming Events
              </span>
            </li>
            <li
              className={`py-2 px-4  rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "in-progress"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() =>
                handleSubMenuClick(
                  "in-progress",
                  "/event-management/in-progress"
                )
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                In Progress
              </span>
            </li>
            <li
              className={`py-2 px-4  rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "past-events"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() =>
                handleSubMenuClick(
                  "past-events",
                  "/event-management/past-events"
                )
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Past Events
              </span>
            </li>
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "event-proposals"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() =>
                handleSubMenuClick(
                  "event-proposals",
                  "/event-management/event-proposals"
                )
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Event Proposals
              </span>
            </li>
          </ul>
        )}

        {/* 4. View Events */}
        <Link
          to={"/view-events"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/view-events" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/view-events")}
        >
          <img src={Event} alt={`/view-events`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            View Events
          </span>
        </Link>

        {/* 5. Learning Resources */}
        <Link
          to={"/learning-resources"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/learning-resources" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/learning-resources")}
        >
          <img src={Learning} alt={`/learning-resources`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Learning Resources
          </span>
        </Link>

        {/*6. Core Data Management */}
        <Link
          to={"/core-data-management"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/core-data-management" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/core-data-management")}
        >
          <img src={Data} alt={`/core-data-management`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Data Management
          </span>
        </Link>

        {/* 7. Internal Data Management */}
        <div
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "internal-data-management" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={toggleDataManagement}
        >
          <img src={Data} alt="internal-data-management-icon" />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Data Management
          </span>
          {dataManagementOpen && activeMenu === "internal-data-management" ? (
            <ChevronUp className="h-4 w-4 ml-auto" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-auto" />
          )}
        </div>

        {activeMenu === "internal-data-management" && dataManagementOpen && (
          <ul className="ml-4">
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "sponsorship-request"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`}
              onClick={() =>
                handleSubMenuClick(
                  "sponsorship-request",
                  "/internal-data-management/sponsorship-request"
                )
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Sponsorship Request
              </span>
            </li>
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "sponsors-report"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`}
              onClick={() =>
                handleSubMenuClick(
                  "sponsors-report",
                  "/internal-data-management/sponsors-report"
                )
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Sponsors Report
              </span>
            </li>
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "event-participants-record"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`}
              onClick={() =>
                handleSubMenuClick(
                  "event-participants-record",
                  "/internal-data-management/event-participants-record"
                )
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Event Participants Record
              </span>
            </li>
          </ul>
        )}

        {/* 8. Overall Updates */}
        <Link
          to={"/updates"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/updates" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/updates")}
        >
          <img src={Overall} alt={`/updates`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Overall Updates
          </span>
        </Link>

        {/* 9. Collage Overview */}
        <Link
          to={"/college-overview"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/college-overview" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/college-overview")}
        >
          <img src={Collage} alt={`/collage`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            College Overview
          </span>
        </Link>

        {/* 10. Learning Resources */}
        <Link
          to={"add-members"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/add-members" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/add-members")}
        >
          <img src={AddMembers} alt={`add-members`} className="h-[1.7rem] w-[1.7rem]"/>
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Add Members
          </span>
        </Link>

        {/* 11. Help and Support */}
        {/* <div
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "help-and-support" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={toggleHelpAndSupport}
        >
          <img src={Help} alt={`help-support icon`} />
          <span className="text-[16px] text-[#BEBAB9] font-Gilroy font-normal">
            Help and Support
          </span>
          {helpAndSupportOpen && activeMenu === "help-and-support" ? (
            <ChevronUp className="h-4 w-4 ml-auto" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-auto" />
          )}
        </div>

        {activeMenu === "help-and-support" && helpAndSupportOpen && (
          <ul className="ml-4">
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "event-related-queries"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`}
              onClick={() =>
                handleSubMenuClick(
                  "event-related-queries",
                  "/help-and-support/event-related-queries"
                )
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Event Related Queries
              </span>
            </li>
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "technical-help"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`}
              onClick={() =>
                handleSubMenuClick(
                  "technical-help",
                  "/help-and-support/technical-help"
                )
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Technical Help
              </span>
            </li>
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "resources"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`}
              onClick={() =>
                handleSubMenuClick("resources", "/help-and-support/resources")
              }
            >
              <span className=" text-[16px] font-Gilroy font-normal">
                Resources
              </span>
            </li>
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "faq"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`}
              onClick={() => handleSubMenuClick("faq", "/help-and-support/faq")}
            >
              <span className=" text-[16px] font-Gilroy font-normal">FAQ</span>
            </li>
          </ul>
        )} */}
      </nav>

      {/* PeerHub Name */}
      <div className="mt-auto pt-8">
        <div className="text-[#EA580C] font-bold text-2xl cursor-pointer">
          <img className="p-7" src={PeerHub} alt="PeerHub-image" />
        </div>
      </div>
    </div>
  );
};
