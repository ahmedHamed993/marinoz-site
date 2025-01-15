"use client";
import React, { useState } from "react";
// styles
import styles from "./destination.module.css";
// components
import YachtCard from "@/components/yacht-card/YachtCard";
import DestinationFilterTabs from "@/components/destinations-filter-tabs/DestinationFilterTabs";
import { GET_CITIES } from "@/queries/citiesQuery";
import { gql, useQuery } from "@apollo/client";
import { useAuth } from "@/hooks/useAuth";
const GET_RENTALS_BY_CITY = gql`
query MyQuery($id:bigint) {
  rentals(where: {city_id: {_eq: $id}, status:{_eq: "approved" }}) {
    id
    city_id
    image
    name
    location
    status
    yacht {
      price
    }
  }
}
`

const GET_RENTALS = gql`
query MyQuery {
  rentals(where: {status: {_eq: "approved"}})  {
    id
    city{
      city_en
      id
    }
    image
    name
    location
    status
    yacht {
      price
      adults
      bathrooms
      bed
      bedrooms
      cabins
      capacity
      children
      condition
    }
  }
}
`
const GET_RENTALS_WITH_LOGIN = gql`
query MyQuery($clientId:uuid!) {
  rentals(where: {status: {_eq: "approved"}})  {
    id
    city{
      city_en
      id
    }
    image
    name
    location
    status
    yacht {
      price
      adults
      bathrooms
      bed
      bedrooms
      cabins
      capacity
      children
      condition
    }
    favorite_rentals(where: {client_id: {_eq: $clientId}}) {
      id
    }
  }
}
`

const RentByDistination = () => {
  const {id,token} = useAuth();
  const [currentCity, setCurrentCity] = useState(null);
  const {data:cities, loading:loadingCities, error:errorCities}=useQuery(GET_CITIES);
  
  const {loading:loadingRentals, data:rentalsData, error:loadingError} = useQuery(id?  GET_RENTALS_WITH_LOGIN : currentCity ? GET_RENTALS_BY_CITY : GET_RENTALS, {
    variables:{
      id:currentCity? currentCity : null,
      clientId:id,
    }
  });
  return (
    <div className="container">
      <div className={styles.destination}>
        <h6>Destinations</h6>
        {/* destination list  */}
        <DestinationFilterTabs onChangeCb={(newId)=>setCurrentCity(newId)} />
        {/* boats list header  */}
        <div className={styles.destination__list_header}>
          {/* title  */}
          <div>
            <h6>Yacht Rental</h6>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
            </p>
          </div>
          {/* sorting  */}
          <div className={styles.destination__list_sort}>
            <p>Sort by</p>
            <select>
              <option>boat type</option>
              <option>boat price</option>
            </select>
          </div>
        </div>

        <div className={styles.destination__yacht_list}>
          {rentalsData?.rentals?.length ===0 ? <p>No Rental Founded</p> :rentalsData?.rentals?.map((item, index) => (
            <YachtCard rental={item} key={item?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentByDistination;

const destinations = [
  {
    label: "Bali, Indonesia",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    label: "Kerry, Ireland",
    img: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const boats = [
  {
    id: "1",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Submarine Underwater",
    distination: "Hurgada",
    guests: 3,
    cabins: 4,
    capacity: "44m",
    price: "2040$/day",
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Submarine Underwater",
    distination: "Hurgada",
    guests: 3,
    cabins: 4,
    capacity: "44m",
    price: "2040$/day",
  },
  {
    id: "3",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Submarine Underwater",
    distination: "Hurgada",
    guests: 3,
    cabins: 4,
    capacity: "44m",
    price: "2040$/day",
  },
  {
    id: "4",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Submarine Underwater",
    distination: "Hurgada",
    guests: 3,
    cabins: 4,
    capacity: "44m",
    price: "2040$/day",
  },
  {
    id: "5",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Submarine Underwater",
    distination: "Hurgada",
    guests: 3,
    cabins: 4,
    capacity: "44m",
    price: "2040$/day",
  },
  {
    id: "6",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Submarine Underwater",
    distination: "Hurgada",
    guests: 3,
    cabins: 4,
    capacity: "44m",
    price: "2040$/day",
  },
  {
    id: "7",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Submarine Underwater",
    distination: "Hurgada",
    guests: 3,
    cabins: 4,
    capacity: "44m",
    price: "2040$/day",
  },
];
