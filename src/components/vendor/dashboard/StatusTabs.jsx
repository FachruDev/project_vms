import { useState, useEffect, useRef } from "react";

function StatusTabs({ tabs, onChangeTab }) {
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeTabIndex = tabs.findIndex((tab) => tab.active);
    const activeTabEl = tabsRef.current[activeTabIndex];

    if (activeTabEl) {
      setIndicatorStyle({
        width: activeTabEl.offsetWidth,
        left: activeTabEl.offsetLeft,
      });
    }
  }, [tabs]);

  return (
    <div className="relative inline-flex rounded-xl bg-[#eef0f3] p-1 border border-[#e2e8f0]">
      <div
        className="absolute bottom-1 top-1 rounded-lg bg-white shadow-sm border border-[#e2e8f0] transition-all duration-300 ease-[cubic-bezier(0.2,1,0.3,1)]"
        style={{
          width: `${indicatorStyle.width}px`,
          transform: `translateX(${indicatorStyle.left - 4}px)`, 
        }}
      />

      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => (tabsRef.current[index] = el)}
          type="button"
          onClick={() => onChangeTab?.(tab.id)}
          className={`
            relative z-10 inline-flex items-center gap-3 rounded-lg px-5 py-2 text-sm font-semibold transition-colors duration-300
            ${tab.active ? "text-[#153c7a]" : "text-[#64748b] hover:text-[#153c7a]"}
          `}
        >
          <span>{tab.label}</span>
          
          <span
            className={`
              grid h-5 min-w-[20px] place-items-center rounded px-1.5 text-[11px] font-bold transition-all duration-300
              ${tab.active ? "bg-[#153c7a] text-white" : "bg-[#d1d5db] text-[#64748b]"}
            `}
          >
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
}

export default StatusTabs;