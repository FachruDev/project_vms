import Icon from "./Icon";
import StagesTrack from "./StagesTrack";

function TenderOverviewCard({ focusTender, visibleStages, progressWidth, onView, onRegister }) {

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#d9dde4] bg-[#f7f8fa] shadow-[0_4px_12px_rgba(10,18,35,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#153c7a]/30 hover:shadow-[0_12px_24px_rgba(10,18,35,0.12)]">
      
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e3e6eb] px-5 py-5 md:px-6 transition-colors duration-300 group-hover:bg-white/50">
        <div>
          <h2 className="text-md leading-tight font-semibold text-[#1f2a39] transition-colors group-hover:text-[#153c7a]">
            {focusTender.title}
          </h2>
          <p className="mt-2 text-xs text-[#5e6f76]">
            ID: <span className="font-mono font-medium">{focusTender.id}</span>
          </p>
        </div>
        <span className="rounded-full bg-[#eaf1ff] px-3 py-0.5 text-xs font-medium text-[#153c7a] ring-1 ring-[#153c7a]/10">
          {focusTender.badge}
        </span>
      </div>

      {/* Stages Section */}
      <div className="border-b border-[#e3e6eb] px-5 py-6 md:px-6 transition-colors duration-300 group-hover:bg-white/30">
        <StagesTrack stages={visibleStages} showDates={false} />
      </div>

      <div className="grid gap-2 border-b border-[#e3e6eb] px-5 py-3 text-sm text-[#677b74] sm:grid-cols-3">
        <p className="inline-flex items-center gap-2.5 transition-colors hover:text-[#1f2a39]">
          <Icon name="calendar" className="h-4 w-4 opacity-70" />
          {focusTender.dueDate}
        </p>
        <p className="inline-flex items-center gap-2.5 transition-colors hover:text-[#1f2a39]">
          <Icon name="users" className="h-4 w-4 opacity-70" />
          {focusTender.vendorCount} Vendor
        </p>
        <p className="inline-flex items-center gap-2.5 transition-colors hover:text-[#1f2a39]">
          <Icon name="file" className="h-4 w-4 opacity-70" />
          {focusTender.category}
        </p>
      </div>

      <div className="grid gap-3 px-5 py-4 sm:grid-cols-2 md:px-6 bg-white/20">
        <button
          type="button"
          onClick={onView}
          className="
            group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl border border-[#cfd8d4] bg-[#eef3ff] px-4 py-2.5 text-sm font-semibold 
            /* Warna teks default */
            text-[#1f2b3a] 
            /* Transisi teks agar sinkron dengan background */
            transition-colors duration-500 ease-out hover:text-white 
            active:scale-[0.98]
            /* Animasi Fill Slide */
            before:absolute before:inset-0 before:origin-right before:scale-x-0 
            before:bg-[#153c7a] /* Berubah ke hijau profesional */
            before:transition-transform before:duration-500 before:ease-out 
            hover:before:origin-left hover:before:scale-x-100 cursor-pointer
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            <Icon 
              name="eye" 
              className="h-4 w-4 transition-all duration-500 ease-out group-hover/btn:scale-110 group-hover/btn:text-white" 
            />
            <span>View Details</span>
          </span>
        </button>
        
        <button
          type="button"
          onClick={onRegister}
          className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#153c7a] hover:shadow-md active:scale-[0.98] cursor-pointer"
        >
          <Icon name="file" className="h-4 w-4 transition-transform duration-200 group-hover/btn:scale-110" />
          Register Now
        </button>
      </div>
    </article>
  );
}

export default TenderOverviewCard;