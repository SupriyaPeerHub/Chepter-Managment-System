import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import Login from "./UI/Login/Login.jsx";
import Overview from "./components/Overview/Overview.jsx";
import EventPlanning from "./components/EventPlanning/EventPlanning.jsx";
import LearningResources from "./components/LearningResources/LearningResources.jsx";
import OverallUpdates from "./components/OverallUpdates/OverallUpdates.jsx";
import SettingsPage from "./components/SettingsPage/SettingsPage.jsx";
// import ErrorPage from './components/ErrorPage'; // Optional: Add an error page for unmatched routes
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import Test from "./Test.jsx";
import ViewEvents from "./components/View Events/ViewEvents.jsx";
import CollegeOverview from "./components/College Overview/CollegeOverview.jsx";
import UpcomingEvents from "./components/Event Management/Upcoming/UpcomingEvents.jsx";
import InProgress from "./components/Event Management/Progress/InProgress.jsx";
import PastEvents from "./components/Event Management/Past Event/PastEvents.jsx";
import EventProposals from "./components/Event Management/Proposals/EventProposals.jsx";
import EventDetails from "./UI/EventDetails.jsx";
import Test2 from "./test2.jsx";
import UpcomingManagerDetails from "./components/Event Management/Upcoming/UpcomingManagerDetails.jsx";
import UpcomingAdminDetails from "./components/Event Management/Upcoming/UpcomingAdminDetails.jsx";
import ProgressManagerDetails from "./components/Event Management/Progress/ProgressManagerDetails.jsx";
import ProgressAdminDetails from "./components/Event Management/Progress/ProgressAdminDetails.jsx";
import PastAdminDetails from "./components/Event Management/Past Event/PastAdminDetails.jsx";
import PastManagerDetails from "./components/Event Management/Past Event/PastManagerDetails.jsx";
import ZZZ from "../zzz.jsx";
import AdminCollageDetails from "./components/LearningResources/AdminCollageDetails.jsx";
import ManagerCollageDetails from "./components/LearningResources/ManagerCollageDetails.jsx";
import EventRelatedQueries from "./components/HelpAndSupport/EventRelatedQueries/EventRelatedQueries.jsx";
import TechnicalHelp from "./components/HelpAndSupport/Technical Help/TechnicalHelp.jsx";
import FAQ from "./components/HelpAndSupport/FAQ/FAQ.jsx";
import Resources from "./components/HelpAndSupport/Resources/Resources.jsx";
import CoreDataManagement from "./components/Core DataManagement/CoreDataManagement.jsx";
import SponsorshipRequest from "./components/Internal DataManagement/Sponsorship Request/SponsorshipRequest.JSX";
import SponsorsReport from "./components/Internal DataManagement/Sponsors Report/SponsorsReport.jsx";
import EventParticipantsRecord from "./components/Internal DataManagement/Event Participants Record/EventParticipantsRecord.jsx";
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
          path: "event-management/upcoming/admin-details",
          element: <UpcomingAdminDetails />,
        },
        {
          path: "event-management/upcoming/manager-details",
          element: <UpcomingManagerDetails />,
        },
        {
          path: "event-management/in-progress",
          element: <InProgress />,
        },
        {
          path: "event-management/in-progress/manager-details",
          element: <ProgressManagerDetails />,
        },
        {
          path: "event-management/in-progress/admin-details",
          element: <ProgressAdminDetails />,
        },
        {
          path: "event-management/past-events",
          element: <PastEvents />,
        },
        {
          path: "event-management/past-events/manager-details",
          element: <PastManagerDetails />,
        },
        {
          path: "event-management/past-events/admin-details",
          element: <PastAdminDetails />,
        },
        {
          path: "event-management/event-proposals",
          element: <EventProposals />,
        },
        { path: "event-planning/details", element: <EventDetails /> },
        { path: "view-events", element: <ViewEvents /> },
        { path: "learning-resources", element: <LearningResources /> },
        { path: "admin/college-details", element: <AdminCollageDetails /> },
        { path: "manager/college-details", element: <ManagerCollageDetails /> },
        // Internal Data Management
        {
          path: "internal-data-management/sponsorship-request",
          element: <SponsorshipRequest />,
        },
        {
          path: "/internal-data-management/sponsors-report",
          element: <SponsorsReport />,
        },
        {
          path: "/internal-data-management/event-participants-record",
          element: <EventParticipantsRecord />,
        },
        // Core Data Management
        { path: "core-data-management", element: <CoreDataManagement /> },
        { path: "updates", element: <OverallUpdates /> },
        { path: "college-overview", element: <CollegeOverview /> },
        // Help and Supprot
        {
          path: "help-and-support/event-related-queries",
          element: <EventRelatedQueries />,
        },
        {
          path: "help-and-support/technical-help",
          element: <TechnicalHelp />,
        },
        { path: "help-and-support/resources", element: <Resources /> },
        { path: "/help-and-support/faq", element: <FAQ /> },
        { path: "settings", element: <SettingsPage /> },
        { path: "test", element: <Test /> },
        { path: "test2", element: <Test2 /> },
        { path: "Z", element: <ZZZ /> },
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
