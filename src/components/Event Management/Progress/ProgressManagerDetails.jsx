import upload from "../../../assets/img/upload.png";
import EventDetails from "../../../pages/EventDetails";

function ProgressManagerDetails() {
  const tableHeaders = [
    "Date",
    "Title",
    "Event Type",
    "Status",
    "Remarks",
    "Upload",
  ];
  return (
    <div className=" text-[#FFFFFF] bg-[#0c1824] h-auto">
      <h1 className="text-[#FFFFFF] text-lg pb-2 font-Gilroy font-normal pl-6">
        In Progress Events
      </h1>
      <EventDetails />
      {/* Event Progress Steps */}
      <div className="flex items-center justify-between pr-6 mt-2 pl-6 pt-3 pb-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
            1
          </div>
          <div className="ml-2">
            <p className="text-white font-Gilroy">Idea Submission</p>
          </div>
        </div>
        <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
            2
          </div>
          <div className="ml-2">
            <p className="text-gray-400 font-Gilroy">In Progress</p>
          </div>
        </div>
        <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-Gilroy">
            3
          </div>
          <div className="ml-2">
            <p className="text-gray-400 font-Gilroy">In Review</p>
          </div>
        </div>
        <div className="h-0.5 flex-1 bg-gray-700 mx-4" />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
            4
          </div>
          <div className="ml-2">
            <p className="text-gray-400 font-Gilroy">Final Evaluation</p>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="rounded-lg overflow-hidden pt-3 pb-10 p-6">
        <table className="w-full border border-[#204E68]">
          <thead>
            <tr className="border-b border-[#204E68]">
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-medium text-gray-400 border-t border-r border-l border-[#204E68]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#204E68] text-gray-300">
              <td className="px-4 py-3">21/02/2025</td>
              <td className="px-4 py-3">Chai Pe Charcha</td>
              <td className="px-4 py-3">Community & Networking Event</td>
              <td className="px-4 py-3">
                <span className="border border-[#717171] bg-[#717171] text-white pt-1 pb-1 pl-2 pr-2">
                  On going
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-col justify-center">
                  <span>Good Idea but needs to be revised.</span>
                  <div className="flex flex-col pl-32">
                    <span>-Anurag</span>
                    <span>22/02/2025</span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-col justify-center align-center">
                  {/* <label className="block text-white mb-1">Document</label> */}
                  <div className="border-2 border-gray-600 rounded-md p-1.5 text-center cursor-pointer  transition-colors">
                    <input
                      type="file"
                      className="hidden"
                      id="document-upload"
                    />
                    <label
                      htmlFor="document-upload"
                      className="cursor-pointer flex align-center justify-center gap-2 text-center "
                    >
                      <img src={upload} alt="" className="w-5 h-5 pt-1" />
                      <span className="text-gray-400">Upload Document</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#F3642A] w-24 hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-1 py-1 rounded font-Gilroy-SemiBold"
                  >
                    Upload
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Feedback Form */}
      <div className="flex flex-col gap-2 pl-6">
        <h1 className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">Add Comment</h1>
        <div className="flex flex-col justify-center pr-10 gap-2">
          {/* 1 comment*/}
          <div className="flex pl-5 pr-2">
            <span className="text-[#BEBAB9] font-Gilroy-Regular">
              The event was a great success, bringing our community together and
              running smoothly. I appreciate the hard work of the team,
              volunteers, and attendees. Looking forward to improving even more
              next time!
            </span>
            <div className="flex flex-row pt-4 pl-0.5">
              <span className="whitespace-nowrap pr-2 font-Gilroy-RegularItalic text-[#BEBAB9]">
                -Sarthak Negi{" "}
              </span>
              <span className="whitespace-nowrap border text-[#0B1E29] text-[12px] px-4 pt-1 h-6 font-Gilroy border-[#F15C22] rounded-sm bg-[#F15C22]">
                Admin
              </span>
            </div>
          </div>
          
        </div>
        <textarea
          // value={comment}
          // onChange={(e) => setComment(e.target.value)}
          placeholder="@Mention Manager"
          className="w-[1000px] min-h-[120px] p-4 border border-[#204E68] rounded-sm
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
                  resize-none text-[#D1D5BA] placeholder-[#BEBAB9] transition duration-200 font-Gilroy-SemiBold-Italic"
        />
        <button
          type="submit"
          className="bg-[#F3642A] w-32 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-1 py-1 font-Gilroy-SemiBold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ProgressManagerDetails;
