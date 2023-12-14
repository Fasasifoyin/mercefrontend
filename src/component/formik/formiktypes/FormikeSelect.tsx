import { Field, FieldProps, FormikProps } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { getCities, getStates } from "../../../utils/data";

type FormikSelectProps = {
  label?: string;
  name: string;
  options: string[];
  initial: string;
  height: {
    base: string;
    sm?: string;
    md: string;
    lg?: string;
  };
  setArray?: React.Dispatch<React.SetStateAction<string[]>>;
  asterisk?: boolean;
};

const FormikeSelect = (props: FormikSelectProps) => {
  const { label, name, options, height, initial, setArray, asterisk } = props;

  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    form: FormikProps<unknown>
  ) => {
    const { value } = e.target;
    const { setFieldValue } = form;
    if (initial === "Country") {
      const result = getStates(value);
      setFieldValue("country", value);
      setFieldValue("state", "");
      setFieldValue("city", "");
      if (setArray) {
        setArray(result);
      }
    } else if (initial === "State") {
      const result = getCities(value);
      setFieldValue("state", value);
      setFieldValue("city", "");
      if (setArray) {
        setArray(result);
      }
    } else {
      setFieldValue(name, value);
    }
  };

  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => (
        <FormControl isInvalid={Boolean(meta.error && meta.touched)}>
          <FormLabel>
            <h5 className="medium-text text-blue">
              {label} <span style={{ color: "red" }}>{asterisk && "*"}</span>
            </h5>
          </FormLabel>
          <Select
            {...field}
            focusBorderColor="#c59d5f"
            borderRadius={"5px"}
            height={{
              base: height.base,
              md: height.md,
            }}
            border={"1px solid rgb(0,0,0,0.3)"}
            onChange={(e) => onChange(e, form)}
          >
            <option disabled value="">
              --{initial}--
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormikeSelect;
