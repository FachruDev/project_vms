import Icon from "./IconInternal";

function ActionItemCardInternal({ actionItems }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_20px_rgba(10,18,35,0.04)]">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[15px] font-bold text-[#202838]">Action Items</h3>
        <span className="rounded-lg bg-[#fcf5d8] border border-[#f1e3a8] px-2 py-0.5 text-[11px] font-bold text-[#967009]">
          {actionItems.length} items
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {actionItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-[#d6dbe3] bg-[#f4f6f8] p-4 transition-all duration-300 hover:border-[#f04444]/30 hover:bg-white hover:shadow-md"
          >
            <div className="absolute left-0 top-0 h-full w-1 origin-bottom scale-y-0 bg-[#f04444] transition-transform duration-300 group-hover:scale-y-100" />

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fce8e8] text-[#f04444] transition-all duration-300 group-hover:bg-[#f04444] group-hover:text-white group-hover:rotate-[10deg]">
                  <Icon name="alert" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight text-[#232b3b] transition-colors group-hover:text-[#f04444]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6b7d75]">
                    {item.detail}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-[#f04444]">
                    <Icon name="clock" className="h-3.5 w-3.5" />
                    <span>{item.due}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="inline-block rounded-md border border-[#fecaca] bg-[#fef2f2] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#ef4444] shadow-sm">
                  {item.priority}
                </span>
                <button className="text-sm font-semibold text-[#1f2b3a]">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ActionItemCardInternal;
