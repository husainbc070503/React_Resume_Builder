import React, { createRef } from "react";
import Pdf from "react-to-pdf";
import { useGlobalContext } from "../contexts/ResumeContext";
import { Button } from "@mui/material";
import ResumePage from "./Resume/ResumePage";

const ref = createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [12, 10],
};

const Preview = () => {
  const {
    formValues: {
      personal: { firstname, lastname },
    },
    clearAll,
  } = useGlobalContext();

  const handleClick = () => {
    clearAll();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="resume-page-container">
      <div ref={ref} className="resume">
        <ResumePage />
      </div>
      <Pdf
        targetRef={ref}
        filename={`${firstname} ${lastname} Resume.pdf`}
        options={options}
        x={0.5}
        y={0.5}
        scale={0.8}
      >
        {({ toPdf }) => (
          <Button variant="contained" onClick={toPdf}>
            Download Resume
          </Button>
        )}
      </Pdf>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        className="Button create-new"
      >
        Create New Resume
      </Button>
    </div>
  );
};

export default Preview;
