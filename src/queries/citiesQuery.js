import { gql } from "@apollo/client";
export const GET_CITIES = gql`
  query MyQuery {
    cities(where: { country_id: { _eq: "50" } }, limit: 8) {
      city_ar
      city_de
      city_en
      city_ru
      id
      image
    }
  }
`;
