"use client";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Image from "next/image";
import SearchImage from "../../Assets/Images/search.png";
import { useQuery,gql } from "@apollo/client";
const GET_CITIES = gql`
  query MyQuery{
    cities {
      id
      city_en
    }
  }
`

const GET_YACHT_TYPES = gql`
  query MyQuery {
    yacht_types {
      id
      yacht_type_en
    }
}
`
export default function SearchBar({ home }) {
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [type, setType] = useState("");
  const [number, setNumber] = useState("");
  const [animate, setAnimate] = useState(false);
  const {loading, error , data} = useQuery(GET_CITIES);
  const {loading:loadingTypes, error:errorTypes, data:types} = useQuery(GET_YACHT_TYPES);
  const handleSearch = () => {
    setAnimate(true);

    // setTimeout(() => {
    //   setAnimate(false);
    //   alert(`Search Params:
    //     Where: ${where}
    //     When: ${when}
    //     Type: ${type}
    //     Number: ${number}`);
    // }, 1000);
  };

  return (
    <div className={!home ? `${styles.searchBar} ${animate ? styles.animate : ""}` : `${styles.searchBar} ${animate ? styles.animate : ""} ${styles.searchBarHero}`}>
      <select
        value={where}
        onChange={(e) => setWhere(e.target.value)}
        className={styles.select}
      >
        <option value="" disabled>
          Where
        </option>
        {/* <option value="Location1">Location1</option>
        <option value="Location2">Location2</option> */}
        {data&& data?.cities && data?.cities?.map(c => <option value={c?.id}>{c?.city_en}</option>)}
      </select>
      <input
        type="date"
        value={when}
        onChange={(e) => setWhen(e.target.value)}
        className={styles.filter_input_date}
      />
      {/* <select value={when} onChange={(e) => setWhen(e.target.value)} className={styles.select}>
        <option value="" disabled>
          When
        </option>
        <option value="Today">Today</option>
        <option value="Tomorrow">Tomorrow</option>
      </select> */}
      {/* <DatePicker value={when} onChange={setWhen} styles={{background:"#fff", border:'none', zIndex:"99"}} /> */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className={styles.select}
      >
        <option value="" disabled>
          Type
        </option>
        <option value="Type1">Type1</option>
      </select>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="No of Guests"
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        <Image src={SearchImage} alt="SearchImage" />
      </button>
    </div>
  );
}
