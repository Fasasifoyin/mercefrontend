import { useEffect, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import PageLoader from "../../../component/PageLoader";
import { Form, Formik } from "formik";
import FormikControl from "../../../component/formik/FormikControl";
import {
  Categories,
  Countries,
  accountInputsHeight,
  getCities,
  getStates,
} from "../../../utils/data";
import InfoBox from "../../../component/profile/InfoBox";
import { companyDetailsSchema } from "../../../component/formik/FormikValidation";
import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  ProfileDetails,
  ProfileError,
  ProfileStatus,
  ProfileUpdate,
} from "../../../app/slice/profile";
import { updateCompanyDetails } from "../../../app/actions/company";

type Values = {
  companyName: string;
  companyEmail: string;
  phone: string | string[] | number[];
  companyAddress: string;
  country: string;
  state: string;
  city: string;
  description: string;
  website: string;
  delivery: string | boolean;
  delivery_fee?: string | number;
  free_delivery_amount?: string | number;
  delivery_zip_codes?: string | string[] | number[];
  order_lead_time: string | number;
  category: string
};

const CompanyDetails = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(ProfileDetails);
  const status = useAppSelector(ProfileStatus);
  const error = useAppSelector(ProfileError);
  const updating = useAppSelector(ProfileUpdate);
  const [edit, setEdit] = useState(false);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const deliveryOptions = [
    {
      id: 1,
      key: "Yes",
      value: "true",
    },
    {
      id: 2,
      key: "No",
      value: "false",
    },
  ];

  useEffect(() => {
    if (status === "success") {
      const result = getStates(profile?.country || "");
      setStates(result);

      const result2 = getCities(profile?.state || "");
      setCities(result2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (updating === "success") {
      setEdit(false);
    }
  }, [updating]);

  const initialValues = {
    companyName: profile?.companyName || "",
    companyEmail: profile?.companyEmail || "",
    phone: String(profile?.phone) || "",
    country: profile?.country || "",
    state: profile?.state || "",
    city: profile?.city || "",
    companyAddress: profile?.companyAddress || "",
    description: profile?.description || "",
    website: profile?.website || "",
    delivery: profile?.delivery ? "true" : "false",
    delivery_fee: profile?.delivery_fee || "",
    free_delivery_amount: profile?.free_delivery_amount || "",
    delivery_zip_codes: String(profile?.delivery_zip_codes) || "",
    order_lead_time: profile?.order_lead_time || "",
    category: profile?.category || "",
  };

  const onSubmit = async (values: Values) => {
    let {
      delivery,
      delivery_fee,
      free_delivery_amount,
      delivery_zip_codes,
      order_lead_time,
      phone,
    } = values;

    //phone
    if (typeof phone === "string") {
      phone = phone.split(",");
    }
    phone =
      typeof phone === "object" ? phone.map((each) => Number(each)) : phone;
    const checkEveryPhone =
      typeof phone === "object" && phone.find((each) => Number.isNaN(each));
    if (Number.isNaN(checkEveryPhone)) {
      const result = await Promise.resolve(
        toast.error("Please enter valid phone numbers")
      );
      return result;
    }
    //Phone End

    delivery = delivery === "true" ? true : false;
    if (delivery) {
      // delivery_fee = delivery_fee ? delivery_fee : 0;
      if (order_lead_time === 0) {
        const result = await Promise.resolve(
          toast.error("Order lead time cannot be 0 minutes")
        );
        return result;
      }

      if (!delivery_zip_codes) {
        delivery_zip_codes = [];
      } else {
        if (typeof delivery_zip_codes === "string") {
          delivery_zip_codes = delivery_zip_codes.split(",");
          console.log(delivery_zip_codes);
        }
      }
      if (delivery_zip_codes.length) {
        delivery_zip_codes =
          typeof delivery_zip_codes === "object"
            ? delivery_zip_codes.map((each) => Number(each))
            : delivery_zip_codes;
        const checkZipCodes =
          typeof delivery_zip_codes === "object" &&
          delivery_zip_codes.find((each) => Number.isNaN(each));
        if (Number.isNaN(checkZipCodes)) {
          const result = await Promise.resolve(
            toast.error("Please enter valid zip code")
          );
          return result;
        }
      }
    } else {
      delivery_fee = "";
      free_delivery_amount = "";
      delivery_zip_codes = "";
      order_lead_time = "";
    }

    const formData = {
      ...values,
      _id: profile?._id,
      delivery,
      delivery_fee,
      delivery_zip_codes,
      free_delivery_amount,
      order_lead_time,
      phone,
    };

    console.log(formData);
    dispatch(updateCompanyDetails(formData));
  };

  return (
    <Box className="cc-container page-alignment">
      <PageLoader status={status} error={error}>
        <Box mb={"30px"} width={"max-content"} onClick={() => setEdit(!edit)}>
          <p className="text-gold text-hover-blue cursor">
            EDIT COMPANY DETAILS
          </p>
        </Box>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={companyDetailsSchema}
          enableReinitialize={true}
        >
          {() => (
            <Form>
              <Flex
                justify={"space-between"}
                flexWrap={"wrap"}
                rowGap={{ base: "20px", md: "40px" }}
              >
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <FormikControl
                      type="text"
                      control="Input"
                      name="companyName"
                      label="Company name"
                      height={accountInputsHeight}
                      asterisk
                    />
                  ) : (
                    <InfoBox
                      title="Company name"
                      body={profile?.companyName || ""}
                      asterisk
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <FormikControl
                      type="email"
                      control="Input"
                      name="companyEmail"
                      label="Company email"
                      height={accountInputsHeight}
                      asterisk
                    />
                  ) : (
                    <InfoBox
                      title="Company email"
                      body={profile?.companyEmail || ""}
                      asterisk
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <FormikControl
                      control="Select"
                      name="country"
                      options={Countries}
                      setArray={setStates}
                      label="Country"
                      height={accountInputsHeight}
                      initial="Country"
                      asterisk
                    />
                  ) : (
                    <InfoBox
                      title="Country"
                      body={profile?.country || ""}
                      asterisk
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <FormikControl
                      control="Select"
                      name="state"
                      options={states}
                      setArray={setCities}
                      label="State"
                      height={accountInputsHeight}
                      initial="State"
                      asterisk
                    />
                  ) : (
                    <InfoBox
                      title="State"
                      body={profile?.state || ""}
                      asterisk
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <FormikControl
                      control="Select"
                      name="city"
                      options={cities}
                      label="City"
                      height={accountInputsHeight}
                      initial="City"
                      asterisk
                    />
                  ) : (
                    <InfoBox title="City" body={profile?.city || ""} asterisk />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <FormikControl
                      type="text"
                      control="Input"
                      name="companyAddress"
                      label="Company address"
                      height={accountInputsHeight}
                      asterisk
                    />
                  ) : (
                    <InfoBox
                      title="Company address"
                      body={profile?.companyAddress || ""}
                      asterisk
                    />
                  )}
                </Box>
                <Box
                  width={{ base: "100%", sm: "100%", md: "65%", xl: "48.6%" }}
                >
                  {edit ? (
                    <FormikControl
                      control="Textarea"
                      name="description"
                      label="Company description"
                      height={accountInputsHeight}
                      asterisk
                    />
                  ) : (
                    <InfoBox
                      title="Company description"
                      body={profile?.description || ""}
                      asterisk
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <Box>
                      <FormikControl
                        type="text"
                        control="Input"
                        name="phone"
                        label="Phone number"
                        height={accountInputsHeight}
                        asterisk
                      />
                      <h6 className="small-text" style={{ color: "green" }}>
                        If you use more than one phone number, seperate them
                        with a comma
                      </h6>
                    </Box>
                  ) : (
                    <InfoBox
                      title="Phone number"
                      body={profile?.phone || ""}
                      asterisk
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <FormikControl
                      type="text"
                      control="Input"
                      name="website"
                      label="Company website"
                      height={accountInputsHeight}
                    />
                  ) : (
                    <InfoBox
                      title="Company website"
                      link
                      url={profile?.website || "https://www.google.com"}
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <FormikControl
                      control="Radio"
                      name="delivery"
                      options={deliveryOptions}
                      label="Delivery"
                      asterisk
                    />
                  ) : (
                    <InfoBox
                      title="Delivery"
                      body={profile?.delivery ? "Yes" : "No"}
                      asterisk
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <Box>
                      <FormikControl
                        type="number"
                        control="Input"
                        name="delivery_fee"
                        label="Delivery fee"
                        height={accountInputsHeight}
                      />
                      <h6 className="small-text" style={{ color: "green" }}>
                        How much do you charge for delivery?. Leave blank if
                        delivery is free or you don't do delivery
                      </h6>
                    </Box>
                  ) : (
                    <InfoBox
                      title="Delivery Fee"
                      body={
                        profile?.delivery_fee === 0
                          ? "Free delivery"
                          : profile?.delivery_fee
                          ? profile.delivery_fee
                          : ""
                      }
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <Box>
                      <FormikControl
                        type="number"
                        control="Input"
                        name="free_delivery_amount"
                        label="Free delivery amount"
                        height={accountInputsHeight}
                      />
                      <h6 className="small-text" style={{ color: "green" }}>
                        Is delivery free for orders above a certain amount? If
                        yes, orders above this amount will receive free delivery
                      </h6>
                    </Box>
                  ) : (
                    <InfoBox
                      title="Free delivery amount"
                      body={profile?.free_delivery_amount || ""}
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <Box>
                      <FormikControl
                        type="text"
                        control="Input"
                        name="delivery_zip_codes"
                        label="Delivery zip codes"
                        height={accountInputsHeight}
                      />
                      <h6 className="small-text" style={{ color: "green" }}>
                        If you restrict delivery to certain zip codes, enter
                        them here, seperated by commas
                      </h6>
                    </Box>
                  ) : (
                    <InfoBox
                      title="Delivery zip codes"
                      body={profile?.delivery_zip_codes || ""}
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <Box>
                      <FormikControl
                        type="number"
                        control="Input"
                        name="order_lead_time"
                        label="Order lead time"
                        height={accountInputsHeight}
                        asterisk
                      />
                      <h6 className="small-text" style={{ color: "green" }}>
                        How long should we tell the customer that it will take
                        to prepare their order? (in minutes.)
                      </h6>
                    </Box>
                  ) : (
                    <InfoBox
                      title="Order lead time"
                      body={
                        profile?.order_lead_time
                          ? `${profile?.order_lead_time} minutes`
                          : ""
                      }
                      asterisk
                    />
                  )}
                </Box>
                <Box width={{ base: "100%", sm: "46%", md: "32%", xl: "23%" }}>
                  {edit ? (
                    <Box>
                      <FormikControl
                        control="Select"
                        name="category"
                        label="Select category"
                        height={accountInputsHeight}
                        initial="Category"
                        options={Categories}
                        asterisk
                      />
                    </Box>
                  ) : (
                    <InfoBox
                      title="Category"
                      body={profile?.category || ""}
                      asterisk
                    />
                  )}
                </Box>
              </Flex>
              {edit && (
                <Flex mt={"30px"} justify={"flex-end"}>
                  <Button
                    isLoading={updating === "pending"}
                    className="bg-blue bg-hover-gold text-white active"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Flex>
              )}
            </Form>
          )}
        </Formik>

        <Box mt={"80px"}>
          <p>Note:</p>
          <ol>
            <li className="small-text">
              All asterisk must be filled before you can get verified.
            </li>
            <li className="small-text">
              Only verified vendors products will be displayed on the website.
            </li>
            <li className="small-text">
              Your Verification Status:{" "}
              {profile?.verified ? (
                <span className="fw-bold" style={{ color: "green" }}>
                  Verified
                </span>
              ) : (
                <span className="fw-bold" style={{ color: "red" }}>
                  Not Verified
                </span>
              )}
            </li>
          </ol>
        </Box>
      </PageLoader>
    </Box>
  );
};

export default CompanyDetails;
