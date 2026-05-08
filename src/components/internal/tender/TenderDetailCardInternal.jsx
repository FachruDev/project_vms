import Icon from "../dashboard/IconInternal";

function TenderDetailCard({ focusTender }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h3 className="inline-flex items-center gap-2 text-xl font-semibold text-[#08253a]">
        <Icon name="file" className="h-5 w-5" />
        Detail Tender
      </h3>

      <div className="mt-4">
        <p className="text-xs font-normal text-[#60717e]">Deskripsi</p>
        <p className="mt-2 text-sm leading-7 text-[#0f2431]">{focusTender.description}</p>
      </div>

      <div className="mt-4 rounded-xl border border-[#d9dde4] bg-[#f2f4f6] p-4">
        <p className="text-xs font-medium text-[#60717e]">Dokumen URS</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dbe7ff] text-[#153c7a]">
              <Icon name="file" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-sm text-[#0f2431]">{focusTender.ursFile.name}</p>
              <p className="text-xs text-[#60717e]">
                {focusTender.ursFile.size} - {focusTender.ursFile.uploadedAt}
              </p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl border border-[#d0d7df] bg-[#f4f6f8] px-4 py-2 text-sm font-semibold text-[#0f2431]">
            <Icon name="download" className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#60717e]">
        <Icon name="tag" className="h-4 w-4" />
        Jenis:
        <span className="rounded-full border text-xs border-[#d2d9e1] bg-[#f6f7f9] px-2 text-[#0f2431]">{focusTender.tenderType}</span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-[#f2f4f6] p-4">
          <p className="text-sm text-[#60717e]">Deadline</p>
          <p className="text-md font-semibold text-[#0f2431]">{focusTender.dueDate}</p>
        </div>
        <div className="rounded-xl bg-[#f2f4f6] p-4">
          <p className="text-sm text-[#60717e]">Vendor Terdaftar</p>
          <p className="text-md font-semibold text-[#0f2431]">{focusTender.vendorCount} Vendor</p>
        </div>
        <div className="rounded-xl bg-[#f2f4f6] p-4 sm:col-span-2 lg:col-span-1">
          <p className="text-sm text-[#60717e]">Kategori</p>
          <p className="text-md font-semibold text-[#0f2431]">{focusTender.category}</p>
        </div>
      </div>
    </article>
  );
}

export default TenderDetailCard;
