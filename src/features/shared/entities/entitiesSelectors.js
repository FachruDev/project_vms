import { createSelector } from "@reduxjs/toolkit";

export const selectEntitiesState = (state) => state.entities;

export const selectEntitiesRequestStatus = createSelector(
  selectEntitiesState,
  (entities) => entities.request.status
);

export const selectEntitiesRequestError = createSelector(
  selectEntitiesState,
  (entities) => entities.request.error
);

export const selectVendorDashboardEntities = createSelector(
  selectEntitiesState,
  (entities) => entities.vendorDashboard
);

export const selectInternalDashboardEntities = createSelector(
  selectEntitiesState,
  (entities) => entities.internalDashboard
);
