import React from "react";
import Fab from "@mui/material/Fab";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Props } from "./stepper.model";

/**
 * Button for section block of register page
 *
 * Params {props}:
 * 1. content (content under button) -> example: Section 5
 * 2. size -> [large, small, medium] -> default: large
 * 3. onclick -> handle event when clicked
 */
const StepIcon: React.FC<Props> = ({ content, size, onClick }) => {
  // CSS of div with style is divStyle
  const divStyle = {
    textAlign: "center",
    color: "#A1A7B2",
  };

  return (
    <div style={divStyle}>
      <Fab
        onClick={onClick}
        size={size}
        sx={{
          ":hover": {
            bgcolor: "#C3FFD1",
          },
          bgcolor: "#C3FFD1",
        }}
      >
        <CheckSharpIcon
          sx={{
            color: "#6DC485",
          }}
        />
      </Fab>
      <br></br>
      <b>{content}</b>
    </div>
  );
};

export default StepIcon;
