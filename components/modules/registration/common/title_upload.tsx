import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Props } from "./title_upload.module";

/**
 * Title upload
 *
 * Param:
 * 1. content: content of title
 * 2. backgroundColor: background of title
 * 3. fontWeight: font weight of text
 * 4. color: color of text
 *
 * Example: <TitleUpload content="Section A / 1. Title upload file" color="red" fontWeight="bold"/>
 */
const TitleUpload: React.FC<Props> = ({
  content,
  backgroundColor,
  fontWeight,
  color,
}) => {
  // CSS of Item content
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    fontSize: "20px",
    fontWeight: `${fontWeight}`,
    color: `${color}`,
    backgroundColor: `${backgroundColor}`,
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
};

export default TitleUpload;
