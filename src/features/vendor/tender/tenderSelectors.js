import { createSelector } from "@reduxjs/toolkit";

export const selectTenderState = (state) => state.tender;

export const selectTenderRequestStatus = createSelector(
  selectTenderState,
  (tender) => tender.request.status
);

export const selectTenderRequestError = createSelector(
  selectTenderState,
  (tender) => tender.request.error
);

export const selectNotificationsCount = createSelector(
  selectTenderState,
  (tender) => tender.notifications.length
);

export const selectKpiCards = createSelector(
  selectTenderState,
  (tender) => tender.kpiCards
);

export const selectDashboardTabs = createSelector(
  selectTenderState,
  (tender) => tender.dashboardTabs
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
  selectTenderState,
  (tender) => tender.focusTender
);

export const selectTenderStages = createSelector(
  selectTenderState,
  (tender) => tender.tenderStages
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
  selectTenderState,
  (tender) => tender.offerStatus
);

export const selectActionItems = createSelector(
  selectTenderState,
  (tender) => tender.actionItems
);

export const selectRegistrationForm = createSelector(
  selectTenderState,
  (tender) => tender.registrationForm
);