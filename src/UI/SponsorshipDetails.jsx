import React from "react";
import upload from "../assets/img/upload.png";

function SponsorshipDetails() {
  return (
    <div>
      <h1 className="text-[#FFFFFF]  text-lg pb-3 font-Gilroy">
        Sponsorship Details :
      </h1>
      <div className="flex flex-row gap-10">
        {/* Event Card */}
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-3 pt-3">
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Sponsor’s Contact Name
            </span>
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Email ID
            </span>
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Contact number
            </span>
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Company Name
            </span>
          </div>
          <div className="flex flex-col gap-3 pt-3">
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;Sanjay Dutta
            </span>
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;sanjaydutta2584@gmail.com
            </span>
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;98563251XX
            </span>
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;Sanjay Travels & Co.
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-3 pt-3">
          <div className="flex flex-col gap-3">
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Amount Sponsored
            </span>
            <span className="font-Gilroy-SemiBold text-[14px] font-normal text-[#FFEEE6]">
              Upload Sponsor Invoice
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-Gilroy-Regular text-[14px] font-normal text-[#FFEEE6]">
              :&emsp;10 March 2025, 10AM
            </span>
            <div className="flex flex-row gap-3">
              {/* Can i make it form */}
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
              <button
                type="submit"
                className="w-32 bg-[#F15A2B] hover:bg-[#d94d21] text-white py-2 px-4 rounded transition-colors font-Gilroy-SemiBold font-medium"
              >
                Submit
              </button>
            </div>
            <div>
              <a
                href="https://example.com/path/to/your/file.pdf" // External link to the PDF
                download="FinalDocument.pdf" // Optionally provide a filename for download
                className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-2"
              >
                <span className="font-Gilroy-SemiBold-Italic font-normal">
                  [View Final Document]
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorshipDetails;
