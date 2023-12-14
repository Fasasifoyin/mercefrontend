import { useLocation, Navigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { UserDetails } from "../app/slice/user";

type UserPrivateProps = {
  children: React.ReactNode;
};

const UserPrivate = ({ children }: UserPrivateProps) => {
  const { user: userName } = useParams();
  const user = useAppSelector(UserDetails);
  const location = useLocation();

  return (
    <>
      {user?.isUser ? (
        user?.slug === userName ? (
          children
        ) : (
          <Navigate
            to={`/account/${user?.slug}`}
            state={{ from: location }}
          />
        )
      ) : (
        <Navigate to={"/"} state={{ from: location }} />
      )}
    </>
  );
};

export default UserPrivate;
