import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

/**
 * Content of Footer
 *
 * Param -> content: content of footer
 *
 * Example: <Footer content="@coppyright by KienNT76" />
 */
function Footer(props: any) {
  // Get content from props
  const content = props.content;

  // CSS of Item content
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: "20px",
    minHeight: "40px",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} textAlign={"center"}>
          {content}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
