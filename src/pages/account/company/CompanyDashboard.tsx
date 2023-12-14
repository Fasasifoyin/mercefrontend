import { Box, Flex, Image } from "@chakra-ui/react";

import { PROFILE } from "../../../app/api/types";
// import { useAppDispatch } from "../../../app/hooks";
// import { updateCompanyImage } from "../../../app/actions/company";

type CompanyDashboardProps = {
  profile: PROFILE | null;
};

const CompanyDashboard = ({ profile }: CompanyDashboardProps) => {
  // const dispatch = useAppDispatch();

  // const updateImage = () => {
  //   dispatch(
  //     updateCompanyImage({
  //       image: "",
  //       _id: profile?._id,
  //     })
  //   );
  // };

  return (
    <Box>
      <Flex gap={"20px"} align={"center"}>
        <Box
          w={{ base: "80px", sm: "100px", md: "120px" }}
          h={{ base: "80px", sm: "100px", md: "120px" }}
          borderRadius={"50%"}
        >
          <Image
            width={"100%"}
            height={"100%"}
            borderRadius={"50%"}
            src={profile?.companyImage}
            objectFit={"cover"}
            alt="Company Image"
          />
        </Box>
        <h3 className="text-gold fw-bold">{profile?.companyName}</h3>
      </Flex>
    </Box>
  );
};

export default CompanyDashboard;
