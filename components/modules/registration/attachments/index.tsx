import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UploadFile from "../../../common-components/uploadfile";
import TitleUpload from "../common/titleUpload";

type Props = {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Attachment 
 *  
 * Params:
 * 1.title : title of attachment
 * 2. onChange: event when upload file
 * 
 * Example:
 * {
 *  <AttachMents
        title="1. Company's last signed audited fanacial statement"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState(e.target.value)
    }
    />
 * }
 */
const AttachMents: React.FC<Props> = ({ title, onChange }) => {
  // CSS for content of Item
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item>
            <TitleUpload content={title} fontWeight="bold" />
            <UploadFile onChange={onChange} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AttachMents;
