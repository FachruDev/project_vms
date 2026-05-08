import { useMemo, useState } from "react";
import Icon from "../dashboard/IconInternal";
import CustomDropdown from "../ui/CustomDropdownInternal";

function UpdateProgressCardInternal({ data, stages, currentStep, onBack, onStageSelect, onContinue }) {
  const [selectedStep, setSelectedStep] = useState("");

  const normalizedStages = useMemo(() => stages ?? [], [stages]);
  const currentStage = useMemo(() => normalizedStages.find((s) => s.step === currentStep), [normalizedStages, currentStep]);
  const nextStage = useMemo(() => normalizedStages.find((s) => s.step === currentStep + 1), [normalizedStages, currentStep]);
  const proofHistory = useMemo(() => data?.proofHistory ?? [], [data?.proofHistory]);

  const selectedStageData = useMemo(
    () => normalizedStages.find((s) => String(s.step) === selectedStep),
    [normalizedStages, selectedStep]
  );

  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-6 shadow-[0_8px_20px_rgba(10,18,35,0.04)] transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e3e6eb] pb-4">
        <h3 className="flex items-center gap-2 text-md font-bold text-[#08253a]">
          <Icon name="upload" className="h-5 w-5 text-[#153c7a]" /> 
          Update Progress Tender
        </h3>
      </div>

      {/* SLA Alert */}
      <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
        <Icon name="alert" className="h-5 w-5 shrink-0" />
        <div>
          <p className="text-[11px] font-black uppercase tracking-wider">SLA Violation Alert</p>
          <p className="mt-0.5 text-xs opacity-90 leading-relaxed">{data.slaWarning}</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="mt-6 space-y-6">
        {/* Menggunakan Reusable Dropdown */}
        <div className="space-y-2">
          <label className="block text-[11px] font-black uppercase tracking-wider text-[#64748b]">Pilih Tahap Selanjutnya</label>
          <CustomDropdown 
            options={normalizedStages}
            selectedValue={selectedStep}
            onSelect={(stage) => {
              setSelectedStep(String(stage.step));
              onStageSelect?.(stage);
            }}
            placeholder="Pilih tahap tujuan..."
            nextStep={nextStage?.step}
          />
        </div>

        {/* Upload Section */}
        <div className="space-y-2">
          <label className="block text-[11px] font-black uppercase tracking-wider text-[#64748b]">Upload Bukti Dokumen *</label>
          <label className="group/file flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-[#cbd3df] bg-white px-4 py-8 text-center transition-all hover:border-[#153c7a]/40 hover:bg-[#f8fafc]">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#f1f5f9] text-[#64748b] transition-colors group-hover/file:bg-[#153c7a] group-hover/file:text-white">
              <Icon name="upload" className="h-6 w-6" />
            </div>
            <p className="mt-3 text-sm font-bold text-[#1f2b3a]">Klik untuk pilih file</p>
            <p className="mt-1 text-[11px] text-[#94a3b8]">Format PDF, DOCX (Maks. 10MB)</p>
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Textarea */}
        <div className="space-y-2">
          <label className="block text-[11px] font-black uppercase tracking-wider text-[#64748b]">Keterangan (Opsional)</label>
          <textarea
            rows={3}
            placeholder="Tambahkan catatan untuk pembaruan ini..."
            className="w-full rounded-xl border border-[#d1d8e0] bg-white px-4 py-3 text-sm text-[#0f2431] outline-none transition-all focus:border-[#153c7a] focus:ring-4 focus:ring-[#153c7a]/10 resize-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 space-y-3">
        <button
          type="button"
          disabled={!selectedStep}
          onClick={() => onContinue?.(selectedStageData)}
          className="group/btn relative overflow-hidden inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#153c7a] px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all active:scale-[0.98] disabled:opacity-50 
          before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-[#0c2d5a] before:transition-transform before:duration-500 before:ease-out hover:before:origin-left hover:before:scale-x-100"
        >
          <span className="relative z-10 flex items-center gap-2">
            Update Ke Tahap Berikutnya 
            <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </span>
        </button>

        <button 
          onClick={onBack} 
          className="w-full rounded-xl border border-[#d1d8e0] bg-white py-3 text-sm font-bold text-[#64748b] transition-all hover:bg-[#f8fafc] hover:text-[#1e293b]"
        >
          Kembali
        </button>
      </div>

      {/* History */}
      <div className="mt-8 border-t border-[#e3e6eb] pt-6">
        <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-[#94a3b8]">Riwayat Dokumen</h4>
        <div className="mt-4 space-y-2">
          {proofHistory.map((item) => (
            <div key={item.id} className="group flex items-center justify-between rounded-xl bg-[#eceef2] px-4 py-3 transition-all hover:bg-white hover:shadow-sm hover:border-[#e3e6eb] border border-transparent">
              <div className="flex items-center gap-3">
                <span className="rounded bg-white border border-[#d1d8e0] px-2 py-0.5 text-[10px] font-black text-[#153c7a]">
                  {item.stage}
                </span>
                <span className="text-sm font-bold text-[#1f2b3a]">{item.fileName}</span>
              </div>
              <span className="text-[11px] font-medium text-[#64748b]">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default UpdateProgressCardInternal;