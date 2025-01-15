"use client";
import React, { useState } from "react";
// styles
import styles from "./customEventForm.module.css";
import InputField from "@/components/input-field/InputField";

const CustomEventForm = () => {
  const [activeStep, setActiveStep] = useState("first");
  const [activeTab, setActiveTab] = useState("trip_type");
  const [activeBoardingStep, setActiveBoardingStep] = useState("food");
  return (
    <div className={styles.custom_form}>
      <form>
        {/* first steop  */}
        <div className={styles.top_tabs}>
          {activeStep === "first" && (
            <div>
              <button type="button" onClick={() => setActiveTab("trip_type")}>
                Trip Type
              </button>
              <button type="button" onClick={() => setActiveTab("boat_type")}>
                Boat type
              </button>
              <button type="button" onClick={() => setActiveTab("destination")}>
                destination
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("things_to_do")}
              >
                things to do
              </button>
            </div>
          )}
          {activeStep === "second" && (
            <div>
              <button type="button" onClick={() => setActiveTab("on_boarding")}>
                on boarding
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("marine_attractions")}
              >
                marine attractions
              </button>
            </div>
          )}
        </div>
        <div className={styles.tab_content}>
          {activeStep === "first" && (
            <div className={styles.first_step_container}>
              {activeTab === "trip_type" && (
                <div className={styles.checkboxes_container}>
                  {trip_types.map((trip_type, index) => (
                    <div key={index} className={styles.checkbox_input}>
                      <input name="trip_type" type="checkbox" id={trip_type} />
                      <label htmlFor={trip_type}>{trip_type}</label>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "boat_type" && (
                <div className={styles.checkboxes_container}>
                  {boat_types.map((boat_type, index) => (
                    <div key={index} className={styles.checkbox_input}>
                      <input name="boat_type" type="checkbox" id={boat_type} />
                      <label htmlFor={boat_type}>{boat_type}</label>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "destination" && (
                <div className={styles.checkboxes_container}>
                  <select>
                    {countries.map((dest, index) => (
                      <option value={dest}>{dest}</option>
                    ))}
                  </select>
                  <select>
                    {countries.map((dest, index) => (
                      <option value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>
              )}
              {activeTab === "things_to_do" && (
                <div className={styles.checkboxes_container}>
                  {things_to_do.map((thing, index) => (
                    <div key={index} className={styles.checkbox_input}>
                      <input name="things_to_do" type="checkbox" id={thing} />
                      <label htmlFor={thing}>{thing}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {activeStep === "second" && (
            <div className={styles.second_step_container}>
              {activeTab === "on_boarding" && (
                <div>
                  <div className={styles.boarding_tabs_steps}>
                    <button
                      type="button"
                      onClick={() => setActiveBoardingStep("food")}
                    >
                      Food & Beverages
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBoardingStep("fishing")}
                    >
                      Fishing Equipments
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBoardingStep("snorkling")}
                    >
                      Snorkling Equipments
                    </button>
                  </div>
                  <div className={styles.boarding_content}>
                    {activeBoardingStep === "food" && (
                      <div className={styles.checkboxes_container}>
                        {foods.map((food, index) => (
                          <div key={index} className={styles.checkbox_input}>
                            <input name="food" type="checkbox" id={food} />
                            <label htmlFor={food}>{food}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeBoardingStep === "fishing" && (
                      <div>
                        <textarea className={styles.text_area} />
                      </div>
                    )}
                    {activeBoardingStep === "snorkling" && (
                      <div className={styles.snorkling_inputs}>
                        <InputField label="Mask" type="number" />
                        <InputField label="Fin" type="number" />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {activeTab === "marine_attractions" && (
                <div className={styles.checkboxes_container}>
                  {marine_attractions.map((item, index) => (
                    <div key={index} className={styles.checkbox_input}>
                      <input
                        name="marine_attractions"
                        type="checkbox"
                        id={item}
                      />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </form>
      <div className={styles.step_nav}>
        <button
          onClick={() => {
            setActiveStep("first");
            setActiveTab("trip_type");
          }}
        >
          first Step
        </button>
        <button
          onClick={() => {
            setActiveTab("on_boarding");
            setActiveStep("second");
          }}
        >
          second Step
        </button>
      </div>
    </div>
  );
};

export default CustomEventForm;

const trip_types = ["daily tours", "overnight", "fishing", "safari"];
const boat_types = ["Boat/Yacht", "superyacht", "sail boat", "safari boat"];
const countries = ["uae", "egypt", "usa", "turkey", "spain"];
const cities = [
  "hurgada",
  "dahab",
  "sharm elsheikh",
  "suez",
  "port said",
  "alexandria",
];
const things_to_do = [
  "whale watching",
  "onboarding dining",
  "island hopping",
  "spa treatments",
  "sunset crueses",
  "photo services",
  "beach bbq",
];
const foods = [
  "none",
  "standard buffet",
  "sea food",
  "italian buffet",
  "asian buffet",
];
const marine_attractions = [
  "giftun island",
  "orange bay islang",
  "abo monkar islan",
  "dolphin house",
];

/*
- first steop 
  - trip_type
  - boat_type
  - destination 
  - things to do 
- second step
  - on boarding 
    - food & beverages
    - fishing equipments
    - snorkling equipments
  - marine attractions
*/
