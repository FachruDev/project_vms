import { useState } from "react";
import Icon from "../dashboard/IconInternal";

const statusClassMap = {
  approved: "border-[#97dbc8]/50 bg-[#eafaf5] text-[#0f8c67] ring-1 ring-[#0f8c67]/10",
  pending: "border-[#f4cf7a]/50 bg-[#fff9eb] text-[#de9c05] ring-1 ring-[#de9c05]/10",
  rejected: "border-[#f4b4b4]/50 bg-[#fff5f5] text-[#e14545] ring-1 ring-[#e14545]/10",
};

const statusLabelMap = {
  approved: "Approved",
  pending: "Waiting Review",
  rejected: "Rejected",
};

function VendorDetailModal({ vendor, onClose }) {
  if (!vendor) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0f172a]/60 p-4 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-[#d8e0ef] bg-white shadow-2xl animate-in zoom-in-95 duration-300">
        
        <div className="flex items-start justify-between border-b border-[#f0f2f5] p-8">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold tracking-tight text-[#081c43]">Detail Registrasi Vendor</h3>
              <span className={`rounded-lg border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${statusClassMap[vendor.status] ?? statusClassMap.pending}`}>
                {statusLabelMap[vendor.status] ?? "Waiting Review"}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-[#5f6f86]">Informasi autentik data pendaftaran vendor sistem internal.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="group cursor-pointer grid h-10 w-10 place-items-center rounded-xl border border-[#d8e0ef] text-[#5f6f86] transition-all hover:bg-[#f04444] hover:text-white hover:border-[#f04444] active:scale-90"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-8 pt-6">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            
            <div className="space-y-6">
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-[#94a3b8]">Profil Perusahaan</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Nama Perusahaan", value: vendor.companyName },
                    { label: "Contact Person", value: vendor.contactPerson },
                    { label: "Email Bisnis", value: vendor.email },
                    { label: "Telepon", value: vendor.phone }
                  ].map((info, i) => (
                    <div key={i} className="rounded-2xl border border-[#f0f2f5] bg-[#f8fafc] p-4 transition-colors hover:border-[#153c7a]/20">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">{info.label}</p>
                      <p className="mt-1 text-[13px] font-bold text-[#1e293b]">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f1f5f9]/50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Terdaftar Pada</p>
                <p className="mt-1 text-sm font-bold text-[#1e293b]">{vendor.registrationDate}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-[#94a3b8]">Berkas Lampiran</h4>
                <div className="mt-4 space-y-3">
                  {vendor.documents?.map((doc) => (
                    <div key={doc.id} className="group/doc flex items-center justify-between gap-3 rounded-2xl border border-[#f0f2f5] bg-white p-4 transition-all hover:border-[#153c7a]/30 hover:shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#eef2ff] text-[#153c7a] transition-colors group-hover/doc:bg-[#153c7a] group-hover/doc:text-white">
                          <Icon name="file" className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-[#1e293b]">{doc.name}</p>
                          <p className="text-[11px] font-medium text-[#64748b]">{doc.subtitle}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="grid cursor-pointer h-9 w-9 place-items-center rounded-xl border border-[#e2e8f0] bg-white text-[#153c7a] transition-all hover:bg-[#153c7a] hover:text-white active:scale-90"
                        title="Unduh Berkas"
                      >
                        <Icon name="download" className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f0f2f5] bg-[#f8fafc] p-6 text-right">
          <button 
            onClick={onClose}
            className="rounded-xl cursor-pointer px-6 py-2.5 text-sm font-bold text-[#64748b] transition-colors hover:text-[#1e293b]"
          >
            Tutup Detail
          </button>
        </div>
      </div>
    </div>
  );
}

function RegisteredVendorsCardInternal({ vendors }) {
  const [selectedVendor, setSelectedVendor] = useState(null);

  return (
    <>
      <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_20px_rgba(10,18,35,0.04)]">
        <div className="flex items-center justify-between gap-2 border-b border-[#e3e6eb] pb-4">
          <h3 className="inline-flex items-center gap-2 text-md font-bold text-[#08253a]">
            <Icon name="users" className="h-5 w-5 text-[#153c7a]" />
            Vendor Terdaftar
          </h3>
          <span className="rounded-lg bg-[#eaf1ff] px-2 py-0.5 text-[11px] font-bold text-[#153c7a] border border-[#153c7a]/10">
            {vendors.length} VENDORS
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="group flex items-center justify-between gap-3 rounded-xl border border-transparent bg-[#eceef2] p-4 transition-all duration-300 hover:border-[#153c7a]/20 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e0e5ee] text-[#153c7a] transition-all duration-500 group-hover:bg-[#153c7a] group-hover:text-white group-hover:rotate-3">
                  <Icon name="office" className="h-6 w-6" />
                </span>
                
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold leading-tight text-[#1f2b3a] transition-colors group-hover:text-[#153c7a]">
                      {vendor.companyName}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedVendor(vendor)}
                      className="grid cursor-pointer h-7 w-7 place-items-center rounded-lg border border-[#d1d5db] bg-white text-[#5f6f86] opacity-0 transition-all duration-200 hover:border-[#153c7a] hover:bg-[#153c7a] hover:text-white group-hover:opacity-100 active:scale-90"
                    >
                      <Icon name="eye" className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#60717e] flex items-center gap-2">
                    {vendor.email}
                    <span className="h-1 w-1 rounded-full bg-[#cbd5e1]" />
                    <span className="text-[#153c7a]/70">{vendor.documentCount} Dokumen</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`rounded-lg border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${statusClassMap[vendor.status] ?? statusClassMap.pending}`}>
                  {statusLabelMap[vendor.status] ?? "Pending"}
                </span>

                {vendor.status === "pending" && (
                  <div className="ml-1 flex items-center gap-2 border-l border-[#d9dde4] pl-3">
                    <button className="grid cursor-pointer h-8 w-8 place-items-center rounded-lg border border-[#d9dde4] bg-white text-[#16b983] transition-all hover:bg-[#16b983] hover:text-white hover:border-[#16b983] active:scale-90 shadow-sm">
                      <Icon name="check" className="h-4 w-4" />
                    </button>
                    <button className="grid cursor-pointer h-8 w-8 place-items-center rounded-lg border border-[#d9dde4] bg-white text-[#ef4444] transition-all hover:bg-[#ef4444] hover:text-white hover:border-[#ef4444] active:scale-90 shadow-sm">
                      <Icon name="close" className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </article>
      <VendorDetailModal vendor={selectedVendor} onClose={() => setSelectedVendor(null)} />
    </>
  );
}

export default RegisteredVendorsCardInternal;