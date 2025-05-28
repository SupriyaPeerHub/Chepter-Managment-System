import { useState } from "react";
import { Upload } from "lucide-react";

export default function AddMembers() {
  const [selectedType, setSelectedType] = useState("Students");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log("Submitting file:", selectedFile.name);
      console.log("Member type:", selectedType);
      // Handle file upload logic here
    } else {
      alert("Please select a file first");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1E29] p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-[26px] font-Gilroy font-normal  text-white">Add Members</h1>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-700 rounded-full p-1">
            <button
              onClick={() => setSelectedType("Students")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedType === "Students"
                  ? "bg-white text-gray-800 shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setSelectedType("Manager")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedType === "Manager"
                  ? "bg-[#F15C22] text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Manager
            </button>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mb-8">
          <h2 className="text-[22px] font-Gilroy-SemiBold text-white mb-8">
            Upload Excel File
          </h2>

          {/* File Upload Area */}
          <div className="border-2 border-[#BEBAB9] border-dashed rounded-lg p-8 mb-6 text-center">
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="w-12 h-12 text-[#BEBAB9] mb-4" />
              <span className="text-xl text-white mb-2">Upload File</span>
              {selectedFile && (
                <span className="text-sm text-gray-300">
                  Selected: {selectedFile.name}
                </span>
              )}
            </label>
          </div>

          {/* Helper Text */}
          <p className="text-[#F15C22] text-[16px] font-Gilroy-SemiBold-Italic mb-8">
            Upload a .xls file to add multiple members at once
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-[#F3642A] hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
