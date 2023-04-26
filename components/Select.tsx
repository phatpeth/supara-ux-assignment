import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IFormValues {
  branchCode: string;
  brand: string;
  saleType: string;
  productType: string;
}

const Select = React.forwardRef<
  HTMLSelectElement,
  {
    label: string;
    options: { label: string; value: string }[];
    error: boolean;
  } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, name, label, options, error }, ref) => (
  <FormControl fullWidth size="small" error={error} sx={{ my: "8px" }}>
    <InputLabel id={`${name}-select-label`}>{label}</InputLabel>
    <MuiSelect
      name={name}
      ref={ref}
      onChange={onChange}
      labelId={`${name}-select-label`}
      label={label}
      placeholder="Select"
      defaultValue=""
    >
      {options.map((option) => (
        <MenuItem key={`${name}-${option.value}`} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
    {error && <FormHelperText>{label} is required.</FormHelperText>}
  </FormControl>
));

export default Select;
