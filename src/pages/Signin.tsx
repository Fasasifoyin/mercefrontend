import { useState } from "react";
import Layout from "../component/account/Layout";
import { Box } from "@chakra-ui/react";
import UserSignin from "../component/account/signin/UserSignin";
import CompanySignin from "../component/account/signin/CompanySignin";
import { AnimatePresence, motion } from "framer-motion";
import { companySignVariants, userSignVariants } from "../utils/FramerVariants";

const Signin = () => {
  const [as, setAs] = useState("user");

  return (
    <Layout as={as} setAs={setAs} page={"signin"}>
      {as === "user" ? (
        <AnimatePresence initial={false}>
          <Box as={motion.div} {...userSignVariants}>
            <UserSignin />
          </Box>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <Box as={motion.div} {...companySignVariants}>
            <CompanySignin />
          </Box>
        </AnimatePresence>
      )}
    </Layout>
  );
};

export default Signin;
