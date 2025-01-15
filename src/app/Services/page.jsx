"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./Services.module.css";
import Image from "next/image";
import AmazingExperienceCarousel from "../events/components/amazing-experience-carousel/AmazingExperienceCarousel";

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.about}>
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <Image
                  src={"/Images/hero-1.png"}
                  alt="logo"
                  width={100}
                  height={380}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h2>Boat Management Services</h2>
                <p>
                  We understand that each yacht has different needs which is why
                  we offer Modular Management. You can pick and choose from a
                  number of services that we offer and create your own package.
                </p>
                <h3>Administrative Management</h3>
                <p>
                  With a network of local and overseas partners, we offer, in
                  addition to the boat management services, all the key
                  administrative services in the boat purchasing process
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
        <div className={styles.about}>
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <Image
                  src={"/Images/hero-1.png"}
                  alt="logo"
                  width={100}
                  height={380}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h2>Repair and Maintenance</h2>
                <p>
                  We understand that each yacht has different needs which is why
                  we offer Modular Management. You can pick and choose from a
                  number of services that we offer and create your own package.
                </p>
                <h3>Administrative Management</h3>
                <p>
                  With a network of local and overseas partners, we offer, in
                  addition to the boat management services, all the key
                  administrative services in the boat purchasing process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
