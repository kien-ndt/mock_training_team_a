/**
       <Button
            variant="contained"
            component="label"
            >
            Upload File
            <input
                type="file"
                hidden
            />
        </Button>
        props: onChange, chỉnh background, border....
 */
import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { Props } from "./upload.model";

/**
 * Upload file
 *
 * Params: 
 * 1. onChange -> Change value of state when upload a file
 * 2. background -> Change backgrond color of upload form
 * 
 * Example:
 * {
 * <UploadFile
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState(e.target.value)
        }
    />
 * }
 */
const UploadFile: React.FC<Props> = ({ onChange, background }) => {
  // Default value of background
  if (background == null || background == "" || background == "undefined") {
    background = "#FBFFFF";
  }

  // CSS for Item content
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
    margin: "7px",
    fontWeight: "bold",
    background: `${background}`,
    boxSizing: "border-box",
    border: "0.5px dashed grey",
    minHeight: "200px",
  }));

  // CSS for div with style dragArea
  const dragArea = {
    height: "auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& > Button": {
      fontSize: "50px",
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item
            sx={{
              p: 2,
            }}
          >
            <div style={dragArea}>
              <DriveFolderUploadIcon sx={{ width: "70px", height: "70px" }} />
              <header>Drag & Drop to your files here</header>
              <span>OR</span>
              <label htmlFor="contained-button-file">
                <input
                  id="contained-button-file"
                  type="file"
                  hidden
                  onChange={onChange}
                />
                <Button
                  sx={{
                    fontSize: "25px",
                    bgcolor: "#D03A2B",
                    ":hover": {
                      bgcolor: "#D03A2B",
                    },
                  }}
                  variant="contained"
                  size="large"
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UploadFile;
