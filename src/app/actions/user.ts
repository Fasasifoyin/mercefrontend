/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { errorHandler } from "../error";
import toast from "react-hot-toast";

type SIGNUPBODY = {
  userName: string;
  email: string;
  password: string;
};

export const signup = createAsyncThunk(
  "/user/signup",
  async (body: SIGNUPBODY, { rejectWithValue }) => {
    try {
      const { data } = await api.SIGNUP(body);
      toast.success("Signup successful");
      return data;
    } catch (error: unknown) {
      const errorMesaage = errorHandler({ error, toast: true });
      return rejectWithValue(errorMesaage);
    }
  }
);

type SIGNINBODY = {
  userName: string;
  password: string;
};

export const signin = createAsyncThunk(
  "/user/signin",
  async (body: SIGNINBODY, { rejectWithValue }) => {
    try {
      const { data } = await api.SIGNIN(body);
      toast.success("Signin successful");
      return data;
    } catch (error) {
      console.log(error);
      const errorMesaage = errorHandler({ error, toast: true });
      return rejectWithValue(errorMesaage);
    }
  }
);

export const logout = createAsyncThunk(
  "/user/logout",
  async (_body, { rejectWithValue }) => {
    try {
      const { data } = await api.LOGOUT();
      toast.success(data.message);
      return data;
    } catch (error) {
      const errorMesaage = errorHandler({ error, toast: true });
      return rejectWithValue(errorMesaage);
    }
  }
);

export const isLoggedIn = createAsyncThunk(
  "/user/isLoggedIn",
  async (_body, { rejectWithValue }) => {
    try {
      const { data } = await api.LOGGEDIN();
      return data;
    } catch (error) {
      const errorMesaage = errorHandler({ error });
      if (errorMesaage === "Not Authenticated") {
        toast.error("You have been logged out");
      }
      return rejectWithValue(errorMesaage);
    }
  }
);
