import AdminLearningResources from "./AdminLearningResources/AdminLearningResources";
import ManagerLearningResources from "./ManagerLearningResources/ManagerLearningResources";
import UserLearningResources from "./CoreLearningResources/UserLearningResources";

const LearningResources = () => {
  // const role = localStorage.getItem("role"); // Or use from context/auth
  const role = ""; //"manager";

  if (role === "admin") {
    return <AdminLearningResources />;
  } else if (role === "manager") {
    return <ManagerLearningResources />;
  } else {
    return <UserLearningResources />;
  }
};

export default LearningResources;
