export default function ROITrackerFlow() {
  return (
    <div className=" text-white">
      {/* Header */}
      <div className="flex items-center justify-between pb-5">
        <h1 className="text-xl font-medium text-slate-200">ROI Tracker Flow</h1>
      </div>

      {/* Table Section */}
      <div className="">
        <div className="border border-[#204E68] overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              {/* Section Header Row */}
              <tr className="border-b border-slate-600 ">
                <th
                  className="text-center text-white text-[14px] font-Gilroy-SemiBold  py-4 border-r border-[#204E68] bg-[#243139]"
                  colSpan={3}
                >
                  BASIC DETAILS INPUT
                </th>
                <th
                  className="text-center text-white text-[14px] font-Gilroy-SemiBold py-4 border-r border-[#204E68] bg-[#243139]"
                  colSpan={2}
                >
                  EARNINGS INPUT
                </th>
                <th
                  className="text-center text-white text-[14px] font-Gilroy-SemiBold py-4 bg-[#243139]"
                  colSpan={3}
                >
                  CALCULATIONS
                </th>
              </tr>

              {/* Column Header Row */}
              <tr className="border-b border-[#204E68]">
                <th className="text-[14px] text-[#FFEEE6] font-Gilroy-SemiBold py-4 px-6 border-r  border-[#204E68] min-w-[200px] text-left">
                  College Name
                </th>
                <th className="text-[14px] text-[#FFEEE6] font-Gilroy-SemiBold py-4 px-6 border-r  border-[#204E68] min-w-[150px] text-left">
                  Investment Amount
                </th>
                <th className="text-[14px] text-[#FFEEE6] font-Gilroy-SemiBold py-4 px-6 border-r  border-[#204E68] min-w-[150px] text-left">
                  Date of Investment
                </th>
                <th className="text-[14px] text-[#FFEEE6] font-Gilroy-SemiBold py-4 px-6 border-r  border-[#204E68] min-w-[150px] text-left">
                  Revenue Earned
                </th>
                <th className="text-[14px] text-[#FFEEE6] font-Gilroy-SemiBold py-4 px-6 border-r  border-[#204E68] min-w-[150px] text-left">
                  Sponsorship Amount
                </th>
                <th className="text-[14px] text-[#FFEEE6] font-Gilroy-SemiBold py-4 px-6 border-r  border-[#204E68] min-w-[150px] text-left">
                  Total Earnings
                </th>
                <th className="text-[14px] text-[#FFEEE6] font-Gilroy-SemiBold py-4 px-6 border-r  border-[#204E68] min-w-[120px] text-left">
                  Profit/Loss
                </th>
                <th className="text-[14px] text-[#FFEEE6] font-Gilroy-SemiBold py-4 px-6 min-w-[100px] text-left">
                  ROI (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Empty Input Row */}
              <tr className="border-b border-slate-600 hover:bg-slate-700/30">
                {Array(8)
                  .fill(0)
                  .map((_, idx) => (
                    <td
                      key={idx}
                      className="py-6 px-6 border-r last:border-r-0 border-slate-600"
                    ></td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
