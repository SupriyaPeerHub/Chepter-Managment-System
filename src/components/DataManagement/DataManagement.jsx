import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import PostYourRequirement from "../../pages/PostYourRequirement";
import TeamMembers from "../../pages/TeamMembers";

const DataManagement = () => {
  const [sponsorshipSent, setSponsorshipSent] = useState(null);
  const [rejectionReason, setRejectionReason] = useState(null);
  const [otherReason, setOtherReason] = useState("");
  // for form
  const [isPostYourRequirement, setIsPostYourRequirement] = useState(false);

  // Create a ref for the report section
  const reportRef = useRef(null);

  // Function to handle the scroll to the report section
  const scrollToReport = () => {
    if (reportRef.current) {
      reportRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tableHeaders = [
    "Sr. No.",
    "Event Type",
    "Sponsor's Contact Name",
    "Company/Brand Name",
    "Email ID",
    "Contact Number",
    "Proposal",
    "Amount (in ₹)",
    "Reason for Rejection",
    "Feedback",
  ];

  console.log(isPostYourRequirement);

  return (
    <div className="space-y-8 p-6 bg-[#0c1824]">
      {/* Team Members Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-white font-Gilroy-SemiBold">
            Team Members
          </h2>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-Gilroy-SemiBold"
            onClick={() => setIsPostYourRequirement(true)}
          >
            Post Your Requirement
          </button>
        </div>
        <TeamMembers />
      </div>

      <PostYourRequirement
        isOpen={isPostYourRequirement}
        onClose={() => setIsPostYourRequirement(false)}
      />

      {/* Post-Event Sponsorship Follow-Up */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-white font-Gilroy-SemiBold">
            Post-Event Sponsorship Follow-Up
          </h2>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-Gilroy-SemiBold"
            onClick={scrollToReport}
            href="#posteventsponsorshipfollowup"
          >
            View Report
          </button>
        </div>

        <div className="bg-[#0c1824] p-9 border border-[#204E68] rounded-sm">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm mb-2 font-Gilroy-Regular text-[#BEBAB9]">
                Event Type
              </label>
              <div className="relative">
                <select className="w-full bg-[#0f1923] border border-gray-700 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring-1 font-Gilroy-Regular text-[#A0A0A0] focus:ring-gray-600">
                  <option>Select Event Type</option>
                  <option>Conference</option>
                  <option>Workshop</option>
                  <option>Seminar</option>
                  <option>Hackathon</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-Gilroy-Regular text-[#BEBAB9] mb-2">
                Sponsor's Contact Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full bg-[#0f1923] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600 font-Gilroy-Regular text-[#A0A0A0]"
              />
            </div>

            <div>
              <label className="block text-sm font-Gilroy-Regular text-[#BEBAB9] mb-2">
                Company/Brand Name
              </label>
              <input
                type="text"
                placeholder="Enter Company/Brand Name"
                className="w-full bg-[#0f1923] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600 font-Gilroy-Regular text-[#A0A0A0]"
              />
            </div>
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-Gilroy-Regular text-[#BEBAB9] mb-2">
                Sponsor's Email Id
              </label>
              <input
                type="email"
                placeholder="Enter Email Id"
                className="w-full bg-[#0f1923] border border-gray-700 rounded-md px-4 py-2 focus:outline-none font-Gilroy-Regular text-[#A0A0A0] focus:ring-1 focus:ring-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-Gilroy-Regular text-[#BEBAB9] mb-2 ">
                Sponsor's Contact Number
              </label>
              <input
                type="tel"
                placeholder="Enter Contact Number"
                className="w-full bg-[#0f1923] border border-gray-700 rounded-md px-4 py-2 focus:outline-none font-Gilroy-Regular text-[#A0A0A0] focus:ring-1 focus:ring-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-Gilroy-Regular text-[#BEBAB9] mb-2">
                Sponsorship Amount Requested
              </label>
              <input
                type="text"
                placeholder="Enter Amount in numbers"
                className="w-full bg-[#0f1923] border border-gray-700 rounded-md px-4 py-2 font-Gilroy-Regular text-[#A0A0A0] focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
          </div>
          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-Gilroy-Regular text-[#BEBAB9] mb-2">
                Sponsorship Proposal sent?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="proposal-sent"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-700 bg-[#0f1923]"
                    checked={sponsorshipSent === "yes"}
                    onChange={() => setSponsorshipSent("yes")}
                  />
                  <span className="ml-2 text-sm font-Gilroy-Regular text-[#A0A0A0]">
                    Yes
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="proposal-sent"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-700 bg-[#0f1923]"
                    checked={sponsorshipSent === "no"}
                    onChange={() => setSponsorshipSent("no")}
                  />
                  <span className="ml-2 text-sm font-Gilroy-Regular text-[#A0A0A0]">
                    No
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-Gilroy-Regular text-[#BEBAB9] mb-2">
                Reason for Proposal Rejection?
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="rejection-reason"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-700 bg-[#0f1923]"
                    checked={rejectionReason === "small-footfall"}
                    onChange={() => setRejectionReason("small-footfall")}
                  />
                  <span className="ml-2 text-sm font-Gilroy-Regular text-[#A0A0A0]">
                    Small Footfall
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="rejection-reason"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-700 bg-[#0f1923]"
                    checked={rejectionReason === "budget-constraints"}
                    onChange={() => setRejectionReason("budget-constraints")}
                  />
                  <span className="ml-2 text-sm font-Gilroy-Regular text-[#A0A0A0]">
                    Budget Constraints
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="rejection-reason"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-700 bg-[#0f1923]"
                    checked={rejectionReason === "no-response"}
                    onChange={() => setRejectionReason("no-response")}
                  />
                  <span className="ml-2 text-sm font-Gilroy-Regular text-[#A0A0A0]">
                    No response
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="rejection-reason"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-700 bg-[#0f1923]"
                    checked={rejectionReason === "other"}
                    onChange={() => setRejectionReason("other")}
                  />
                  <span className="ml-2 text-sm font-Gilroy-Regular text-[#A0A0A0]">
                    Other
                  </span>
                  {rejectionReason === "other" && (
                    <input
                      type="text"
                      value={otherReason}
                      onChange={(e) => setOtherReason(e.target.value)}
                      className="ml-2 bg-[#0f1923] border border-gray-700 rounded-md font-Gilroy-Regular text-[#A0A0A0] px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />
                  )}
                </label>
              </div>
            </div>
          </div>
          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-Gilroy-Regular text-[#BEBAB9] mb-2">
                Additional Note
              </label>
              <textarea
                placeholder=""
                rows={4}
                className="w-full bg-[#0f1923] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 font-Gilroy-Regular text-[#A0A0A0] focus:ring-gray-600"
              ></textarea>
            </div>

            <div>
              <label className="block text-[16px] font-Gilroy-Regular text-[#BEBAB9] mb-2">
                Any Feedback from Sponsors?
              </label>
              <textarea
                placeholder="Write feedback"
                rows={4}
                className="w-full bg-[#0f1923] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600 font-Gilroy-Regular text-[#A0A0A0]"
              ></textarea>
            </div>
          </div>
          {/* Submit form */}
          <div className="flex justify-center">
            <button className="w-[30%] bg-[#F3642A] hover:bg-orange-600 text-[#FFFFFF] px-8 py-2  rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Post-Event Sponsorship Outcome Report */}

      <div className="mb-6" id="posteventsponsorshipfollowup" ref={reportRef}>
        <h2 className="text-xl text-white mb-4 font-Gilroy-SemiBold">
          Post-Event Sponsorship Follow-Up Report
        </h2>

        <div className="overflow-x-auto">
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
              {[...Array(8)].map((_, index) => (
                <tr
                  key={index}
                  className="border-b border-[#204E68] text-gray-300"
                >
                  <td className="px-4 py-3">{index + 1}.</td>
                  <td className="px-4 py-3">c</td>
                  <td className="px-4 py-3">Prasenjit</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end gap-2 mt-4 mb-4">
          <button className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                page === 1
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataManagement;
