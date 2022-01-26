/**
 * https://mui.com/components/buttons/
 *
 * tạo button có size, text, padding, background color, onClick, icon truyền qua props, nếu giá trị ko truyền qua props thì có giá trị mặc định trước
 */
import React from "react";
import Box from "@mui/material/Box";
import ButtonIcon from "./button_icon";
import ButtonNumber from "./button_number";
import { Props } from "./button.model";
/**
 * Params {props}:
 * 1. size -> [large, small, medium] -> default: large
 * 2. type -> [icon, number] -> default: icon
 * 3. value (when type is number) -> 5 step corresponding [1, 2, 3, 4, 5] -> default: 1
 * 4. color (when type is number) -> [red, gray] -> default: red
 * 5. onclick -> handle event when clicked
 * 6. content (content under button) -> example: Section 5
 *
 * Example: Button Icon(small) -> Button Number Gray(medium) -> Button Number red(lager):
 * {
 *      <ButtonUI size="small" onClick={(e) => setProps(....)} content="Section 1"/>
 *      <ButtonUI type="number" size="medium" color="gray" value="5" content="Section 1"/>
 *      <ButtonUI type="number" value="3" content="Section 1"/>
 * }
 */
const ButtonUI: React.FC<Props> = ({
  content,
  size,
  type,
  value,
  color,
  onClick,
}) => {
  // Default value
  if (type == null || type == "" || type == "undefined") {
    type = "icon";
  }

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {type === "icon" && (
        <ButtonIcon size={size} content={content} onClick={onClick} />
      )}
      {type === "number" && (
        <ButtonNumber
          size={size}
          value={value}
          color={color}
          content={content}
          onClick={onClick}
        />
      )}
    </Box>
  );
};

export default ButtonUI;
