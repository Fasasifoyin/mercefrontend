import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { navList } from "../../../utils/data";
import { USER } from "../../../app/api/types";

type NavlistProps = {
  user: USER | null;
};

const Navlist = ({ user }: NavlistProps) => {
  const filteredLink = !user || user.isUser ? "Orders" : "Vendors";
  const newNavList = navList
    .slice(0)
    .filter((each) => each.page !== filteredLink);

  return (
    <Flex gap={"45px"} flexWrap={"wrap"}>
      {newNavList.map((each) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-gold" : "text-blue text-hover-gold"
          }
          to={`${each.unique ? `/${user?.slug}` : ""}${each.link}`}
          key={each.id}
        >
          <p className="fw-bold">{each.page}</p>
        </NavLink>
      ))}
    </Flex>
  );
};

export default Navlist;
