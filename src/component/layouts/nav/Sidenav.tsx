import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeinVariants, modalVariants } from "../../../utils/FramerVariants";
import { RiAccountCircleLine } from "react-icons/ri";
import { NavLink, Link as RouterLink, useLocation } from "react-router-dom";
import { navList, socials } from "../../../utils/data";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { USER } from "../../../app/api/types";

type SidenavProps = {
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
  showSideNav: boolean;
  user: USER | null;
};

const Sidenav = ({ setShowSideNav, showSideNav, user }: SidenavProps) => {
  const location = useLocation();
  const filteredLink = !user || user.isUser ? "Orders" : "Vendors";
  const newNavList = navList
    .slice(0)
    .filter((each) => each.page !== filteredLink);

  useEffect(() => {
    setShowSideNav(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AnimatePresence>
      {showSideNav && (
        <>
          <Box
            className="cursor"
            pos={"fixed"}
            top={0}
            left={0}
            zIndex={100}
            w={"100%"}
            height={"100vh"}
            onClick={() => setShowSideNav(false)}
          >
            <Box
              as={motion.div}
              {...fadeinVariants}
              pos={"fixed"}
              top={0}
              left={0}
              width={"100%"}
              h={"100%"}
              className="bg-modal"
            />
          </Box>
          <Box
            as={motion.div}
            {...modalVariants}
            pos={"fixed"}
            top={0}
            left={0}
            h={"100vh"}
            overflowY={"scroll"}
            width={"90%"}
            maxW={"500px"}
            zIndex={120}
            background={"white"}
          >
            <Flex
              minH={"100vh"}
              direction={"column"}
              justify={"space-between"}
              gap={"30px"}
            >
              <Flex direction={"column"}>
                <Box p={"20px 30px 0px 20px"} mb={"20px"}>
                  <Icon
                    as={AiOutlineClose}
                    boxSize={8}
                    onClick={() => setShowSideNav(false)}
                    className="cursor"
                  />
                </Box>
                <Flex p={"0px 20px 0px 30px"} direction={"column"} gap={"20px"}>
                  {newNavList.map((each) => (
                    <NavLink
                      key={each.id}
                      className={({ isActive }) =>
                        isActive
                          ? "text-gold bg-modalBg"
                          : "text-blue text-hover-gold bg-hover-modalBg"
                      }
                      to={`${each.unique ? `/${user?.slug}` : ""}${each.link}`}
                    >
                      <Box padding={"10px 15px"}>
                        <h5 className="fw-bold large-text">{each.page}</h5>
                      </Box>
                    </NavLink>
                  ))}
                </Flex>
              </Flex>
              <Box className="bg-modalBg" padding={"30px 30px 10px 30px"}>
                <NavLink
                  to={user ? `/account/${user.slug}` : "/signin"}
                  className={({ isActive }) =>
                    isActive ? "text-gold fw-bold" : "text-blue text-hover-gold"
                  }
                >
                  <Flex align={"center"} gap={"7px"}>
                    <Icon as={RiAccountCircleLine} boxSize={8} />
                    <h5>{user ? "Account" : "Sign in"}</h5>
                  </Flex>
                </NavLink>

                <Flex mt={"30px"} gap={"20px"}>
                  {socials.map((each) => (
                    <Link
                      display="flex"
                      as={RouterLink}
                      key={each.id}
                      to={each.to}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        as={each.icon}
                        boxSize={6}
                        className="text-blue text-hover-gold"
                      />
                    </Link>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidenav;
