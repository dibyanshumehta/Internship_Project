import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  postLoginData,
  postRegistrationData,
} from "../data-access/api/auth-api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    message: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postRegistrationData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postRegistrationData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.status = action.payload.data.status;
        state.message = "Registration successful";
      })
      .addCase(postRegistrationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to register";
      })
      .addCase(postLoginData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postLoginData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.status = action.payload.data.status;
        state.message = "Registration successful";
      })
      .addCase(postLoginData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to register";
      });
  },
});

export default authSlice.reducer;
