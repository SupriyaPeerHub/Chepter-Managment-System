import team1 from "../../assets/img/team1.png";
import team2 from "../../assets/img/team2.png"
const PeerChat = () => {
  return (
    <div className="flex flex-col p-6 bg-[#0c1824] h-[100vh]">
      {/* Header */}
      <div className="flex justify-between">
        <span className="text-white text-xl font-Gilroy">Teams</span>
        <span className="text-white bg-[#F15C22] hover:bg-orange-600 w-[140px] border h-[30px] border-[#F15C22] rounded-sm pt-0.5 pl-6 cursor-pointer font-Gilroy">
          + Join Team
        </span>
      </div>
      {/* Chat Group */}
      <div className="flex flex-row gap-9 mt-8">

        <div className="flex flex-row border border-[#204E68] gap-4 p-2 w-[500px] cursor-pointer">
          <img className="w-[50px] h-[60px] mt-2" src={team1} alt="chat-team1 " />
          <div className="flex flex-col ">
            <h1 className="text-[#F15C22] text-xl font-Gilroy mb-2">Team - 1 : Visionaries</h1>
            <p className="text-white font-Gilroy text-sm">Group members - 7</p>
            <p className="text-white font-Gilroy text-sm">Core Team + Faculty + PeerHub Manager</p>
          </div>
        </div>
        <div className="flex flex-row border border-[#204E68] gap-4 p-2 w-[500px] cursor-pointer">
          <img className=" mt-2" src={team2} alt="chat-team1 " />
          <div className="flex flex-col ">
            <h1 className="text-[#F15C22] text-xl font-Gilroy mb-2">Team - 2 : PowerHouse</h1>
            <p className="text-white font-Gilroy text-sm">Group members - 27</p>
            <p className="text-white font-Gilroy text-sm">Core Team + Faculty + PeerHub Manager + Department Chiefs</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PeerChat;
