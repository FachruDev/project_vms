import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TopNavbar from "../../components/vendor/dashboard/TopNavbar";
import TenderPageHeader from "../../components/vendor/tender/TenderPageHeader";
import TenderProgressCard from "../../components/vendor/tender/TenderProgressCard";
import TenderDetailCard from "../../components/vendor/tender/TenderDetailCard";
import QuickActionsCard from "../../components/vendor/tender/QuickActionsCard";
import TimelineCard from "../../components/vendor/tender/TimelineCard";
import {
  selectFocusTender,
  selectNotificationsCount,
  selectTenderStages,
} from "../../features/vendor/tender/tenderSelectors";

function TenderDetailPage() {
  const navigate = useNavigate();
  const notificationCount = useSelector(selectNotificationsCount);
  const focusTender = useSelector(selectFocusTender);
  const stages = useSelector(selectTenderStages);

  return (
    <div className="min-h-screen bg-[#f1f2f5] text-[#172033]">
      <TopNavbar notificationCount={notificationCount} />

      <main className="mx-auto w-full px-3 pb-6 pt-6 md:px-6">
        <TenderPageHeader
          title={focusTender.title}
          tenderId={focusTender.id}
          badgeLabel={focusTender.badge}
          onBack={() => navigate(-1)}
        />

        <div className="space-y-5">
          <TenderProgressCard stages={stages} alertText={focusTender.slaAlert} />

          <section className="grid gap-5 lg:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.85fr)]">
            <TenderDetailCard focusTender={focusTender} />

            <aside className="space-y-5">
              <QuickActionsCard mode="detail" />
              <TimelineCard timeline={focusTender.timeline} />
            </aside>
          </section>
        </div>
      </main>
    </div>
  );
}

export default TenderDetailPage;