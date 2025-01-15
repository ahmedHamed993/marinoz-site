"use client";
import React, { useState, useEffect, useRef } from "react";
// next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// styles
import Styles from "./Navbar.module.css";
// images
import Logo from "../Assets/Images/Marinoz logo and branding colors-03.png";
// components
import SearchBar from "./SearchBar/SearchBar";
import Dropdown from "./Dropdown";
import LanguageSelector from "./LanguageSelector";
import VerticalSidebar from "./vertical-sidebar/VerticalSidebar";
// packages
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
// icons
import { RiMenuLine } from "react-icons/ri";
// helpers
import { fireToastAlert } from "@/helpers/fireToastAlert";
// actions
import { logout as logoutUser } from "@/actions/auth-actions/logout";
// hooks
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/queries/profileQuery";
import ServicesFilters from "./services-filters/ServicesFilters";

const Navbar = () => {
  const { token, id } = useAuth();
  const { loading, data, error } = useQuery(GET_PROFILE, {
    variables: {
      id: id,
    },
  });
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const dropdownRef = useRef(null);

  const { x, y, reference, floating, strategy } = useFloating({
    middleware: [offset(8), flip(), shift()],
    placement: "bottom-end",
    whileElementsMounted: autoUpdate,
  });

  console.log(token);

  const toggleOpenSidbar = () => setIsOpenSidebar((prev) => !prev);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const handleProfileClick = () => {
    router.push("/profile");
  };
  // console.log("token in navbar",token)
  const logout = () => {
    setIsDropdownOpen(false);
    logoutUser(
      () => router.push("/Login"),
      (title) => fireToastAlert("error", title),
    );
  };
  return (
    <div className={Styles.navbar}>
      <div className="container">
        <div className={Styles.navbarTop}>
          <div className="d-flex align-items-center">
            <Link href="/" className={Styles.navbarImg}>
              <Image src={Logo} alt="Logo" />
            </Link>
          <div className="d-none d-xl-block">
            <SearchBar />
            {/* <ServicesFilters to="/rentals" /> */}
          </div>
          </div>
          <div className="d-flex align-items-center m-0 d-none d-xl-flex">
            <Dropdown />
            <div>

            <LanguageSelector />
            </div>
            <div
              ref={dropdownRef}
              className={Styles.profileContainer}
              style={{ position: "relative" }}
            >
              {token ? (
                <button
                  ref={reference}
                  className={Styles.profileButton}
                  onClick={toggleDropdown}
                >
                  <i className="far fa-user"></i> {data?.clients_by_pk?.name?.length > 8 
                                                    ? `${data.clients_by_pk.name.slice(0, 8)}...` 
                                                    : data?.clients_by_pk?.name}
                </button>
              ) : <Link href="/Login">Login</Link>}
              {isDropdownOpen && (
                <div
                  ref={floating}
                  style={{
                    position: strategy,
                    top: 80,
                    left: x ?? 0,
                  }}
                  className={Styles.dropdownMenu}
                >
                  <ul>
                    <li onClick={handleProfileClick}>Profile</li>
                    <li onClick={() => router.push("/shop/checkout")}>Cart</li>
                    <li onClick={logout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
            {token && (
              <button className={Styles.ListingButton}>Add Listing</button>
            )}
          
          </div>
          <button className={Styles?.menu_btn} onClick={toggleOpenSidbar}>
            <RiMenuLine />
          </button>
        </div>
          <Drawer
            open={isOpenSidebar}
            onClose={toggleOpenSidbar}
            direction="right"
            // style={{
            //   width: "300px",
            // }}
            // className='bla bla bla'
          >
            <VerticalSidebar />
          </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
