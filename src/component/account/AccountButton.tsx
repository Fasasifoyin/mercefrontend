import { Button } from "@chakra-ui/react";
import ButtonLoader from "../../utils/loader/ButtonLoader";

type AccountButtonProps = {
  label: string;
  status: "idle" | "pending" | "success" | "failed";
};

const AccountButton = ({ label, status }: AccountButtonProps) => {
  return (
    <Button
      type="submit"
      w={"100%"}
      className={"bg-blue active"}
      py={"25px"}
      position={"relative"}
      overflow={"hidden"}
      isDisabled={status === "pending"}
    >
      <span className="transition-gold transition"></span>
      <span className="text-white large-text label">
        {status === "pending" ? <ButtonLoader /> : label}
      </span>
    </Button>
  );
};

export default AccountButton;
