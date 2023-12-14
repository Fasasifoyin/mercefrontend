import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

type FormikTextAreaProps = {
  name: string;
  placeholder?: string;
  asterisk?: boolean;
  height: {
    base: string;
    sm?: string;
    md: string;
    lg?: string;
  };
  label?: string;
};

const FormikTextArea = (props: FormikTextAreaProps) => {
  const { name, placeholder, label, height, asterisk } = props;

  return (
    <Field name={name}>
      {({ meta, field }: FieldProps) => (
        <FormControl isInvalid={Boolean(meta.error && meta.touched)}>
          {label && (
            <FormLabel width={"max-content"}>
              <h5 className="medium-text text-blue">
                {label} <span style={{ color: "red" }}>{asterisk && "*"}</span>
              </h5>
            </FormLabel>
          )}
          <Textarea
            {...field}
            placeholder={placeholder}
            focusBorderColor="#c59d5f"
            borderRadius={"5px"}
            height={{
              base: height.base,
              md: height.md,
            }}
            border={"1px solid rgb(0,0,0,0.3)"}
            _placeholder={{ color: "rgb(0, 0, 0, 0.7)" }}
            autoComplete="off"
          />
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormikTextArea;
