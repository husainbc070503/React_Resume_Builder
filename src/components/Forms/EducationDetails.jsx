import { Box, FormLabel, Grid } from "@mui/material";
import React from "react";
import Heading from "../Heading";
import InputField from "../InputField";
import { useGlobalContext } from "../../contexts/ResumeContext";

const EducationDetails = ({ formName }) => {
  const { formValues, handleChange, handleUpload } = useGlobalContext();

  const {
    clgname,
    clglocation,
    clgqualification,
    clgstart,
    clgend,
    schoolname,
    schoollocation,
    schoolqualification,
    schoolstart,
    schoolend,
  } = formValues[formName];

  return (
    <Box>
      <Heading title="Education Details" />
      <div className="form">
        <InputField
          type="text"
          name="clgname"
          label="College / University Name"
          value={clgname}
          handleChange={handleChange}
          formName={formName}
        />
        <Grid container spacing={4} mt={0} mb={4}>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="clglocation"
              label="Location"
              value={clglocation}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="clgqualification"
              label="Qualification"
              value={clgqualification}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} mb={4}>
          <Grid item md={6} xs={12}>
            <FormLabel className="FormLabel label">Start Date</FormLabel>
            <InputField
              type="date"
              name="clgstart"
              value={clgstart}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormLabel className="FormLabel label">End Date</FormLabel>
            <InputField
              type="date"
              name="clgend"
              value={clgend}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
        </Grid>
        <div className="line"></div>
        <InputField
          type="text"
          name="schoolname"
          label="School Name"
          value={schoolname}
          handleChange={handleChange}
          formName={formName}
        />
        <Grid container spacing={4} mt={0} mb={4}>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="schoollocation"
              label="Location"
              value={schoollocation}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="schoolqualification"
              label="Qualification"
              value={schoolqualification}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} mb={4}>
          <Grid item md={6} xs={12}>
            <FormLabel className="FormLabel label">Start Date</FormLabel>
            <InputField
              type="date"
              name="schoolstart"
              value={schoolstart}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormLabel className="FormLabel label">End Date</FormLabel>
            <InputField
              type="date"
              name="schoolend"
              value={schoolend}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default EducationDetails;
