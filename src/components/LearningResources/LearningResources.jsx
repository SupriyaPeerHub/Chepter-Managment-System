import AdminLearningResources from "./AdminLearningResources";
import ManagerLearningResources from "./ManagerLearningResources";
import UserLearningResources from "./UserLearningResources";

const LearningResources = () => {
  // const role = localStorage.getItem("role"); // Or use from context/auth
  const role = "manager";

  if (role === "admin") {
    return <AdminLearningResources />;
  } else if (role === "manager") {
    return <ManagerLearningResources />;
  } else {
    return <UserLearningResources />;
  }
};

export default LearningResources;
