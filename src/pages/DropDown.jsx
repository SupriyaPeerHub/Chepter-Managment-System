
import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
const DropDown = ({ title, options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (optionId) => {
    const newSelected = selectedOptions.includes(optionId)
      ? selectedOptions.filter((id) => id !== optionId)
      : [...selectedOptions, optionId];
    onChange(newSelected);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-32 px-3 py-2 font-Gilroy-SemiBold font-normal bg-[#243139] border-[#204E68] rounded-sm text-[#FFFFFF] shadow-md focus:ring-[#204E68]"
      >
        <span className="text-[#FFFFFF]">
          {/* {selectedOptions.length > 0 && `(${selectedOptions.length})`} */}
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#FFFFFF] transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1">
          <div className="py-1 max-h-60 overflow-auto">
            {options.map((option) => (
              <div
                key={option.id}
                className="flex items-center px-2 py-1 mt-1 border border-[#204E68] rounded-md cursor-pointer bg-[#204E68]"
                onClick={() => toggleOption(option.id)}
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedOptions?.includes(option.id)}
                    onChange={() => {}}
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
                <span className="ml-3 text-[#FFEEE6] font-Gilroy-Regular font-normal">{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;