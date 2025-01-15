"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./about.module.css";
import Image from "next/image";
import AmazingExperienceCarousel from "../events/components/amazing-experience-carousel/AmazingExperienceCarousel";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.about}>
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <Image
                  src={"/Images/Frame 3055.png"}
                  alt="logo"
                  width={100}
                  height={380}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <span>About Us</span>
                <h2>Experience the World, Reach Out to Us</h2>
                <p>
                  Marinoz is the only leading company in the Red Sea that
                  provides a full marine services, products, and activities
                  managed by a specialists and professional team in each field
                  and also provides an online booking and Ecommerce services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.provide}>
          <div className="row">
            <div className="col-md-6">
              <div>
                <span>What we provide:</span>
                <ul>
                  <li>
                    - The best and recommended sea trip tickets and packages in
                    the regions we cover with Exclusive types.
                  </li>
                  <li>- Boat / Yacht ( Fleets ) Rentals and Charters.</li>
                  <li>- Water Sports.</li>
                  <li>
                    - Events ( Entertainment parties, Exhibitions, Contests and
                    special private packages).
                  </li>
                  <li>
                    - Boat Services : Maintenance, Spare parts, Yacht Design,
                    Renovate yachts, Yacht building and Boat / Yacht management
                    )
                  </li>
                  <li>
                    - Boat Market : Sell & Buy ( Boats, Yachts, Accessories and
                    spare parts )
                  </li>
                </ul>
                <p>
                  Boat Rental and Boat Tour Agency which also provides sea
                  trips, boat trips.
                </p>
                <p>
                  All what you need from the SEA, Boat & Yacht rentals, Sell &
                  Buy yachts, Boat/ Yacht Building, Sea trips and cruises, Water
                  Sports and Events.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <Image
                  src={"/Images/Group 45.png"}
                  alt="logo"
                  width={100}
                  height={380}
                />
              </div>
            </div>
          </div>
        </div>
        <AmazingExperienceCarousel />
      </div>
    </div>
  );
};
export default About;
