import Icon from "../dashboard/Icon";

function DocumentUrsCard({ ursFile }) {
  return (
    <article className="rounded-2xl border border-[#b8caea] bg-[#eef4ff] p-5 shadow-[0_6px_14px_rgba(10,18,35,0.04)]">
      <h3 className="inline-flex items-center gap-2 text-md font-semibold text-[#08253a] md:text-lg">
        <Icon name="file" className="h-5 w-5" />
        Dokumen URS (User Requirement Specification)
      </h3>

      <div className="mt-4 rounded-xl border border-[#d7e3f8] bg-[#f4f8f6] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dbe7ff] text-[#153c7a]">
              <Icon name="file" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-md text-[#0f2431]">{ursFile.name}</p>
              <p className="text-xs text-[#60717e]">
                {ursFile.size} - {ursFile.uploadedAt}
              </p>
            </div>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-[#153c7a] px-4 py-2 text-sm font-semibold text-white">
            <Icon name="download" className="h-4 w-4" />
            Download URS
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm text-[#5f7685]">Silakan download dan pelajari dokumen URS sebelum mengajukan penawaran.</p>
    </article>
  );
}

export default DocumentUrsCard;
