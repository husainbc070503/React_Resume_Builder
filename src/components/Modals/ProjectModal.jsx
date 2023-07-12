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
  title: "",
  desc: "",
};

const ProjectModal = () => {
  const { addProject } = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const [pro, setPro] = React.useState(initialState);

  const handleChange = (_, name, value) => setPro({ ...pro, [name]: value });

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="contained">
        <Typography>Add Project</Typography>
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid mb={4}>
            <InputField
              type="text"
              label="Title"
              name="title"
              value={pro.title}
              handleChange={handleChange}
            />
          </Grid>
          <Grid mb={4}>
            <InputField
              type="text"
              label="Description"
              name="desc"
              value={pro.desc}
              handleChange={handleChange}
              addressField={true}
            />
          </Grid>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              addProject(pro);
              setPro(initialState);
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

export default ProjectModal;
