"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./Privacy.module.css";
import Image from "next/image";
import AmazingExperienceCarousel from "../events/components/amazing-experience-carousel/AmazingExperienceCarousel";
import FAQs from "../Contact/Faq";

const Help = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.about}>
          <h2>Help center</h2>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service. If you choose to use our Service, then
            you agree to the collection, use, and disclosure of Personal
            Information if anyone decided to
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at iRestora Waiter
            App unless otherwise defined in this Privacy Policy.
          </p>
          <h2>Information Collection and Use</h2>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service. If you choose to use our Service, then
            you agree to the collection, use, and disclosure of Personal
            Information if anyone decided to
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at iRestora Waiter
            App unless otherwise defined in this Privacy Policy.
          </p>
          <h2>Log Data</h2>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service. If you choose to use our Service, then
            you agree to the collection, use, and disclosure of Personal
            Information if anyone decided to
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at iRestora Waiter
            App unless otherwise defined in this Privacy Policy.
          </p>
          <h2>Cookies</h2>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service. If you choose to use our Service, then
            you agree to the collection, use, and disclosure of Personal
            Information if anyone decided to
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at iRestora Waiter
            App unless otherwise defined in this Privacy Policy.
          </p>
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
export default Help;
