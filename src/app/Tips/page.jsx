"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./Privacy.module.css";
import Image from "next/image";

const Tips = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.tips}>
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <Image
                  src={"/Images/about-img-7.png.png"}
                  className={styles.TipsImage}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <h2>Tips and Advice</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  There are many variations of passages of Lorem Ipsum
                  available.
                </p>
                <div className={styles.bookCard}>
                  <Image
                    src={"/Images/about-img-8.png.png"}
                    alt="logo"
                    width={100}
                    height={450}
                  />
                  <div>
                    <h3>Book With Confident</h3>
                    <p>
                      Each trip is carefully crafted to leave you free to leave
                      you free to live in the moment and enjoy your vacation.
                    </p>
                  </div>
                </div>
                <div className={styles.bookCard}>
                  <Image
                    src={"/Images/about-img-9.png.png"}
                    alt="logo"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h3>Freedom to discover</h3>
                    <p>
                      Each trip is carefully crafted to leave you free to leave
                      you free to live in the moment and enjoy your vacation.
                    </p>
                  </div>
                </div>
                <div className={styles.bookCard}>
                  <Image
                    src={"/Images/about-img-10.png.png"}
                    alt="logo"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h3>Weather Vultures</h3>
                    <p>
                      Each trip is carefully crafted to leave you free to leave
                      you free to live in the moment and enjoy your vacation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ticket}>
          <div className="row">
            <div className="col-md-12">
              <h1>Tips and Tricks</h1>
            </div>
            <div className="col-md-6">
              <div className={styles.ticketCard}>
                <Image
                  src={"/Images/hero-1.png"}
                  alt="logo"
                  width={100}
                  height={100}
                />
                <div className={styles.ticketCardBody}>
                  <span>Solo Travel</span>
                  <h2>Tips and advice topic title</h2>
                  <p>Browse through our handpicked selection of destinations</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.ticketCard}>
                    <Image
                      src={"/Images/event-hero-1.png"}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                    <div className={styles.ticketCardBody}>
                      <span>Solo Travel</span>
                      <h2>Tips and advice topic title</h2>
                      <p>
                        Browse through our handpicked selection of destinations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.ticketCard}>
                    <Image
                      src={"/Images/event-hero-2.png"}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                    <div className={styles.ticketCardBody}>
                      <span>Solo Travel</span>
                      <h2>Tips and advice topic title</h2>
                      <p>
                        Browse through our handpicked selection of destinations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.ticketCard}>
                    <Image
                      src={"/Images/event-hero-3.png"}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                    <div className={styles.ticketCardBody}>
                      <span>Solo Travel</span>
                      <h2>Tips and advice topic title</h2>
                      <p>
                        Browse through our handpicked selection of destinations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.ticketCard}>
                    <Image
                      src={"/Images/event-hero-1.png"}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                    <div className={styles.ticketCardBody}>
                      <span>Solo Travel</span>
                      <h2>Tips and advice topic title</h2>
                      <p>
                        Browse through our handpicked selection of destinations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tips;
