import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Logo from "../Assets/Images/Marinoz logo and branding colors-02.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Image src={Logo} alt="Logo" />
            <p>
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut{" "}
            </p>
          </div>
          <div className="col-md-2">
            <div>
              <h2>Company</h2>
              <div className="">
                <Link href="/">Home</Link>
                <Link href="/tours">Tours Hub </Link>
                <Link href="/rental">Rental </Link>
                <Link href="/Suites">Marinoz Suites</Link>
                <Link href="/destinations">Destinations</Link>
                <Link href="/luxury-charter">Luxury Charters</Link>
                <Link href="/events">Events</Link>
                <Link href="/Sports">Water Sports</Link>
                <Link href="/Resale">Resale</Link>
                <Link href="/shop">Marine Shop</Link>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <h2>Marine Shop</h2>
              <div className="">
                <Link href="/Blog">Blogs & News</Link>
                <Link href="/Contact">Contact Us</Link>
                <Link href="/About">About Us</Link>
                <Link href="/Careers">Career</Link>
                <Link href="/Help">Help Center</Link>
                <Link href="/Services">Services</Link>
                <Link href="/Tips">Tips & Advice</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h2>Connect with us</h2>
              <div className="">
                <a href="tel:+2010 6552 2006">+2010 6552 2006</a>
                <a href="#!">Touristic Marine, Hurghada, Red Sea, Egypt.</a>
                <a href="mailto:info@marinoz.com">info@marinoz.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>
          <div className="d-flex">
            <Link href="/Terms" className="me-5">
              Terms & Conditions
            </Link>
            <Link href="/Privacy">Privacy Policy</Link>
          </div>
          <div>
            <p>Addicta | © All rights reserved 2024</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
