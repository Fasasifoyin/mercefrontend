import { Box, Flex, Image } from "@chakra-ui/react";
import { vendorsId } from "../../app/slice/vendors";
import { EntityId } from "@reduxjs/toolkit";

import { useAppSelector } from "../../app/hooks";
import { motion } from "framer-motion";
import { slideBottomVaraiant } from "../../utils/FramerVariants";
import { Link } from "react-router-dom";

type VendorCardProp = {
  id: EntityId;
  index: number;
};

const VendorCard = ({ id, index }: VendorCardProp) => {
  const vendor = useAppSelector((state) => vendorsId(state, id));

  return (
    <Box
      as={motion.div}
      variants={slideBottomVaraiant(index / 2, 100, 0.5)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Box
        transition={"1s"}
        _hover={{
          md: {
            transform: "scale(1.15)",
            zIndex: 2,
            boxShadow: "0px 0px 20px 2px rgba(0,0,0,0.1)",
          },
        }}
        height={"100%"}
      >
        <Box
          w={"100%"}
          h={{
            base: "160px",
            sm: "180px",
            md: "200px",
            lg: "250px",
            xl: "280px",
          }}
        >
          <Image
            w={"100%"}
            h={"100%"}
            objectFit={"cover"}
            src={vendor?.companyImage}
            alt="Company Image"
          />
        </Box>
        <Box mt={"10px"} p={"0px 5px 0px 5px"}>
          <Flex justify={"space-between"} align={"center"}>
            <Link
              className="text-gold text-hover-blue fw-bold"
              to={`/vendor/${vendor?.slug}`}
            >
              <p>{vendor?.companyName}</p>
            </Link>
            <h4 className="tangerine large-text fw-bold">{vendor?.category}</h4>
          </Flex>
          <h6 className="small-text">
            {vendor?.description
              ? vendor?.description?.length > 50
                ? `${vendor?.description?.slice(0, 47)}...`
                : vendor?.description
              : "No description"}
          </h6>
        </Box>
      </Box>
    </Box>
  );
};

export default VendorCard;
