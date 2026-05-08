import Icon from "./IconInternal";
import CustomDropdown from "../ui/CustomDropdownInternal";
import { entitiesSeed } from "../../../features/shared/entities/entitiesSeed";

function CreateTenderModalInternal({
  open,
  form,
  onClose,
  onFieldChange,
  onFileChange,
  onReset,
}) {
  if (!open) return null;

  // Reusable Class untuk Form Input
  const inputBase =
    "w-full rounded-xl border border-[#d1d8e0] bg-[#f8fafc] px-4 py-2.5 text-sm text-[#0f2431] outline-none transition-all duration-300 focus:border-[#153c7a] focus:ring-4 focus:ring-[#153c7a]/10 focus:bg-white";

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0f172a]/60 p-4 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative mx-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2.5rem] border border-[#d8e0ef] bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header Modal */}
        <div className="flex items-start justify-between gap-3 border-b border-[#f0f2f5] pb-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-[#081c43]">
              Create New Tender
            </h3>
            <p className="mt-1 text-sm font-medium text-[#5f6f86]">
              Lengkapi detail tender. Status awal akan disimpan sebagai{" "}
              <span className="text-[#153c7a] font-bold">Draft</span>.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="group grid cursor-pointer h-10 w-10 place-items-center rounded-xl border border-[#d8e0ef] text-[#5f6f86] transition-all hover:bg-[#f04444] hover:text-white hover:border-[#f04444] active:scale-95"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="space-y-6">
          {/* Tender Title */}
          <div>
            <label className="mb-2 block text-[11px] font-black uppercase tracking-wider text-[#64748b]">
              Tender Title *
            </label>
            <input
              value={form.title}
              onChange={(e) => onFieldChange("title", e.target.value)}
              placeholder="e.g., Pengadaan Server Data Center"
              className={inputBase}
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-[11px] font-black uppercase tracking-wider text-[#64748b]">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) => onFieldChange("description", e.target.value)}
              rows={4}
              placeholder="Describe the tender requirements detail..."
              className={`${inputBase} resize-none`}
            />
          </div>

          {/* URS Upload */}
          <div>
            <label className="mb-2 block text-[11px] font-black uppercase tracking-wider text-[#64748b]">
              Dokumen URS (User Requirement Specification) *
            </label>
            <label className="group/file flex cursor-pointer flex-col items-center rounded-2xl border-2 border-dashed border-[#cbd3df] bg-[#f8fafc] px-4 py-8 text-center transition-all hover:border-[#153c7a]/40 hover:bg-[#f1f5f9]">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#64748b] shadow-sm transition-colors group-hover/file:bg-[#153c7a] group-hover/file:text-white">
                <Icon name="upload" className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-bold text-[#1f2b3a]">
                {form.ursFileName || "Klik atau seret file URS ke sini"}
              </p>
              <p className="text-[11px] text-[#94a3b8]">
                PDF, DOCX (Maks. 10MB)
              </p>
              <input
                type="file"
                className="hidden"
                onChange={(e) =>
                  onFileChange("ursFileName", e.target.files?.[0]?.name ?? "")
                }
              />
            </label>
          </div>

          {/* Budget & Deadline */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-[11px] font-black uppercase tracking-wider text-[#64748b]">
                Budget Estimate (IDR) *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#94a3b8]">
                  Rp
                </span>
                <input
                  value={form.budget}
                  onChange={(e) => onFieldChange("budget", e.target.value)}
                  placeholder="0"
                  className={`${inputBase} pl-10`}
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-[11px] font-black uppercase tracking-wider text-[#64748b]">
                Deadline Date *
              </label>
              <input
                type="date"
                value={form.deadline}
                onChange={(e) => onFieldChange("deadline", e.target.value)}
                className={inputBase}
              />
            </div>
          </div>
          {/* Category & Jenis Tender */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#64748b]">
                Category *
              </label>
              <CustomDropdown
                options={entitiesSeed.tenderCategories.map((item) => ({
                  step: item.id,
                  title: item.title,
                }))}
                selectedValue={form.categoryId}
                onSelect={(item) => onFieldChange("categoryId", item.step)}
                placeholder="Select category"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[11px] font-black uppercase tracking-wider text-[#64748b]">
                Jenis Tender *
              </label>
              <CustomDropdown
                options={entitiesSeed.tenderTypes.map((item) => ({
                  step: item.id,
                  title: item.title,
                }))}
                selectedValue={form.jenisId}
                onSelect={(item) => onFieldChange("jenisId", item.step)}
                placeholder="Pilih jenis"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-10 flex flex-wrap gap-3 border-t border-[#f0f2f5] pt-8">
          <button
            type="button"
            className="group/btn cursor-pointer relative flex-1 overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all active:scale-[0.98] before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-[#0c2d5a] before:transition-transform before:duration-500 before:ease-out hover:before:origin-left hover:before:scale-x-100"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Icon name="check" className="h-4 w-4" />
              Create Tender
            </span>
          </button>

          <button
            type="button"
            onClick={onReset}
            className="rounded-xl cursor-pointer border border-[#d1d8e0] bg-white px-8 py-3.5 text-sm font-bold text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#1e293b] active:scale-[0.98]"
          >
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTenderModalInternal;
