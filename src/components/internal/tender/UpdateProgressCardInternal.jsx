import { useMemo } from "react";
import Icon from "../dashboard/IconInternal";

function UpdateProgressCardInternal({ data, stages, currentStep, onBack }) {
  const normalizedStages = useMemo(() => stages ?? [], [stages]);
  const currentStage = useMemo(
    () => normalizedStages.find((stage) => (stage.step ?? 0) === currentStep),
    [normalizedStages, currentStep]
  );
  const nextStage = useMemo(
    () => normalizedStages.find((stage) => (stage.step ?? 0) === currentStep + 1),
    [normalizedStages, currentStep]
  );
  const proofHistory = useMemo(() => data?.proofHistory ?? [], [data?.proofHistory]);

  return (
    <article className="rounded-2xl border border-[#9fb6dd] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h3 className="inline-flex items-center gap-2 text-2xl font-semibold text-[#08253a]">
        <span aria-hidden>→</span>
        Update Progress Tender
      </h3>

      <div className="mt-4 rounded-xl bg-[#eff3f8] px-4 py-3">
        <p className="text-sm text-[#60717e]">
          Status Saat Ini:
          <span className="ml-2 rounded-full bg-[#dbe7ff] px-3 py-1 text-xs font-semibold text-[#153c7a]">
            {currentStage?.title ?? data.currentStatus}
          </span>
        </p>
      </div>

      <div className="mt-3 rounded-xl border border-[#f2b0b0] bg-[#fdeeee] px-3 py-3 text-[#ef4444]">
        <p className="inline-flex items-center gap-2 text-sm font-semibold">
          <Icon name="alert" className="h-4 w-4" />
          SLA Violation Alert
        </p>
        <p className="mt-1 text-xs">{data.slaWarning}</p>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-[#0f2431]">Pilih Tahap Selanjutnya</label>
        <select
          disabled={!nextStage}
          className="w-full rounded-xl border border-[#153c7a] bg-white px-4 py-2.5 text-sm text-[#0f2431] disabled:cursor-not-allowed disabled:bg-[#eef2f7]"
        >
          {nextStage ? (
            <option value={nextStage.title}>
              {nextStage.title} (tahap selanjutnya)
            </option>
          ) : (
            <option value="">Tidak ada tahap berikutnya</option>
          )}
        </select>
      </div>

      <div className="mt-3">
        <p className="mb-1.5 text-sm font-semibold text-[#0f2431]">Upload Bukti Dokumen *</p>
        <label className="flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-[#cbd3df] bg-white px-4 py-6 text-center">
          <Icon name="upload" className="h-7 w-7 text-[#60717e]" />
          <p className="mt-2 text-sm text-[#60717e]">Upload bukti dokumen (PDF, DOC, DOCX)</p>
          <span className="mt-2 rounded-lg border border-[#d1d8e0] bg-[#f4f6f8] px-3 py-1.5 text-sm font-semibold text-[#1f2b3a]">
            Pilih File
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>

      <div className="mt-3">
        <label className="mb-1.5 block text-sm font-semibold text-[#0f2431]">Keterangan (Opsional)</label>
        <textarea
          rows={3}
          placeholder="Tambahkan keterangan untuk bukti dokumen..."
          className="w-full rounded-xl border border-[#d1d8e0] bg-white px-4 py-2.5 text-sm text-[#0f2431] outline-none"
        />
      </div>

      <div className="mt-3 rounded-xl border border-[#d1d8e0] bg-[#eef3fb] px-3 py-2 text-xs text-[#51697a]">
        Update progress akan mengirim notifikasi otomatis ke semua vendor terdaftar melalui Email dan WhatsApp.
      </div>

      <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8ea2c6] px-4 py-2.5 text-sm font-semibold text-white">
        <span aria-hidden>→</span>
        Update Ke Tahap Berikutnya
      </button>

      <div className="mt-4 border-t border-[#d9dde4] pt-3">
        <p className="text-sm font-semibold text-[#0f2431]">Riwayat Bukti Dokumen</p>
        <div className="mt-3 space-y-2">
          {proofHistory.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg bg-[#eff2f6] px-3 py-2">
              <p className="text-sm text-[#0f2431]">
                <span className="rounded-full border border-[#d1d8e0] bg-white px-2 py-0.5 text-xs">{item.stage}</span>
                <span className="ml-3">{item.fileName}</span>
              </p>
              <span className="text-xs text-[#60717e]">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-4 inline-flex items-center justify-center rounded-xl border border-[#d1d8e0] bg-[#f4f6f8] px-5 py-2.5 text-sm font-semibold text-[#1f2b3a]"
      >
        Kembali
      </button>
    </article>
  );
}

export default UpdateProgressCardInternal;
