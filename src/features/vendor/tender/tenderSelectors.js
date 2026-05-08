import { createSelector } from "@reduxjs/toolkit";
import {
  selectEntitiesRequestError,
  selectEntitiesRequestStatus,
  selectVendorDashboardEntities,
} from "../../shared/entities/entitiesSelectors";

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
