import { X } from "lucide-react";
import upload from "../assets/img/upload.png";

const PlanAnEvent = ({ onClose, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-end z-50 mt-14">
      <div className="bg-[#243139] rounded-lg w-full max-w-md p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-semibold">Plan an Event</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        {/* Horizontal line */}
        <hr className="border-white mb-6" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Title*</label>
            <input
              type="text"
              placeholder="Chai Pe Charcha"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Description</label>
            <textarea
              placeholder="Event description..."
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-orange-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-white mb-1">Document</label>
            <div className="border-2 border-gray-600 rounded-md p-2 text-center cursor-pointer  transition-colors">
              <input type="file" className="hidden" id="document-upload" />
              <label
                htmlFor="document-upload"
                className="cursor-pointer flex align-center justify-center gap-2 text-center "
              >
                <img src={upload} alt="" className="w-5 h-5 pt-1" />
                <span className="text-gray-400">Upload Document</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-52 ml-48 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanAnEvent;
