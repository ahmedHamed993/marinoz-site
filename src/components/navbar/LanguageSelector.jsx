"use client";

import React, { useState } from "react";
import Select from "react-select";
import Styles from "./Navbar.module.css";

// Define the languages with flags and names
const languages = [
  { value: "en", label: "En", flag: "/Images/Group 56.png" },
  { value: "ar", label: "Ar", flag: "/Images/Group 56.png" },
  { value: "du", label: "Du", flag: "/Images/Group 56.png" },
  { value: "ru", label: "Ru", flag: "/Images/Group 56.png" },
];

// Custom Option for Select component to include flags
const customSingleValue = ({ data }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={data.flag}
      alt={data.label}
      style={{ width: 20, marginRight: 8 }}
    />
    {data.label}
  </div>
);

const customOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{ display: "flex", alignItems: "center", padding: 10 }}
    >
      <img
        src={data.flag}
        alt={data.label}
        style={{ width: 20, marginRight: 8 }}
      />
      {data.label}
    </div>
  );
};

const LanguageSelector = () => {
  // Set the default value to English (en)
  const defaultLanguage = languages.find((lang) => lang.value === "en");
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const handleChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    // Add functionality to change the language (e.g., using i18n)
  };

  return true ? <></> : (
    <Select
      options={languages}
      value={selectedLanguage}
      onChange={handleChange}
      className={Styles.select1}
      classNamePrefix="custom-select"
      getOptionLabel={(e) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={e.flag}
            alt={e.label}
            style={{ width: 20, marginRight: 8 }}
          />
          {e.label}
        </div>
      )}
      components={{ SingleValue: customSingleValue, Option: customOption }}
      menuPlacement="bottom"
      isSearchable={false}
      styles={{
        control: (provided) => ({
          ...provided,
          border: "none",
          boxShadow: "none",
          ":hover": { borderColor: "transparent" },
          minHeight: "auto",
          borderRight: "none",
          position: "relative",
          margin: "0",
        }),
        menu: (provided) => ({
          ...provided,
          transition: "transform 0.3s ease",
          zIndex: "99",
        }),
        placeholder: (provided) => ({
          ...provided,
          color: "#ccc", // Placeholder text color
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          // display: "none", // Remove the dropdown arrow if desired
        }),
      }}
    />
  );
};

export default LanguageSelector;
