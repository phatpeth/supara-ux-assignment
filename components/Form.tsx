import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Select from "./Select";
import { useState } from "react";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [storeName, setStoreName] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
    console.log("Form submitted !!");
  };

  return (
    <Box mt="16px" rowGap="16px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth error={!!errors?.branchCode} sx={{ mb: "8px" }}>
          <Autocomplete
            {...register("branchCode", { required: true })}
            fullWidth
            size="small"
            disablePortal
            id="branch-code"
            options={[
              { label: "1", value: "Paragon" },
              { label: "2", value: "Emporium" },
              { label: "3", value: "Lazada" },
            ]}
            isOptionEqualToValue={(option, value) =>
              option?.value === value?.value
            }
            onChange={(_, data) => {
              if (data) {
                setValue("branchCode", data.label);
                setStoreName(data.value);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Branch Code"
                error={!!errors?.branchCode}
              />
            )}
          />
          {!!errors?.branchCode && (
            <FormHelperText sx={{ ml: "14px" }}>
              Branch code is required
            </FormHelperText>
          )}
          {storeName && (
            <FormHelperText sx={{ ml: "14px" }}>
              Store name: {storeName}
            </FormHelperText>
          )}
        </FormControl>

        <Select
          label="Brand"
          options={[
            { label: "KFC", value: "KFC" },
            { label: "McDonald", value: "McDonald" },
            { label: "Pizza Hut", value: "Pizza Hut" },
          ]}
          {...register("brand", { required: true })}
          error={!!errors?.brand}
        />

        <Select
          label="Sale Type"
          options={[
            { label: "Silver", value: "S" },
            { label: "Diamond", value: "D" },
            { label: "Platinum", value: "P" },
          ]}
          {...register("saleType", { required: true })}
          error={!!errors?.saleType}
        />

        <Select
          label="Product Type"
          options={[
            { label: "Food", value: "F" },
            { label: "Beverage", value: "B" },
            { label: "Snack", value: "S" },
          ]}
          {...register("productType", { required: true })}
          error={!!errors?.productType}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ my: "8px" }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
