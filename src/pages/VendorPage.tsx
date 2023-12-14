import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "../component/vendorpage/HeroSection";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { UserDetails } from "../app/slice/user";
import { getCompany } from "../app/actions/userVendor";

const VendorPage = () => {
  const { slug } = useParams();
  const user = useAppSelector(UserDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isCompany) {
      navigate("/");
    }
  }, [user?.isCompany, navigate]);

  useEffect(() => {
    if (slug) {
      dispatch(getCompany(slug));
    }
  }, [dispatch, slug]);

  return (
    <Box className="cc-container page-alignment" mt={"30px"}>
      <HeroSection />
      <Box mt={{ base: "80px", md: "120px", xl: "150px" }}>
        <h2
          className="tangerine text-gold line-height"
          style={{ textAlign: "center" }}
        >
          Customers Favorites
        </h2>
        <h3 className="fw-bold" style={{ textAlign: "center" }}>
          Popular Categories
        </h3>
      </Box>
    </Box>
  );
};

export default VendorPage;
