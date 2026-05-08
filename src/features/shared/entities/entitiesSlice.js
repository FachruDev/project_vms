import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { entitiesSeed } from "./entitiesSeed";

const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const fetchEntities = createAsyncThunk("entities/fetchAll", async () => {
  await wait(120);
  return entitiesSeed;
});

const buildInitialState = () => ({
  ...entitiesSeed,
  request: {
    status: "idle",
    error: null,
  },
});

const entitiesSlice = createSlice({
  name: "entities",
  initialState: buildInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntities.pending, (state) => {
        state.request.status = "loading";
        state.request.error = null;
      })
      .addCase(fetchEntities.fulfilled, (state, action) => {
        state.request.status = "succeeded";
        state.request.error = null;
        Object.assign(state, action.payload);
      })
      .addCase(fetchEntities.rejected, (state, action) => {
        state.request.status = "failed";
        state.request.error = action.error.message ?? "Gagal memuat entities";
      });
  },
});

export default entitiesSlice.reducer;
