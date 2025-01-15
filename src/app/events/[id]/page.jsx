"use client"
import React from "react";
// styles
import styles from "./page.module.css";
import { FaSwimmingPool } from "react-icons/fa";
import CheckoutEventForm from "./components/checkout-event-form/CheckoutEventForm";
import ShowLocation from "@/components/show-location/ShowLocation";
import {gql, useQuery} from "@apollo/client";
import { useParams } from "next/navigation";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import ImageSlider from "@/components/image-slider/ImageSlider";
const GET_EVENT_BY_PK = gql`
  query MyQuery($id:bigint!) {
    events_by_pk(id: $id) {
      city {
      city_en
      id
      image
    }
    country {
      country_en
      id
      image
    }
    description
    id
    image
    images
    location
    name
    note
    yacht {
      adults
      bathrooms
      bed
      bedrooms
      build_year
      cabins
      capacity
      children
      condition
      created_at
      depth
      description
      engine_type
      features_id
      fuel_type
      id
      images
      infants
      length
      location
      manufacturer
      model
      name
      note
      owner_id
      price
      renewal_date
      service_type
      status
      width
    }
    event_availabilities {
        program_days
        includes
        excludes
    }
    event_transportations {
      transportation {
        title
      }
    }
    event_activities {
      activity {
        price
        id
        title
      }
    }
    }
  }
`
const EventDetails = () => {
  const {id} = useParams();
  const {data, loading, error} = useQuery(GET_EVENT_BY_PK,{
    variables:{
      id:id,
    }
  })
  console.log("data",data?.events_by_pk?.event_activities)
  return loading ? <LoadingCard /> : (
    <div className="container">
      <ImageSlider images={data?.events_by_pk?.images?.map(img => process.env.NEXT_PUBLIC_IMAGE_PRE_URL + img)} />
      <div className={styles.page_wrapper}>
        <div className={styles.details}>
          <div className={styles.event_title}> 
            <h1>{data?.events_by_pk?.name}</h1>
            <p>{data?.events_by_pk?.yacht?.adults} guests / {data?.events_by_pk?.event_availabilities?.[0]?.program_days} days / {data?.events_by_pk?.event_transportations?.length || 0} transportation</p>
          </div>
          <div className={styles.description_content}>
            <h6 className={styles.section_title}>Description</h6>
            <p>{data.events_by_pk?.description}</p>
          </div>
          <div className={styles.facilities}>
            <h6 className={styles.section_title}>Facilities</h6>
            <div className={styles.facilities_container}>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
              <div>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>Swimming Pool</p>
              </div>
            </div>
          </div>
          <div className={styles.activities}>
            <h6 className={styles.section_title}>Activities</h6>
            <p>What Will you Do:</p>
            <ul>
              {data?.events_by_pk?.event_activities?.map(act => (
                <li>{act?.activity?.title}</li>
              ))}
              {/* <li>
                Discover London on board a classic Routemaster vintage double
                decker bus
              </li>
              <li>
                Discover London on board a classic vintage double decker bus
              </li>
              <li>Discover London on board a classic decker bus</li>
              <li>
                Discover London on board a classic Routemaster vintage double{" "}
              </li> */}
            </ul>
          </div>
          <div className={styles.included}>
            <h6 className={styles.section_title}>What is Included</h6>
            <div>
              <div>
                <h6>Includes</h6>
                {/* <ul>
                  <li>Double-decker Routemaster tour</li>
                  <li>Double-decker Routemaster </li>
                  <li>Double Routemaster </li>
                  <li>Double-decker Routemaster tour</li>
                </ul> */}
                <div dangerouslySetInnerHTML={{__html:data?.events_by_pk?.event_availabilities?.[0]?.includes}} />
              </div>
              <div>
                <h6>Not Includes</h6>
                {/* <ul>
                  <li>Double-decker Routemaster tour</li>
                  <li>Double-decker Routemaster </li>
                  <li>Double Routemaster </li>
                  <li>Double-decker Routemaster tour</li>
                </ul> */}
                <div dangerouslySetInnerHTML={{__html:data?.events_by_pk?.event_availabilities?.[0]?.excludes}} />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h6>Language</h6>
              <p>English</p>
            </div>
            <div>
              <h6>Duration</h6>
              <p>{data?.events_by_pk?.event_availabilities?.[0]?.program_days} Days</p>
            </div>
            <div>
              <h6>Number Of People</h6>
              <p>{data?.events_by_pk?.yacht?.adults} People</p>
            </div>
          </div>
          <div className={styles.meeting_point}>
            <h6 className={styles.section_title}>Meeting Point Address</h6>
            <p>
              {/* Meet your guide inside the west entrance of Altab Ali Park
              (Whitechapel Road). It's opposite the entrance to Aldgate East
              Tube Station and the Whitechapel Gallery. Look for a guide wearing
              SMT attire and holding a red SMT flag */}
              {data?.events_by_pk?.note || "No Notes"}
            </p>
          </div>
        </div>
        <div className={styles.checkout}>
          <CheckoutEventForm />
          {/* <ShowLocation /> */}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
