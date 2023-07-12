import {
  Box,
  Link,
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
import CertificateModal from "../Modals/CertificateModal";
import LinkIcon from "@mui/icons-material/Link";
import { useGlobalContext } from "../../contexts/ResumeContext";
import DeleteIcon from "@mui/icons-material/Delete";

const Certificates = () => {
  const {
    delCertificate,
    formValues: { certificates },
  } = useGlobalContext();

  return (
    <Box>
      <Heading title="Certificates" />

      {certificates.length > 0 && (
        <TableContainer className="TableContainer cont">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="TableCell header">Sr. No.</TableCell>
                <TableCell className="TableCell header align-end">
                  Title
                </TableCell>
                <TableCell className="TableCell header">Link</TableCell>
                <TableCell className="TableCell header">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {certificates.map((cert, index) => {
                const { id, title, image } = cert;
                return (
                  <TableRow key={id}>
                    <TableCell align="center">
                      <Typography>{index + 1}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{title}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Link href={image} target="_blank">
                        <LinkIcon color="primary" />
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <DeleteIcon
                      className="icon"
                        color="error"
                        onClick={() => delCertificate(id)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <CertificateModal />
    </Box>
  );
};

export default Certificates;
