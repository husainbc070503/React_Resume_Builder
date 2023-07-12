import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const Heading = styled(Typography)`
  font-weight: bold;
`;

const Nav = styled(AppBar)`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Box>
      <Nav position="static">
        <Toolbar>
          <Heading variant="h4">Resume Builder</Heading>
        </Toolbar>
      </Nav>
    </Box>
  );
};

export default Navbar;
