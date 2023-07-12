import { Container, ThemeProvider, createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import React from "react";
import Navbar from "./components/Navbar";
import ResumeForm from "./components/Stepper";

function App() {
  const theme = createTheme({
    palette: {
      primary: red,
      secondary: blue,
    },
    typography: {
      fontFamily: "Lato",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="container">
        <Container maxWidth="lg">
          <ResumeForm />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
