import upload from "../../../assets/img/upload.png";
import EventDetails from "../../../UI/EventDetails";
const PastManagerDetails = () => {
  const tableHeaders = [
    "Date",
    "Title",
    "Event Type",
    "Status",
    "Remarks",
    "Upload",
  ];
  return (
    <div>
      {/* 1. Past Events */}
      <div className="pl-6 pt-4 text-[#FFFFFF] ">
        {/* 2. In Progress Events */}
        <h1 className="text-[#FFFFFF] text-lg pb-4 font-Gilroy font-normal mt-4">
          Past Events
        </h1>
        <EventDetails />

        {/* Student Participation Record */}
        <div className="flex gap-8 pt-6">
          <span className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">
            Student Participation Record
          </span>
          <span className="bg-[#F3642A] w-20 pl-5 pt-1 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] h-8 font-Gilroy-SemiBold">
            View
          </span>
        </div>

        {/* <EventDetails /> */}
        <h2 className="text-[#BEBAB9] text-[18px] pb-3 font-Gilroy pt-6">
          View Feedback
        </h2>
        <div className="flex flex-col border border-[#204E68] rounded-sm justify-center p-2 pb-10 gap-4">
          {/* 1 */}
          <div className="flex border border-[#243139] pl-5 pr-2 bg-[#243139] rounded-sm">
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
                PRESIDENT
              </span>
            </div>
          </div>
          {/* 2 */}
          <div className="flex border border-[#243139] pl-5 pr-2 bg-[#243139] rounded-sm">
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
              <span className="whitespace-nowrap border text-[#0B1E29] text-[12px] px-4 pt-1 h-6 font-Gilroy border-[#F15C22] rounded-sm font-normal bg-[#F15C22]">
                EVENT COORDINATOR
              </span>
            </div>
          </div>
        </div>
        {/* Add Comment & Student Participation Record */}
        {/* <div className="flex flex-row gap-20">
          <div className="flex flex-col">
            <h1 className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">
              Add Comment
            </h1>
            <textarea
              // value={comment}
              // onChange={(e) => setComment(e.target.value)}
              placeholder="@Mention Manager"
              className="w-[800px] min-h-[120px] p-4 border border-[#204E68] rounded-sm
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
                           resize-none text-[#D1D5BA] placeholder-[#BEBAB9] transition duration-200 font-Gilroy-SemiBold-Italic"
            />
            <button
              type="submit"
              className="bg-[#F3642A] w-32 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-3 py-1 font-Gilroy-SemiBold"
            >
              Submit
            </button>
          </div>
        </div> */}
        {/* Feedback Form */}
        <div className="flex flex-col gap-2 pl-6 pt-6">
          <h1 className="text-[#BEBAB9] text-lg pb-3 font-Gilroy">
            Add Comment
          </h1>
          <div className="flex flex-col justify-center pr-10 gap-2">
            {/* 1 comment*/}
            <div className="flex pr-2">
              <span className="text-[#BEBAB9] font-Gilroy-Regular">
                The event was a great success, bringing our community together
                and running smoothly. I appreciate the hard work of the team,
                volunteers, and attendees. Looking forward to improving even
                more next time!
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
            className=" mt-2 w-[1000px] min-h-[60px] p-4 border border-[#204E68] rounded-sm
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
                  resize-none text-[#D1D5BA] placeholder-[#BEBAB9] transition duration-200 font-Gilroy-SemiBold-Italic"
          />
          <button
            type="submit"
            className=" bg-[#F3642A] w-32 rounded-sm hover:bg-[#d94d21] text-[#FFFFFF] px-3 mt-1 py-1 font-Gilroy-SemiBold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastManagerDetails;
