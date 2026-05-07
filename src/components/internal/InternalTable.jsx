function InternalTable({ rows }) {
  return (
    <section className="rounded-2xl border border-[#d8e0ef] bg-white p-4 shadow-sm md:p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#1f2b3a]">Internal Monitoring</h2>
        <span className="rounded-full bg-[#eaf0ff] px-2.5 py-1 text-xs font-semibold text-[#153c7a]">{rows.length} records</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-[#e7edf8] text-left text-xs uppercase tracking-wide text-[#6f7f96]">
              <th className="py-2 pr-3">ID</th>
              <th className="py-2 pr-3">Tender</th>
              <th className="py-2 pr-3">PIC</th>
              <th className="py-2 pr-3">Status</th>
              <th className="py-2">Updated</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-[#f0f4fb]">
                <td className="py-2 pr-3 font-semibold text-[#153c7a]">{row.id}</td>
                <td className="py-2 pr-3 text-[#1f2b3a]">{row.tender}</td>
                <td className="py-2 pr-3 text-[#46556e]">{row.pic}</td>
                <td className="py-2 pr-3">
                  <span className="rounded-full bg-[#eaf0ff] px-2.5 py-1 text-xs font-semibold text-[#153c7a]">
                    {row.status}
                  </span>
                </td>
                <td className="py-2 text-[#5f6f86]">{row.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default InternalTable;