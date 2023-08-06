import { Control, FieldValues, Path, useController } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type InputFieldProps<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  control: Control<T>;
};

export function InputField<T extends FieldValues>({
  name,
  control,
  onChange: externalOnChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onBlur: externalOnBlur,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: externalRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  value: externalValue,
  ...rest
}: InputFieldProps<T>) {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <TextField
      fullWidth
      name={name}
      value={value}
      onChange={(event) => {
        onChange(event);
        externalOnChange?.(event);
      }}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...rest}
    />
  );
}
