import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Heading from "../Heading";
import { useGlobalContext } from "../../contexts/ResumeContext";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";

const Skills = () => {
  const {
    addSkill,
    delSkill,
    formValues: { skills },
  } = useGlobalContext();

  const [skill, setSkill] = useState("");

  const handleClick = () => {
    if (!skill)
      return toast.error("Please add skill", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    addSkill(skill);
    setSkill("");
  };

  const handleKeyDown = (e) => e.keyCode === 13 && handleClick();

  return (
    <Box>
      <Heading title="Skills" />

      {skills.length > 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="TableCell header align-end">
                  Skill
                </TableCell>
                <TableCell className="TableCell header" width={400}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skills.map((sk) => {
                const { skill, id } = sk;
                return (
                  <TableRow key={id}>
                    <TableCell className="TableCell capitalize">
                      <Typography>{skill}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <DeleteIcon
                        className="icon"
                        color="error"
                        onClick={() => delSkill(id)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Grid container spacing={2} alignItems={"center"} mt={4}>
        <Grid item md={10} xs={12}>
          <TextField
            type="text"
            label="Skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            required
          />
        </Grid>
        <Grid item md={2} xs={12}>
          <Button color="secondary" variant="contained" onClick={handleClick}>
            <Typography>Add Skill</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
