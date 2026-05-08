import Icon from "../dashboard/IconInternal";

function EvaluationTenderInfoCardInternal({ tender }) {
  return (
    /* Tambahkan h-fit atau self-start agar tinggi kartu 
       hanya mengikuti jumlah konten di dalamnya 
    */
    <aside className="h-fit self-start rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_20px_rgba(10,18,35,0.04)] transition-all duration-300 hover:shadow-md">
      
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-[#e3e6eb] pb-4">
        <Icon name="info" className="h-4 w-4 text-[#153c7a]" />
        <h3 className="text-sm font-bold text-[#08253a]">Info Tender</h3>
      </div>

      <dl className="mt-4 space-y-4">
        {/* ID Tender */}
        <div className="group flex items-center justify-between gap-4 border-b border-[#e3e6eb]/50 pb-2 transition-colors hover:border-[#153c7a]/30">
          <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748b]">ID Tender</dt>
          <dd className="font-mono text-xs font-bold text-[#0f2431] group-hover:text-[#153c7a]">
            {tender.tenderId}
          </dd>
        </div>

        {/* Status */}
        <div className="group flex items-center justify-between gap-4 border-b border-[#e3e6eb]/50 pb-2 transition-colors hover:border-[#153c7a]/30">
          <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748b]">Status</dt>
          <dd>
            <span className="rounded-md border border-[#153c7a]/20 bg-[#eaf1ff] px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter text-[#153c7a]">
              {tender.status}
            </span>
          </dd>
        </div>

        {/* Deadline */}
        <div className="group flex items-center justify-between gap-4 border-b border-[#e3e6eb]/50 pb-2 transition-colors hover:border-[#153c7a]/30">
          <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748b]">Deadline</dt>
          <dd className="text-xs font-bold text-[#0f2431] group-hover:text-[#153c7a]">
            {tender.deadline}
          </dd>
        </div>

        {/* Vendor Terdaftar */}
        <div className="group flex items-center justify-between gap-4 border-b border-[#e3e6eb]/50 pb-2 transition-colors hover:border-[#153c7a]/30">
          <dt className="text-[10px] font-black uppercase tracking-wider text-[#64748b]">Vendor Terdaftar</dt>
          <dd className="flex items-center gap-2 text-xs font-bold text-[#0f2431]">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#153c7a] text-[10px] text-white">
              {tender.vendorCount}
            </span>
            <span className="group-hover:text-[#153c7a]">Vendor</span>
          </dd>
        </div>
      </dl>
    </aside>
  );
}

export default EvaluationTenderInfoCardInternal;