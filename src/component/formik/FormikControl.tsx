import FormikInput from "./formiktypes/FormikInput";
import FormikPassword from "./formiktypes/FormikPassword";
import FormikRadio from "./formiktypes/FormikRadio";
import FormikTextArea from "./formiktypes/FormikTextArea";
import FormikeSelect from "./formiktypes/FormikeSelect";

type All = {
  name: string;
  asterisk?: boolean;
  label?: string;
};

type SelectProps = All & {
  control: "Select";
  options: string[];
  height: {
    base: string;
    sm?: string;
    md: string;
    lg?: string;
  };
  initial: string;
  setArray?: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder?: never;
  type?: never;
};

type PasswordTextareaProps = All & {
  control: "Password" | "Textarea";
  placeholder?: string;
  height: {
    base: string;
    sm?: string;
    md: string;
    lg?: string;
  };
  type?: never;
  options?: never;
  initial?: never;
  setArray?: never;
};

type InputProps = All & {
  control: "Input";
  type: string;
  placeholder?: string;
  height: {
    base: string;
    sm?: string;
    md: string;
    lg?: string;
  };
  options?: never;
  initial?: never;
  setArray?: never;
};

type RadioProps = All & {
  control: "Radio";
  options: {
    id: number;
    key: string;
    value: string;
  }[];
  initial?: never;
  setArray?: never;
  height?: never;
  placeholder?: never;
  type?: never;
};

type FormikControlProps =
  | SelectProps
  | PasswordTextareaProps
  | InputProps
  | RadioProps;

const FormikControl = (props: FormikControlProps) => {
  const {
    control,
    name,
    placeholder,
    height,
    initial,
    type,
    label,
    options,
    asterisk,
    setArray,
  } = props;

  switch (control) {
    case "Input":
      return (
        <FormikInput
          {...{ name, placeholder, height, type, label, asterisk }}
        />
      );
    case "Password":
      return <FormikPassword {...{ name, placeholder, height, label }} />;
    case "Select":
      return (
        <FormikeSelect
          {...{ name, label, options, height, initial, setArray, asterisk }}
        />
      );
    case "Textarea":
      return (
        <FormikTextArea {...{ name, placeholder, height, label, asterisk }} />
      );
    case "Radio":
      return <FormikRadio {...{ name, label, asterisk, options }} />;
    default:
      return;
  }
};

export default FormikControl;
