import { createSlice } from "@reduxjs/toolkit";
import { internalCreateTenderFormDefaults } from "../../shared/entities/entitiesSeed";

const initialState = {
  ui: {
    activeTabId: "ITAB-001",
    isCreateModalOpen: false,
  },
  createTenderForm: {
    ...internalCreateTenderFormDefaults,
  },
};

const internalDashboardSlice = createSlice({
  name: "internalDashboard",
  initialState,
  reducers: {
    setInternalActiveTab(state, action) {
      state.ui.activeTabId = action.payload;
    },
    openCreateTenderModal(state) {
      state.ui.isCreateModalOpen = true;
    },
    closeCreateTenderModal(state) {
      state.ui.isCreateModalOpen = false;
    },
    updateCreateTenderField(state, action) {
      const { field, value } = action.payload;
      state.createTenderForm[field] = value;
    },
    resetCreateTenderForm(state) {
      state.createTenderForm = { ...internalCreateTenderFormDefaults };
    },
  },
});

export const {
  setInternalActiveTab,
  openCreateTenderModal,
  closeCreateTenderModal,
  updateCreateTenderField,
  resetCreateTenderForm,
} = internalDashboardSlice.actions;

export default internalDashboardSlice.reducer;
