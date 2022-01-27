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

function Element() {
  // Begin Css
  const container = {
    backgroundImage: `url(${"https://images.unsplash.com/photo-1544306094-e2dcf9479da3"})`,
    backgroundSize: "cover",
    width: 256,
    height: 256,
  };

  const footer = {
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backgroundColor: "rgba(5, 5, 5, 0.65)",
    backdropFilter: "blur(5px)",
    wordBreak: "break-all",
    position: "fixed",
    justifyContent: "center",
    width: 256,
    height: 85,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 256,
          height: 256,
        },
      }}
    >
      <Paper elevation={2}>
        <Card style={container}>
          <CardContent
            sx={{
              width: 256,
              height: 171,
            }}
          ></CardContent>
          <CardActions style={footer}>
            <Button
              sx={{
                color: "white",
              }}
              size="medium"
            >
              <b>Share</b>
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
}

export default Element;
