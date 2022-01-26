import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";

const steps = ["Select master blaster campaign settings", "Create an ad group"];

function Line() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}></Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Line;
