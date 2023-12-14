import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { errorHandler } from "../error";
import toast from "react-hot-toast";

type COMPANYSIGNUPBODY = {
  companyName: string;
  companyEmail: string;
  country: string;
  state: string;
  city: string;
  companyAddress: string;
  password: string;
  category: string;
};

export const companySignup = createAsyncThunk(
  "/user/companySignup",
  async (body: COMPANYSIGNUPBODY, { rejectWithValue }) => {
    try {
      const { data } = await api.COMPANYSIGNUP(body);
      toast.success(
        "Signup successful. A company's code has been sent to your email which will be needed for login"
      );
      return data;
    } catch (error) {
      console.log(error);
      const errorMesaage = errorHandler({ error, toast: true });
      return rejectWithValue(errorMesaage);
    }
  }
);

type COMPANYSIGNINBODY = {
  companyName: string;
  password: string;
  companyCode: string;
};

export const companySignin = createAsyncThunk(
  "/user/companySignin",
  async (body: COMPANYSIGNINBODY, { rejectWithValue }) => {
    try {
      const { data } = await api.COMPANYSIGNIN(body);
      toast.success("Signin successful");
      return data;
    } catch (error) {
      const errorMesaage = errorHandler({ error, toast: true });
      return rejectWithValue(errorMesaage);
    }
  }
);

export const getAuthCompany = createAsyncThunk(
  "/profile/getAuthCompany",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_data, { rejectWithValue }) => {
    try {
      const { data } = await api.AUTHCOMPANY();
      return data;
    } catch (error) {
      console.log(error);
      const errorMesaage = errorHandler({ error });
      return rejectWithValue(errorMesaage);
    }
  }
);

type COMPANYUPDATEBODY = {
  _id: unknown;
  companyName: string;
  companyEmail: string;
  phone: number[];
  companyAddress: string;
  country: string;
  state: string;
  city: string;
  description: string;
  website?: string;
  delivery: boolean;
  delivery_fee?: number | string;
  free_delivery_amount?: number | string;
  delivery_zip_codes?: string | number[] | string[];
  order_lead_time?: string | number;
  category: string
};

export const updateCompanyDetails = createAsyncThunk(
  "/profile/updateCompanyDetails",
  async (body: COMPANYUPDATEBODY, { rejectWithValue }) => {
    try {
      const { data } = await api.UPDATECOMPANY(body);
      toast.success("Details updated successfully");
      return data;
    } catch (error) {
      const errorMesaage = errorHandler({ error, toast: true });
      return rejectWithValue(errorMesaage);
    }
  }
);

type UPDATE_COMPANY_IMAGE = {
  _id: unknown;
  image: string;
};

export const updateCompanyImage = createAsyncThunk(
  "/profile/updateCompanyImage",
  async (body: UPDATE_COMPANY_IMAGE, { rejectWithValue }) => {
    try {
      const { data } = await api.UPDATECOMPANYIMAGE(body);
      console.log(data);
    } catch (error) {
      const errorMesaage = errorHandler({ error, toast: true });
      return rejectWithValue(errorMesaage);
    }
  }
);
