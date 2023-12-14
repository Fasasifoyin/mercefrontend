import { Box, Flex } from "@chakra-ui/react";
import Loader from "../utils/loader/Oval";

type PageLoaderProps = {
  status: "idle" | "pending" | "success" | "failed";
  children: React.ReactNode;
  error: unknown;
};

const PageLoader = ({ status, children, error }: PageLoaderProps) => {
  return (
    <Box>
      {status === "pending" && (
        <Flex height={"350px"} justify={"center"} align={"center"}>
          <Loader />
        </Flex>
      )}
      {status === "failed" && (
        <p>{typeof error === "string" ? error : "An unknown error occured"}</p>
      )}
      {status === "success" && <>{children}</>}
    </Box>
  );
};

export default PageLoader;
