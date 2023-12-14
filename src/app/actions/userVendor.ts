import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { errorHandler } from "../error";

export const getCompanies = createAsyncThunk(
  "/uservendor/getCompanies",
  async (page: number, { rejectWithValue }) => {
    try {
      const { data } = await api.GETCOMPANIES(page);
      return data;
    } catch (error) {
      const errorMesaage = errorHandler({ error });
      return rejectWithValue(errorMesaage);
    }
  }
);

export const getCompany = createAsyncThunk(
  "/uservendor/getCompany",
  async (company: string, { rejectWithValue }) => {
    try {
      const { data } = await api.GETCOMPANY(company);
      return data;
    } catch (error) {
      const errorMesaage = errorHandler({ error });
      return rejectWithValue(errorMesaage);
    }
  }
);
