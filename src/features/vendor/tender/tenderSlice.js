import { createSlice } from "@reduxjs/toolkit";
import { vendorRegistrationFormDefaults } from "../../shared/entities/entitiesSeed";

const buildInitialState = () => ({
  ui: {
    activeTabId: "TAB-001",
  },
  registrationForm: {
    ...vendorRegistrationFormDefaults,
  },
});

const tenderSlice = createSlice({
  name: "tender",
  initialState: buildInitialState(),
  reducers: {
    setActiveTab(state, action) {
      state.ui.activeTabId = action.payload;
    },
    updateRegistrationField(state, action) {
      const { field, value } = action.payload;
      state.registrationForm[field] = value;
    },
    updateRegistrationFile(state, action) {
      const { field, fileName } = action.payload;
      state.registrationForm[field] = fileName;
    },
    resetRegistrationForm(state) {
      state.registrationForm = { ...vendorRegistrationFormDefaults };
    },
  },
});

export const {
  setActiveTab,
  updateRegistrationField,
  updateRegistrationFile,
  resetRegistrationForm,
} = tenderSlice.actions;

export default tenderSlice.reducer;
