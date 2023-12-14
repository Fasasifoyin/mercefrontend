import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { signin, signup, logout, isLoggedIn } from "../actions/user";
import {
  companySignin,
  companySignup,
  updateCompanyDetails,
} from "../actions/company";
import { USER } from "../api/types";

type UserState = {
  user: USER | null;
  status: "idle" | "pending" | "success" | "failed";
  error: unknown;
};

const initialState = {
  user:
    localStorage.getItem("FoodmerceUser") !== null
      ? JSON.parse(localStorage.getItem("FoodmerceUser")!)
      : null,
  status: "idle",
  error: null,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "pending";
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        localStorage.setItem("FoodmerceUser", JSON.stringify(payload));
        state.error = null;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        (state.status = "failed"), (state.error = payload);
      })
      .addCase(companySignup.pending, (state) => {
        state.status = "pending";
      })
      .addCase(companySignup.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        localStorage.setItem("FoodmerceUser", JSON.stringify(payload));
        state.error = null;
      })
      .addCase(companySignup.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      .addCase(signin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        localStorage.setItem("FoodmerceUser", JSON.stringify(payload));
        state.error = null;
      })
      .addCase(signin.rejected, (state, { payload }) => {
        (state.status = "failed"), (state.error = payload);
      })
      .addCase(companySignin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(companySignin.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        localStorage.setItem("FoodmerceUser", JSON.stringify(payload));
        state.error = null;
      })
      .addCase(companySignin.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      .addCase(logout.pending, (state) => {
        state.status = "pending";
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "success";
        state.user = null;
        state.error = null;
        localStorage.removeItem("FoodmerceUser");
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      .addCase(isLoggedIn.rejected, (state, { payload }) => {
        if (payload === "Not Authenticated") {
          state.user = null;
          localStorage.removeItem("FoodmerceUser");
        }
      })
      .addCase(updateCompanyDetails.fulfilled, (state, { payload }) => {
        state.user = {
          ...state.user,
          companyName: payload.companyName,
          companyEmail: payload.companyEmail,
          companyAddress: payload.comanyAddress,
          country: payload.country,
          state: payload.state,
          city: payload.city,
          phone: payload.phone,
          isCompany: payload.isCompany,
          verified: payload.verified,
          slug: payload.slug,
          _id: payload._id,
          companyImage: payload.companyImage,
          category: payload.category
        };
        localStorage.setItem("FoodmerceUser", JSON.stringify(state.user));
      });
  },
});

export const UserDetails = (state: RootState) => state.user.user;
export const UserStatus = (state: RootState) => state.user.status;
export const UserError = (state: RootState) => state.user.error;

export default userSlice.reducer;
