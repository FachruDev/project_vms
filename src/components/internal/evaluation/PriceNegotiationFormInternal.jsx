import EvaluationTabsInternal from "./EvaluationTabsInternal";
import Icon from "../dashboard/IconInternal";

function PriceNegotiationFormInternal({ tabs, activeTab, onChangeTab, rows }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-6 shadow-[0_8px_20px_rgba(10,18,35,0.04)]">
      {/* Header Form */}
      <div className="flex items-center justify-between border-b border-[#e3e6eb] pb-4">
        <h2 className="text-md font-bold text-[#08253a]">Form Evaluasi Teknis</h2>
        <div className="flex items-center gap-2 rounded-lg bg-[#f0f2f5] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#64748b] border border-[#d1d8e0]">
          <Icon name="wallet" className="h-3.5 w-3.5" />
          Price Negotiation
        </div>
      </div>

      <EvaluationTabsInternal tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />

      {/* Info Banner */}
      <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#9fb6dd]/40 bg-[#eef3fb] p-4">
        <Icon name="info" className="mt-0.5 h-5 w-5 text-[#153c7a]" />
        <div>
          <p className="text-sm font-bold text-[#153c7a]">Negosiasi Harga</p>
          <p className="mt-0.5 text-xs text-[#51697a]">
            Bandingkan harga penawaran awal dengan hasil negosiasi untuk melihat efisiensi penghematan.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-[#e5e9ef] bg-white shadow-sm">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#f8fafc]">
              <th className="border-b border-r border-[#e5e9ef] px-4 py-3 text-left text-[11px] font-black uppercase tracking-wider text-[#64748b]">No</th>
              <th className="border-b border-r border-[#e5e9ef] px-4 py-3 text-left text-[11px] font-black uppercase tracking-wider text-[#64748b]">Nama Vendor</th>
              <th className="border-b border-r border-[#e5e9ef] px-4 py-3 text-right text-[11px] font-black uppercase tracking-wider text-[#64748b]">Harga Awal (IDR)</th>
              <th className="border-b border-r border-[#e5e9ef] px-4 py-3 text-right text-[11px] font-black uppercase tracking-wider text-[#64748b]">Harga Nego (IDR)</th>
              <th className="border-b border-r border-[#e5e9ef] px-4 py-3 text-center text-[11px] font-black uppercase tracking-wider text-[#64748b]">Efisiensi</th>
              <th className="border-b border-[#e5e9ef] px-4 py-3 text-center text-[11px] font-black uppercase tracking-wider text-[#64748b]">Skor Harga</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e9ef]">
            {rows.map((row) => (
              <tr key={row.id} className="group transition-colors hover:bg-[#f1f5f9]/50">
                <td className="border-r border-[#e5e9ef] px-4 py-4 text-center text-sm font-medium text-[#64748b]">{row.no}</td>
                <td className="border-r border-[#e5e9ef] px-4 py-4 text-sm font-bold text-[#1f2b3a]">{row.vendorName}</td>
                <td className="border-r border-[#e5e9ef] px-4 py-4">
                  <input
                    readOnly
                    value={row.initialPrice}
                    className="w-full rounded-lg border border-[#d1d8e0] bg-[#f8fafc] px-3 py-2 text-right text-xs font-bold text-[#64748b] outline-none"
                  />
                </td>
                <td className="border-r border-[#e5e9ef] px-4 py-4">
                  <input
                    readOnly
                    value={row.negotiatedPrice}
                    className="w-full rounded-lg border border-[#153c7a]/20 bg-[#f0fdf4] px-3 py-2 text-right text-xs font-bold text-[#16a34a] outline-none"
                  />
                </td>
                <td className="border-r border-[#e5e9ef] px-4 py-4 text-center">
                  <span className="inline-flex rounded-full border border-[#d1d8e0] bg-white px-3 py-1 text-[11px] font-black text-[#1f2431]">
                    {row.percentage}%
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="inline-flex rounded-lg bg-[#153c7a] px-4 py-1.5 text-sm font-black text-white shadow-sm">
                    {row.score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FINAL SCORE BANNER - High Professional Focus */}
      <div className="group relative mt-6 flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-[#f1d7a4] bg-[#fcf9ee] px-6 py-5 shadow-sm transition-all hover:shadow-md">
        {/* Decorative background icon */}
        <Icon name="settings" className="absolute -right-4 -top-4 h-24 w-24 text-[#f1d7a4] opacity-10 rotate-12" />
        
        <div className="relative z-10">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#856404]">Calculation Logic</p>
          <p className="mt-1 text-md font-bold text-[#1e293b]">FINAL SCORE <span className="text-[#856404]">(70% Teknis + 30% Harga)</span></p>
        </div>

        <div className="relative z-10 flex items-center gap-3">
           <span className="inline-flex items-center gap-2 rounded-xl bg-[#153c7a] px-6 py-3 text-sm font-black text-white shadow-lg transition-transform group-hover:scale-105">
            <Icon name="info" className="h-4 w-4" />
            Akan dihitung setelah submit
          </span>
        </div>
      </div>

      {/* Submit Button with Fill Slide Effect */}
      <button className="group/btn relative cursor-pointer mt-6 overflow-hidden inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all active:scale-[0.98] before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-[#0c2d5a] before:transition-transform before:duration-500 before:ease-out hover:before:origin-left hover:before:scale-x-100">
        <span className="relative z-10 flex items-center gap-2 text-base">
          <Icon name="clipboard-check" className="h-5 w-5" />
          Simpan Hasil Evaluasi & Negosiasi
        </span>
      </button>
    </article>
  );
}

export default PriceNegotiationFormInternal;