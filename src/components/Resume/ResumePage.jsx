import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../contexts/ResumeContext";
import "./ResumePage.css";
import { Link } from "react-to-pdf";

const ResumePage = () => {
  const {
    formValues: {
      // personal details
      personal: {
        firstname,
        lastname,
        summary,
        email,
        phone,
        address,
        profile,
        linkedin,
        github,
        portfolio,
        qualities,
      },
      // education details
      education: {
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
      },
      // work experience
      workexperience,
      // skills
      skills,
      // projects
      projects,
      // certificates
      certificates,
    },
  } = useGlobalContext();

  const style = {
    fontSize: "14px",
    marginRight: "10px",
  };

  const updateDate = (date) => date.split("-").reverse().join("/");

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item md={4}>
          <div className="resume-profile">
            <img src={profile} alt={firstname} />
          </div>
        </Grid>
        <Grid item md={8}>
          <Typography className="Typography name" color="primary" mb={0}>
            {firstname} {lastname}.
          </Typography>
          <Typography className="Typography qualities" mb={1}>
            {qualities}
          </Typography>
          <Typography className="Typography summary" mb={4}>
            {summary}
          </Typography>
          <Typography className="Typography credentials">
            <i className="fa-solid fa-envelope" style={style} />
            {email}
          </Typography>
          <Typography className="Typography credentials">
            <i className="fa-solid fa-mobile" style={style} />
            +91 {phone}
          </Typography>
          <Typography className="Typography credentials">
            <i className="fa-brands fa-linkedin" style={style} />
            <Link href={linkedin} target="_blank">
              {linkedin}
            </Link>
          </Typography>
          <Typography className="Typography credentials">
            <i className="fa-brands fa-github" style={style} />
            <Link href={github} target="_blank">
              {github}
            </Link>
          </Typography>
          <Typography className="Typography credentials">
            <i className="fa-solid fa-link" style={style} />
            <Link href={portfolio} target="_blank">
              {portfolio}
            </Link>
          </Typography>
          <Typography className="Typography address">
            <i className="fa-solid fa-location-dot" style={style} />
            {address}
          </Typography>
        </Grid>
      </Grid>

      <section className="details">
        <Grid container spacing={4}>
          <Grid item md={6}>
            <div className="education section">
              <Typography
                color="primary"
                className="Typography section-header"
                mb={1}
              >
                EDUCATION
              </Typography>
              <div>
                <Typography className="Typography qualification" mb={1}>
                  {clgqualification}
                </Typography>
                <Typography className="Typography clgname" mb={1}>
                  {clgname}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Typography className="Typography grey">
                      {updateDate(clgstart)} - {updateDate(clgend)}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography className="Typography grey">
                      {clglocation}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Typography className="Typography qualification" mb={1}>
                  {schoolqualification}
                </Typography>
                <Typography className="Typography clgname" mb={1}>
                  {schoolname}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Typography className="Typography grey">
                      {updateDate(schoolstart)} - {updateDate(schoolend)}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography className="Typography grey">
                      {schoollocation}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>

            <div className="experience section">
              <Typography
                color="primary"
                className="Typography section-header"
                mb={1}
              >
                WORK EXPERIENCE
              </Typography>
              {workexperience?.map((work) => {
                const { organization, position, start, end, desc, id } = work;
                return (
                  <Card key={id} className="Card card">
                    <CardContent>
                      <Typography className="Typography pos" mb={1}>
                        {position}
                      </Typography>
                      <Typography className="Typography org" mb={1}>
                        {organization}
                      </Typography>
                      <Typography className="Typography grey" mb={1}>
                        {updateDate(start)} - {updateDate(end)}
                      </Typography>
                      <Typography className="Typography desc">
                        -{desc}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="skills section">
              <Typography
                color="primary"
                className="Typography section-header"
                mb={1}
              >
                SKILLS
              </Typography>
              {skills?.map((sk) => {
                const { skill, id } = sk;
                return (
                  <Button
                    className="Button skill-btn"
                    key={id}
                    variant="contained"
                  >
                    {skill}
                  </Button>
                );
              })}
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="project section">
              <Typography
                color="primary"
                className="Typography section-header"
                mb={1}
              >
                PROJECTS
              </Typography>
              {projects?.map((pro) => {
                const { title, desc, id } = pro;
                return (
                  <Card key={id} className="Card card">
                    <CardContent>
                      <Typography className="Typography pos" mb={1}>
                        {title}
                      </Typography>
                      <Typography className="Typography desc">
                        -{desc}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="certificates section">
              <Typography
                color="primary"
                className="Typography section-header"
                mb={1}
              >
                CERTIFICATES
              </Typography>
              {certificates?.map((cert) => {
                const { title, image, id } = cert;
                return (
                  <Grid container spacing={2} mb={2} key={id}>
                    <Grid item md={10}>
                      <Typography className="Typography cer">
                        {title}
                      </Typography>
                    </Grid>
                    <Grid item md={2}>
                      <Link href={image} target="_blank">
                        <i className="fa-solid fa-link" />
                      </Link>
                    </Grid>
                  </Grid>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default ResumePage;
