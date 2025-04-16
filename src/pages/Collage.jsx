import Amity from "../assets/img/Amity.png";

const Collage = () => {
  return (
    <div className="flex flex-col w-40 h-40 border rounded-sm border-[#204E68] overflow-hidden m-4 justify-center items-center align-middle">
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
