import { useAppSelector } from "../app/hooks";
import { UserDetails } from "../app/slice/user";
import { Navigate, useLocation } from "react-router-dom";

type AccountPrivateProps = {
  children: React.ReactNode;
};

const AccountPrivate = ({ children }: AccountPrivateProps) => {
  const user = useAppSelector(UserDetails);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  return (
    <>
      {user ? (
        <Navigate to={from.pathname} state={{ from: location }} />
      ) : (
        children
      )}
    </>
  );
};

export default AccountPrivate;
