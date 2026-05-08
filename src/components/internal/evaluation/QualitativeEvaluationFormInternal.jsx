import EvaluationTabsInternal from "./EvaluationTabsInternal";

function QualitativeEvaluationFormInternal({ tabs, activeTab, onChangeTab, rows, vendorColumns }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h2 className="text-xl font-semibold text-[#08253a]">Form Evaluasi Teknis</h2>

      <EvaluationTabsInternal tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />

      <div className="mt-4 rounded-xl border border-[#d9dde4] bg-[#f2f4f7] px-4 py-3">
        <p className="text-base font-semibold text-[#0f2431]">Evaluasi Teknis Kualitatif</p>
        <p className="mt-1 text-sm text-[#60717e]">Mode read-only - Data ini diisi oleh Vendor.</p>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-sm">
          <thead>
            <tr className="text-left text-[#60717e]">
              <th className="border-b border-[#d9dde4] px-3 py-2 font-medium">No</th>
              <th className="border-b border-[#d9dde4] px-3 py-2 font-medium">Unsur Penilaian</th>
              {vendorColumns.map((vendor) => (
                <th key={vendor.id} className="border-b border-[#d9dde4] px-2 py-2 font-medium text-center">
                  <span className="inline-flex rounded-full border border-[#d1d8e0] px-2 py-0.5 text-xs text-[#0f2431]">
                    {vendor.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border-b border-[#e5e9ef] px-3 py-3">{row.no}</td>
                <td className="border-b border-[#e5e9ef] px-3 py-3 text-[#0f2431]">{row.element}</td>
                {vendorColumns.map((vendor) => (
                  <td key={`${row.id}-${vendor.id}`} className="border-b border-[#e5e9ef] px-2 py-2">
                    <textarea
                      readOnly
                      rows={3}
                      value="-"
                      className="w-full resize-none rounded-lg border border-[#d9dde4] bg-[#f2f4f7] px-3 py-2 text-sm text-[#60717e]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-4 py-2.5 text-sm font-semibold text-white">
        Simpan Evaluasi
      </button>
    </article>
  );
}

export default QualitativeEvaluationFormInternal;
