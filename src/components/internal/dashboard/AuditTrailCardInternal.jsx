import { useState } from "react";
import Icon from "./IconInternal";

function AuditTrailCardInternal({ items = [] }) {
  const INITIAL_COUNT = 5;
  const LOAD_MORE_COUNT = 10;
  
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleItems = items.slice(0, visibleCount);
  const remainingCount = items.length - visibleCount;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + LOAD_MORE_COUNT);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_20px_rgba(10,18,35,0.04)]">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-2 border-b border-[#e3e6eb] pb-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eaf1ff] text-[#153c7a] ring-1 ring-[#153c7a]/10">
            <Icon name="clock" className="h-5 w-5" />
          </span>
          <h3 className="text-md font-bold text-[#202838]">Audit Trail</h3>
        </div>
        <span className="rounded-lg bg-[#f0f2f5] px-2 py-1 text-[11px] font-bold text-[#64748b] border border-[#e2e8f0]">
          {items.length} {items.length === 1 ? 'ENTRY' : 'ENTRIES'}
        </span>
      </div>

      {/* List Section */}
      <div className="mt-4 space-y-2">
        {visibleItems.map((item) => (
          <div 
            key={item.id} 
            className="group cursor-pointer rounded-xl border border-transparent bg-[#eceef2] p-4 transition-all duration-300 hover:border-[#153c7a]/20 hover:bg-white hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-[#153c7a] before:opacity-40 group-hover:before:opacity-100">
                <p className="text-sm font-semibold text-[#1f2b3a] transition-colors group-hover:text-[#153c7a]">
                  {item.event}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#6b7c93]">
                  {item.note}
                </p>
              </div>
              <span className="shrink-0 text-[11px] font-medium text-[#94a3b8]">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Action */}
      <div className="mt-4 flex gap-3">
        {remainingCount > 0 && (
          <button 
            onClick={handleShowMore}
            className="group/btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-[#d1d8e0] py-2.5 text-sm font-bold text-[#4a5568] transition-all duration-300 hover:border-[#153c7a]/40 hover:bg-[#153c7a]/5 hover:text-[#153c7a]"
          >
            <Icon 
              name="chevron-down" 
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" 
            />
            <span>Show More ({remainingCount} more)</span>
          </button>
        )}

        {visibleCount > INITIAL_COUNT && (
          <button 
            onClick={handleShowLess}
            className="group/btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-[#d1d8e0] py-2.5 text-sm font-bold text-[#4a5568] transition-all duration-300 hover:border-[#153c7a]/40 hover:bg-[#153c7a]/5 hover:text-[#153c7a]"
          >
            <Icon 
              name="chevron-up" 
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" 
            />
            <span>Show Less</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default AuditTrailCardInternal;
