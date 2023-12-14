import { createSlice } from "@reduxjs/toolkit";
import { PROFILE } from "../api/types";
import { getAuthCompany, updateCompanyDetails } from "../actions/company";
import { RootState } from "../store";

type ProfileState = {
  profile: PROFILE | null;
  status: "idle" | "pending" | "success" | "failed";
  error: unknown;
  updating: "idle" | "pending" | "success" | "failed";
};

const initialState = {
  profile: null,
  status: "idle",
  error: null,
  updating: "idle",
} as ProfileState;

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthCompany.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAuthCompany.fulfilled, (state, { payload }) => {
        (state.status = "success"), (state.profile = payload);
        state.error = null;
      })
      .addCase(getAuthCompany.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      .addCase(updateCompanyDetails.pending, (state) => {
        state.updating = "pending";
      })
      .addCase(updateCompanyDetails.fulfilled, (state, { payload }) => {
        state.updating = "success";
        state.profile = payload;
        state.error = null;
      })
      .addCase(updateCompanyDetails.rejected, (state, { payload }) => {
        state.updating = "failed";
        state.error = payload;
      });
  },
});

export const ProfileDetails = (state: RootState) => state.profile.profile;
export const ProfileStatus = (state: RootState) => state.profile.status;
export const ProfileError = (state: RootState) => state.profile.error;
export const ProfileUpdate = (state: RootState) => state.profile.updating;

export default profileSlice.reducer;
