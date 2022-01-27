/**
 * https://mui.com/components/steppers/
 * stepper: props: arrayLabel, onClick, arrayDisabled (nút nào onClick được nút nào ko)
 */
import React from "react";
import Box from "@mui/material/Box";
import ButtonIcon from "./stepper_icon";
import ButtonNumber from "./stepper_number";
import { Props } from "./stepper.model";
/**
 * Button for section block or step of register page
 *
 * Params {props}:
 * 1. size -> [large, small, medium] -> default: large
 * 2. type -> [icon, number] -> default: icon
 * 3. value (when type is number) -> 5 step corresponding [1, 2, 3, 4, 5] -> default: 1
 * 4. color (when type is number) -> [red, gray] -> default: red
 * 5. onclick -> handle event when clicked
 * 6. content (content under button) -> example: Section 5
 * 7. disable -> disable button -> default: false
 *
 * Example: Button Icon(small) -> Button Number Gray(medium) -> Button Number red(lager):
 * {
 *      <ButtonUI size="small" onClick={(e) => setProps(....)} content="Section 1"/>
 *      <ButtonUI type="number" size="medium" color="gray" value="5" content="Section 1"/>
 *      <ButtonUI type="number" value="3" content="Section 1"/>
 * }
 */
const StepUI: React.FC<Props> = ({
  content,
  size,
  type,
  value,
  color,
  onClick,
  disable,
}) => {
  // Default value of type
  if (type == null || type == "" || type == "undefined") {
    type = "icon";
  }

  // Default value of disable
  if (disable == null) {
    disable = false;
  }

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {type === "icon" && (
        <ButtonIcon
          size={size}
          content={content}
          onClick={onClick}
          disable={disable}
        />
      )}
      {type === "number" && (
        <ButtonNumber
          size={size}
          value={value}
          color={color}
          content={content}
          onClick={onClick}
          disable={disable}
        />
      )}
    </Box>
  );
};

export default StepUI;
