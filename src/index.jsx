import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResumeContext } from "./contexts/ResumeContext";
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResumeContext>
      <App />
      <ToastContainer transition={Zoom} />
    </ResumeContext>
  </React.StrictMode>
);
