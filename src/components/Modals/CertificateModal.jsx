import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormLabel, Grid, TextField } from "@mui/material";
import InputField from "../InputField";
import { useGlobalContext } from "../../contexts/ResumeContext";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxWidth: "95%",
  backgroundColor: "#fff",
  borderRadius: 2,
  p: 4,
};

const initialState = {
  title: "",
  image: "",
};

const CertificateModal = () => {
  const { addCertificate } = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [certificate, setCertificate] = React.useState(initialState);

  const handleChange = (_, name, value) =>
    setCertificate({ ...certificate, [name]: value });

  const handleUpload = async (file) => {
    setLoading(true);
    if (file === undefined) {
      setLoading(false);
      return toast.error("Please upload profile pic", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      setLoading(false);
      return toast.error("Only JPEG and PNG images are accepted", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    try {
      const url = "https://api.cloudinary.com/v1_1/dztxhls16/image/upload";
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "resume_build");
      data.append("class", "dztxhls16");

      const res = await fetch(url, {
        method: "POST",
        body: data,
      });

      const resp = await res.json();
      if (resp) {
        toast.success("Certificate Uploaded.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setCertificate({ ...certificate, image: resp.url });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="contained">
        <Typography>Add Certificate</Typography>
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
              value={certificate.title}
              handleChange={handleChange}
            />
          </Grid>
          <Grid mb={4} container>
            <FormLabel className="FormLabel label">Certificate Image</FormLabel>
            <TextField
              type="file"
              onChange={(e) => handleUpload(e.target.files[0])}
              fullWidth
            />
          </Grid>
          <Button
            color="secondary"
            variant="contained"
            disabled={loading}
            onClick={() => {
              addCertificate(certificate);
              setCertificate(initialState);
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

export default CertificateModal;
