import Icon from "./IconInternal";
import StagesTrack from "./StagesTrackInternal";

function TenderOverviewInternal({ focusTender, stages, currentStep, onView, onEdit }) {

  return (
    <article className="overflow-hidden rounded-3xl border border-[#d9dde4] bg-[#f7f8fa] shadow-[0_8px_20px_rgba(10,18,35,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e3e6eb] px-5 py-5 md:px-6">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-[#1f2a39]">{focusTender.title}</h2>
          <p className="mt-2 text-xs text-[#5e6f76]">
            ID: <span className="font-mono font-medium">{focusTender.id}</span>
          </p>
        </div>
        <span className="rounded-full bg-[#eaf1ff] px-4 py-1.5 text-sm font-semibold text-[#153c7a]">
          {focusTender.badge}
        </span>
      </div>

      <div className="border-b border-[#e3e6eb] px-5 py-6 md:px-6">
        <StagesTrack stages={stages} currentStep={currentStep} />
        <div className="mx-auto mt-4 h-2 w-[58%] rounded-full bg-[#dbe3f2]" />
      </div>

      <div className="grid gap-3 border-b border-[#e3e6eb] px-5 py-4 text-sm text-[#677b74] sm:grid-cols-2 md:px-6">
        <p className="inline-flex items-center gap-2.5 text-3xl text-[#1f2b3a]">
          <Icon name="wallet" className="h-5 w-5 opacity-70" />
          {focusTender.budgetDisplay}
        </p>
        <p className="inline-flex items-center gap-2.5 text-3xl">
          <Icon name="calendar" className="h-5 w-5 opacity-70" />
          {focusTender.dueDate}
        </p>
        <p className="inline-flex items-center gap-2.5 text-3xl">
          <Icon name="users" className="h-5 w-5 opacity-70" />
          {focusTender.vendorCount} Vendor
        </p>
        <p className="inline-flex items-center gap-2.5 text-3xl">
          <Icon name="file" className="h-5 w-5 opacity-70" />
          {focusTender.category}
        </p>
      </div>

      <div className="grid gap-3 px-5 py-4 sm:grid-cols-2 md:px-6">
        <button
          type="button"
          onClick={onView}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#cfd8d4] bg-[#eef3ff] px-4 py-3 text-base font-semibold text-[#1f2b3a]"
        >
          <Icon name="eye" className="h-4 w-4" />
          <span>View</span>
        </button>
        
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#153c7a] px-4 py-3 text-base font-semibold text-white"
        >
          <Icon name="edit" className="h-4 w-4" />
          Edit
        </button>
      </div>
    </article>
  );
}

export default TenderOverviewInternal;
