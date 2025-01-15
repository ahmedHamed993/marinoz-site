"use client";
import CheckoutForm from "@/components/checkout-form/CheckoutForm";
import ContactForm from "@/components/Form/ContactForm";
import RecentNews from "@/components/recent-news/RecentNews";
import { useQuery, gql } from "@apollo/client";
import styles from "./home.module.css";
// import { GET_CITIES } from "@/queries/citiesQuery";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import DestinationsCard from "./destinations/DestinationsCard";
import FeaturedBoats from "./rental/components/featured-boats/FeaturedBoats";
// import SpecialEvents from "./events/components/special-events/SpecialEvents";
import SpecialEvents from "./destinations/components/special-events/SpecialEvents";
import AmazingExperienceCarousel from "./events/components/amazing-experience-carousel/AmazingExperienceCarousel";
import HomeHero from "./components/home-hero/HomeHero";
import RecommendedExperience from "./destinations/components/RecommendedExperience";
import HomeLuxuryCharterCarousel from "@/components/home-luxury-charter-carousel/HomeLuxuryCharterCarousel";
import MarinozSuites from "./destinations/components/marinoz-suites/MarinozSuites";
import HomeShop from "./components/home-shop/HomeShop";
const GET_CITIES = gql`
  query MyQuery {
    cities(limit: 5) {
      id
      image
      city_en
      city_ar
      city_de
      city_ru
      country_id
      country {
        country_en
      }
    }
  }
`;
export default function Home() {
  // const { loading, error, data } = useQuery(GET_CITIES);
  // console.timeLog(data,error);
  // if (loading) return <LoadingCard />;
  // if (error) return <div>Error: {error.message}</div>;
  // const city = data?.cities;
  const { loading, error, data } = useQuery(GET_CITIES);

  // const city = [
  //   {
  //     id: 1,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Hurghada",
  //     country: "Egypt",
  //     num: "20",
  //   },
  //   {
  //     id: 2,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Gouna",
  //     country: "Egypt",
  //     num: "20",
  //   },
  //   {
  //     id: 3,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Red Sea",
  //     country: "Egypt",
  //     num: "20",
  //   },
  //   {
  //     id: 4,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Paris",
  //     country: "Egypt",
  //     num: "20",
  //   },
  //   {
  //     id: 5,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Paris",
  //     country: "Egypt",
  //     num: "20",
  //   },
  // ];
  // console.log(city);
  if(loading) return <LoadingCard />
  return (
    <div>
      <HomeHero />
      <div className="container">
        <div className={styles.destination}>
          <h2
            style={{
              fontWeight: "bold",
            }}>Top Destination</h2>
          <div
            className={` destination-grid-layout-${data?.cities?.length}`}
            style={{
              gap: "16px",
              display: "grid",
              // gridTemplateColumns: "repeat(3, 1fr)", // Default to 3 columns
            }}
          >
            {data?.cities?.map((destination, index) => {
              return (
                <div
                  key={destination.id || index}
                  className={`item item-${index + 1}`}
                  style={{ minHeight: "300px", height:'100%' }} // Reset grid placement
                >
                  <DestinationsCard data={destination} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FeaturedBoats />
      <div className="container">
        <RecommendedExperience />
        <SpecialEvents />
        <HomeLuxuryCharterCarousel />
        <MarinozSuites />
      </div>
      <HomeShop />
      {/* <SpecialEvents /> */}
      <AmazingExperienceCarousel />
      <div className="container">
        <ContactForm />
        {/* <RecentNews /> */}
      </div>
    </div>
  );
}
