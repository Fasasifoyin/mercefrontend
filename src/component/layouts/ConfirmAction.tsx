import { Box, Button, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  confirmActionVariants,
  fadeinVariants,
} from "../../utils/FramerVariants";

type ConfirmActionProps = {
  actionText: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  action: () => void;
  status: "idle" | "pending" | "success" | "failed";
  buttonText: string;
};

const ConfirmAction = ({
  actionText,
  show,
  setShow,
  action,
  status,
  buttonText,
}: ConfirmActionProps) => {
  return (
    <AnimatePresence>
      {show && (
        <>
          <Box
            className="cursor"
            pos={"fixed"}
            top={0}
            left={0}
            zIndex={100}
            w={"100%"}
            height={"100vh"}
            onClick={() => setShow(false)}
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
          <Box
            as={motion.div}
            {...confirmActionVariants}
            pos={"fixed"}
            top={"20px"}
            left={0}
            right={0}
            margin={"0 auto"}
            padding={"20px 10px 10px 20px"}
            width={"90%"}
            maxW={"400px"}
            zIndex={120}
            background={"white"}
          >
            <p className="text-blue" style={{ marginBottom: "30px" }}>
              {actionText}
            </p>
            <Flex justify={"space-between"}>
              <Button
                bg={"transparent"}
                border={"2px solid black"}
                _hover={{
                  border: "2px solid #c59d5f",
                }}
                _active={{
                  backgroundColor: "transparent",
                }}
                size={"sm"}
                onClick={() => setShow(false)}
                className="active"
              >
                Cancel
              </Button>
              <Button
                onClick={action}
                className="bg-blue text-white bg-hover-gold active"
                size={"sm"}
                isLoading={status === "pending"}
              >
                {buttonText}
              </Button>
            </Flex>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConfirmAction;
