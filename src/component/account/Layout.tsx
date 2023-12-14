import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type LayoutProps = {
  as: string;
  setAs: React.Dispatch<React.SetStateAction<string>>;
  page: string;
  children?: React.ReactNode;
};

const Layout = ({ as, setAs, page, children }: LayoutProps) => {
  return (
    <Box className="cc-container page-alignment">
      <Flex mt={{ base: "30px", sm: "40px" }} justify={{ md: "center" }}>
        <Link display={"flex"} as={RouterLink} to={"/"}>
          <h2 className="fw-bold logo">FOODMERCE</h2>
        </Link>
      </Flex>
      <Flex
        mt={{ base: "50px", sm: "60px" }}
        mb={{ base: "60px", sm: "80px" }}
        direction={{ base: "column", sm: "row" }}
        justify={"space-between"}
        gap={{ base: "20px", sm: "0px" }}
        width={"100%"}
        maxW={"700px"}
        mx={"auto"}
      >
        <Box
          display={"grid"}
          placeContent={"center"}
          width={{ base: "100%", sm: "46%" }}
          className={`${
            as === "user"
              ? "bg-gold text-white"
              : "bg-blue text-white cursor active"
          }`}
          paddingY={"10px"}
          boxShadow={
            as === "user"
              ? " rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
              : ""
          }
          onClick={() => setAs("user")}
        >
          <p className="medium-text">
            Sign {page === "signin" ? "in" : "up"} as user
          </p>
        </Box>
        <Box
          display={"grid"}
          placeContent={"center"}
          width={{ base: "100%", sm: "46%" }}
          className={`${
            as === "seller"
              ? "bg-gold text-white"
              : "bg-blue text-white cursor active"
          }`}
          paddingY={"10px"}
          boxShadow={
            as === "seller"
              ? " rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
              : ""
          }
          onClick={() => setAs("seller")}
        >
          <h5 className="medium-text">
            Sign {page === "signin" ? "in" : "up"} as vendor
          </h5>
        </Box>
      </Flex>

      <Box
        mb={{ base: "30px", sm: "40px" }}
        width={"95%"}
        maxW={"550px"}
        border={"1px solid rgb(0,0,0,0.15)"}
        borderRadius={"5px"}
        padding={{ base: "40px", md: "60px 60px" }}
        mx={"auto"}
      >
        {children}
        <Flex mt={"40px"} justify={"flex-end"} w={"100%"}>
          {page === "signin" ? (
            <p>
              Don't have an account?{" "}
              <Link as={RouterLink} to={"/signup"}>
                <span className="text-gold">Sign up</span>
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link as={RouterLink} to={"/signin"}>
                <span className="text-gold">Sign in</span>
              </Link>
            </p>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
