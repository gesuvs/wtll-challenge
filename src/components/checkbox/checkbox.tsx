import {
  CheckboxProps as CheckboxMuiProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Checkbox as CheckboxBase,
} from "@mui/material";
import { HTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";

type CheckoxProps = HTMLAttributes<HTMLInputElement> & CheckboxMuiProps;

export const Checkbox = ({ id, name, ...props }: CheckoxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name!}
      defaultValue={false}
      render={({ field }) => (
        <FormControl
          component="fieldset"
          variant="standard"
          defaultChecked={false}
          error={Boolean(errors[name!])}
        >
          <FormGroup>
            <FormControlLabel
              defaultChecked={false}
              control={<CheckboxBase id={id} {...field} />}
              label="Não sou um robô"
            />
          </FormGroup>
          <FormHelperText>
            {errors[name!] ? "Campo obrigatorio" : ""}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
