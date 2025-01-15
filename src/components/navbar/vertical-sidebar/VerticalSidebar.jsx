import React from "react";
// next
import Link from "next/link";
import Image from "next/image";
// images
import Logo from "../../Assets/Images/Marinoz logo and branding colors-03.png";
// styles
import styles from "./verticalSidebar.module.css";
import LanguageSelector from "../LanguageSelector";
import Select from 'react-dropdown-select';
import { useAuth } from "@/hooks/useAuth";
const VerticalSidebar = () => {
  const {token} = useAuth();
  return (
    <div className={styles.sidebar}>
      <div className={styles?.sidebar__content}>
        <Link href="/" className={styles.sidebar__logo}>
          <Image src={Logo} alt="Logo" />
        </Link>
        <div style={{width:'200px'}}>
          <LanguageSelector />
        </div>
        <div className={styles?.divider} />
        {token && 
          <ul className={styles?.sidebar__user_links}>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/shop/checkout">Shop Cart</Link>
            </li>
          </ul>
        }        
        <div className={styles?.divider} />
        <div className={styles?.sidebar_links}>
          <Link href="/tours">Tours Hub</Link>
          <Link href="/rental">Rental</Link>
          <Link href="/Suites"> Marinoz Suites</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/events">Events</Link>
          <Link href="/luxury-charter">Luxury Charters</Link>
          <Link href="/Builder">Tour builder</Link>
          <Link href="/offers">Hot Offers</Link>
          <Link href="/Resale">Resale</Link>
          {/* <Link href="/Sports">Water Sport</Link> */}
          <Link href="/shop">Marine Shop</Link>
        </div>
      
      </div>
    </div>
  );
};

export default VerticalSidebar;
