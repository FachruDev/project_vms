import { useState, useRef, useEffect } from "react";
import Icon from "../dashboard/IconInternal";

function CustomDropdown({ options, selectedValue, onSelect, placeholder, nextStep }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => String(opt.step) === selectedValue);
  const isSelectable = (stage) => {
    const isSelected = String(stage.step) === selectedValue;
    const isNext = nextStep !== undefined && stage.step === nextStep;
    return isSelected || nextStep === undefined || isNext;
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl border border-[#d1d8e0] bg-white px-4 py-2.5 text-sm text-[#1f2431] transition-all hover:bg-[#f8fafc] active:bg-white"
      >
        <span className={selectedOption ? "font-medium" : "text-[#64748b]"}>
          {selectedOption ? selectedOption.title : placeholder}
        </span>
        <Icon 
          name="chevron-down" 
          className={`h-4 w-4 text-[#94a3b8] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-2xl border border-[#e2e8f0] bg-white p-2 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] animate-in fade-in zoom-in-95 duration-200">
          <div className="max-h-[300px] overflow-y-auto space-y-1">
            {options.map((stage) => {
              const isNext = nextStep !== undefined && stage.step === nextStep;
              const isSelected = String(stage.step) === selectedValue;
              const allowed = isSelectable(stage);
              
              return (
                <button
                  key={stage.step}
                  type="button"
                  disabled={!allowed}
                  onClick={() => {
                    onSelect(stage);
                    setIsOpen(false);
                  }}
                  className={`
                    flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-left text-sm transition-all
                    ${isSelected 
                      ? "bg-[#153c7a] text-white font-semibold" 
                      : allowed 
                      ? "text-[#153c7a] hover:bg-[#153c7a] hover:text-white" 
                      : "text-[#94a3b8] cursor-not-allowed"}
                  `}
                >
                  <span className="flex-1">{stage.title}</span>
                  
                  {isNext && !isSelected && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-medium">
                        (Tahap selanjutnya)
                      </span>
                      <Icon name="check-circle" className="h-3.5 w-3.5 text-[#153c7a]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;