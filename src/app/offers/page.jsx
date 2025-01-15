import React from "react";
import OffersHero from "./components/offers-hero/OffersHero";
import ToursOffers from "./components/tours-offers/ToursOffers";
import YachtRentalOffers from "./components/yacht-rental-offers/YachtRentalOffers";
import OfferEvents from "./components/offer-events/OfferEvents";
import OfferMarineSuites from "./components/offer-marine-suites/OfferMarineSuites";
import ContactForm from "@/components/Form/ContactForm";
import RecentNews from "@/components/recent-news/RecentNews";
const Offers = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <OffersHero />
      <ToursOffers />
      <YachtRentalOffers />
      <OfferEvents />
      <OfferMarineSuites />
      <div className="container">
        <ContactForm />
        <RecentNews />
      </div>
    </div>
  );
};

export default Offers;
