function EvaluationTabsInternal({ tabs, activeTab, onChangeTab }) {
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <div className="relative mt-4 flex rounded-xl bg-[#eceff4] p-1 border border-[#dce2e8]">
      <div 
        className="absolute top-1 bottom-1 left-1 rounded-lg bg-[#153c7a] shadow-md transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          width: "calc(33.33% - 8px)", 
          transform: `translateX(${activeIndex * 100}%)`,
          left: `calc(${activeIndex * 4}px + 4px)`,
        }}
      />

      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChangeTab(tab.id)}
          className={`
            relative cursor-pointer z-10 flex-1 py-2.5 text-sm font-bold transition-colors duration-400
            ${activeTab === tab.id ? "text-white" : "text-[#60717e] hover:text-[#153c7a]"}
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default EvaluationTabsInternal;