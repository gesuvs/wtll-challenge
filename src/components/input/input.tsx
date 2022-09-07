import { TextFieldProps } from "@mui/material";
import { HTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputStyled } from "./input.style";

type InputProps =  HTMLAttributes<HTMLInputElement> &
  TextFieldProps;

export const Input = ({ id, name, label, ...props }: InputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name!}
      defaultValue=""
      render={({ field }) => (
        <InputStyled
          {...props}
          {...field}
          id={id}
          label={label}
          variant="standard"
          error={Boolean(errors[name!])}
          helperText={errors[name!] ? String(errors[name!]?.message) : ""}
        />
      )}
    />
  );
};
