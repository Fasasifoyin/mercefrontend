import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_KEY,
  withCredentials: true,
});

type SIGNUPBODY = {
  userName: string;
  email: string;
  password: string;
};

type SIGNINBODY = {
  userName: string;
  password: string;
};

type COMPANYSIGNUPBODY = {
  companyName: string;
  companyEmail: string;
  password: string;
  companyAddress: string;
  country: string;
  state: string;
  city: string;
  category: string
};

type COMPANYSIGNINBODY = {
  companyName: string;
  password: string;
  companyCode: string;
};

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
  category: string;
};

type UPDATE_COMPANY_IMAGE = {
  _id: unknown;
  image: string;
};

export const LOGOUT = () => API.post("/api/general/logout");
export const LOGGEDIN = () => API.get("/api/general/loggedin");

export const SIGNUP = (body: SIGNUPBODY) => API.post("/api/users/signup", body);
export const SIGNIN = (body: SIGNINBODY) => API.post("/api/users/signin", body);

export const COMPANYSIGNUP = (body: COMPANYSIGNUPBODY) =>
  API.post("/api/company/signup", body);
export const COMPANYSIGNIN = (body: COMPANYSIGNINBODY) =>
  API.post("/api/company/signin", body);
export const AUTHCOMPANY = () => API.get("/api/company/auth");
export const UPDATECOMPANY = (body: COMPANYUPDATEBODY) =>
  API.patch("/api/company/profile/update", body);
export const UPDATECOMPANYIMAGE = (body: UPDATE_COMPANY_IMAGE) =>
  API.patch("/api/company/profile/update/image", body);

export const GETCOMPANIES = (page: number) =>
  API.get(`/api/uservendor/vendors?page=${page}`);
export const GETCOMPANY = (company: string) =>
  API.get(`/api/uservendor/vendor/${company}`);
