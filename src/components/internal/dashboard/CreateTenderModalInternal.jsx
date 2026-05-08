import Icon from "./IconInternal";

function CreateTenderModalInternal({ open, form, onClose, onFieldChange, onFileChange, onReset }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-[#0f172a]/45 p-4 backdrop-blur-sm">
      <div className="mx-auto max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#d8e0ef] bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold text-[#081c43]">Create New Tender</h3>
            <p className="mt-1 text-[#5f6f86]">Fill in the tender details. The tender will be created in Draft status.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-xl border border-[#d8e0ef] text-[#5f6f86]"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="mb-1 block font-semibold text-[#0f2431]">Tender Title *</span>
            <input
              value={form.title}
              onChange={(e) => onFieldChange("title", e.target.value)}
              placeholder="e.g., Pengadaan Server Data Center"
              className="w-full rounded-xl border border-[#d1d8e0] bg-[#f6f8fb] px-4 py-2.5 outline-none focus:border-[#153c7a]"
            />
          </label>

          <label className="block">
            <span className="mb-1 block font-semibold text-[#0f2431]">Description</span>
            <textarea
              value={form.description}
              onChange={(e) => onFieldChange("description", e.target.value)}
              rows={4}
              placeholder="Describe the tender requirements..."
              className="w-full rounded-xl border border-[#d1d8e0] bg-[#f6f8fb] px-4 py-2.5 outline-none focus:border-[#153c7a]"
            />
          </label>

          <div>
            <span className="mb-1 block font-semibold text-[#0f2431]">Dokumen URS (User Requirement Specification) *</span>
            <label className="flex cursor-pointer flex-col items-center rounded-2xl border border-dashed border-[#c7d1da] bg-[#f8f9fb] px-4 py-6 text-center">
              <Icon name="upload" className="h-7 w-7 text-[#5f6f86]" />
              <p className="mt-2 text-[#5f6f86]">Upload dokumen URS untuk tender ini</p>
              <p className="text-sm text-[#74839a]">Format: PDF, DOC, DOCX (Maks. 10MB)</p>
              <span className="mt-3 rounded-lg border border-[#d1d8e0] bg-white px-3 py-1.5 text-sm font-semibold text-[#1f2b3a]">
                Pilih File
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => onFileChange("ursFileName", e.target.files?.[0]?.name ?? "")}
              />
            </label>
            {form.ursFileName ? <p className="mt-1 text-sm text-[#153c7a]">{form.ursFileName}</p> : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label>
              <span className="mb-1 block font-semibold text-[#0f2431]">Budget (IDR) *</span>
              <input
                value={form.budget}
                onChange={(e) => onFieldChange("budget", e.target.value)}
                className="w-full rounded-xl border border-[#d1d8e0] bg-[#f6f8fb] px-4 py-2.5 outline-none focus:border-[#153c7a]"
              />
            </label>
            <label>
              <span className="mb-1 block font-semibold text-[#0f2431]">Deadline *</span>
              <input
                type="date"
                value={form.deadline}
                onChange={(e) => onFieldChange("deadline", e.target.value)}
                className="w-full rounded-xl border border-[#d1d8e0] bg-[#f6f8fb] px-4 py-2.5 outline-none focus:border-[#153c7a]"
              />
            </label>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-4 py-2.5 font-semibold text-white">
            <Icon name="check" className="h-4 w-4" />
            Create Tender
          </button>
          <button
            type="button"
            onClick={onReset}
            className="rounded-xl border border-[#d1d8e0] bg-[#f6f8fb] px-4 py-2.5 font-semibold text-[#1f2b3a]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTenderModalInternal;