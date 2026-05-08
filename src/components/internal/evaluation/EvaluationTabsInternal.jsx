function EvaluationTabsInternal({ tabs, activeTab, onChangeTab }) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-[#eceff4] p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChangeTab(tab.id)}
          className={`rounded-lg px-3 py-2 text-sm font-medium ${
            activeTab === tab.id ? "bg-white text-[#0f2431]" : "text-[#60717e]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default EvaluationTabsInternal;
