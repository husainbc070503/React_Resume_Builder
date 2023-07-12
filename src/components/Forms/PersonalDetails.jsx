import { Box, FormLabel, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/ResumeContext";
import InputField from "../InputField";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import Heading from "../Heading";

const PersonalDetails = ({ formName }) => {
  const { formValues, handleChange, handleUpload } = useGlobalContext();

  const {
    firstname,
    lastname,
    summary,
    email,
    address,
    phone,
    linkedin,
    github,
    portfolio,
    qualitites,
  } = formValues[formName];

  return (
    <Box>
      <Heading title="Personal Details" />
      <div className="form">
        <Grid container spacing={4} mb={4}>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="firstname"
              label="First Name"
              value={firstname}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="lastname"
              label="Last Name"
              value={lastname}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
        </Grid>
        <Grid mb={4}>
          <InputField
            type="text"
            name="qualities"
            label="Qualities"
            value={qualitites}
            handleChange={handleChange}
            formName={formName}
          />
        </Grid>
        <Grid mb={4}>
          <InputField
            type="text"
            name="summary"
            label="About Me Summary"
            value={summary}
            handleChange={handleChange}
            formName={formName}
            addressField={true}
          />
        </Grid>
        <Grid container spacing={4} mb={4}>
          <Grid item md={6} xs={12}>
            <InputField
              type="email"
              name="email"
              label="Email"
              value={email}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputField
              type="tel"
              name="phone"
              label="Phone"
              value={phone}
              handleChange={handleChange}
              formName={formName}
            />
          </Grid>
        </Grid>
        <Grid mb={4}>
          <InputField
            type="text"
            name="address"
            label="Address"
            value={address}
            handleChange={handleChange}
            formName={formName}
            addressField={true}
          />
        </Grid>
        <Grid container spacing={4} mb={4}>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="linkedin"
              label="Linked In"
              value={linkedin}
              handleChange={handleChange}
              formName={formName}
              link={true}
              icon=<LinkedInIcon color="secondary" />
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="github"
              label="Git Hub"
              value={github}
              handleChange={handleChange}
              formName={formName}
              link={true}
              icon=<GitHubIcon />
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} mb={4}>
          <Grid item md={6} xs={12}>
            <InputField
              type="text"
              name="portfolio"
              label="Portfolio Web"
              value={portfolio}
              handleChange={handleChange}
              formName={formName}
              link={true}
              icon=<LanguageIcon color="primary" />
            />
          </Grid>
          <Grid item md={6} xs={12} container alignItems="center">
            <Grid md={2} item>
              <FormLabel>Profile Pic</FormLabel>
            </Grid>
            <Grid md={10} item>
              <TextField
                type="file"
                name="profile"
                onChange={(e) => handleUpload(e.target.files[0], formName)}
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default PersonalDetails;
