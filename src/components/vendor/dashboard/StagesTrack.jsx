import React from "react";

const StagesTrack = ({ stages, currentStep = 3 }) => {
  return (
    <div className="w-full bg-white font-sans select-none">
      <div className="overflow-x-auto custom-scrollbar pb-4">
        <div className="relative flex items-center min-w-max px-2">
          <div className="absolute top-[14px] left-8 right-8 h-[2px] bg-[#e5e7eb] z-0" />

          {stages.map((stage, index) => {
            const stepNumber = index + 1;
            const isDone = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            const isLast = index === stages.length - 1;

            return (
              <div key={index} className="relative flex flex-col items-center group" style={{ width: '70px' }}>
                
                {index > 0 && stepNumber <= currentStep && (
                  <div 
                    className={`absolute top-[14px] right-[50%] w-full h-[2px] z-0 ${
                      isDone || isCurrent ? "bg-[#153c7a]" : "bg-[#e5e7eb]"
                    }`}
                  />
                )}

                <div
                  className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] transition-all ${
                    isDone
                      ? "border-[#153c7a] bg-[#153c7a] text-white"
                      : isCurrent
                      ? "border-[#153c7a] bg-[#153c7a] shadow-[0_0_8px_rgba(14,138,100,0.3)]"
                      : "border-[#d1d5db] bg-white text-[#9ca3af]"
                  }`}
                >
                  {isDone ? (
                    <span className="text-[14px] font-bold">✓</span>
                  ) : isCurrent ? (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  ) : (
                    <span className="text-[10px] font-bold">{stage.step}</span>
                  )}
                </div>

                <span
                  className={`mt-2 text-[11px] whitespace-nowrap transition-colors ${
                    isCurrent ? "font-bold text-[#153c7a]" : "text-[#6b7280]"
                  }`}
                >
                  {stage.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #153c7a;
        }
      `}</style>
    </div>
  );
};

export default StagesTrack;