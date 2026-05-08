import Icon from "./IconInternal";

function AuditTrailCardInternal({ items }) {
  return (
    <article className="rounded-3xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_20px_rgba(10,18,35,0.04)]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#eaf1ff] text-[#153c7a]">
            <Icon name="clock" className="h-5 w-5" />
          </span>
          <h3 className="text-[30px] font-semibold text-[#202838]">Audit Trail</h3>
        </div>
        <span className="text-sm text-[#74839a]">{items.length + 19} entries</span>
      </div>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-[#e7ebf2] bg-[#f4f6f9] p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-[#1f2b3a]">{item.event}</p>
                <p className="mt-1 text-sm text-[#6b7c93]">{item.note}</p>
              </div>
              <span className="text-sm text-[#6f7f96]">{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 text-base font-semibold text-[#1f2b3a]">
        <Icon name="chevron-down" className="h-4 w-4" />
        Show More (19 more)
      </button>
    </article>
  );
}

export default AuditTrailCardInternal;