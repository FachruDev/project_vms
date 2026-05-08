import Icon from "../dashboard/IconInternal";

function TechnicalEvaluationHeaderInternal({ title, tenderId, subtitle, status, onBack }) {
  return (
    <section className="space-y-4">
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onBack}
          className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#d1d8e0] bg-[#f6f7f9] text-[#1f2b3a] transition-colors hover:bg-[#eef2f6]"
        >
          <Icon name="arrow-left" className="h-4 w-4" />
        </button>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-bold leading-none text-[#081c43] transition-colors md:text-2xl">{title}</h1>
            <span className="rounded-full bg-[#dbe7ff] px-2 py-0.5 text-xs font-semibold text-[#153c7a]">{status}</span>
          </div>
          <p className="mt-1 text-sm text-[#60717e]">
            Tender ID: <span className="font-mono">{tenderId}</span> <span className="mx-2">•</span> {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-xl border border-[#9fb6dd] bg-[#eef3fb] px-5 py-4">
        <Icon name="clipboard-check" className="mt-3 h-6 w-6 shrink-0 text-[#153c7a]" /> 
        
        <div>
          <p className="text-base font-bold text-[#153c7a]">Mode Procurement</p>
          <p className="mt-0.5 text-sm leading-relaxed text-[#51697a]">
            Anda dapat melihat semua data evaluasi, tetapi hanya dapat mengisi negosiasi harga.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnicalEvaluationHeaderInternal;