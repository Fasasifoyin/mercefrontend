export type general = {
  _id: string;
  slug: string;
};

export type UserObject = general & {
  userName: string;
  email: string;
  isUser: boolean;
  phone: number;
  companyName?: never;
  companyEmail?: never;
  companyAddress?: never;
  country?: never;
  state?: never;
  city?: never;
  companyImage?: never;
  verified?: never;
  isCompany?: never;
  category?: never;
};

export type CompanyObject = general & {
  companyName: string;
  companyEmail: string;
  phone: number[];
  companyAddress: string;
  country: string;
  state: string;
  city: string;
  companyImage: string;
  verified: boolean;
  isCompany: boolean;
  category: string;
  userName?: never;
  email?: never;
  isUser?: never;
};

export type USER = UserObject | CompanyObject;

export type general2 = {
  createdAt: string;
  updatedAt: string;
  _v: number;
};

export type ProfileCompanyObject = CompanyObject &
  general2 & {
    description?: string;
    website?: string;
    delivery?: boolean;
    delivery_fee?: number;
    free_delivery_amount?: number;
    delivery_zip_codes?: number[];
    order_lead_time?: number;
  };

export type ProfileUserObject = UserObject &
  general2 & {
    description?: never;
    website?: never;
    delivery?: never;
    delivery_fee?: never;
    free_delivery_amount?: never;
    delivery_zip_codes?: never;
    order_lead_time?: never;
  };

export type PROFILE = ProfileUserObject | ProfileCompanyObject;
