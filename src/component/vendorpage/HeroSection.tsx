import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import PageLoader from "../PageLoader";

import { Vendor, VendorError, VendorStatus } from "../../app/slice/vendors";
import { useAppSelector } from "../../app/hooks";

const HeroSection = () => {
  const vendor = useAppSelector(Vendor);
  const status = useAppSelector(VendorStatus);
  const error = useAppSelector(VendorError);

  return (
    <PageLoader status={status} error={error}>
      <Flex
        align={"center"}
        justify={"space-between"}
        flexDir={{ base: "column-reverse", md: "row" }}
        gap={{ base: "10px", md: 0 }}
        mb={"70px"}
      >
        <Flex
          width={{ base: "100%", md: "45%" }}
          flexDir={"column"}
          align={{ base: "center", md: "start" }}
        >
          <h1 className="text-gold fw-bold">{vendor?.companyName}</h1>
          <Text as={"p"} textAlign={{ base: "center", md: "start" }}>
            {vendor?.description && vendor?.description?.length > 200
              ? `${vendor?.description?.slice(0, 200)}...`
              : vendor?.description}
          </Text>
          <Flex
            align={{ base: "center", sm: "start" }}
            mt={"20px"}
            gap={{ base: "20px", sm: 0, md: "20px" }}
            width={"100%"}
            flexDir={{ base: "column", sm: "row", md: "column", lg: "row" }}
            justifyContent={{ sm: "space-between", md: "start" }}
          >
            <Button
              className="bg-blue bg-hover-gold text-white active"
              borderRadius={"25px"}
              width={{ base: "80%", sm: "47%", md: "70%", lg: "42%" }}
              py={"28px"}
              boxShadow={
                "rgba(0, 0, 0, 0.1) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 6px 12px;"
              }
            >
              Place an order now
            </Button>
            <Button
              className="bg-gold bg-hover-blue text-white active"
              borderRadius={"25px"}
              width={{ base: "80%", sm: "47%", md: "70%", lg: "42%" }}
              py={"28px"}
            >
              About Us
            </Button>
          </Flex>
        </Flex>
        <Box
          width={{ base: "100%", sm: "80%", md: "45%" }}
          height={{ base: "280px", md: "350px" }}
          pos={"relative"}
        >
          <Box width={"100%"} height={"100%"}>
            <Image
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
              src={vendor?.companyImage}
              borderRadius={"10px"}
            />
          </Box>
          <Flex
            hideBelow={"md"}
            pos={"absolute"}
            bottom={"-30px"}
            width={"117%"}
            h={"100px"}
            left={"-11%"}
            justify={"space-between"}
          >
            <Box
              width={{ md: "70%", lg: "47%" }}
              h={"100%"}
              borderRadius={"10px"}
              bg={"white"}
              boxShadow={
                "rgba(50, 50, 30, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
              }
            ></Box>
            <Box
              width={"47%"}
              h={"100%"}
              borderRadius={"10px"}
              hideBelow={"lg"}
              bg={"white"}
              boxShadow={
                "rgba(50, 50, 30, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
              }
            ></Box>
          </Flex>
        </Box>
      </Flex>
    </PageLoader>
  );
};

export default HeroSection;
