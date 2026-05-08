import { configureStore } from "@reduxjs/toolkit";
import tenderReducer from "../features/vendor/tender/tenderSlice";
import internalDashboardReducer from "../features/internal/dashboard/internalDashboardSlice";
import entitiesReducer from "../features/shared/entities/entitiesSlice";

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    tender: tenderReducer,
    internalDashboard: internalDashboardReducer,
  },
});
