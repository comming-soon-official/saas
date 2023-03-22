import React from "react";
import { ErrorMessage, useField } from "formik";
import "./style.css";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label className="authlables" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`inputbox form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
