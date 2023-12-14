import { Box } from "@chakra-ui/react";
import { PROFILE } from "../../../app/api/types";

type UserDashboardProps = {
  profile: PROFILE | null;
};

const UserDashboard = ({ profile }: UserDashboardProps) => {
  console.log(profile);
  return (
    <Box>
      <Box></Box>
    </Box>
  );
};

export default UserDashboard;
