import { useDispatch, useSelector } from "react-redux";
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
        <section className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-lg font-bold text-[#081c43] md:text-2xl">Internal Dashboard</h1>
            <p className="text-base text-[#51697a] md:text-md">Pantau tender internal, evaluasi, dan audit aktivitas.</p>
          </div>

          <button
            type="button"
            onClick={() => dispatch(openCreateTenderModal())}
            className="inline-flex items-center gap-2 rounded-xl bg-[#153c7a] px-4 py-2.5 text-sm font-semibold text-white"
          >
            <IconInternal name="plus" className="h-4 w-4" />
            Create Tender
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
              onView={() => {}}
              onEdit={() => dispatch(openCreateTenderModal())}
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
