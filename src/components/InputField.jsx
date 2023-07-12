import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const InputField = (props) => {
  const {
    type,
    label,
    name,
    value,
    handleChange,
    addressField,
    link,
    icon,
    formName,
  } = props;

  return addressField ? (
    <TextField
      type={type}
      label={label}
      name={name}
      value={value}
      multiline
      rows={4}
      onChange={(e) => handleChange(formName, e.target.name, e.target.value)}
      required
      fullWidth
    />
  ) : link ? (
    <TextField
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={(e) => handleChange(formName, e.target.name, e.target.value)}
      InputProps={{
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
      fullWidth
    />
  ) : (
    <TextField
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={(e) => handleChange(formName, e.target.name, e.target.value)}
      required
      fullWidth
    />
  );
};

export default InputField;
