import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Layout from "../component/account/Layout";
import UserSignup from "../component/account/signup/UserSignup";
import { AnimatePresence, motion } from "framer-motion";
import CompanySignup from "../component/account/signup/CompanySignup";
import { companySignVariants, userSignVariants } from "../utils/FramerVariants";

const Signup = () => {
  const [as, setAs] = useState("user");

  return (
    <Layout as={as} setAs={setAs} page={"signup"}>
      {as === "user" ? (
        <AnimatePresence initial={false}>
          <Box as={motion.div} {...userSignVariants}>
            <UserSignup />
          </Box>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <Box as={motion.div} {...companySignVariants}>
            <CompanySignup />
          </Box>
        </AnimatePresence>
      )}
    </Layout>
  );
};

export default Signup;
