import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TopNavbar from "../../components/vendor/dashboard/TopNavbar";
import KpiCard from "../../components/vendor/dashboard/KpiCard";
import StatusTabs from "../../components/vendor/dashboard/StatusTabs";
import TenderOverviewCard from "../../components/vendor/dashboard/TenderOverviewCard";
import OfferStatusCard from "../../components/vendor/dashboard/OfferStatusCard";
import ActionItemsCard from "../../components/vendor/dashboard/ActionItemsCard";
import Icon from "../../components/vendor/dashboard/Icon";
import {
  selectActionItems,
  selectFocusTender,
  selectKpiCards,
  selectNotificationsCount,
  selectOfferStatus,
  selectProgressWidth,
  selectTabsWithActive,
  selectTenderOverviewCardMode,
  selectVendorTenderCards,
  selectVisibleStages,
} from "../../features/vendor/tender/tenderSelectors";
import { setActiveTab, setOverviewCardMode } from "../../features/vendor/tender/tenderSlice";

function DashboardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notificationCount = useSelector(selectNotificationsCount);
  const kpiCards = useSelector(selectKpiCards);
  const tabs = useSelector(selectTabsWithActive);
  const focusTender = useSelector(selectFocusTender);
  const visibleStages = useSelector(selectVisibleStages);
  const progressWidth = useSelector(selectProgressWidth);
  const overviewCardMode = useSelector(selectTenderOverviewCardMode);
  const tenderCards = useSelector(selectVendorTenderCards);
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <StatusTabs tabs={tabs} onChangeTab={(tabId) => dispatch(setActiveTab(tabId))} />
              <div className="flex items-center gap-2 rounded-2xl border border-[#d9dde4] bg-white p-2 shadow-sm">
                <button
                  type="button"
                  aria-label="Compact view"
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-xl transition ${
                    overviewCardMode === "compact"
                      ? "bg-[#153c7a] text-white"
                      : "bg-[#f7f8fa] text-[#1f2a39] hover:bg-[#eef3ff]"
                  }`}
                  onClick={() => dispatch(setOverviewCardMode("compact"))}
                >
                  <Icon name="grid" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Full view"
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-xl transition ${
                    overviewCardMode === "full"
                      ? "bg-[#153c7a] text-white"
                      : "bg-[#f7f8fa] text-[#1f2a39] hover:bg-[#eef3ff]"
                  }`}
                  onClick={() => dispatch(setOverviewCardMode("full"))}
                >
                  <Icon name="layout" className="h-5 w-5" />
                </button>
              </div>
            </div>

            {overviewCardMode === "compact" ? (
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                {tenderCards.map((card) => (
                  <TenderOverviewCard
                    key={card.id}
                    focusTender={card}
                    visibleStages={visibleStages}
                    progressWidth={progressWidth}
                    onView={goToDetail}
                    onRegister={goToRegister}
                  />
                ))}
              </div>
            ) : (
              <TenderOverviewCard
                focusTender={focusTender}
                visibleStages={visibleStages}
                progressWidth={progressWidth}
                onView={goToDetail}
                onRegister={goToRegister}
              />
            )}
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