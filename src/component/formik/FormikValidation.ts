import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const userSignupSchema = yup.object().shape({
  userName: yup
    .string()
    .min(5, "Username must be at least 5 characters")
    .max(15, "Username cannot exceed 15 characters")
    .required("Enter Username"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Enter Email"),
  phone: yup.number().required("Enter phone number"),
  password: yup
    .string()
    .matches(/^\S*$/, "Password cannot contain space")
    .matches(passwordRules, {
      message:
        "Minimum of 5 characters, 1 uppercase, 1 lowercase, 1 numeric digit",
    })
    .required("Enter Password"),

  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Confirm Password"),
});

export const companySignupSchema = yup.object().shape({
  companyName: yup
    .string()
    .min(3, "Company name must be at least 3 characters")
    .required("Enter company's name"),
  companyEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Enter company's e-mail"),
  phone: yup.number().required("Enter company's phone number"),
  category: yup.string().required("Enter company's category"),
  country: yup.string().required("Select a country"),
  state: yup.string().required("Select a state"),
  city: yup.string().required("Select a city"),
  companyAddress: yup
    .string()
    .min(5, "Address must be at least 5 characters")
    .required("Enter company's address"),
  password: yup
    .string()
    .matches(/^\S*$/, "Password cannot contain space")
    .matches(passwordRules, {
      message:
        "Minimum of 5 characters, 1 uppercase, 1 lowercase, 1 numeric digit",
    })
    .required("Enter Password"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Confirm Password"),
});

export const userSigninSchema = yup.object().shape({
  userName: yup
    .string()
    .min(5, "Username must be at least 5 characters")
    .max(15, "Username cannot exceed 15 characters")
    .required("Enter Username"),
  password: yup
    .string()
    .matches(/^\S*$/, "Password cannot contain space")
    .matches(passwordRules, {
      message:
        "Minimum of 5 characters, 1 uppercase, 1 lowercase, 1 numeric digit",
    })
    .required("Ente Password"),
});

export const companySigninSchema = yup.object().shape({
  companyName: yup
    .string()
    .min(3, "Company name must be at least 3 characters")
    .max(30, "Company name cannot exceed 30 characters")
    .required("Enter Company name"),
  password: yup
    .string()
    .matches(/^\S*$/, "Password cannot contain space")
    .matches(passwordRules, {
      message:
        "Minimum of 5 characters, 1 uppercase, 1 lowercase, 1 numeric digit",
    })
    .required("Enter Password"),
  companyCode: yup.string().required("Enter Company code"),
});

export const companyDetailsSchema = yup.object().shape({
  companyName: yup
    .string()
    .min(3, "Company name must be at least 3 characters")
    .max(30, "Company name cannot exceed 30 characters")
    .required("Enter Company name"),
  companyEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Enter company's e-mail"),
  phone: yup.string().required("Enter company's phone number(s)"),
  country: yup.string().required("Select a country"),
  state: yup.string().required("Select a state"),
  city: yup.string().required("Select a city"),
  companyAddress: yup
    .string()
    .min(5, "Address must be at least 5 characters")
    .required("Enter company's address"),
  description: yup
    .string()
    .min(15, "Company description must be at least 15 characters")
    .max(500, "Company description cannot exceed 500 characters")
    .required("Give a short description of your company"),
  delivery: yup.string().required("Do you do delivery?"),
  order_lead_time: yup.number().when("delivery", (deliveryValue) => {
    const value = deliveryValue.join("");
    if (value === "false") {
      return yup.number();
    } else {
      return yup
        .number()
        .required("How long will it take to complete delivery");
    }
  }),
  category: yup.string().required("Select a category"),
});
