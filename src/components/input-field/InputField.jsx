import React from "react";
import styles from "./inputField.module.css";

const InputField = ({
  label,
  icon,
  placeholder,
  type = "text",
  register,
  errorMessage,
  readOnly,
}) => {
  return (
    <div className={styles.input_field}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.input_container}>
        {type != "date" && <span className={styles.icon}>{icon}</span>}
        {readOnly ? <input
          type={type}
          className={styles.styled_input}
          placeholder={placeholder || undefined}
          aria-label={label}
          {...register}

          readOnly
        /> : 
        <input
          type={type}
          className={styles.styled_input}
          placeholder={placeholder || undefined}
          aria-label={label}
          {...register}
        />
        }
      </div>
      {errorMessage ? (
        <p style={{ fontSize: "12px", color: "#ff1111" }}>{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default InputField;
