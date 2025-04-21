import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layouts/Layout.jsx";
import Login from "./pages/Login/Login.jsx";
import Overview from "./components/Overview/Overview.jsx";
import EventPlanning from "./components/EventPlanning/EventPlanning.jsx";
import LearningResources from "./components/LearningResources/LearningResources.jsx";
import DataManagement from "./components/DataManagement/DataManagement.jsx";
import OverallUpdates from "./components/OverallUpdates/OverallUpdates.jsx";
import HelpAndSupport from "./components/HelpAndSupport/HelpAndSupport.jsx";
import SettingsPage from "./components/SettingsPage/SettingsPage.jsx";
import PeerChat from "./components/PeerChat/PeerChat.jsx";
// import ErrorPage from './components/ErrorPage'; // Optional: Add an error page for unmatched routes
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import Test from "./Test.jsx";
// import EventManagement from './components/Event Management/EventManagement.jsx';
import ViewEvents from "./components/View Events/ViewEvents.jsx";
import CollegeOverview from "./components/College Overview/CollegeOverview.jsx";
import UpcomingEvents from "./components/Event Management/Upcoming/UpcomingEvents.jsx";
import InProgress from "./components/Event Management/Progress/InProgress.jsx";
import PastEvents from "./components/Event Management/Past Event/PastEvents.jsx";
import EventProposals from "./components/Event Management/Proposals/EventProposals.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Test2 from "./test2.jsx";
import UpcomingManagerDetails from "./components/Event Management/Upcoming/UpcomingManagerDetails.jsx";
import UpcomingAdminDetails from "./components/Event Management/Upcoming/UpcomingAdminDetails.jsx";
import ProgressManagerDetails from "./components/Event Management/Progress/ProgressManagerDetails.jsx";
import ProgressAdminDetails from "./components/Event Management/Progress/ProgressAdminDetails.jsx";
import PastAdminDetails from "./components/Event Management/Past Event/PastAdminDetails.jsx";
import PastManagerDetails from "./components/Event Management/Past Event/PastManagerDetails.jsx";
import ZZZ from "../zzz.jsx";
function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Layout />,
      //errorElement: <ErrorPage />, // Optional error element
      children: [
        { index: true, element: <Overview /> },
        { path: "event-planning", element: <EventPlanning /> },
        { path: "event-management/upcoming", element: <UpcomingEvents /> },
        {
          path: "event-management/upcoming/admin-details",element: <UpcomingAdminDetails />,
        },
        {
          path: "event-management/upcoming/manager-details", element: <UpcomingManagerDetails />,
        },
        {
          path: "event-management/in-progress", element: <InProgress />,
        },
        {
          path: "event-management/in-progress/manager-details", element: <ProgressManagerDetails />,
        },
        {
          path: "event-management/in-progress/admin-details", element: <ProgressAdminDetails />,
        },
        {
          path: "event-management/past-events", element: <PastEvents />,
        },
        {
          path: "event-management/past-events/manager-details", element: <PastManagerDetails />,
        },
        {
          path: "event-management/past-events/admin-details", element: <PastAdminDetails />,
        },
        {
          path: "event-management/event-proposals", element: <EventProposals />,
        },
        { path: "event-planning/details", element: <EventDetails /> },
        { path: "view-events", element: <ViewEvents /> },
        { path: "learning-resources", element: <LearningResources /> },
        { path: "data-management", element: <DataManagement /> },
        { path: "updates", element: <OverallUpdates /> },
        { path: "college-overview", element: <CollegeOverview /> },
        { path: "chat", element: <PeerChat /> },
        { path: "help-and-support", element: <HelpAndSupport /> },
        { path: "settings", element: <SettingsPage /> },
        { path: "test", element: <Test /> },
        { path: "test2", element: <Test2 /> },
        { path: "Z", element: <ZZZ/> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
