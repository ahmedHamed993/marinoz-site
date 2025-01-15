"use client";
import React from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import "swiper/css";
import ContactFormFelids from "./ContactFormFelids";

export default function ContactForm() {
  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-4">
        <div className={styles.FormDetails}>
          <h2>Speak With experts</h2>
          <p>
            Get in touch with our dedicated team for any inquiries, support, or
            personalized assistance. Reach out through the following options,
            and we’ll ensure you receive prompt and professional service.
          </p>
          <h3>CONTACTS </h3>
          <div className="d-flex flex-column">
            <a href="tel:+2010 6552 2006">+2010 6552 2006</a>
            <a href="mailto:info@marinoz.com">info@marinoz.com</a>
          </div>
          <h4>Connect</h4>
          <div className="d-flex">
            <a href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <ContactFormFelids />
      </div>
    </div>
  );
}
