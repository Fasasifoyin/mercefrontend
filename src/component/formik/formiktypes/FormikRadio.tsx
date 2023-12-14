import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  RadioGroup,
} from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

type FormikRadioProps = {
  name: string;
  options: {
    id: number;
    key: string;
    value: string;
  }[];
  label?: string;
  asterisk?: boolean;
};

const FormikRadio = (props: FormikRadioProps) => {
  const { label, options, name, asterisk } = props;

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <FormControl isInvalid={Boolean(meta.error && meta.touched)}>
            {label && (
              <FormLabel width={"max-content"}>
                <h5 className="medium-text text-blue">
                  {label}{" "}
                  <span style={{ color: "red" }}>{asterisk && "*"}</span>
                </h5>
              </FormLabel>
            )}
            <RadioGroup>
              {options.map((each) => (
                <Box key={each.id}>
                  <input
                    className="cursor"
                    {...field}
                    id={each.key}
                    value={each.value}
                    checked={Boolean(each.value === field.value)}
                    type="radio"
                  />{" "}
                  <label htmlFor={each.key}>{each.key}</label>
                </Box>
              ))}
            </RadioGroup>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default FormikRadio;
