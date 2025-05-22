import { X } from "lucide-react";
import upload from "../assets/img/upload.png";

const PostYourRequirement = ({ onClose, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  const handlePostYourRequirement = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <div className=" inset-0 bg-opacity-50 absolute items-center mt-[5.5rem] ml-[66rem]">
      <div className="bg-[#1E2A32] rounded-lg w-full max-w-md mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-Gilroy-SemiBold">
            Post Your Requirement
          </h2>
          <button className="text-gray-400 hover:text-white">
            <X size={24} onClick={onClose} />
          </button>
        </div>

        <form className="space-y-6" onSubmit={handlePostYourRequirement}>
          <div>
            <label className="block text-gray-300 mb-2 text-sm font-Gilroy-SemiBold">
              Event Type
            </label>
            <div className="relative">
              <select
                className="w-full px-4 py-3 rounded bg-[#2A363F] text-white border border-gray-600 focus:border-[#F15A2B] focus:outline-none appearance-none"
                defaultValue="Skills-based Events"
              >
                <option className="font-Gilroy-Regular">
                  Skills-based Events
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-Gilroy-SemiBold">
              Event Date
            </label>
            <div className="relative">
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                className="w-full px-4 py-3 rounded bg-[#2A363F] text-white border border-gray-600 focus:border-[#F15A2B] focus:outline-none font-Gilroy-Regular"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-Gilroy-SemiBold">
                Footfall (Exp. No. of People)
              </label>
              <input
                type="text"
                placeholder="0000000"
                className="w-full px-4 py-3 rounded font-Gilroy-Regular bg-[#2A363F] text-white border border-gray-600 focus:border-[#F15A2B] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-Gilroy-SemiBold">
                Budget (in ₹)
              </label>
              <input
                type="text"
                placeholder="0000000"
                className="w-full px-4 py-3 rounded font-Gilroy-Regular bg-[#2A363F] text-white border border-gray-600 focus:border-[#F15A2B] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-Gilroy-SemiBold">
              Description
            </label>
            <textarea
              placeholder="Placeholder text"
              rows={4}
              className="w-full px-4 py-3 rounded font-Gilroy-Regular bg-[#2A363F] text-white border border-gray-600 focus:border-[#F15A2B] focus:outline-none resize-none"
            ></textarea>
          </div>
          <div>
            <label className="block text-white mb-1 font-Gilroy-SemiBold">
              Document
            </label>
            <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer  transition-colors hover:border-[#F15A2B]">
              <input type="file" className="hidden" id="document-upload" />
              <label
                htmlFor="document-upload"
                className="cursor-pointer flex align-center justify-center gap-2 text-center "
              >
                <img src={upload} alt="" className="w-5 h-5 pt-1" />
                <span className="text-gray-400 font-Gilroy-Regular">
                  Upload Document
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-52 ml-48 bg-[#F15A2B] hover:bg-[#d94d21] text-white py-3 px-4 rounded transition-colors 
            font-Gilroy-SemiBold font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default PostYourRequirement;
