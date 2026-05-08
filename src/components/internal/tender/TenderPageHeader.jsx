import Icon from "../dashboard/IconInternal";

function TenderPageHeader({ title, tenderId, badgeLabel, onBack }) {
  return (
    <section className="mb-6 flex items-center gap-4">
      <button
        type="button"
        onClick={onBack}
        className="
          group relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-[#d5dbe3] bg-white text-[#1f2b3a] shadow-sm transition-all duration-300 
          hover:border-[#153c7a]/40 hover:shadow-md active:scale-90 cursor-pointer
        "
      >
        <span className="absolute inset-0 scale-0 rounded-xl bg-[#eef3ff] transition-transform duration-300 group-hover:scale-100"></span>
        
        <Icon 
          name="arrow-left" 
          className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-[#153c7a]" 
        />
      </button>

      <div>
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="text-xl font-bold leading-none text-[#081c43] transition-colors md:text-2xl">
            {title}
          </h1>
          <span className="rounded-full bg-[#eaf1ff] px-3 py-1 text-xs font-bold text-[#153c7a] ring-1 ring-[#153c7a]/10">
            {badgeLabel}
          </span>
        </div>
        <p className="mt-1.5 text-sm text-[#5e6f76]">
          ID: <span className="font-mono font-medium tracking-tight">{tenderId}</span>
        </p>
      </div>
    </section>
  );
}

export default TenderPageHeader;