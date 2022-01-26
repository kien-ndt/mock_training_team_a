import React from "react";
import Fab from "@mui/material/Fab";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Props } from "./button.model";

const ButtonIcon: React.FC<Props> = ({ size, onClick }) => {
  return (
    <>
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
    </>
  );
};

export default ButtonIcon;
