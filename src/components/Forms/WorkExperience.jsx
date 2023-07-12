import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Heading from "../Heading";
import ExperienceModal from "../Modals/ExperienceModal";
import { useGlobalContext } from "../../contexts/ResumeContext";
import DeleteIcon from "@mui/icons-material/Delete";

const WorkExperience = () => {
  const {
    formValues: { workexperience },
    delExperience,
  } = useGlobalContext();

  const changeDate = (date) => date.split("-").reverse().join("/");

  const handleSort = (a, b) => {
    let x = a.end.split("-").reverse();
    let y = b.end.split("-").reverse();

    x = x.map(Number);
    y = y.map(Number);

    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
  };

  return (
    <Box>
      <Heading title="Work Experience" />

      {workexperience.length > 0 && (
        <TableContainer className="TableContainer cont">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="TableCell header">Sr.No.</TableCell>
                <TableCell className="TableCell header">Organization</TableCell>
                <TableCell className="TableCell header">Position</TableCell>
                <TableCell className="TableCell header">Joining Date</TableCell>
                <TableCell className="TableCell header">Leaving Date</TableCell>
                <TableCell className="TableCell header">Description</TableCell>
                <TableCell className="TableCell header">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workexperience.sort(handleSort).map((work, index) => {
                const { organization, position, start, end, desc, id } = work;
                return (
                  <TableRow key={id}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      <Typography>{organization}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>{position}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>{changeDate(start)}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>{changeDate(end)}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography className="Typography desc">{desc}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <DeleteIcon
                        color="error"
                        onClick={() => delExperience(id)}
                        className="icon"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <ExperienceModal />
    </Box>
  );
};

export default WorkExperience;
