// SortFilter.js
import { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function SortFilter({ isOpen, onClose, sortOptions, onApply }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  if (!isOpen) {
    return null;
  }

  const handleApply = () => {
    onApply(selectedOptions); // Pass selected options to the parent
    onClose();
  };

  const handleOptionToggle = (optionId) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(optionId)
        ? prevOptions.filter((id) => id !== optionId)
        : [...prevOptions, optionId]
    );
  };

  return (
    <div className="fixed left-[78.5rem] top-[9rem] inset-0 bg-opacity-50 z-50 items-center justify-center bg-slate-800 rounded-lg p-4 w-64 h-80 shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white text-lg font-medium">Sort by:</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      <hr className="border-white mb-6" />

      <div className="space-y-3">
        {sortOptions?.map((option) => (
          <label
            key={option.id}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                className="hidden"
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionToggle(option.id)}
              />
              <div
                className={`w-5 h-5 border rounded ${
                  selectedOptions.includes(option.id)
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-[#A1A1AA]'
                } flex items-center justify-center`}
              >
                {selectedOptions.includes(option.id) && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
            </div>
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      <button
        onClick={handleApply}
        className="w-36 ml-16 mt-6 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium">
        Apply
      </button>
    </div>
  );
}
