import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registrationFormDefaults, tenderSeedData } from "./tenderSeed";

const wait = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export const fetchTenderDashboard = createAsyncThunk("tender/fetchDashboard", async () => {
  await wait(150);
  return tenderSeedData;
});

const buildInitialState = () => ({
  ...tenderSeedData,
  ui: {
    activeTabId: "TAB-001",
  },
  registrationForm: {
    ...registrationFormDefaults,
  },
  request: {
    status: "idle",
    error: null,
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
      state.registrationForm = { ...registrationFormDefaults };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenderDashboard.pending, (state) => {
        state.request.status = "loading";
        state.request.error = null;
      })
      .addCase(fetchTenderDashboard.fulfilled, (state, action) => {
        state.request.status = "succeeded";
        state.request.error = null;
        Object.assign(state, action.payload);
      })
      .addCase(fetchTenderDashboard.rejected, (state, action) => {
        state.request.status = "failed";
        state.request.error = action.error.message ?? "Gagal memuat data";
      });
  },
});

export const {
  setActiveTab,
  updateRegistrationField,
  updateRegistrationFile,
  resetRegistrationForm,
} = tenderSlice.actions;

export default tenderSlice.reducer;