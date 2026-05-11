import { createSelector } from "@reduxjs/toolkit";
import {
  selectEntitiesState,
  selectInternalDashboardEntities,
} from "../../shared/entities/entitiesSelectors";

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

export const selectInternalTechnicalEvaluation = createSelector(
  selectInternalDashboardEntities,
  (dashboard) => dashboard.technicalEvaluation
);

export const selectInternalCreateModalOpen = createSelector(
  selectInternalDashboardState,
  (state) => state.ui.isCreateModalOpen
);

export const selectInternalCreateTenderForm = createSelector(
  selectInternalDashboardState,
  (state) => state.createTenderForm
);

export const selectInternalTenderOverviewCardMode = createSelector(
  selectInternalDashboardState,
  (state) => state.ui.overviewCardMode
);

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

const buildInternalTenderCard = (tender, categories, progressLabels) => ({
  id: tender.tenderCode || tender.id,
  title: tender.title,
  badge: progressLabels[tender.progressId] || tender.badge || "Aktif",
  budgetDisplay: tender.budgetDisplay || `Rp ${tender.budget?.toLocaleString("id-ID") ?? "0"}`,
  dueDate: tender.dueDate || formatDeadline(tender.deadline),
  vendorCount: tender.vendorCount ?? 8,
  category: tender.category || categories[tender.categoryId] || "Lainnya",
});

export const selectInternalTenderCards = createSelector(
  [selectEntitiesState, selectInternalDashboardEntities],
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
      buildInternalTenderCard(
        secondaryTender || entities.tenders[0] || focusTender,
        categories,
        progressLabels
      ),
    ];
  }
);
