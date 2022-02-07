import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StepUI from "../../components/common-components/stepper";
import Line from "../../components/common-components/stepper/line";
import AttachMents from "../../components/modules/registration/attachments";
import Submission from "../../components/layout/content/submission";

type Props = {
  step: string;
};

/**
 * Component Stepper
 *
 * Param:
 * step: step of registration [1, 2, 3, attachments, submisstion]
 *
 * Example: <Stepper step="attachments" />
 */
const Stepper: React.FC<Props> = ({ step }) => {
  // CSS for content of Item
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
  }));

  const [state, setState] = useState("");
  useEffect(() => {
    console.log(state);
  }, [state]);

  const next = () => {
    console.log("next");
  };

  const back = () => {
    console.log("back");
  };

  return (
    <>
      {
        // Step 1
      }
      {step == "1" && (
        <Item>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1.333} md={1.333}>
                <StepUI
                  type="number"
                  size="medium"
                  value="1"
                  color="red"
                  content="Section A"
                />
              </Grid>
              <Grid item xs={1.333} md={1.333} sx={{ marginTop: "25px" }}>
                <Line />
              </Grid>
              <Grid item xs={1.333} md={1.333}>
                <StepUI
                  type="number"
                  size="medium"
                  value="2"
                  color="gray"
                  content="Section B"
                />
              </Grid>
              <Grid item xs={1.333} md={1.333} sx={{ marginTop: "25px" }}>
                <Line />
              </Grid>
              <Grid item xs={1.333} md={1.333}>
                <StepUI
                  type="number"
                  size="medium"
                  value="3"
                  color="gray"
                  content="Section C"
                />
              </Grid>
              <Grid item xs={1.333} md={1.333} sx={{ marginTop: "25px" }}>
                <Line />
              </Grid>
              <Grid item xs={1.333} md={1.333}>
                <StepUI
                  type="number"
                  size="medium"
                  value="4"
                  color="gray"
                  content="Attachments"
                />
              </Grid>
              <Grid item xs={1.333} md={1.333} sx={{ marginTop: "25px" }}>
                <Line />
              </Grid>
              <Grid item xs={1.333} md={1.333}>
                <StepUI
                  type="number"
                  size="medium"
                  value="5"
                  color="gray"
                  content="Submission"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  marginLeft: "3%",
                  "& h4": {
                    color: "gray",
                  },
                }}
              >
                <h4>Step 1/5</h4>
                <h2>COMPANY INFORMATION</h2>
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  marginLeft: "3%",
                }}
              >
                <h2>Content Step 1 Here</h2>
              </Grid>
            </Grid>
          </Box>
        </Item>
      )}
      {
        // Attachments
      }
      {step == "4" && (
        <Item>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={1.333} md={1.333}>
                <StepUI type="icon" size="medium" content="Section A" />
              </Grid>
              <Grid item xs={1.333} md={1.333} sx={{ marginTop: "25px" }}>
                <Line />
              </Grid>
              <Grid item xs={1.333} md={1.333}>
                <StepUI type="icon" size="medium" content="Section B" />
              </Grid>
              <Grid item xs={1.333} md={1.333} sx={{ marginTop: "25px" }}>
                <Line />
              </Grid>
              <Grid item xs={1.333} md={1.333}>
                <StepUI type="icon" size="medium" content="Section C" />
              </Grid>
              <Grid item xs={1.333} md={1.333} sx={{ marginTop: "25px" }}>
                <Line />
              </Grid>
              <Grid item xs={1.333} md={1.333}>
                <StepUI
                  type="number"
                  size="medium"
                  value="4"
                  color="red"
                  content="Attachments"
                />
              </Grid>
              <Grid item xs={1.333} md={1.333} sx={{ marginTop: "25px" }}>
                <Line />
              </Grid>
              <Grid item xs={1.333} md={1.333}>
                <StepUI
                  type="number"
                  size="medium"
                  value="5"
                  color="gray"
                  content="Submission"
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Item>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      marginLeft: "3%",
                      "& h4": {
                        color: "gray",
                      },
                    }}
                  >
                    <h4>Step 4/5</h4>
                    <h2>UPLOAD THE FOLLOWING DOCUMENTS</h2>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      marginLeft: "3%",
                    }}
                  >
                    <AttachMents
                      title="1. Company's last signed audited financial statement"
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void => setState(e.target.value)}
                    />
                    <AttachMents
                      title="2. Company's business registry"
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void => setState(e.target.value)}
                    />
                    <Submission onClickBack={back} onClickNext={next} />
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Item>
      )}
    </>
  );
};

export default Stepper;
