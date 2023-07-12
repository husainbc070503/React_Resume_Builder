import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormLabel, Grid } from "@mui/material";
import InputField from "../InputField";
import { useGlobalContext } from "../../contexts/ResumeContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxWidth: "95%",
  backgroundColor: "#fff",
  borderRadius: 2,
  p: 4,
};

const initialState = {
  organization: "",
  position: "",
  start: "",
  end: "",
  desc: "",
};

const ExperienceModal = () => {
  const { addExperience } = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const [exp, setExp] = React.useState(initialState);

  const handleChange = (_, name, value) => setExp({ ...exp, [name]: value });

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="contained">
        <Typography>Add Experience</Typography>
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2} mb={4}>
            <Grid item md={6} xs={12}>
              <InputField
                type="text"
                label="Organization"
                name="organization"
                value={exp.organization}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputField
                type="text"
                label="Position"
                name="position"
                value={exp.position}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={4}>
            <Grid item md={6} xs={12}>
              <FormLabel className="FormLabel label">Joining Date</FormLabel>
              <InputField
                type="date"
                name="start"
                value={exp.start}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormLabel className="FormLabel label">Leaving Date</FormLabel>
              <InputField
                type="date"
                name="end"
                value={exp.end}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid mb={4}>
            <InputField
              type="text"
              label="Description"
              name="desc"
              value={exp.desc}
              handleChange={handleChange}
              addressField={true}
            />
          </Grid>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              addExperience(exp);
              setExp(initialState);
              setOpen(false);
            }}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ExperienceModal;
