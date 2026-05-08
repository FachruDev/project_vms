import EvaluationTabsInternal from "./EvaluationTabsInternal";
import Icon from "../dashboard/IconInternal";

function QualitativeEvaluationFormInternal({ tabs, activeTab, onChangeTab, rows, vendorColumns }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-6 shadow-[0_8px_20px_rgba(10,18,35,0.04)]">
      {/* Header Form - Konsisten dengan Quantitative */}
      <div className="flex items-center justify-between border-b border-[#e3e6eb] pb-4">
        <h2 className="text-md font-bold text-[#08253a]">Form Evaluasi Teknis</h2>
        <div className="flex items-center gap-2 rounded-lg bg-[#f0f2f5] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#64748b] border border-[#d1d8e0]">
          <Icon name="clipboard-check" className="h-3.5 w-3.5" />
          Qualitative View
        </div>
      </div>

      <EvaluationTabsInternal tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />

      {/* Info Banner */}
      <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#9fb6dd]/40 bg-[#eef3fb] p-4">
        <Icon name="info" className="mt-0.5 h-5 w-5 text-[#153c7a]" />
        <div>
          <p className="text-sm font-bold text-[#153c7a]">Evaluasi Teknis Kualitatif</p>
          <p className="mt-0.5 text-xs text-[#51697a]">
            Mode tinjauan deskriptif — Penjelasan detail yang disampaikan oleh Vendor.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-[#e5e9ef] bg-white shadow-sm">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#f8fafc]">
              <th className="w-16 border-b border-r border-[#e5e9ef] px-4 py-3 text-left text-[11px] font-black uppercase tracking-wider text-[#64748b]">No</th>
              <th className="min-w-[250px] border-b border-r border-[#e5e9ef] px-4 py-3 text-left text-[11px] font-black uppercase tracking-wider text-[#64748b]">Aspek Penilaian Deskriptif</th>
              {vendorColumns.map((vendor) => (
                <th key={vendor.id} className="border-b border-[#e5e9ef] px-4 py-3 text-center transition-colors">
                  <span className="inline-block rounded-md border border-[#153c7a]/20 bg-[#eaf1ff] px-2.5 py-1 text-[10px] font-black uppercase text-[#153c7a]">
                    {vendor.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e9ef]">
            {rows.map((row) => (
              <tr key={row.id} className="group transition-colors hover:bg-[#f1f5f9]/50">
                <td className="border-r border-[#e5e9ef] px-4 py-4 text-center text-sm font-medium text-[#64748b] vertical-top">
                  {row.no}
                </td>
                <td className="border-r border-[#e5e9ef] px-4 py-4 text-sm font-bold text-[#1f2b3a] leading-relaxed">
                  {row.element}
                </td>
                {vendorColumns.map((vendor) => (
                  <td key={`${row.id}-${vendor.id}`} className="px-4 py-4 align-top">
                    <div className="relative">
                      <textarea
                        readOnly
                        rows={4}
                        value={vendor.response || "Tidak ada penjelasan yang dilampirkan."}
                        className="w-full resize-none rounded-xl border border-[#d1d8e0] bg-[#f8fafc] px-4 py-3 text-xs leading-relaxed text-[#51697a] outline-none transition-all group-hover:bg-white focus:border-[#153c7a]"
                      />
                      <Icon name="lock" className="absolute right-3 top-3 h-3 w-3 text-[#94a3b8] opacity-20" />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button Simpan - Consistent Fill Effect */}
      <button className="group/btn relative mt-8 cursor-pointer overflow-hidden inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-4 py-3 text-sm font-bold text-white shadow-md transition-all active:scale-[0.98] before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-[#0c2d5a] before:transition-transform before:duration-500 before:ease-out hover:before:origin-left hover:before:scale-x-100">
        <span className="relative z-10 flex items-center gap-2">
          <Icon name="edit" className="h-4 w-4" />
          Simpan Hasil Evaluasi Kualitatif
        </span>
      </button>
    </article>
  );
}

export default QualitativeEvaluationFormInternal;