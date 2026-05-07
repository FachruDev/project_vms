import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TopNavbar from "../../components/vendor/dashboard/TopNavbar";
import KpiCard from "../../components/vendor/dashboard/KpiCard";
import StatusTabs from "../../components/vendor/dashboard/StatusTabs";
import TenderOverviewCard from "../../components/vendor/dashboard/TenderOverviewCard";
import OfferStatusCard from "../../components/vendor/dashboard/OfferStatusCard";
import ActionItemsCard from "../../components/vendor/dashboard/ActionItemsCard";
import {
  selectActionItems,
  selectFocusTender,
  selectKpiCards,
  selectNotificationsCount,
  selectOfferStatus,
  selectProgressWidth,
  selectTabsWithActive,
  selectVisibleStages,
} from "../../features/vendor/tender/tenderSelectors";
import { setActiveTab } from "../../features/vendor/tender/tenderSlice";

function DashboardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notificationCount = useSelector(selectNotificationsCount);
  const kpiCards = useSelector(selectKpiCards);
  const tabs = useSelector(selectTabsWithActive);
  const focusTender = useSelector(selectFocusTender);
  const visibleStages = useSelector(selectVisibleStages);
  const progressWidth = useSelector(selectProgressWidth);
  const offers = useSelector(selectOfferStatus);
  const actionItems = useSelector(selectActionItems);

  const goToDetail = () => {
    navigate(`/tender/${focusTender.id}/detail`);
  };

  const goToRegister = () => {
    navigate(`/tender/${focusTender.id}/register`);
  };

  return (
    <div className="min-h-screen bg-[#f1f2f5] text-[#172033]">
      <TopNavbar notificationCount={notificationCount} />

      <main className="mx-auto w-full pb-6 pt-6 md:px-4 lg:px-4">
        <section>
          <h1 className="text-lg font-bold text-[#081c43] md:text-2xl">Portal Vendor</h1>
          <p className="text-base text-[#51697a] md:text-md">Ikuti tender dan pantau status penawaran Anda</p>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpiCards.map((card) => (
            <KpiCard key={card.id} card={card} />
          ))}
        </section>

        <section className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1.9fr)_minmax(360px,0.95fr)]">
          <div className="space-y-4">
            <StatusTabs tabs={tabs} onChangeTab={(tabId) => dispatch(setActiveTab(tabId))} />
            <TenderOverviewCard
              focusTender={focusTender}
              visibleStages={visibleStages}
              progressWidth={progressWidth}
              onView={goToDetail}
              onRegister={goToRegister}
            />
          </div>

          <aside className="space-y-5">
            <OfferStatusCard offers={offers} />
            <ActionItemsCard actionItems={actionItems} />
          </aside>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;