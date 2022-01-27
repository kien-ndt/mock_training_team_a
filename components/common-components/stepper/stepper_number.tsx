import React from "react";
import Fab from "@mui/material/Fab";
import { Props } from "./stepper.model";

/**
 * Button for section step of register page
 *
 * Params {props}:
 * 1. content (content under button) -> example: Section 5
 * 2. size -> [large, small, medium] -> default: large
 * 3. value -> 5 step corresponding [1, 2, 3, 4, 5] -> default: 1
 * 4. color -> [red, gray] -> default: red
 * 5. onclick -> handle event when clicked
 * 6. disable -> disable button
 */
const StepNumber: React.FC<Props> = ({
  content,
  size,
  value,
  color,
  onClick,
  disable,
}) => {
  // CSS of div with style is divRedStyle
  const divRedStyle = {
    textAlign: "center",
    color: "#D03A2B",
  };

  // CSS of div with style is divGrayStyle
  const divGrayStyle = {
    textAlign: "center",
    color: "#A1A7B2",
  };

  // Default value of color
  if (color == null || color == "" || color == "undefined") {
    color = "red";
  }

  // Default value of value
  if (value == null || value == "" || value == "undefined") {
    value = "1";
  }

  return (
    <>
      {
        // Button Red
      }
      {color === "red" && (
        <div style={divRedStyle}>
          <Fab
            disabled={disable}
            onClick={onClick}
            size={size}
            sx={{
              ":hover": {
                bgcolor: "#D03A2B",
                color: "white",
              },
              ":disabled": {
                bgcolor: "#D03A2B",
                color: "white",
              },
              bgcolor: "#D03A2B",
              color: "white",
            }}
          >
            <b>{value}</b>
          </Fab>{" "}
          <br></br>
          <b>{content}</b>
        </div>
      )}

      {
        // Button Gray
      }
      {color === "gray" && (
        <div style={divGrayStyle}>
          <Fab
            disableRipple={disable}
            onClick={onClick}
            size={size}
            sx={{
              ":hover": {
                bgcolor: "#B5BDC3",
                color: "white",
              },
              ":disabled": {
                bgcolor: "#B5BDC3",
                color: "white",
              },
              bgcolor: "#B5BDC3",
              color: "white",
            }}
          >
            <b>{value}</b>
          </Fab>
          <br></br>
          <b>{content}</b>
        </div>
      )}
    </>
  );
};

export default StepNumber;
