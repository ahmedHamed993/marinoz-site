"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./contact.module.css";
import Image from "next/image";
import ContactForm from "@/components/Form/ContactForm";
import FAQs from "./Faq";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.contact}>
          <div className="row">
            <div className="col-md-6">
              <div>
                <span>Contact Us</span>
                <h2>
                  Experience the World,
                  <br /> Reach Out to Us
                </h2>
                <p>
                  Marinoz is the only leading company in the Red Sea that
                  provides a full marine services, products, and activities
                  managed by a specialists and professional team in each field
                  and also provides an online booking and Ecommerce services.
                </p>
                <div className={styles.contactCard}>
                  <a href="#!">
                    <i className="fa fa-location-dot"></i>placeTouristic Marine,
                    Arabia road, Hurghada, Red Sea, Egypt.
                  </a>
                  <a href="#!">
                    <i className="fa fa-location-dot"></i>phone+2010 6552 2006
                  </a>
                  <a href="#!">
                    <i className="fa fa-location-dot"></i>draftsinfo@marinoz.com
                  </a>
                </div>
                <p>
                  Drop Us a Line: Complete the form below, and one of our
                  friendly team members will get in touch with you shortly.
                </p>
              </div>
            </div>
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
          </div>
        </div>
        <div className={styles.contact}>
          <h2>CONTACT US</h2>
          <ContactForm />
        </div>
        <div className={styles.contact}>
          <div className="row">
            <div className="col-md-12">
              <span>FAQ</span>
              <h2>Everything You Need to Know</h2>
            </div>
            <div className="col-md-4">
              <div className="">
                <Image
                  src={"/Images/hero-1.png"}
                  alt="logo"
                  width={100}
                  height={380}
                />
              </div>
            </div>
            <div className="col-md-8">
              <FAQs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
