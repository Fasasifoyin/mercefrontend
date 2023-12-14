import { useAppSelector } from "../../app/hooks";
import { UserDetails } from "../../app/slice/user";
import UserHome from "./UserHome";
import CompanyHome from "./CompanyHome";

const Home = () => {
  const user = useAppSelector(UserDetails);
  console.log(user);

  return <>{!user || user.isUser ? <UserHome /> : <CompanyHome />}</>;
};

export default Home;
