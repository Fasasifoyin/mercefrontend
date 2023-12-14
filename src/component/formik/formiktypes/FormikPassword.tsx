import { useState } from "react";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { Field, FieldProps } from "formik";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

type FormikPasswordProps = {
  name: string;
  placeholder?: string;
  label?: string;
  height: {
    base: string;
    sm?: string;
    md: string;
    lg?: string;
  };
};

const FormikPassword = (props: FormikPasswordProps) => {
  const { name, placeholder, label, height } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Field name={name}>
      {({ meta, field }: FieldProps) => (
        <FormControl isInvalid={Boolean(meta.error && meta.touched)}>
          {label && (
            <FormLabel width={"max-content"}>
              <h5 className="medium-text text-blue">{label}</h5>
            </FormLabel>
          )}

          <Box pos={"relative"}>
            <Input
              {...field}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              focusBorderColor="#c59d5f"
              borderRadius={"5px"}
              height={{
                base: height.base,
                md: height.md,
              }}
              border={"1px solid rgb(0,0,0,0.3)"}
              _placeholder={{ color: "rgb(0, 0, 0, 0.7)" }}
              paddingRight={"35px"}
              autoComplete="off"
            />
            <Icon
              pos={"absolute"}
              zIndex={10}
              top={"50%"}
              right={"10px"}
              transform={"translateY(-50%)"}
              boxSize={5}
              as={showPassword ? BsFillEyeFill : BsFillEyeSlashFill}
              onClick={() => setShowPassword(!showPassword)}
              className="cursor"
            />
          </Box>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormikPassword;
