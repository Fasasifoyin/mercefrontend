import { useLocation, Navigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { UserDetails } from "../app/slice/user";

type CompanyPrivateProps = {
  children: React.ReactNode;
};

const CompanyPrivate = ({ children }: CompanyPrivateProps) => {
  const { user: companyName } = useParams();
  const company = useAppSelector(UserDetails);
  const location = useLocation();

  return (
    <>
      {company?.isCompany ? (
        company?.slug === companyName ? (
          children
        ) : (
          <Navigate
            to={`/account/${company?.slug}`}
            state={{ from: location }}
          />
        )
      ) : (
        <Navigate to={"/"} state={{ from: location }} />
      )}
    </>
  );
};

export default CompanyPrivate;
