import Collage from "./Collage";

const CollageEventDetails = () => {
  return (
    <div className="flex-1 bg-[#0B1E29]">
      {/* 1st Part */}
      <div className="text-[#FFFFFF]">
       
        <div className="flex flex-row gap-10">
          {/* Collage Card */}
          <Collage />
          <div className="flex flex-col justify-start gap-6 w-[90%] pt-3">
            {/* Upper Two Sections */}
            <div className="flex flex-row justify-between gap-6 w-[90%]">
              {/* Left Details */}
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-3 pt-3">
                  <span className="font-Gilroy-SemiBold text-[14px] text-[#FFEEE6]">
                    Submitted by
                  </span>
                  <span className="font-Gilroy-SemiBold text-[14px] text-[#FFEEE6]">
                    Position
                  </span>
                </div>
                <div className="flex flex-col gap-3 pt-3">
                  <span className="font-Gilroy-Regular text-[14px] text-[#FFEEE6]">
                    :&emsp;Tushar Khanna
                  </span>
                  <span className="font-Gilroy-Regular text-[14px] text-[#FFEEE6]">
                    :&emsp;Event Coordinator
                  </span>
                </div>
              </div>

              {/* Right Details */}
              <div className="flex flex-row gap-3 pt-3">
                <div className="flex flex-col gap-3">
                  <span className="font-Gilroy-SemiBold text-[14px] text-[#FFEEE6]">
                    Title
                  </span>
                  <span className="font-Gilroy-SemiBold text-[14px] text-[#FFEEE6]">
                    Date & Time
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-Gilroy-Regular text-[14px] text-[#FFEEE6]">
                    :&emsp;Chai Pe Charcha
                  </span>
                  <span className="font-Gilroy-Regular text-[14px] text-[#FFEEE6]">
                    :&emsp;28 January 2025 ; 10:20am
                  </span>
                </div>
              </div>
            </div>

            {/* Full Width Description */}
            <div className="flex flex-row gap-3 w-[90%]">
              <div className="flex flex-col gap-3">
                <span className="font-Gilroy-SemiBold text-[14px] text-[#FFEEE6]">
                  Description
                </span>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <span className="font-Gilroy-Regular text-[14px] text-[#FFEEE6]">
                  &emsp;:&emsp;An engaging and interactive session where innovators,
                  entrepreneurs, and thinkers come together over a cup of chai
                  to pitch their one-liner ideas, spark discussions, and gain
                  valuable insights in a casual, collaborative setting.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageEventDetails;
