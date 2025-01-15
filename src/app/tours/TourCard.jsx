"use client";
import React from "react";
import Image from "next/image";
import styles from "./tours.module.css";
import Logo from "../../components/Assets/Images/image 18 (1).png";
import "swiper/css";
import Link from "next/link";
import FavouriteButton from "@/components/favourite-button/FavouriteButton";

export default function TourCard({ tours, Suites, Sports }) {
   return tours.map((x, index) => {  
    const isFavourite = x.favorite_tours?.length  || x?.favorite_suites?.[0]?.id ? true : false;
    const defaultFavId = x?.favorite_tours?.[0]?.id || x?.favorite_suites?.[0]?.id  || null;
  
  console.log("default fav id",defaultFavId, isFavourite, tours, Suites ? "suite" : Sports? "sport" : 'tour' );
  
    return (
      <div className="col-md-3" key={index}>
      <div
        href={
          Suites
            ? `/Suites/${x.id}`
            : Sports
              ? `/Sports/${x.id}`
              : `/tours/${x.id}`
        }
      >
        <div className={styles.TourCard}>
          <Image
            src={Logo || x.image}
            alt="Logo"
            width={100}
            height={250}
            objectFit="cover"
          />
          <div className={styles.Tour_card_body}>
            <h3>
                <Link
                  href={
                  Suites
                    ? `/Suites/${x.id}`
                    : Sports
                      ? `/Sports/${x.id}`
                      : `/tours/${x.id}`
                }>
              {x?.name ?? "Submarine Underwater"}
              </Link>
            </h3>
            <span>
              {x?.country?.country_en}
              <div className={`${styles.DestinationDiv} ms-2 me-2`}></div>
              {x?.city?.city_en ?? "Red Sea"}
            </span>
            <p>
              <strong>
                {(x?.availabilities?.length &&
                  x?.yacht?.price) ||
                  "3"}
              </strong>{" "}
              Person
            </p>
          </div>
            <FavouriteButton
              defaultValue={isFavourite} 
              type={Suites ? "suite" : Sports? "sport" : 'tour'} 
              typeId={x?.id} 
              defaultFavId={defaultFavId} 
            />
        </div>
      </div>
    </div>
    )
  });
}
