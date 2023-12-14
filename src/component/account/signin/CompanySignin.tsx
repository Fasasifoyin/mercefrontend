import { Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import AccountButton from "../AccountButton";
import { companySigninSchema } from "../../formik/FormikValidation";
import { accountInputsHeight } from "../../../utils/data";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { UserStatus } from "../../../app/slice/user";
import { companySignin } from "../../../app/actions/company";

type Values = {
  companyName: string;
  password: string;
  companyCode: string;
};

const CompanySignin = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(UserStatus);

  const initialValues = {
    companyName: "",
    password: "",
    companyCode: "",
  };

  const onSubmit = (values: Values) => {
    dispatch(companySignin(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={companySigninSchema}
    >
      {() => (
        <Form>
          <Box mb={"30px"}>
            <FormikControl
              type="text"
              control="Input"
              placeholder="Enter company's name"
              name="companyName"
              label="Company name"
              height={accountInputsHeight}
            />
          </Box>
          <Box mb={"30px"}>
            <FormikControl
              control="Password"
              placeholder="Enter company's password"
              name="password"
              label="Password"
              height={accountInputsHeight}
            />
          </Box>
          <Box mb={"30px"}>
            <FormikControl
              type="text"
              control="Input"
              placeholder="Enter company's code"
              name="companyCode"
              label="Company code"
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
          <AccountButton label={"Sign in"} status={status} />
        </Form>
      )}
    </Formik>
  );
};

export default CompanySignin;
