import { Box } from "@chakra-ui/react";
import PageLoader from "../../component/PageLoader";
import CompanyDashboard from "./company/CompanyDashboard";
import UserDashboard from "./user/UserDashboard";

import {  useAppSelector } from "../../app/hooks";
import {
  ProfileDetails,
  ProfileError,
  ProfileStatus,
} from "../../app/slice/profile";

const Dashboard = () => {
  const profile = useAppSelector(ProfileDetails);
  const status = useAppSelector(ProfileStatus);
  const error = useAppSelector(ProfileError);

  return (
    <Box className="cc-container page-alignment">
      <PageLoader status={status} error={error}>
        {profile?.isUser ? (
          <UserDashboard profile={profile} />
        ) : (
          <CompanyDashboard profile={profile} />
        )}
        {/* <Button onClick={updateImage}>Change Image</Button> */}
      </PageLoader>
    </Box>
  );
};

export default Dashboard;
