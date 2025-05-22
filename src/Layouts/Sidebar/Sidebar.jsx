import user from "../../assets/img/user.png";
import detailsimg from "../../assets/img/arrow-left.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PeerHub from "../../assets/img/PeerHub.png";
import Event from "../../assets/img/Event.png";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import Help from "../../assets/img/Help.png";
import Overview from "../../assets/img/Overview.png";
import Learning from "../../assets/img/Learning.png";
import Data from "../../assets/img/Data.png";
import Overall from "../../assets/img/Overall.png";
import Collage from "../../assets/img/Collage.png";
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
    setActiveMenu("data-management"); // Set the active menu when clicked
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
    <div className="w-64 min-h-screen text-white fixed p-2 shadow border-r-2">
      {/* Top Sidebar */}
      <div className="mb-8">
        <div className="flex items-center gap-3 p-2">
          <img src={user} alt="user-img" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold">Sanket Mondal</h2>
            <p className="text-sm text-gray-400">President</p>
          </div>
          <div>
            <img src={detailsimg} alt="account-details" />
          </div>
        </div>
      </div>

      {/* Sidebar Start*/}
      <nav>
        {/* 1. Overview */}
        {/* <Link
          to={"/"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/" ? "bg-[#F15C22]" : ""
          }`}
          onClick={() => setActiveMenu("/")}
        >
          <img src={Overview} alt={`/`} />
          <span>Overview</span>
        </Link> */}

        {/* 2. Event Planning */}
        {/* <Link
          to={"/event-planning"}
          className={`flex items-center gap-3 p-3 rounded-lg  mb-1 transition-colors cursor-pointer ${
            activeMenu === "/event-planning" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/event-planning")}
        >
          <img src={Event} alt={`/`} />
          <span>Event Planning</span>
        </Link> */}

        {/* 3. Event Managment */}
        <div
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "event-planning" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={toggleEventManagement}
        >
          <img src={Event} alt={`event-planing-icon`} />
          <span>Event Management</span>
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
              <span>Upcoming Events</span>
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
              <span>In Progress</span>
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
              <span>Past Events</span>
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
              <span>Event Proposals</span>
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
          <span>View Events</span>
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
          <span>Learning Resources</span>
        </Link>

        {/* 6. Data Managment */}
        <Link
          to={"/data-management"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "data-management" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={toggleDataManagement}
        >
          <img src={Data} alt={`data-management-icon`} />
          <span>Data Management</span>
          {dataManagementOpen && activeMenu === "data-management" ? (
            <ChevronUp className="h-4 w-4 ml-auto" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-auto" />
          )}
        </Link>
        {activeMenu === "data-management" && dataManagementOpen && (
          <ul className="ml-4">
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "sponsorship-request"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() => handleSubMenuClick("sponsorship-request")}
            >
              <span>Sponsorship Request</span>
            </li>
            <li
              className={`py-2 px-4  rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "sponsors-report"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() => handleSubMenuClick("sponsors-report")}
            >
              <span>Sponsors Report</span>
            </li>
            <li
              className={`py-2 px-4  rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "event-participants-record"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() => handleSubMenuClick("event-participants-record")}
            >
              <span>Event Participants Record</span>
            </li>
          </ul>
        )}

        {/* 7. Overall Updates */}
        <Link
          to={"/updates"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/updates" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/updates")}
        >
          <img src={Overall} alt={`/updates`} />
          <span>Overall Updates</span>
        </Link>

        {/* 8. Collage Overview */}
        <Link
          to={"/college-overview"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "/college-overview" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={() => setActiveMenu("/college-overview")}
        >
          <img src={Collage} alt={`/collage`} />
          <span>College Overview</span>
        </Link>

        {/* 10. Help and Support */}
        {/* <Link
          to={"help-and-support"}
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "help-and-support" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={toggleHelpAndSupport}
        >
          <img src={Help} alt={`help-support icon`} />
          <span>Help and Support</span>
          {helpAndSupportOpen && activeMenu === "help-and-support" ? (
            <ChevronUp className="h-4 w-4 ml-auto" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-auto" />
          )}
        </Link>
        {activeMenu === "help-and-support" && helpAndSupportOpen && (
          <ul className="ml-4">
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "event-related-queries"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() => handleSubMenuClick("event-related-queries")}
            >
              <span>Event Related Queries</span>
            </li>
            <li
              className={`py-2 px-4  rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "technical-help"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() => handleSubMenuClick("technical-help")}
            >
              <span>Technical Help</span>
            </li>
            <li
              className={`py-2 px-4  rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "resources"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() => handleSubMenuClick("resources")}
            >
              <span>Resources</span>
            </li>
            <li
              className={`py-2 px-4  rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "faq"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`} // Apply active class if submenu is active
              onClick={() => handleSubMenuClick("faq")}
            >
              <span>FAQ</span>
            </li>
          </ul>
        )} */}

        {/* Part 2 */}
        {/* 10. Help and Support */}
        <div
          className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition-colors cursor-pointer ${
            activeMenu === "help-and-support" ? "bg-[#F15C22]" : ""
          }`} // Apply active class if menu is active
          onClick={toggleHelpAndSupport}
        >
          <img src={Help} alt={`help-support icon`} />
          <span>Help and Support</span>
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
              <span>Event Related Queries</span>
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
              <span>Technical Help</span>
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
              <span>Resources</span>
            </li>
            <li
              className={`py-2 px-4 rounded-md flex items-center space-x-2 cursor-pointer ${
                activeSubMenu === "faq"
                  ? "border border-[#204E68] text-[#000000A6] bg-[#F4E1D2]"
                  : ""
              }`}
              onClick={() => handleSubMenuClick("faq", "/help-and-support/faq")}
            >
              <span>FAQ</span>
            </li>
          </ul>
        )}
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
