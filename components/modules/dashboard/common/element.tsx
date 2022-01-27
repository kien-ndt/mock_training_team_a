/**
 * 1 ô hình ảnh ở trang chủ, có title ở trên
 */
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Props } from "./element.model";

/**
 * Element item of content page
 *
 * Params {props}:
 * 1. image -> src of image or link image
 * 2. content -> content of link title
 * 3. onClick -> event when click on title
 * 
 * Example:
 * {
 *  <Element
        image="https://images.unsplash.com/photo-1544306094-e2dcf9479da3"
        content="Assert Protection"
        onClick={() => setState(....)}
    />
 * }
 */
const Element: React.FC<Props> = ({ image, content, onClick }) => {
  // CSS of Card
  const container = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    width: 400,
    height: 300,
  };

  // CSS of CardContent
  const contentText = {
    width: 400,
    height: 200,
  };

  // CSS of CardActions
  const footer = {
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backgroundColor: "rgba(5, 5, 5, 0.65)",
    backdropFilter: "blur(5px)",
    wordBreak: "break-all",
    justifyContent: "center",
    width: 400,
    height: 100,
  };

  // CSS of Button
  const button = {
    color: "white",
    fontSize: "20px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: 300,
        },
      }}
    >
      <Paper elevation={2}>
        <Card style={container}>
          <CardContent style={contentText}></CardContent>
          <CardActions style={footer}>
            <Button style={button} size="large" onClick={onClick}>
              <b>{content}</b>
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
};

export default Element;
