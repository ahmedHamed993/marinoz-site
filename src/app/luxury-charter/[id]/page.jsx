import React from "react";
import Hero from "./components/hero-slider/Hero";
import CharterContentTabs from "./components/charter-content-tabs/CharterContentTabs";
import styles from "./page.module.css";
import CharterCheckout from "./components/charter-checkout/CharterCheckout";
import PreviewRoute from "./components/preview-route/PreviewRoute";
import CharterGallery from "./components/charter-gallery/CharterGallery";
import RelatedLuxuryCharters from "./components/related-luxury-charters/RelatedLuxuryCharters";
import ContactForm from "@/components/Form/ContactForm";
const LuxuryCharterDetails = () => {
  return (
    <div>
      <div className="container">
        <Hero images={charter.images} />
        <div className={styles.charter__details}>
          <div>
            <CharterContentTabs charter={charter} />
            <div className="divider"></div>
            <PreviewRoute />
          </div>
          <div className={styles.checkout_section}>
            <CharterCheckout price={charter.price} charterId={charter.id} />
          </div>
        </div>
        <CharterGallery />
      </div>
      <RelatedLuxuryCharters />
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
};

export default LuxuryCharterDetails;

const charter = {
  id: "1232",
  price: 1982,
  images: [
    "https://images.unsplash.com/photo-1562281302-809108fd533c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlhY2h0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHlhY2h0fGVufDB8fDB8fHww",
  ],
  name: "Yacht Name",
  cabins: 2,
  bathroomw: 4,
  bedrooms: 8,
  capacity: "22m",
  rating: 4,
  rating_count: 1200,
  city: "hurgada",
  country: "Egypt",
  tenders: [
    "3 x SeaDoo GTX300 Jet-Skis",
    "3 x SeaDoo GTX300 Jet-Skis",
    "3 x SeaDoo GTX300 Jet-Skis",
    "3 x SeaDoo GTX300 Jet-Skis",
    "3 x SeaDoo GTX300 Jet-Skis",
  ],
  description:
    "description descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription descriptiondescriptiondescription description description vdescriptionvdescription description",
  manufacturer: "princess",
  year: "2020",
  onboard_capacity: 11,
  number_of_berths: 4,
  engine_power: 870,
  model: "42 fly",
  length: "13,22",
  number_of_cabins: 2,
  fuel: "12l / h",
  amenities: [
    {
      id: "1",
      img: "https://www.shutterstock.com/image-vector/wifi-icon-260nw-329468402.jpg",
      title: "wifi",
    },
    {
      id: "2",
      img: "https://www.shutterstock.com/image-vector/wifi-icon-260nw-329468402.jpg",
      title: "Ac",
    },
    {
      id: "3",
      img: "https://www.shutterstock.com/image-vector/wifi-icon-260nw-329468402.jpg",
      title: "kitchen",
    },
    {
      id: "4",
      img: "https://www.shutterstock.com/image-vector/wifi-icon-260nw-329468402.jpg",
      title: "sofa",
    },
  ],
  notes: [
    "Lorem ipsum dolor sit amet, consectetur ",
    "Lorem ipsum dolor sit amet, consectetur ",
    "Lorem ipsum dolor sit amet, consectetur ",
    "Lorem ipsum dolor sit amet, consectetur ",
    "Lorem ipsum dolor sit amet, consectetur ",
  ],
  foods: ["fish", "meat", "Desserts", "snacks", "sea food"],
  activities: ["sailing", "snorkling", "kyaking", "fishing", "jet sking"],
  recreations: [
    {
      id: "1",
      img: "https://www.shutterstock.com/image-vector/wifi-icon-260nw-329468402.jpg",
      title: "life foil failboard",
    },
    {
      id: "2",
      img: "https://www.shutterstock.com/image-vector/wifi-icon-260nw-329468402.jpg",
      title: "kayaks",
    },
    {
      id: "3",
      img: "https://www.shutterstock.com/image-vector/wifi-icon-260nw-329468402.jpg",
      title: "wake boards",
    },
    {
      id: "4",
      img: "https://www.shutterstock.com/image-vector/wifi-icon-260nw-329468402.jpg",
      title: "Floatin Pool",
    },
  ],
};
