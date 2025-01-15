"use client";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const dropdownAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  border: none;
  background: transparent;
  color: #023a78;
  font-size: 14px;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

const Arrow = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid #023a78;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const DropdownMenu = styled.div`
  position: fixed;
  top: 85px;
  left: 0;
  width: 100vw;
  background-color: #fafafa;
  border-radius: 4px;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0px 4px 5px 0px #b2b2b240;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  animation: ${dropdownAnimation} 0.3s ease-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownLink = styled.a`
  display: block;
  padding: 10px;
  font-size: 18px;
  text-decoration: none;
  color: #023a78;
  border-bottom: none;

  &:hover {
    color: #ca852c;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > 10 && isOpen == true) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <DropdownContainer>
      <Button onClick={toggleDropdown}>
        Explore
        <Arrow isOpen={isOpen} />
      </Button>
      <DropdownMenu isOpen={isOpen}>
        <DropdownLink href="/tours">Tours Hub</DropdownLink>
        <DropdownLink href="/rental">Rental</DropdownLink>
        <DropdownLink href="/Suites"> Marinoz Suites</DropdownLink>
        <DropdownLink href="/destinations">Destinations</DropdownLink>
        <DropdownLink href="/events">Events</DropdownLink>
        <DropdownLink href="/luxury-charter">Luxury Charters</DropdownLink>
        <DropdownLink href="/Builder">Tour builder</DropdownLink>
        <DropdownLink href="/offers">Hot Offers</DropdownLink>
        <DropdownLink href="/Resale">Resale</DropdownLink>
        {/* <DropdownLink href="/Sports">Water Sport</DropdownLink> */}
        <DropdownLink href="/shop">Marine Shop</DropdownLink>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
