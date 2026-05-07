import Icon from "../dashboard/Icon";

function FileDropField({ label, helperText, selectedFile, onChangeFile, buttonLabel }) {
  return (
    <div className="group/file">
      <label className="mb-2 block text-sm font-semibold text-[#0f2431]">{label}</label>
      <div className="rounded-xl border border-dashed border-[#c7d1da] bg-[#f8f9fb] p-5 text-center transition-all duration-300 group-hover/file:border-[#153c7a]/50 group-hover/file:bg-white">
        <Icon name="upload" className="mx-auto h-6 w-6 text-[#60717e] transition-colors group-hover/file:text-[#153c7a]" />
        <p className="mt-2 text-sm text-[#60717e]">{helperText}</p>

        <label className="group/btn relative mt-3 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-[#d0d7df] bg-[#f1f4f6] px-4 py-1.5 text-sm font-medium text-[#0f2431] transition-all duration-300 hover:border-[#bdc5cd] active:scale-[0.98]">
          <span className="relative z-10">{buttonLabel}</span>
          <input
            type="file"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              onChangeFile(file?.name ?? "");
            }}
          />
        </label>

        {selectedFile ? (
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#153c7a] animate-in fade-in slide-in-from-top-1">
            <Icon name="check" className="h-4 w-4" />
            {selectedFile}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function TenderRegisterFormCard({ form, onFieldChange, onFileChange, onReset }) {
  const inputClass = "w-full rounded-lg border border-[#d1d8e0] bg-[#f3f5f7] px-3 py-2.5 outline-none transition-all duration-300 focus:border-[#153c7a] focus:bg-white focus:ring-4 focus:ring-[#153c7a]/10 text-sm";

  return (
    <article className="rounded-2xl border border-[#b8caea] bg-[#f6f7f9] p-6 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h3 className="inline-flex items-center gap-2 text-lg font-bold text-[#08253a]">
        <Icon name="upload" className="h-5 w-5 text-[#153c7a]" />
        Formulir Pendaftaran Tender
      </h3>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[#0f2431]">Nama Perusahaan</span>
          <input
            value={form.companyName}
            onChange={(event) => onFieldChange("companyName", event.target.value)}
            className={inputClass}
            placeholder="Masukkan nama perusahaan"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[#0f2431]">Contact Person</span>
          <input
            value={form.contactPerson}
            onChange={(event) => onFieldChange("contactPerson", event.target.value)}
            placeholder="Nama lengkap"
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[#0f2431]">Email</span>
          <input
            value={form.companyEmail}
            onChange={(event) => onFieldChange("companyEmail", event.target.value)}
            placeholder="example@company.com"
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-[#0f2431]">Telepon</span>
          <input
            value={form.companyPhone}
            onChange={(event) => onFieldChange("companyPhone", event.target.value)}
            placeholder="0812..."
            className={inputClass}
          />
        </label>
      </div>

      <div className="mt-5 rounded-xl border border-[#f1d391]/50 bg-[#fffdf5] p-4 text-sm text-[#9f6a00] flex gap-3 items-start shadow-sm">
        <Icon name="file" className="h-5 w-5 mt-0.5 shrink-0" />
        <div>
          <p className="font-bold">Dokumen Wajib</p>
          <p className="opacity-90">Anda wajib mengupload minimal 2 dokumen berikut untuk mendaftar tender ini.</p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <FileDropField
          label="Dokumen Quotation / Penawaran Harga *"
          helperText="PDF, DOC, DOCX (Max 10MB)"
          selectedFile={form.quotationFileName}
          onChangeFile={(fileName) => onFileChange("quotationFileName", fileName)}
          buttonLabel="Pilih File Quotation"
        />

        <FileDropField
          label="Dokumen Kualifikasi / Historis Pengalaman *"
          helperText="PDF, DOC, DOCX (Max 10MB)"
          selectedFile={form.qualificationFileName}
          onChangeFile={(fileName) => onFileChange("qualificationFileName", fileName)}
          buttonLabel="Pilih File Kualifikasi"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button className="group/btn cursor-pointer relative overflow-hidden inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-4 py-3 text-base font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.97] before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-[#153c7a] before:transition-transform before:duration-500 before:ease-out hover:before:origin-left hover:before:scale-x-100">
          <span className="relative z-10 flex items-center gap-2">
            <Icon name="check" className="h-5 w-5" />
            Submit Pendaftaran
          </span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="group/btn cursor-pointer relative overflow-hidden rounded-xl border border-[#d0d7df] bg-[#f4f6f8] px-6 py-3 text-sm font-bold text-[#4a5568] transition-all duration-300 active:scale-[0.97] before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-[#153c7a] before:transition-transform before:duration-500 before:ease-out hover:text-[#f4f6f8] hover:before:origin-left hover:before:scale-x-100"
        >
          <span className="relative z-10">Batal</span>
        </button>
      </div>
    </article>
  );
}

export default TenderRegisterFormCard;