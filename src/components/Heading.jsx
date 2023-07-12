import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ title }) => {
  return (
    <Typography className="Typography heading" mb={3} mt={0}>{title}</Typography>
  );
};

export default Heading;
