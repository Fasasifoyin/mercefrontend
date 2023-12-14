import { useState, useEffect } from "react";
import { Box, Button, Flex, Icon, Input } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeinVariants } from "../../../utils/FramerVariants";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

type SearhModalProps = {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  showSearch: boolean;
};

const SearchModal = ({ setShowSearch, showSearch }: SearhModalProps) => {
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setShowSearch(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchWord) {
      navigate(`search?searchQuery=${searchWord}`);
    } else {
      return;
    }
  };

  return (
    <>
      {showSearch && (
        <>
          <AnimatePresence>
            <Box
              className="cursor"
              pos={"fixed"}
              top={0}
              left={0}
              zIndex={100}
              w={"100%"}
              height={"100vh"}
              onClick={() => setShowSearch(false)}
            >
              <Box
                as={motion.div}
                {...fadeinVariants}
                pos={"fixed"}
                top={0}
                left={0}
                width={"100%"}
                h={"100%"}
                className="bg-modal"
              />
            </Box>
          </AnimatePresence>
          <Box
            position={"fixed"}
            top={0}
            bottom={0}
            left={0}
            right={0}
            margin={"auto"}
            width={"90%"}
            maxW={"700px"}
            height={"80vh"}
            background={"white"}
            zIndex={120}
            p={"20px 0"}
          >
            <Box width={"90%"} h={"100%"} margin={"0 auto"}>
              <Flex
                w={"100%"}
                h={"17%"}
                className="bg-light-gold"
                align={"center"}
                justify={"center"}
              >
                <Box width={"80%"} h={"60%"}>
                  <form
                    onSubmit={onSubmit}
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Input
                      autoFocus
                      border={"1px solid black"}
                      w={"100%"}
                      h={"100%"}
                      bg={"white"}
                      borderRadius={"0px"}
                      _focus={{
                        boxShadow: "none",
                      }}
                      focusBorderColor="rgb(197, 157, 95)"
                      value={searchWord}
                      onChange={(e) => setSearchWord(e.target.value)}
                      pr={"12%"}
                    />
                    <Button
                      type="submit"
                      position={"absolute"}
                      w={"10%"}
                      h={"100%"}
                      top={0}
                      right={0}
                      display={"grid"}
                      placeItems={"center"}
                      className="text-hover-gold text-blue"
                      background={"transparent"}
                      zIndex={20}
                      borderRadius={0}
                      _hover={{
                        backgroundColor: "none",
                      }}
                      _active={{
                        backgroundColor: "none",
                      }}
                    >
                      <Icon
                        as={BiSearch}
                        boxSize={{ base: "16px", md: "20px" }}
                      />
                    </Button>
                  </form>
                </Box>
              </Flex>
              <Box
                mt={"20px"}
                bg={"white"}
                h={"75%"}
                boxShadow={
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                }
              >
                <Flex direction={"column"} h={"100%"}>
                  <Box
                    height={"90%"}
                    overflowY={"scroll"}
                    // className="scrollbody"
                  ></Box>
                  <Flex
                    h={{base:"15%", sm:"10%"}}
                    borderTop={"1px solid black"}
                    px={"20px"}
                    align={"center"}
                    justify={"space-between"}
                    gap={"10px"}
                  >
                    <p>
                      Search for{" "}
                      <span className="fw-bold">
                        "
                        {searchWord.length > 20
                          ? `${searchWord.slice(0, 20)}...`
                          : searchWord}
                        "
                      </span>
                    </p>
                    <Icon />
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Icon
            pos={"fixed"}
            top={"10px"}
            right={"10px"}
            zIndex={120}
            mb={"20px"}
            as={AiOutlineClose}
            boxSize={{ base: 6, md: 8 }}
            onClick={() => setShowSearch(false)}
            className="cursor"
          />
        </>
      )}
    </>
  );
};

export default SearchModal;
