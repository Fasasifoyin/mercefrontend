import { useEffect, useState } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import ConfirmAction from "../../component/layouts/ConfirmAction";
import { Outlet, useLocation, Link } from "react-router-dom";
import { companyAccountLinks, userAccountLinks } from "../../utils/data";
import { MdOutlinePerson2 } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../app/actions/user";
import { UserDetails, UserStatus } from "../../app/slice/user";
import { getAuthCompany } from "../../app/actions/company";

const Account = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserDetails);
  const status = useAppSelector(UserStatus);
  const [logOut, setLogout] = useState(false);
  const { pathname } = useLocation();
  const links = user?.isUser ? userAccountLinks : companyAccountLinks;
  const initialURL = `/account/${user?.slug}`;

  const logUserOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (user?.isCompany) {
      dispatch(getAuthCompany());
    }
  }, [dispatch, user?.isCompany]);

  return (
    <>
      <Box pt={"20px"}>
        <Box className="page-alignment cc-container" mb={"40px"}>
          <Flex
            justify={"center"}
            align={"center"}
            gap={{ base: "25px", md: "60px" }}
            flexWrap={"wrap"}
            mb={"30px"}
          >
            {links.map((each) => (
              <Link
                className={
                  pathname === `${initialURL}${each.link}`
                    ? "fw-bold text-gold logo"
                    : "text-hover-gold"
                }
                key={each.id}
                to={`${initialURL}${each.link}`}
              >
                <p>{each.page}</p>
              </Link>
            ))}
          </Flex>
          <Flex justify={"end"}>
            <Flex
              onClick={() => setLogout(true)}
              align={"center"}
              gap={"7px"}
              className="cursor text-hover-gold text-blue"
            >
              <Icon as={MdOutlinePerson2} boxSize={"30px"} />
              <h4 className="large-text">Log out</h4>
            </Flex>
          </Flex>
        </Box>
        <Outlet />
      </Box>
      <ConfirmAction
        show={logOut}
        setShow={setLogout}
        actionText={"Are you sure you want to logout?"}
        action={logUserOut}
        status={status}
        buttonText={"Log out"}
      />
    </>
  );
};

export default Account;
