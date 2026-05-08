import Icon from "../dashboard/IconInternal";

function QuickActionsCard({ mode }) {
  const isDetail = mode === "detail";
  const baseBtnClass = "group/btn relative overflow-hidden inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97]";
  const fillEffectClass = "before:absolute before:inset-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:ease-out hover:before:origin-left hover:before:scale-x-100";

  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)] transition-all duration-300 hover:shadow-[0_12px_24px_rgba(10,18,35,0.1)]">
      <h3 className="text-lg font-semibold text-[#08253a]">Aksi Cepat</h3>

      <div className="mt-4 space-y-3">
        {isDetail ? (
          <button 
            className={`${baseBtnClass} ${fillEffectClass} bg-[#153c7a] text-white before:bg-[#153c7a] shadow-sm hover:shadow-md cursor-pointer`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Icon name="file" className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
              Daftar Tender
            </span>
          </button>
        ) : null}

        <button 
          className={`${baseBtnClass} ${fillEffectClass} border cursor-pointer border-[#d0d7df] bg-white text-[#0f2431] before:bg-[#eef3ff] hover:border-[#bdc5cd]`}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Icon name="upload" className="h-4 w-4 text-[#60717e] transition-all duration-300 group-hover/btn:text-[#153c7a] group-hover/btn:-translate-y-0.5" />
            Upload Dokumen
          </span>
        </button>
      </div>
    </article>
  );
}

export default QuickActionsCard;