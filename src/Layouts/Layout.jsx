// import { Outlet, useLocation } from "react-router-dom";
// import { Sidebar } from "./Sidebar/Sidebar.jsx";
// import { Header } from "./Header/Header.jsx";
// import Overview from "../assets/img/Overview.png";
// import Event from "../assets/img/Event.png";
// import Learning from "../assets/img/Learning.png";
// import Data from "../assets/img/Data.png";
// import Overall from "../assets/img/Overall.png";
// import Chat from "../assets/img/Chat.png";
// import Help from "../assets/img/Help.png";
// import Settings from "../assets/img/Settings.png";

// const Layout = () => {
//   const location = useLocation();
//   const navItems = [
//     { path: "/", icon: Overview, label: "Overview" },
//     { path: "/event-planning", icon: Event, label: "Event Planning" },
//     {
//       path: "/learning-resources",
//       icon: Learning,
//       label: "Learning Resources",
//     },
//     { path: "/data-management", icon: Data, label: "Data Management" },
//     { path: "/updates", icon: Overall, label: "Overall Updates" },
//     { path: "/chat", icon: Chat, label: "Peer Chat" },
//     { path: "/help", icon: Help, label: "Help and Support" },
//     { path: "/settings", icon: Settings, label: "Settings" },
//   ];

//   const getTitle = () => {
//     const path = location.pathname;
//     const item = navItems.find((item) => item.path === path);
//     return item ? item.label : 'Overview';
//   };

//   return (
//     <div className="flex min-h-screen bg-[#0B1E29]">
//       {/* This div ensures content is visible only on screens wider than 1024px */}
//       <div className="hidden lg:flex flex-1">
//         {/* Sidebar */}
//         <Sidebar navItems={navItems} />

//         {/* Main content area */}
//         <div className="flex-1 ml-64 min-w-[1024px]">
//           {/* Header */}
//           <Header getTitle={getTitle()} />

//           {/* Main content */}
//           <main className="bg-[#0B1E29] min-h-[calc(100vh-4rem)] mt-20 p-4">
//             <Outlet />
//           </main>
//         </div>
//       </div>

//       {/* Show message if screen is smaller than 1024px */}
//       <div className="lg:hidden flex justify-center items-center w-full min-h-screen bg-[#0B1E29]">
//         <p className="text-white text-xl">
//           This application is best viewed on a larger screen (laptop or desktop).
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Layout;







import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar.jsx";
import { Header } from "./Header/Header.jsx";
import Overview from "../assets/img/Overview.png";
import Event from "../assets/img/Event.png";
import Learning from "../assets/img/Learning.png";
import Data from "../assets/img/Data.png";
import Overall from "../assets/img/Overall.png";
import Chat from "../assets/img/Chat.png";
import Help from "../assets/img/Help.png";
import Settings from "../assets/img/Settings.png";

const Layout = () => {
    const location = useLocation();
    const navItems = [
      { path: "/", icon: Overview, label: "Overview" },
      { path: "/event-planning", icon: Event, label: "Event Planning" },
      {
        path: "/learning-resources",
        icon: Learning,
        label: "Learning Resources",
      },
      { path: "/data-management", icon: Data, label: "Data Management" },
      { path: "/updates", icon: Overall, label: "Overall Updates" },
      { path: "/chat", icon: Chat, label: "Peer Chat" },
      { path: "/help", icon: Help, label: "Help and Support" },
      { path: "/settings", icon: Settings, label: "Settings" },
    ];
    const getTitle = () => {
      const path = location.pathname;
      const item = navItems.find((item) => item.path === path);
      return item ? item.label : 'Overview';
    };
  
    return (
      <div className="flex min-h-screen bg-[#0B1E29] ">
        <Sidebar navItems={navItems}/>
        <div className="flex-1 ml-64">
          <Header getTitle={getTitle()}/>
          <main className="bg-[#0B1E29] min-h-[calc(100vh-2rem)] mt-[5.5rem]">
            {/*  */}
            <Outlet/>
          </main>
        </div>
      </div>
    );
  };

  export default Layout;