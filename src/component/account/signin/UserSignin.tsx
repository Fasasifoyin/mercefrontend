import { Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import AccountButton from "../AccountButton";
import { userSigninSchema } from "../../formik/FormikValidation";
import { accountInputsHeight } from "../../../utils/data";

import { UserStatus } from "../../../app/slice/user";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { signin } from "../../../app/actions/user";

type Values = {
  userName: string;
  password: string;
};

const UserSignin = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(UserStatus);

  const initialValues = {
    userName: "",
    password: "",
  };

  const onSubmit = (values: Values) => {
    dispatch(signin(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={userSigninSchema}
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
              control="Password"
              placeholder="Enter your password"
              name="password"
              label="Password"
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

export default UserSignin;
