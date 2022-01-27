import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

/**
 * Title upload
 *
 * Param:
 * content: content of title
 *
 * Example: <TitleUpload content="1. Title upload file" />
 */
function TitleUpload(props: any) {
  // Get content of props
  const content = props.content;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item>{content}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TitleUpload;
