import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { ProfileCompanyObject } from "../api/types";
import { getCompanies, getCompany } from "../actions/userVendor";
import { RootState } from "../store";

type VendorType = {
  error: unknown;
  status: "idle" | "pending" | "success" | "failed";
  vendor: null | ProfileCompanyObject;
  totalPages: number;
};

const vendorsAdapter = createEntityAdapter<ProfileCompanyObject>({
  selectId: (e) => e._id,
});

const State = {
  status: "idle",
  error: null,
  vendor: null,
  totalPages: 0,
} as VendorType;

const initialState = vendorsAdapter.getInitialState(State);

const vendorsSlice = createSlice({
  name: "uservendor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCompanies.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.error = null;
        vendorsAdapter.upsertMany(state, payload.data);
        state.totalPages = payload.totalPages;
      })
      .addCase(getCompanies.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      .addCase(getCompany.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCompany.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.error = null;
        state.vendor = payload;
      })
      .addCase(getCompany.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      });
  },
});

export const { selectById: vendorsId, selectIds: allVendorsId } =
  vendorsAdapter.getSelectors((state: RootState) => state.vendors);

export const VendorError = (state: RootState) => state.vendors.error;
export const VendorStatus = (state: RootState) => state.vendors.status;
export const Vendor = (state: RootState) => state.vendors.vendor;
export const VendorsPages = (state: RootState) => state.vendors.totalPages;

export default vendorsSlice.reducer;
