import React from "react";
import Fab from "@mui/material/Fab";
import { Props } from "./button.model";

const divRedStyle = {
  textAlign: "center",
  color: "#D03A2B",
};

const divGrayStyle = {
  textAlign: "center",
  color: "#A1A7B2",
};

const ButtonNumber: React.FC<Props> = ({
  content,
  size,
  value,
  color,
  onClick,
}) => {
  // Default value
  if (color == null || color == "" || color == "undefined") {
    color = "red";
  }
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
            onClick={onClick}
            size={size}
            sx={{
              ":hover": {
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
            onClick={onClick}
            size={size}
            sx={{
              ":hover": {
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

export default ButtonNumber;
