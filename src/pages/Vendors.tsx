import { useEffect } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import VendorCard from "../component/vendors/VendorCard";
import Loader from "../utils/loader/Oval";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { UserDetails } from "../app/slice/user";
import { getCompanies } from "../app/actions/userVendor";
import {
  VendorError,
  VendorStatus,
  VendorsPages,
  allVendorsId,
} from "../app/slice/vendors";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Vendors = () => {
  const user = useAppSelector(UserDetails);
  const vendors = useAppSelector(allVendorsId);
  const totalPages = useAppSelector(VendorsPages);
  const status = useAppSelector(VendorStatus);
  console.log(status)
  const { page, lastElement } = useInfiniteScroll({ status, totalPages });
  const error = useAppSelector(VendorError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isCompany) {
      navigate("/");
    }
  }, [user?.isCompany, navigate]);

  useEffect(() => {
    dispatch(getCompanies(page));
  }, [dispatch, page]);

  return (
    <Box className="cc-container page-alignment">
      <h1
        style={{ textAlign: "center", marginBottom: "40px" }}
        className="tangerine fw-bold text-gold"
      >
        {" "}
        Our Vendors
      </h1>
      {status === "failed" && (
        <p>{typeof error === "string" ? error : "An unknown error occured"}</p>
      )}
      {vendors.length > 0 && (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          rowGap={"50px"}
          columnGap={"50px"}
        >
          {vendors.map((each, index) => (
            <Box
              key={each}
              ref={index === vendors.length - 1 ? lastElement : null}
            >
              <VendorCard id={each} index={index} />
            </Box>
          ))}
        </SimpleGrid>
      )}
      {status === "pending" && (
        <Flex justify={"center"} mt={vendors.length > 0 ? "40px" : 0}>
          <Loader />
        </Flex>
      )}
    </Box>
  );
};

export default Vendors;
