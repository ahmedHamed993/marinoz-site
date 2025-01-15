import React from "react";
// styles
import styles from "./eventHero.module.css";
import Image from "next/image";
const EventsHero = () => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(to right, #00000000,#00000090),url("/images/event-hero-bg.png")`,
      }}
    >
      <div className="container">
        <div className={styles.images_wrapper}>
          <Image
            src="/images/event-hero-1.png"
            alt={"event hero section image one"}
            width={383}
            height={170}
          />
          <Image
            src="/images/event-hero-2.png"
            alt={"event hero section image two"}
            width={383}
            height={170}
          />
          <Image
            src="/images/event-hero-3.png"
            alt={"event hero section image three"}
            width={383}
            height={170}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsHero;
