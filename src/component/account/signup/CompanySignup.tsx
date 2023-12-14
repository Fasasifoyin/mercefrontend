import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import AccountButton from "../AccountButton";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { UserStatus } from "../../../app/slice/user";
import {
  accountInputsHeight,
  Categories,
  Countries,
} from "../../../utils/data";
import { companySignupSchema } from "../../formik/FormikValidation";
import { companySignup } from "../../../app/actions/company";

type Values = {
  companyName: string;
  companyEmail: string;
  phone: number | string;
  companyAddress: string;
  country: string;
  state: string;
  city: string;
  password: string;
  confirm: string;
  category: string;
};

const CompanySignup = () => {
  const status = useAppSelector(UserStatus);
  const dispatch = useAppDispatch();
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const initialValues = {
    companyName: "",
    companyEmail: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    password: "",
    companyAddress: "",
    confirm: "",
    category: "",
  };

  const onSubmit = (values: Values) => {
    dispatch(companySignup(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={companySignupSchema}
    >
      {() => {
        return (
          <Form>
            <Box mb={"30px"}>
              <FormikControl
                type="text"
                control="Input"
                placeholder="Enter company name"
                name="companyName"
                label="Company name"
                height={accountInputsHeight}
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                type="email"
                control="Input"
                placeholder="Enter company email address"
                name="companyEmail"
                label="Company E-mail Address"
                height={accountInputsHeight}
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                type="number"
                control="Input"
                placeholder="Enter your phone number"
                name="phone"
                label="Phone number"
                height={accountInputsHeight}
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                control="Select"
                name="category"
                label="Select category"
                height={accountInputsHeight}
                initial="Category"
                options={Categories}
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                control="Select"
                name="country"
                options={Countries}
                setArray={setStates}
                label="Select country"
                height={accountInputsHeight}
                initial="Country"
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                control="Select"
                name="state"
                options={states}
                setArray={setCities}
                label="Select state"
                height={accountInputsHeight}
                initial="State"
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                control="Select"
                name="city"
                options={cities}
                label="Select city"
                height={accountInputsHeight}
                initial="City"
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                type="text"
                control="Input"
                placeholder="Enter company address"
                name="companyAddress"
                label="Company address"
                height={accountInputsHeight}
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                control="Password"
                placeholder="Enter your password"
                name="password"
                label="Password"
                height={accountInputsHeight}
              />
            </Box>
            <Box mb={"30px"}>
              <FormikControl
                control="Password"
                placeholder="Confirm password"
                name="confirm"
                label="Confirm password"
                height={accountInputsHeight}
              />
            </Box>
            <Box width={"80%"} mx={"auto"} mb={"30px"}>
              <h5
                className="small-text"
                style={{ textAlign: "center", color: "rgb(0,0,0,0.5)" }}
              >
                This should be where legalese terms go but this is just a clone
                project
              </h5>
            </Box>
            <AccountButton label={"Sign up"} status={status} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default CompanySignup;
