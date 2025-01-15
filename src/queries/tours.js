import { gql } from "@apollo/client";
export const GET_TOURS = gql`
  query MyQuery {
    tours(where: {status: {_eq: "approved"}}) {
      image
      name
      city_id
      id
      availabilities {
        final_adult_price
        final_child_price
      }
      city {
        city_en
        country {
          country_en
        }
      }
    }
  }
`;
export const GET_TOURS_FOR_CLIENT = gql`
  query MyQuery($clientId:uuid!) {
    tours(where: {status: {_eq: "approved"}}) {
      image
      name
      city_id
      id
      availabilities {
        final_adult_price
        final_child_price
      }
      city {
        city_en
        country {
          country_en
        }
      }
      favorite_tours(where: {client_id: {_eq: $clientId}}) {
        id
      }
    }
  }
`;

export const GET_TOUR_BY_ID = gql`
  query MyQuery($ids: bigint!) {
    tours_by_pk(id: $ids) {
      description
      id
      image
      images
      location
      name
      note
      owner_id
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
        price
      }
      city {
        city_en
      }
      availabilities {
        cancellation_policy
        capacity
        excludes
        final_adult_price
        final_child_price
        from
        id
        includes
        off_days
        program_days
        to
        tour_id
        addons {
          id
          price
          title
          selected
        }
        addons_aggregate {
          aggregate {
            count
          }
        }
      }
      availabilities_aggregate {
        aggregate {
          count
        }
      }
      tour_reviews(limit: 2, offset: 0) {
        client {
          id
          name
          image
        }
        comment
        stars
        id
        created_at
      }
      tour_reviews_aggregate {
        aggregate {
          avg {
            stars
          }
          count
        }
      }
    tour_food_beverages {
      food_beverage {
        price
        title
      }
    }
    tour_activities {
      activity {
        price
        id
        title
      }
    }

    }
  }
`;
