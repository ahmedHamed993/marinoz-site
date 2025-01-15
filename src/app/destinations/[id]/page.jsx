import React from "react";
// styles s
import styles from "./page.module.css";
import ImageSlider from "@/components/image-slider/ImageSlider";
import FeaturedBoats from "@/app/rental/components/featured-boats/FeaturedBoats";
import RentByDistination from "@/app/rental/components/rent-by-destination/RentByDistination";
import RecommendedExperience from "../components/RecommendedExperience";
import MarinozSuites from "../components/marinoz-suites/MarinozSuites";
import SpecialEvents from "../components/special-events/SpecialEvents";
const DestinationDetails = ({ params }) => {
  const { id } = params;

  return (
    // <div className="container">
    <div className={styles.destination_details}>
      <div className="container">
        <h1>Destination Name</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </p>
        <ImageSlider images={details.images} />
      </div>
      <FeaturedBoats />
      <div className="container">
        <RecommendedExperience />
      </div>
      <div className="container">
        <MarinozSuites />
      </div>
      <div className="container">
        <SpecialEvents />
      </div>
    </div>
    // </div>
  );
};

export default DestinationDetails;

const details = {
  images: [
    "https://images.unsplash.com/photo-1562281302-809108fd533c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlhY2h0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHlhY2h0fGVufDB8fDB8fHww",
  ],
};
