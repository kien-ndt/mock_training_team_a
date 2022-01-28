import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonUI from "../../../common-components/button";

type Props = {
  onClickNext: () => void;
  onClickBack: () => void;
};

const Submission: React.FC<Props> = ({ onClickNext, onClickBack }) => {
  // CSS for content of Item
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "right",
    width: "100%",
    float: "right",
    margin: "10px",
    display: "flex",
    alignItems: "right",
    justifyContent: "right",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item
            sx={{
              "&> ButtonUI": {
                margin: "20px",
              },
            }}
          >
            <ButtonUI
              name="back"
              size="large"
              padding="13px"
              onClick={onClickBack}
              boderRadius="10px"
            />
            <Box sx={{ m: 0.5 }} />
            <ButtonUI
              name="next"
              size="large"
              padding="13px"
              onClick={onClickNext}
              boderRadius="10px"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Submission;
