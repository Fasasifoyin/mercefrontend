import { useAppSelector } from "../app/hooks";
import { UserDetails } from "../app/slice/user";
import { Navigate, useLocation, useParams } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user: name } = useParams();
  const user = useAppSelector(UserDetails);
  const location = useLocation();

  return (
    <>
      {user ? (
        user?.slug === name ? (
          children
        ) : (
          <Navigate to={`/account/${user?.slug}`} state={{ from: location }} />
        )
      ) : (
        <Navigate to={"/signin"} state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoute;
