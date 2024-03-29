import { ErrorMessage, useField } from "formik";
import React from "react";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={field.name}
          style={{ fontSize: 14, fontWeight: "600", marginBottom: 10 }}
        >
          {label} <span className="text-danger">*</span>
        </label>
      )}
      <input
        // type={field.type}
        // name={field.name}
        // placeholder={field.placeholder}
        {...field}
        {...props}
        className={`form-control text-form shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        autoComplete="off"
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export default TextField;
