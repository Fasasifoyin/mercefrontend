import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../component/layouts/nav/Navbar";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { isLoggedIn } from "../app/actions/user";
import { UserDetails } from "../app/slice/user";
import Footer from "../component/layouts/footer/Footer";
import { noFooter, noNav } from "../utils/data";

const Layout = () => {
  const user = useAppSelector(UserDetails);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      dispatch(isLoggedIn());
    }
  }, [location, dispatch, user]);

  return (
    <Flex
      direction={"column"}
      minH={"100vh"}
      justify={"space-between"}
      gap={{ base: "70px", md: "100px" }}
    >
      <Box>
        {!noNav.includes(location.pathname) && <Navbar />}
        <Box
          pt={{
            base: !noNav.includes(location.pathname) ? "80px" : 0,
            lg: !noNav.includes(location.pathname) ? "160px" : 0,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      {!noFooter.includes(location.pathname) && <Footer />}
    </Flex>
  );
};

export default Layout;
