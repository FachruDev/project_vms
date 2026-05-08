import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TopNavbarInternal from "../../components/internal/dashboard/TopNavbarInternal";
import KpiCardInternal from "../../components/internal/dashboard/KpiCardInternal";
import StatusTabsInternal from "../../components/internal/dashboard/StatusTabsInternal";
import TenderOverviewInternal from "../../components/internal/dashboard/TenderOverviewInternal";
import ActionItemCardInternal from "../../components/internal/dashboard/ActionItemCardInternal";
import AuditTrailCardInternal from "../../components/internal/dashboard/AuditTrailCardInternal";
import CreateTenderModalInternal from "../../components/internal/dashboard/CreateTenderModalInternal";
import {
  closeCreateTenderModal,
  openCreateTenderModal,
  resetCreateTenderForm,
  setInternalActiveTab,
  updateCreateTenderField,
} from "../../features/internal/dashboard/internalDashboardSlice";
import {
  selectInternalActionItems,
  selectInternalAuditTrail,
  selectInternalCreateModalOpen,
  selectInternalCreateTenderForm,
  selectInternalCurrentStep,
  selectInternalFocusTender,
  selectInternalKpiCards,
  selectInternalNotificationCount,
  selectInternalStages,
  selectInternalTabsWithActive,
} from "../../features/internal/dashboard/internalDashboardSelectors";
import IconInternal from "../../components/internal/dashboard/IconInternal";

function InternalDashboardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notificationCount = useSelector(selectInternalNotificationCount);
  const kpiCards = useSelector(selectInternalKpiCards);
  const tabs = useSelector(selectInternalTabsWithActive);
  const focusTender = useSelector(selectInternalFocusTender);
  const stages = useSelector(selectInternalStages);
  const currentStep = useSelector(selectInternalCurrentStep);
  const actionItems = useSelector(selectInternalActionItems);
  const auditTrail = useSelector(selectInternalAuditTrail);
  const modalOpen = useSelector(selectInternalCreateModalOpen);
  const form = useSelector(selectInternalCreateTenderForm);

  return (
    <div className="min-h-screen bg-[#f1f2f5] text-[#1f2b3a]">
      <TopNavbarInternal notificationCount={notificationCount} />

      <main className="mx-auto w-full px-2 pb-6 pt-6 md:px-4 lg:px-4">
        <section className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e3e6eb] pb-6">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#081c43] md:text-2xl">Internal Dashboard</h1>
            <p className="mt-1 text-sm text-[#51697a]">Pantau tender internal, evaluasi, dan audit aktivitas sistem.</p>
          </div>

          <button
            type="button"
            onClick={() => dispatch(openCreateTenderModal())}
            // Update Class Tombol Utama
            className="
              group/btn relative overflow-hidden inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#153c7a] px-5 py-2.5 
              text-sm font-semibold text-white shadow-md active:scale-[0.98]
              
              /* Animasi Fill Slide */
              before:absolute before:inset-0 before:origin-right before:scale-x-0 
              before:bg-[#0c2d5a] /* Biru yang lebih gelap untuk fill */
              before:transition-transform before:duration-500 before:ease-out 
              hover:before:origin-left hover:before:scale-x-100
            "
          >
            {/* Menggunakan relative z-10 agar teks & icon tetap di atas background yang geser */}
            <span className="relative z-10 flex items-center gap-2">
              <IconInternal 
                name="plus" 
                className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-90" 
              />
              Create New Tender
            </span>
          </button>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpiCards.map((card) => (
            <KpiCardInternal key={card.id} card={card} />
          ))}
        </section>

        <section className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1.9fr)_minmax(360px,0.95fr)]">
          <div className="space-y-4">
            <StatusTabsInternal tabs={tabs} onChangeTab={(tabId) => dispatch(setInternalActiveTab(tabId))} />
            <TenderOverviewInternal
              focusTender={focusTender}
              stages={stages}
              currentStep={currentStep}
              onView={() => navigate(`/internal/tender/${focusTender.id}/detail`)}
              onEdit={() => navigate(`/internal/tender/${focusTender.id}/detail?mode=edit`)}
            />
          </div>

          <aside className="space-y-5">
            <ActionItemCardInternal actionItems={actionItems} />
            <AuditTrailCardInternal items={auditTrail} />
          </aside>
        </section>
      </main>

      <CreateTenderModalInternal
        open={modalOpen}
        form={form}
        onClose={() => dispatch(closeCreateTenderModal())}
        onFieldChange={(field, value) => dispatch(updateCreateTenderField({ field, value }))}
        onFileChange={(field, fileName) => dispatch(updateCreateTenderField({ field, value: fileName }))}
        onReset={() => dispatch(resetCreateTenderForm())}
      />
    </div>
  );
}

export default InternalDashboardPage;
