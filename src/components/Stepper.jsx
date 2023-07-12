import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import PersonalDetails from "./Forms/PersonalDetails";
import { Grid } from "@mui/material";
import { useGlobalContext } from "../contexts/ResumeContext";
import EducationDetails from "./Forms/EducationDetails";
import WorkExperience from "./Forms/WorkExperience";
import Skills from "./Forms/Skills";
import Projects from "./Forms/Projects";
import Certificates from "./Forms/Certificates";
import Resume from "./Resume";

const steps = [
  "Personal Details",
  "Education Details",
  "Work Experience",
  "Skills",
  "Projects",
  "Certificates",
];

const Buttons = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 40px auto;

  @media (max-width: 890px) {
    width: 100%;
  }
`;

const ResumeForm = () => {
  const { loading } = useGlobalContext();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const formNumber = (step) => {
    switch (step) {
      case 1:
        return <PersonalDetails formName="personal" />;

      case 2:
        return <EducationDetails formName="education" />;

      case 3:
        return <WorkExperience />;

      case 4:
        return <Skills />;

      case 5:
        return <Projects />;

      case 6:
        return <Certificates />;

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {activeStep === steps.length ? (
        <Resume />
      ) : (
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item md={2} xs={12}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>
                      <Typography>{label}</Typography>
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
          <Grid item md={10} xs={12}>
            {formNumber(activeStep + 1)}
            <>
              <Buttons>
                <Button
                  color="secondary"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  variant="contained"
                >
                  <Typography>Back</Typography>
                </Button>

                <Button
                  onClick={handleNext}
                  variant="contained"
                  disabled={loading}
                >
                  <Typography>
                    {activeStep !== steps.length - 1 ? "Next" : "Preview"}
                  </Typography>
                </Button>
              </Buttons>
            </>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ResumeForm;
