import { useState } from "react";
import { Box, Flex, Icon, Input, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HelpfulLinks, OverView, socials } from "../../../utils/data";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { footerVariants } from "../../../utils/FramerVariants";

const Footer = () => {
  const [helpfulLinks, setHelpfulLinks] = useState(false);
  const [overview, setOverview] = useState(false);

  return (
    <Box
      className="bg-blue text-white"
      w={"100%"}
      pt={{ base: "40px", xl: "70px" }}
      pb={{ base: "30px", md: "40px" }}
    >
      <Box className="cc-container page-alignment" mb={"50px"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          flexWrap={"wrap"}
          gap={{ base: "30px", xl: 0 }}
        >
          <Flex
            w={{ base: "100%", md: "60%", xl: "30%" }}
            direction={"column"}
            gap={{ base: "15px", xl: "30px" }}
          >
            <Link as={RouterLink} to={"/"} className="logo">
              <h3 className="fw-bold">FOODMERCE</h3>
            </Link>
            <Flex direction={"column"} gap={"7px"}>
              <p>Foodmerce is a project food website. No vendor here is real</p>
              <p>Contact: yddeveloper@gmail.com</p>
              <p>Call Us: 07043593355</p>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", md: "30%", xl: "15%" }}
            direction={"column"}
            gap={{ base: "15px", xl: "30px" }}
          >
            <Flex gap={"10px"} align={"center"}>
              <h4 className="xlarge-text fw-bold">Helpful Links</h4>
              <Icon
                hideFrom={"md"}
                as={!helpfulLinks ? AiOutlineDown : AiOutlineUp}
                onClick={() => setHelpfulLinks(!helpfulLinks)}
                className="cursor"
              />
            </Flex>
            <Flex direction={"column"} gap={{ base: "15px", md: "7px" }}>
              {HelpfulLinks.map((each, index) => (
                <Link hideBelow={"md"} as={RouterLink} key={index} to={"#"}>
                  <p>{each}</p>
                </Link>
              ))}
              {HelpfulLinks.map((each, index) => (
                <AnimatePresence key={index}>
                  {helpfulLinks && (
                    <Box
                      hideFrom={"md"}
                      key={index}
                      as={motion.div}
                      variants={footerVariants(index, HelpfulLinks.length)}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <Link as={RouterLink} key={index} to={"#"}>
                        <h5 className="medium-text">{each}</h5>
                      </Link>
                    </Box>
                  )}
                </AnimatePresence>
              ))}
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", md: "30%", xl: "15%" }}
            direction={"column"}
            gap={{ base: "15px", xl: "30px" }}
          >
            <Flex align={"center"} gap={"10px"}>
              <h4 className="xlarge-text fw-bold">Overview</h4>
              <Icon
                hideFrom={"md"}
                as={!overview ? AiOutlineDown : AiOutlineUp}
                onClick={() => setOverview(!overview)}
                className="cursor"
              />
            </Flex>
            <Flex direction={"column"} gap={{ base: "15px", md: "7px" }}>
              {OverView.map((each, index) => (
                <Link hideBelow={"md"} as={RouterLink} key={index} to={"#"}>
                  <p>{each}</p>
                </Link>
              ))}
              {OverView.map((each, index) => (
                <AnimatePresence key={index}>
                  {overview && (
                    <Box
                      hideFrom={"md"}
                      key={index}
                      as={motion.div}
                      variants={footerVariants(index, HelpfulLinks.length)}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <Link as={RouterLink} key={index} to={"#"}>
                        <h5 className="medium-text">{each}</h5>
                      </Link>
                    </Box>
                  )}
                </AnimatePresence>
              ))}
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", md: "60%", xl: "30%" }}
            direction={"column"}
            gap={{ base: "15px", xl: "30px" }}
          >
            <h4 className="xlarge-text fw-bold">Subscribe</h4>
            <Box>
              <p>
                Dui nunc mattis enim ut tellus elementum sagittis vitae et.
                Scelerisque eu ultrices vitae auctor eu aug.
              </p>
              <Flex
                padding={"10px"}
                mt={"15px"}
                bg={"white"}
                width={"100%"}
                maxW={"500px"}
                h={"60px"}
                borderRadius={"30px"}
              >
                <Input
                  width={"60%"}
                  placeholder="Your E-mail address"
                  className="text-blue"
                  border={"none"}
                  borderRight={"1px solid red"}
                  borderRadius={0}
                  focusBorderColor="none"
                  _focus={{
                    boxShadow: "none",
                    borderRight: "1px solid red",
                  }}
                  _hover={{
                    borderRight: "1px solid red",
                  }}
                />
                <Box width={"40%"} display={"grid"} placeItems={"center"}>
                  <h4 className="text-gold text-hover-blue mediume-text cursor fw-bold">
                    Subscribe
                  </h4>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <hr />
      <Flex
        className="cc-container page-alignment"
        direction={{ base: "column", md: "row" }}
        justify={{ md: "space-between" }}
        align={"center"}
        mt={"50px"}
        gap={{ base: "10px", md: 0 }}
      >
        <p style={{ textAlign: "center" }}>
          All Right Reserved © 2023 Designthemes
        </p>
        <Flex gap={"20px"}>
          {socials.map((each) => (
            <Link
              display="flex"
              as={RouterLink}
              key={each.id}
              to={each.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                as={each.icon}
                boxSize={6}
                className="text-gold text-hover-white"
              />
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
