import Amity from "../assets/img/Amity.png";
import { useNavigate } from "react-router-dom";

const Collage = ({ fromPage, variant }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(`Clicked from: ${fromPage}`);
    if (fromPage === "admin" && variant =="proposals") {
      navigate("event-management/event-proposals/admin-details");
    } else if (fromPage === "manager" && variant =="proposals") {
      navigate("/event-management/event-proposals/manager-details");
    } else {
      return;
    }
  };
  return (
    <div
      className="flex flex-col w-40 h-40 border rounded-sm border-[#204E68] overflow-hidden  justify-center items-center align-middle cursor-pointer"
      onClick={handleClick}
    >
      {/* // <div
    //   className="flex flex-col w-full h-48 border rounded-sm border-[#204E68] overflow-hidden justify-center items-center cursor-pointer"
    //   onClick={handleClick}
    // > */}

      <img src={Amity} alt="Amity" className="w-[100px] h-[120px] pb-1" />
      {/* font-Gilroy-Bold */}
      <div>
        <span className="text-[#FFFFFF] font-[18px] font-Gilroy-Bold">
          AMITY UNIVERSITY
        </span>
      </div>
    </div>
  );
};

export default Collage;
