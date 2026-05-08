import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TopNavbarInternal from "../../components/internal/dashboard/TopNavbarInternal";
import TenderPageHeader from "../../components/internal/tender/TenderPageHeader";
import TenderProgressCardInternal from "../../components/internal/tender/TenderProgressCardInternal";
import TenderDetailCardInternal from "../../components/internal/tender/TenderDetailCardInternal";
import QuickActionsCardInternal from "../../components/internal/tender/QuickActionsCardInternal";
import TimeLineCardInternal from "../../components/internal/tender/TimeLineCardInternal";
import RegisteredVendorsCardInternal from "../../components/internal/tender/RegisteredVendorsCardInternal";
import UpdateProgressCardInternal from "../../components/internal/tender/UpdateProgressCardInternal";
import {
  selectInternalCurrentStep,
  selectInternalFocusTender,
  selectInternalNotificationCount,
  selectInternalRegisteredVendors,
  selectInternalStages,
  selectInternalUpdateProgress,
} from "../../features/internal/dashboard/internalDashboardSelectors";

function InternalTenderDetailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showUpdateProgress, setShowUpdateProgress] = useState(searchParams.get("mode") === "edit");
  const notificationCount = useSelector(selectInternalNotificationCount);
  const focusTender = useSelector(selectInternalFocusTender);
  const stages = useSelector(selectInternalStages);
  const currentStep = useSelector(selectInternalCurrentStep);
  const registeredVendors = useSelector(selectInternalRegisteredVendors);
  const updateProgressData = useSelector(selectInternalUpdateProgress);
  const handleStageSelect = (stage) => {
    const normalizedTitle = String(stage?.title ?? "").toLowerCase();
    if (normalizedTitle.includes("evaluasi teknis")) {
      navigate(`/internal/tender/${focusTender.id}/evaluasi-teknis`);
    }
  };

  useEffect(() => {
    setShowUpdateProgress(searchParams.get("mode") === "edit");
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#f1f2f5] text-[#172033]">
      <TopNavbarInternal notificationCount={notificationCount} />

      <main className="mx-auto w-full px-3 pb-6 pt-6 md:px-6">
        <TenderPageHeader
          title={focusTender.title}
          tenderId={focusTender.id}
          badgeLabel={focusTender.badge}
          onBack={() => navigate(-1)}
        />

        <div className="space-y-5">
          <TenderProgressCardInternal
            stages={stages}
            currentStep={currentStep}
            alertText={focusTender.slaAlert}
          />

          <section className="grid gap-5 lg:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.85fr)]">
            <div className="space-y-5">
              <TenderDetailCardInternal focusTender={focusTender} />
              {showUpdateProgress ? (
                <UpdateProgressCardInternal
                  data={updateProgressData}
                  stages={stages}
                  currentStep={currentStep}
                  onBack={() => setShowUpdateProgress(false)}
                  onStageSelect={handleStageSelect}
                  onContinue={handleStageSelect}
                />
              ) : null}
              <RegisteredVendorsCardInternal vendors={registeredVendors} />
            </div>

            <aside className="space-y-5">
              <QuickActionsCardInternal
                onUpdateProgress={() => setShowUpdateProgress(true)}
                onInviteVendor={() => {}}
              />
              <TimeLineCardInternal timeline={focusTender.timeline} />
            </aside>
          </section>
        </div>
      </main>
    </div>
  );
}

export default InternalTenderDetailPage;
