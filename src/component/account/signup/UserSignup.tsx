import { Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import AccountButton from "../AccountButton";
import { userSignupSchema } from "../../formik/FormikValidation";
import { accountInputsHeight } from "../../../utils/data";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { UserStatus } from "../../../app/slice/user";
import { signup } from "../../../app/actions/user";

type Values = {
  userName: string;
  email: string;
  phone: number | string;
  password: string;
  confirm: string;
};

const UserSignup = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(UserStatus);

  const initialValues = {
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  };

  const onSubmit = (values: Values) => {
    dispatch(signup(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={userSignupSchema}
    >
      {() => (
        <Form>
          <Box mb={"30px"}>
            <FormikControl
              type="text"
              control="Input"
              placeholder="Enter your username"
              name="userName"
              label="Username"
              height={accountInputsHeight}
            />
          </Box>
          <Box mb={"30px"}>
            <FormikControl
              type="email"
              control="Input"
              placeholder="Enter your email address"
              name="email"
              label="E-mail Address"
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
      )}
    </Formik>
  );
};

export default UserSignup;
