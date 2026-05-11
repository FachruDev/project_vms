import { createSelector } from "@reduxjs/toolkit";
import {
  selectEntitiesRequestError,
  selectEntitiesRequestStatus,
  selectEntitiesState,
  selectVendorDashboardEntities,
} from "../../shared/entities/entitiesSelectors";

const formatDeadline = (deadline) => {
  if (!deadline) return "";
  const [year, month, day] = deadline.split("-");
  const monthNames = {
    "01": "Januari",
    "02": "Februari",
    "03": "Maret",
    "04": "April",
    "05": "Mei",
    "06": "Juni",
    "07": "Juli",
    "08": "Agustus",
    "09": "September",
    "10": "Oktober",
    "11": "November",
    "12": "Desember",
  };
  return `${day} ${monthNames[month] ?? month} ${year}`;
};

const buildTenderCard = (tender, categories, progressLabels) => ({
  id: tender.tenderCode || tender.id,
  title: tender.title,
  badge: progressLabels[tender.progressId] || tender.badge || "Aktif",
  dueDate: tender.dueDate || formatDeadline(tender.deadline),
  vendorCount: tender.vendorCount ?? 8,
  category: tender.category || categories[tender.categoryId] || "Lainnya",
});

export const selectTenderState = (state) => state.tender;

export const selectTenderRequestStatus = createSelector(
  selectEntitiesRequestStatus,
  (status) => status
);

export const selectTenderRequestError = createSelector(
  selectEntitiesRequestError,
  (error) => error
);

export const selectNotificationsCount = createSelector(
  selectVendorDashboardEntities,
  (dashboard) => dashboard.notifications.length
);

export const selectKpiCards = createSelector(
  selectVendorDashboardEntities,
  (dashboard) => dashboard.kpiCards
);

export const selectDashboardTabs = createSelector(
  selectVendorDashboardEntities,
  (dashboard) => dashboard.dashboardTabs
);

export const selectActiveTabId = createSelector(
  selectTenderState,
  (tender) => tender.ui.activeTabId
);

export const selectTabsWithActive = createSelector(
  [selectDashboardTabs, selectActiveTabId],
  (tabs, activeTabId) => tabs.map((tab) => ({ ...tab, active: tab.id === activeTabId }))
);

export const selectFocusTender = createSelector(
  selectVendorDashboardEntities,
  (dashboard) => dashboard.focusTender
);

export const selectTenderStages = createSelector(
  selectVendorDashboardEntities,
  (dashboard) => dashboard.tenderStages
);

export const selectVisibleStages = createSelector(
  selectTenderStages,
  (stages) => stages.slice(0, 14)
);

export const selectProgressWidth = createSelector(
  selectVisibleStages,
  (visibleStages) => {
    const currentIndex = visibleStages.findIndex((item) => item.state === "current");
    if (currentIndex < 0) return 0;
    return ((currentIndex + 1) / visibleStages.length) * 100;
  }
);

export const selectOfferStatus = createSelector(
  selectVendorDashboardEntities,
  (dashboard) => dashboard.offerStatus
);

export const selectActionItems = createSelector(
  selectVendorDashboardEntities,
  (dashboard) => dashboard.actionItems
);

export const selectRegistrationForm = createSelector(
  selectTenderState,
  (tender) => tender.registrationForm
);

export const selectTenderOverviewCardMode = createSelector(
  selectTenderState,
  (tender) => tender.ui.overviewCardMode
);

export const selectVendorTenderCards = createSelector(
  [selectEntitiesState, selectVendorDashboardEntities],
  (entities, dashboard) => {
    const categories = Object.fromEntries(
      entities.tenderCategories.map((category) => [category.id, category.title])
    );
    const progressLabels = Object.fromEntries(
      entities.progressTender.map((item) => [item.id, item.title])
    );

    const focusTender = dashboard.focusTender;
    const secondaryTender = entities.tenders.find(
      (tender) => tender.tenderCode !== focusTender.id
    );

    return [
      focusTender,
      buildTenderCard(secondaryTender || entities.tenders[0] || focusTender, categories, progressLabels),
    ];
  }
);
