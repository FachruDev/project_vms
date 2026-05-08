function EvaluationTenderInfoCardInternal({ tender }) {
  return (
    <aside className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h3 className="text-xl font-semibold text-[#08253a]">Info Tender</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-[#60717e]">ID Tender</dt>
          <dd className="font-mono text-[#0f2431]">{tender.tenderId}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-[#60717e]">Status</dt>
          <dd>
            <span className="rounded-full border border-[#d1d8e0] bg-white px-2 py-0.5 text-xs font-medium text-[#0f2431]">
              {tender.status}
            </span>
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-[#60717e]">Deadline</dt>
          <dd className="text-[#0f2431]">{tender.deadline}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-[#60717e]">Vendor Terdaftar</dt>
          <dd className="text-[#0f2431]">{tender.vendorCount}</dd>
        </div>
      </dl>
    </aside>
  );
}

export default EvaluationTenderInfoCardInternal;
