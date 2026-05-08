import EvaluationTabsInternal from "./EvaluationTabsInternal";

function PriceNegotiationFormInternal({ tabs, activeTab, onChangeTab, rows }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h2 className="text-xl font-semibold text-[#08253a]">Form Evaluasi Teknis</h2>

      <EvaluationTabsInternal tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />

      <div className="mt-4 rounded-xl border border-[#9fb6dd] bg-[#eef3fb] px-4 py-3">
        <p className="text-base font-semibold text-[#0f2431]">Negosiasi Harga</p>
        <p className="mt-1 text-sm text-[#60717e]">
          Masukkan harga awal dan harga setelah negosiasi untuk menghitung persentase penghematan.
        </p>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-sm">
          <thead>
            <tr className="text-left text-[#60717e]">
              <th className="border-b border-[#d9dde4] px-3 py-2 font-medium">No</th>
              <th className="border-b border-[#d9dde4] px-3 py-2 font-medium">Nama Vendor</th>
              <th className="border-b border-[#d9dde4] px-3 py-2 font-medium">Harga Awal (IDR)</th>
              <th className="border-b border-[#d9dde4] px-3 py-2 font-medium">Harga After Nego (IDR)</th>
              <th className="border-b border-[#d9dde4] px-3 py-2 font-medium">Persentase</th>
              <th className="border-b border-[#d9dde4] px-3 py-2 font-medium">Skor</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border-b border-[#e5e9ef] px-3 py-3">{row.no}</td>
                <td className="border-b border-[#e5e9ef] px-3 py-3 text-[#0f2431]">{row.vendorName}</td>
                <td className="border-b border-[#e5e9ef] px-3 py-3">
                  <input
                    readOnly
                    value={row.initialPrice}
                    className="w-full rounded-lg border border-[#d9dde4] bg-[#f2f4f7] px-3 py-2 text-right text-sm text-[#60717e]"
                  />
                </td>
                <td className="border-b border-[#e5e9ef] px-3 py-3">
                  <input
                    readOnly
                    value={row.negotiatedPrice}
                    className="w-full rounded-lg border border-[#d9dde4] bg-[#f2f4f7] px-3 py-2 text-right text-sm text-[#60717e]"
                  />
                </td>
                <td className="border-b border-[#e5e9ef] px-3 py-3">
                  <span className="inline-flex rounded-full border border-[#d1d8e0] bg-white px-3 py-0.5 text-base font-medium text-[#0f2431]">
                    {row.percentage}
                  </span>
                </td>
                <td className="border-b border-[#e5e9ef] px-3 py-3">
                  <span className="inline-flex rounded-full bg-[#dbe7ff] px-3 py-0.5 text-base font-semibold text-[#153c7a]">
                    {row.score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-[#f1d7a4] bg-[#f8f3e4] px-5 py-4">
        <p className="text-xl font-semibold text-[#0f2431]">FINAL SCORE (70% Teknis + 30% Harga)</p>
        <span className="rounded-full bg-[#153c7a] px-7 py-2 text-base font-semibold text-white">
          Akan dihitung setelah submit
        </span>
      </div>

      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-4 py-2.5 text-sm font-semibold text-white">
        Simpan Evaluasi
      </button>
    </article>
  );
}

export default PriceNegotiationFormInternal;
