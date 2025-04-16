import { Resources } from "./Resources";
import { Link } from "react-router-dom";
import { Filter, ArrowUpDown } from "lucide-react";

const LearningResources = () => (
  <div className="mt-24 p-6">
    <div className="flex flex-row gap-6 justify-center items-center">
      {Resources.map((resource, index) => (
        <div
          key={index}
          className="flex flex-row border border-[#204E68] p-3 ml-2"
        >
          <img
            src={resource.image}
            alt=""
            className="w-[120px] h-[120px] pr-4"
          />
          <div className="flex flex-col gap-1.5">
            <h3 className="text-white font-berlin text-2xl">
              {resource.question}
            </h3>
            <p className="text-white font-Gilroy">{resource.answer}</p>
            <Link
              className="text-white bg-[#F15C22] w-[80px] border border-[#F15C22] rounded-sm pl-3 pb-1 mt-1"
              to={"/"}
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-end mb-6 mt-3 space-x-3">
      <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
        <Filter size={16} />
        <span>Filter</span>
      </button>
      <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
        <ArrowUpDown size={16} />
        <span>Sort</span>
      </button>
    </div>
  </div>
);

export default LearningResources;
