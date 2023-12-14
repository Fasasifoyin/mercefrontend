import { Box, Flex, Image } from "@chakra-ui/react";

import { useAppSelector } from "../../app/hooks";
import { UserDetails } from "../../app/slice/user";

const CompanyHome = () => {
  const company = useAppSelector(UserDetails);

  return (
    <Box className="cc-container page-alignment" mt={"20px"}>
      <Flex justify={"flex-end"}>
        <Flex gap={"20px"} align={"center"}>
          <h5 className="xlarge-text fw-bold">{company?.companyName}</h5>
          <Box
            w={{ base: "60px", sm: "80px", md: "100px" }}
            h={{ base: "60px", sm: "80px", md: "100px" }}
            borderRadius={"50%"}
          >
            <Image
              width={"100%"}
              height={"100%"}
              borderRadius={"50%"}
              src={company?.companyImage}
              objectFit={"cover"}
              alt="Company Image"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CompanyHome;
