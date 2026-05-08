import { createSelector } from "@reduxjs/toolkit";
import { selectInternalDashboardEntities } from "../../shared/entities/entitiesSelectors";

export const selectInternalDashboardState = (state) => state.internalDashboard;

export const selectInternalNotificationCount = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.notifications.length
);

export const selectInternalKpiCards = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.kpiCards
);

export const selectInternalTabsWithActive = createSelector(
  [selectInternalDashboardEntities, selectInternalDashboardState],
  (dashboard, uiState) =>
    dashboard.tabs.map((tab) => ({ ...tab, active: tab.id === uiState.ui.activeTabId }))
);

export const selectInternalFocusTender = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.focusTender
);

export const selectInternalStages = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.tenderStages
);

export const selectInternalCurrentStep = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.currentStep
);

export const selectInternalActionItems = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.actionItems
);

export const selectInternalAuditTrail = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.auditTrail
);

export const selectInternalRegisteredVendors = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.registeredVendors ?? []
);

export const selectInternalUpdateProgress = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.updateProgress
);

export const selectInternalCreateModalOpen = createSelector(
  selectInternalDashboardState,
  (state) => state.ui.isCreateModalOpen
);

export const selectInternalCreateTenderForm = createSelector(
  selectInternalDashboardState,
  (state) => state.createTenderForm
);
