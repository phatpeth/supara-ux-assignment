import { Box, Stepper as MuiStepper, Step, StepLabel } from "@mui/material";
import * as React from "react";

const steps = ["Share Location", "Clock In", "Working On", "Clock Out"];

const Stepper = () => {
  return (
    <Box sx={{ width: "100%", py: { xs: "20px", sm: "24px" } }}>
      <MuiStepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{
                ".MuiStepLabel-label": { fontSize: { xs: "12px", sm: "14px" } },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </MuiStepper>
    </Box>
  );
};

export default Stepper;
