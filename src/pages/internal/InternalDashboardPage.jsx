import InternalTopbar from "../../components/internal/InternalTopbar";
import InternalStatCard from "../../components/internal/InternalStatCard";
import InternalTable from "../../components/internal/InternalTable";

const internalStats = [
  { title: "Tender Aktif Internal", value: "12", helper: "Per 07 Mei 2026" },
  { title: "Perlu Approval", value: "4", helper: "Menunggu manajer" },
  { title: "Overdue SLA", value: "2", helper: "Perlu eskalasi" },
  { title: "Vendor Baru", value: "9", helper: "Minggu ini" },
];

const internalRows = [
  { id: "INT-001", tender: "Pengadaan Server Backup", pic: "Rina Putri", status: "Review", updatedAt: "2026-05-07" },
  { id: "INT-002", tender: "Upgrade ERP Module", pic: "Aldi Kurnia", status: "Approval", updatedAt: "2026-05-07" },
  { id: "INT-003", tender: "Lisensi Endpoint Security", pic: "Dimas Yoga", status: "Monitoring", updatedAt: "2026-05-06" },
  { id: "INT-004", tender: "Revamp Portal Vendor", pic: "Nadia Ayu", status: "On Progress", updatedAt: "2026-05-05" },
];

function InternalDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f3f6fc] text-[#1f2b3a]">
      <InternalTopbar />

      <main className="mx-auto w-full max-w-[1400px] space-y-5 px-4 py-5 md:px-6 md:py-6">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {internalStats.map((item) => (
            <InternalStatCard key={item.title} {...item} />
          ))}
        </section>

        <InternalTable rows={internalRows} />
      </main>
    </div>
  );
}

export default InternalDashboardPage;