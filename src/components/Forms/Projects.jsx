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
import ProjectModal from "../Modals/ProjectModal";
import { useGlobalContext } from "../../contexts/ResumeContext";
import DeleteIcon from "@mui/icons-material/Delete";

const Projects = () => {
  const {
    formValues: { projects },
    delProject,
  } = useGlobalContext();

  return (
    <Box>
      <Heading title="Projects" />

      {projects.length > 0 && (
        <TableContainer className="TableContainer cont">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="TableCell header align-end">
                  Title
                </TableCell>
                <TableCell className="TableCell header align-end" width={600}>
                  Description
                </TableCell>
                <TableCell className="TableCell header">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((pro) => {
                const { title, desc, id } = pro;
                return (
                  <TableRow key={id}>
                    <TableCell className="TableCell capitalize">
                      <Typography>{title}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="Typography desc">
                        {desc}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <DeleteIcon
                        className="icon"
                        color="error"
                        onClick={() => delProject(id)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <ProjectModal />
    </Box>
  );
};

export default Projects;
