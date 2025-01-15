"use client";
import React,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./marinozSuites.module.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { gql, useQuery } from "@apollo/client";
const GET_SUITES = gql`
query MyQuery {
  suites {
    city {
      city_en
    }
    country {
      country_en
    }
    id
    image
    name
    yacht {
      price
    }
    suite_reviews_aggregate {
      aggregate {
        avg {
          stars
        }
      }
    }
  }
}
`
const GET_SUITES_BY_CITY = gql`
query MyQuery($id:bigint) {
  suites(where: {city_id: {_eq: $id}}) {
    city {
      city_en
    }
    country {
      country_en
    }
    id
    image
    name
    yacht {
      price
    }
    suite_reviews_aggregate {
      aggregate {
        avg {
          stars
        }
      }
    }
  }
}
`
const MarinozSuites = () => {
  const { params } = useParams();
  const [currentCity, setCurrentCity] = useState(null);
  const {data, loading, error} = useQuery(currentCity ? GET_SUITES_BY_CITY : GET_SUITES,{
    variables:{
      id:currentCity ?? undefined
    }
  });
  return (
    <div className={styles.marinoz_suites}>
      <h2>Marinoz Suites</h2>
      <div className={styles.cities_wrapper}>
        {cities.map((item) => (
          <button key={item?.id} onClick={()=>setCurrentCity(item?.id)} className={currentCity === item?.id ? styles.active_city : ""}>{item?.name}</button>
        ))}
      </div>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          draggable={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.slider}
        >
          {data?.suites?.map((suite, index) => (
            <SwiperSlide key={index} style={{ width: "300px" }}>
              <div className={styles.slide_content}>
                <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + suite.image} width="295px" height="360px" />
                <div>
                  <Link href={`/Suites/${suite?.id}`}>
                    <h6>{suite.name}</h6>
                  </Link>
                  <div className={styles.destination_rate}>
                    <p>
                      {suite.country?.country_en} - {suite?.city?.city_en}
                    </p>
                    <p>
                      {Math.floor(suite?.suite_reviews_aggregate?.aggregate?.avg?.stars)} <TiStarFullOutline />
                    </p>
                  </div>
                  <span>{suite?.yacht?.price}$</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MarinozSuites;

const cities = [
  {
    id: "1",
    name: "Cairo",
  },
  {
    id: "2",
    name: "Dubai",
  },
  {
    id: "3",
    name: "Hurgada",
  },
  {
    id: "4",
    name: "Red Sea",
  },
  {
    id: "5",
    name: "Paris",
  },
];

const yachts = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
];
