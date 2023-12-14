import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import Navlist from "./Navlist";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { UserDetails } from "../../../app/slice/user";
import Sidenav from "./Sidenav";
import SearchModal from "./SearchModal";

type ScrollData = {
  y: number | (Window & typeof globalThis);
  lastY: number | (Window & typeof globalThis);
};

const Navbar = () => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    y: 0,
    lastY: 0,
  });
  const [showNav, setShowNav] = useState(true);
  const [showSideNav, setShowSideNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const user = useAppSelector(UserDetails);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prev) => {
        return {
          y: window.scrollY,
          lastY: prev.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (Number(scrollY) > 160 && scrollData.y > scrollData.lastY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [scrollData]);

  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSearch]);

  return (
    <>
      <Box
        pos={"fixed"}
        top={0}
        left={0}
        zIndex={80}
        w={"100%"}
        h={{ base: "80px", lg: "160px" }}
        bg={"white"}
        transition={"all 0.4s ease"}
        transform={showNav ? "" : "translateY(-100%)"}
        opacity={"0.7"}
        boxShadow={
          Number(scrollData.y) > 0 ? "0 4px 0px rgba(0, 0, 0, 0.1)" : ""
        }
      >
        <Flex
          className="cc-container page-alignment"
          justify={"space-between"}
          align={"center"}
          h={"100%"}
        >
          <Box hideBelow={"lg"} width={"40%"}>
            <Navlist user={user} />
          </Box>
          <Flex
            width={{ base: "100%", lg: "55%" }}
            justify={"space-between"}
            align={"center"}
          >
            <Flex gap={"10px"} align={"center"}>
              <Link as={RouterLink} to={"/"} className="logo">
                <h3 className="fw-bold text-blue">FOODMERCE</h3>
              </Link>
              <Icon
                as={AiOutlineMenu}
                boxSize={6}
                hideFrom={"md"}
                className="cursor"
                onClick={() => setShowSideNav(true)}
              />
            </Flex>

            <Flex gap={"20px"} align={"center"}>
              <Icon
                as={AiOutlineMenu}
                boxSize={6}
                hideBelow={"md"}
                hideFrom={"lg"}
                className="cursor"
                onClick={() => setShowSideNav(true)}
              />
              <Icon
                as={CiSearch}
                boxSize={6}
                className="text-blue text-hover-gold cursor"
                onClick={() => setShowSearch(true)}
              />
              {(!user || user.isUser) && (
                <Icon
                  as={LiaShoppingBagSolid}
                  boxSize={6}
                  className="text-blue text-hover-gold cursor"
                />
              )}

              <Box hideBelow={"lg"}>
                <NavLink
                  style={{ display: "flex" }}
                  to={user ? `/account/${user.slug}` : "/signin"}
                  className={({ isActive }) =>
                    isActive ? "text-gold" : "text-blue text-hover-gold"
                  }
                >
                  <Icon as={RiAccountCircleLine} boxSize={6} />
                </NavLink>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box hideFrom={"lg"}>
        <Sidenav
          user={user}
          showSideNav={showSideNav}
          setShowSideNav={setShowSideNav}
        />
      </Box>
      <SearchModal showSearch={showSearch} setShowSearch={setShowSearch} />
    </>
  );
};

export default Navbar;
