import React, { createContext, useContext, useReducer, useState } from "react";
import { ResumeReducer } from "../reducers/ResumeReducer";
import { toast } from "react-toastify";

const Context = createContext();
const initialState = {
  formValues: {
    // personal details
    personal: {
      firstname: "",
      lastname: "",
      summary: "",
      email: "",
      phone: "",
      address: "",
      profile: "",
      linkedin: "",
      github: "",
      portfolio: "",
      qualities: "",
    },
    // education details
    education: {
      clgname: "",
      clglocation: "",
      clgqualification: "",
      clgstart: "",
      clgend: "",
      schoolname: "",
      schoollocation: "",
      schoolqualification: "",
      schoolstart: "",
      schoolend: "",
    },
    // work experience
    workexperience: [],
    // skills
    skills: [],
    // projects
    projects: [],
    // certificates
    certificates: [],
  },
};

const ResumeContext = ({ children }) => {
  const [state, dispatch] = useReducer(ResumeReducer, initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (type, name, value) =>
    dispatch({ type: "HANDLE_CHANGE", payload: { type, name, value } });

  const handleUpload = async (file, type) => {
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
        toast.success("Profile Pic Uploaded.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        dispatch({ type: "SET_PROFILE_PIC", payload: { pic: resp.url, type } });
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

  const addExperience = (exp) =>
    dispatch({ type: "ADD_EXPERIENCE", payload: exp });

  const delExperience = (id) =>
    dispatch({ type: "DELETE_EXPERIENCE", payload: id });

  const addSkill = (skill) => dispatch({ type: "ADD_SKILL", payload: skill });

  const delSkill = (id) => dispatch({ type: "DELETE_SKILL", payload: id });

  const addProject = (pro) => dispatch({ type: "ADD_PROJECT", payload: pro });

  const delProject = (id) => dispatch({ type: "DELETE_PROJECT", payload: id });

  const addCertificate = (cer) =>
    dispatch({ type: "ADD_CERTIFICATE", payload: cer });

  const delCertificate = (id) =>
    dispatch({ type: "DELETE_CERTIFICATE", payload: id });

  const clearAll = () => dispatch({ type: "CLEAR_ALL" });

  return (
    <Context.Provider
      value={{
        ...state,
        loading,
        handleChange,
        handleUpload,
        addExperience,
        delExperience,
        addSkill,
        delSkill,
        addProject,
        delProject,
        addCertificate,
        delCertificate,
        clearAll
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useGlobalContext = () => useContext(Context);
export { ResumeContext, useGlobalContext };
