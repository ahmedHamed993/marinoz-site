import React from "react";
import styles from "./formSteps.module.css";

const FormSteps = ({ activeStep = 1, setActiveStep }) => {
  const steps = [1, 2, 3];

  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className={styles.stepWrapper}>
            <div
              className={`${styles.stepCircle} ${
                step <= activeStep ? styles.activeStep : ""
              }`}
              onClick={() => setActiveStep(step)}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`${styles.stepLine} ${
                  index < activeStep - 1 ? styles.activeLine : ""
                }`}
              ></div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormSteps;
