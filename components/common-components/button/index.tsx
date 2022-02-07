/**
 * https://mui.com/components/buttons/
 *
 * tạo button có size, text, padding, background color, onClick, icon truyền qua props, nếu giá trị ko truyền qua props thì có giá trị mặc định trước
 */
import React from "react";
import { Props } from "./button.model";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

/**
 * Button next, search, back the page
 *
 * Params:
 * 1. size -> size of button [small, medium, large]
 * 2. name -> name of button [back, next, search]
 * 3. onClick -> event when click to button
 * 4. padding -> padding of button
 * 5. boderRadius -> boder-radius of button
 * 
 * Example:
 * {
 *  <ButtonUI
        name="next"
        size="large"
        padding="15px"
        onClick={testFunction}
        boderRadius="20px"
    />
 * }
 */
const ButtonUI: React.FC<Props> = ({
  size,
  name,
  onClick,
  padding,
  boderRadius,
}) => {
  return (
    <>
      {name === "search" && (
        <div>
          <Button
            sx={{
              color: "white",
              bgcolor: "#D03A2B",
              padding: `${padding}`,
              borderRadius: `${boderRadius}`,
              fontWeight: "bold",
              ":hover": {
                color: "white",
                bgcolor: "#D03A2B",
              },
            }}
            size={size ? size : "medium"}
            onClick={onClick}
          >
            Search
          </Button>
        </div>
      )}
      {name === "next" && (
        <div>
          <Button
            sx={{
              color: "white",
              bgcolor: "#D03A2B",
              minWidth: "120px",
              padding: `${padding}`,
              borderRadius: `${boderRadius}`,
              fontWeight: "bold",
              ":hover": {
                color: "white",
                bgcolor: "#D03A2B",
              },
            }}
            size={size}
            onClick={onClick}
            endIcon={<NavigateNextIcon />}
          >
            Next
          </Button>
        </div>
      )}
      {name === "back" && (
        <div>
          <Button
            sx={{
              color: "black",
              bgcolor: "#c2c2c2",
              minWidth: "120px",
              padding: `${padding}`,
              borderRadius: `${boderRadius}`,
              fontWeight: "bold",
              ":hover": {
                color: "black",
                bgcolor: "#c2c2c2",
              },
            }}
            size={size}
            onClick={onClick}
          >
            Back
          </Button>
        </div>
      )}
    </>
  );
};

export default ButtonUI;
