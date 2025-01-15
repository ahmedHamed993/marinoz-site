import React from "react";
import SectionTitle from "../SectionTitle";

import styles from "./yachtSpecifications.module.css";
const YachtSpecifications = ({ yacht }) => {
  return !yacht ? null : (
    <div className={styles.specifications}>
      <SectionTitle title="Specification" />
      <div>
        <p>
          Manufacturer: <span>{yacht?.manufacturer}</span>
        </p>
        <p>
          year: <span>{yacht?.build_year}</span>
        </p>
        <p>
          On board capacity: <span>{yacht?.capacity}</span>
        </p>
        <p>
          Number Of Berths: <span>{yacht?.number_of_berths || 0}</span>
        </p>
        <p>
          Engine Power: <span>{yacht?.engine_type}</span>
        </p>
        <p>
          model:<span> {yacht?.model}</span>
        </p>
        <p>
          length: <span>{yacht['length'] && yacht['length']}</span>
        </p>
        <p>
          Number of cabins: <span>{yacht?.cabins}</span>
        </p>
        <p>
          Number of Bathrooms: <span>{yacht?.bathrooms}</span>
        </p>
        <p>
          Fuel: <span>{yacht?.fuel_type}</span>
        </p>
      </div>
    </div>
  );
};

export default YachtSpecifications;
